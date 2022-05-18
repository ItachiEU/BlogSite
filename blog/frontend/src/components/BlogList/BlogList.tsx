import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";
import SearchBox from '../SearchBox/SearchBox';
import {Grid, Typography} from "@mui/material";

const BlogList = () => {
  let navigate = useNavigate();
  return (
    <Grid
      container
      direction="column"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item sx={{ margin: "1%" }}>
        <SearchBox />
      </Grid>
      <Grid item>
        <Grid container justifyContent="center">
          <ImageList cols={3} gap={10} sx={{ height: 700, width: "90%" }}>
            {itemData.map((item, index) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=548&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=548&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={
                    <Typography color='white' variant="caption">
                      {item.author}
                      {(item.tag).map(tag => (
                        ` • ${tag}`
                      ))}
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
            ))}
          </ImageList>
        </Grid>
      </Grid>
    </Grid>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    tag: ["Food", "Lifestyle"],
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
    tag: ["Food"],
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
    tag: ["Travel"],
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
    tag: ["Food"],
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
    tag: ["Travel"],
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
    tag: ["Food"],
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
    tag: ["Sport"],
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
    tag: ["Nature"],
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
    tag: ["Food"],
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
    tag: ["Food"],
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
    tag: ["Nature"],
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    tag: ["Travel"],
    cols: 2,
  },
];


export default BlogList;