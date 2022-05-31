import React, { useCallback, useEffect, useState } from "react";
import { Autocomplete, Grid, TextField } from "@mui/material";
import { debounce } from "lodash";
import { useRecoilState } from 'recoil';
import { postsToShowAtom } from "../../atoms/atoms";

const SearchBox = () => {
  const [allTags, setAllTags] = useState<string[]>([]);
  let [postsToShow, setPostsToShow] = useRecoilState(postsToShowAtom);
  const [selectedTag, setSelectedTag] = useState("");

  const debounceSetTag = useCallback(debounce((value) => {
      setSelectedTag(value);
  }, 300), []);

  const activateFiltering = (selectedTag: string | null) => {      
    //fetch new posts here with selectedTag

    let newPosts = [{
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',
      cols: 2,
      tag: "Food",
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      author: '@hjrc33',
      cols: 2,
      tag: "Travel",
    }]; // placeholder
    setPostsToShow(newPosts);
  }

  useEffect(() => {
      // fetch all tags endpoint here
      setAllTags(["food", "cinema", "car", "climbing", "football"]);
  }, []);

  return (
    <Grid container justifyContent={"center"} sx={{width: "100%"}}>
      <Autocomplete
        disablePortal
        options={allTags}
        sx={{width: "300px"}}
        onChange={(event: any, newValue: string | null) => activateFiltering(newValue)}
        renderInput={(params) => <TextField {...params} label="Tag" onChange={(e) => debounceSetTag(e.target.value)}/>}
      />
    </Grid>
  );
};

export default SearchBox;