import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function About() {
  return (
    <Card sx={{mx: "auto", mt: 5, mb:10, maxWidth: '60%'}}>
      <CardMedia
        component="img"
        height="auto"
        image= 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h2" component="div">
          About us
        </Typography>
        <Typography variant="body1" color="text.secondary">
        <p> 
        Lizards are a widespread group of squamate reptiles, with over 7,000 species, ranging across all continents except Antarctica, 
        as well as most oceanic island chains. The group is paraphyletic as it excludes the snakes and Amphisbaenia; 
        some lizards are more closely related to these two excluded groups than they are to other lizards. </p>
        <p>
        Lizards range in size from chameleons and geckos a few centimeters long to the 3 meter long Komodo dragon.
        Most lizards are quadrupedal, running with a strong side-to-side motion. Some lineages (known as "legless lizards"), have secondarily lost their legs, 
        and have long snake-like bodies. Some such as the forest-dwelling Draco lizards are able to glide. They are often territorial, 
        the males fighting off other males and signalling, often with brightly colours, to attract mates and to intimidate rivals. 
        Lizards are mainly carnivorous, often being sit-and-wait predators; many smaller species eat insects, while the Komodo eats mammals as big as water buffalo.
        </p>
        <p> They are often territorial, 
        the males fighting off other males and signalling, often with brightly colours, to attract mates and to intimidate rivals. 
        Lizards are mainly carnivorous, often being sit-and-wait predators; many smaller species eat insects, while the Komodo eats mammals as big as water buffalo.
        </p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button  sx={{mx: "auto"}}>
        <a  target="_blank" rel="noopener noreferrer" href="https://github.com/ItachiEU/BlogSite">
            <GitHubIcon sx={{ color: "black" }}></GitHubIcon>
        </a>
        </Button>
        <Button  sx={{mx: "auto"}}>
        <a  target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/">
            <YouTubeIcon sx={{ color: "red" }} ></YouTubeIcon>
        </a>
        </Button>
        <Button  sx={{mx: "auto"}}>
        <a  target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/">
            <TwitterIcon color="primary"></TwitterIcon>
        </a> 
        </Button>
      </CardActions>
    </Card>
  );
}