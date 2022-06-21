import React, { useCallback, useEffect, useState } from "react";
import { Autocomplete, Grid, TextField } from "@mui/material";
import { debounce } from "lodash";
import { useRecoilState } from 'recoil';
import { postsToShowAtom, postsLoadingAtom, pagesCountAtom } from "../../atoms/atoms";
import { ITag } from "../../interfaces/Interfaces";
import { useParams } from "react-router-dom";

const SearchBox = () => {
  let { page_number = "0" } = useParams();
  const [allTags, setAllTags] = useState<string[]>([]);
  const [postsToShow, setPostsToShow] = useRecoilState(postsToShowAtom);
  const [postsLoading, setPostsLoading] = useRecoilState(postsLoadingAtom);
  const [selectedTag, setSelectedTag] = useState("");
  const [pagesCount, setPagesCount] = useRecoilState(pagesCountAtom);

  const debounceSetTag = useCallback(debounce((value) => {
      setSelectedTag(value);
  }, 300), []);

  const activateFiltering = (selectedTag: string | null) => {
    setPostsLoading(true);
    let start = page_number ? parseInt(page_number) * 4 + 1 : 1, end = page_number ? (parseInt(page_number) + 1) * 4 : 4;

    if (selectedTag !== "") {
      fetch(`/app/spec_blogs?tag=${selectedTag}&start=${start}&end=${end}`)
        .then(result => result.json())
        .then((posts) => {
          setPagesCount(Math.ceil(posts.length / 4));
          setPostsToShow(posts);
          setPostsLoading(false);
      })
    }
    else {
      fetch("/app/blogs_num")
        .then(response => response.json())
        .then(response => {
          setPagesCount(Math.ceil(response / 4));
        });
      
      fetch(`/app/page_blog?start=${start}&end=${end}`)
        .then(result => result.json())
        .then((posts) => {
          setPostsToShow(posts);
          setPostsLoading(false);
        })
    }
  }

  useEffect(() => {
    fetch("/app/tag").then(result => result.json()).then(tags => setAllTags(tags.map((x: ITag) => x.tag)));
    console.log(page_number);
  }, [page_number]);

  return (
    <Grid container justifyContent={"center"} sx={{width: "100%"}}>
      <Autocomplete
        disablePortal
        options={allTags}
        sx={{width: "300px"}}
        onChange={(event: any, newValue: string | null) => activateFiltering(newValue)}
        onInputChange={(event, newInputValue, reason) => activateFiltering(newInputValue)}
        renderInput={(params) => <TextField {...params} label="Tag" onChange={(e) => debounceSetTag(e.target.value)}/>}
      />
    </Grid>
  );
};

export default SearchBox;