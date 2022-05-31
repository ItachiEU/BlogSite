import React, {useRef, useState, useEffect} from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate, useParams } from "react-router-dom";
import SearchBox from '../SearchBox/SearchBox';
import {Grid, Typography} from "@mui/material";
import { useRecoilState } from 'recoil';
import { postsToShowAtom } from "../../atoms/atoms";


const BlogList = () => {
  let navigate = useNavigate();
  let { page_number } = useParams();
  let [postsToShow, setPostsToShow] = useRecoilState(postsToShowAtom);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    // fetch blogs for page number page_number

    setWidth(window.innerWidth / 2);
  }, []);

  return (
    <Grid container direction="column" justifyContent={"center"} alignItems={"center"}>
      <Grid item sx={{ margin: "1%" }}>
        <SearchBox />
      </Grid>
      <Grid item>
        <Grid container justifyContent="center">
          {
            postsToShow.map((item, index) => (
              <Grid item xs={6}>
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=${width}&fit=crop&auto=format`}
                    alt={item.title}
                    id={`image${index}`}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={
                      <Typography color='white' variant="caption">
                        {item.author}
                        {item.tag}
                      </Typography>
                    }
                    actionIcon={
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${item.title}`}
                        onClick={() => navigate(`/view_post/${index}`)}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                  </ImageListItem>
                </Grid>
            ))
          }
        </Grid>
      </Grid>
    </Grid>
  )
}


export default BlogList;