import React, { useState, useEffect} from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate, useParams } from "react-router-dom";
import SearchBox from '../SearchBox/SearchBox';
import {Button, Grid, Typography} from "@mui/material";
import { useRecoilState } from 'recoil';
import { postsToShowAtom, postsLoadingAtom, pagesCountAtom } from "../../atoms/atoms";
import no_image from "../../../src/images/no_image.png";
import { v4 } from "uuid";
import { routes } from "../../routes";
import classes from "./BlogList.module.css";
import { ArrowLeft, ArrowRight } from '@mui/icons-material';

const BlogList = () => {
  let navigate = useNavigate();
  let { page_number = "0" } = useParams();
  const [postsLoading, setPostsLoading] = useRecoilState(postsLoadingAtom);
  const [postsToShow, setPostsToShow] = useRecoilState(postsToShowAtom);
  const [pagesCount, setPagesCount] = useRecoilState(pagesCountAtom);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setPostsLoading(true);
    fetch("/app/blogs_num")
      .then(response => response.json())
      .then(response => {
        setPagesCount(Math.ceil(response / 4));
      });
    
    let start = page_number ? parseInt(page_number) * 4 + 1 : 1, end = page_number ? (parseInt(page_number) + 1) * 4 : 4;
    
    fetch(`/app/page_blog?start=${start}&end=${end}`)
      .then(result => result.json())
      .then(posts => {
          setPostsToShow(posts);
          setPostsLoading(false);
      });
    
    setWidth((window.innerWidth-100)/ 2);
  }, [setPostsToShow, setPostsLoading, page_number, setPagesCount]);

  return (
    <Grid container direction="column" justifyContent={"center"} alignItems={"center"}>
      <Grid item sx={{ margin: "1%" }}>
        <SearchBox />
      </Grid>
      <Grid item>
        <Grid container justifyContent="center">
          {
            postsLoading ?
            <div className={classes.loader}></div>
            :
            postsToShow.map((item: any, index) => (
              <Grid item xs={postsToShow.length > 1 ? 6 : 12} key={v4()}>
                <ImageListItem key={v4()}>
                  {
                    item.image !== '' ?
                      <img
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
                    title={item.description}
                    subtitle={
                      <Typography color='white' variant="caption">
                        {item.tag}
                      </Typography> 
                    }
                    actionIcon={
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${item.description}`}
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
      <Grid container justifyContent={"center"}>
        <Grid item>
          <Button disabled={parseInt(page_number) === 0 ? true : false} onClick={() => {navigate(`${routes.Blogs}\\page\\${parseInt(page_number) - 1}`)}}>
            <ArrowLeft/>
          </Button>
        </Grid>
        {
          Array.from({ length: Math.min(pagesCount - parseInt(page_number), 5) }, (v, i) => i).map(i => i + parseInt(page_number) + 1).map((page, i) => 
            <Grid item>
              <Button variant={i === 0 ? "outlined" : undefined} onClick={() => {navigate(`${routes.Blogs}\\page\\${page-1}`)}}>
                {page}
              </Button>
            </Grid>
          )
        }
        <Grid item>
          <Button disabled={parseInt(page_number) === pagesCount - 1 ? true : false} onClick={() => {navigate(`${routes.Blogs}\\page\\${parseInt(page_number) + 1}`)}}>
            <ArrowRight/>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default BlogList;