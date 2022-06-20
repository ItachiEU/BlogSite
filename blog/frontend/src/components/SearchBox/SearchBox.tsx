import React, { useCallback, useEffect, useState } from "react";
import { Autocomplete, Grid, TextField } from "@mui/material";
import { debounce } from "lodash";
import { useRecoilState } from 'recoil';
import { postsToShowAtom } from "../../atoms/atoms";
import { ITag } from "../../interfaces/Interfaces";

const SearchBox = () => {
  const [allTags, setAllTags] = useState<string[]>([]);
  const [postsToShow, setPostsToShow] = useRecoilState(postsToShowAtom);
  const [selectedTag, setSelectedTag] = useState("");

  const debounceSetTag = useCallback(debounce((value) => {
      setSelectedTag(value);
  }, 300), []);

  const activateFiltering = (selectedTag: string | null) => {
    console.log()
    if (selectedTag !== "") {
      fetch(`/app/spec_blogs?tag=${selectedTag}`).then(result => result.json()).then((posts) => {
        setPostsToShow(posts);
      })
    }
    else {
      fetch(`/app/blogs`).then(result => result.json()).then((posts) => {
        setPostsToShow(posts);
      })
    }
  }

  useEffect(() => {
      fetch("/app/tag").then(result => result.json()).then(tags => setAllTags(tags.map((x: ITag) => x.tag)));
  }, []);

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