import React, { useState, useEffect} from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate, useParams } from "react-router-dom";
import SearchBox from '../SearchBox/SearchBox';
import {Grid, Typography} from "@mui/material";
import { useRecoilState } from 'recoil';
import { postsToShowAtom } from "../../atoms/atoms";
import no_image from "../../../src/images/no_image.png";
import { v4 } from "uuid";
import { routes } from "../../routes";

const BlogList = () => {
  let navigate = useNavigate();
  let { page_number } = useParams();
  let [postsToShow, setPostsToShow] = useRecoilState(postsToShowAtom);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    fetch(`/app/blogs`).then(result => result.json()).then((posts) => {
      console.log(posts);
      setPostsToShow(posts);
    })
    setWidth((window.innerWidth-100)/ 2);
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
              <Grid item xs={6} key={v4()}>
                <ImageListItem key={v4()}>
                  {
                    //@ts-ignore
                    item.image !== '' ?
                      <img
                        //@ts-ignore
                        src={`data:image/jpg;base64,${item.image}`}
                        alt={item.title}
                        id={`image${index}`}
                        loading="lazy"
                        style={{width: width, height: "auto"}}
                      />
                      :
                      <img src={ no_image } style={{width: width, height: "auto"}} alt="Didn't load properly"/>
                  }
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
                        //@ts-ignore
                        onClick={() => navigate(`${routes.Post}\\${item.id}`)}
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