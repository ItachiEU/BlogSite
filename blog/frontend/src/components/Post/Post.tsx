import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams} from "react-router-dom";
import { IPost } from "../../interfaces/Interfaces";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import { routes } from "../../routes";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";

export default function Post () {
    let { post_uid } = useParams();
    let navigate = useNavigate();
    const [data, setData] = useState<Partial<IPost>>({});
    const [likes, setLikes] = useState(0);
    const [likePressed, setLikePressed] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    
    useEffect(() => {
        // here we are going to fetch the post data
        fetch(`/app/blog?id=${post_uid}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
                setLikes(data.likesNum);
            })
            .catch(err => console.log(err));
    }, [post_uid]);

    const handleLikePress = () => {
        axios.post(`/app/update_likes?id=${data.id}&likesNum=${likePressed ? likes - 1 : likes + 1}`);
        setLikes((likes) => {
            return likePressed ? likes - 1 : likes + 1;
        })
        setLikePressed((likePressed) => !likePressed);
    }

    const handleDelete = () => {
        axios.delete(`/app/blog?id=${data.id}`)
            .then(response => navigate(routes.Blogs))
            .catch(err => console.log(err));
    }

    return (
        <Grid container justifyContent={"center"} sx={{padding: "1%"}}>
            <Card sx={{mx: "auto", mt: 5, mb:10, maxWidth: "70%"}}>
              <CardMedia
                component="img"
                height="auto"
                image={`data:image/jpg;base64,${data.image}`}
                alt={data.description}
              />
                <CardContent>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography gutterBottom variant="h2" component="div">
                          {data.description}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography gutterBottom variant="h3" align="right" component="div">
                          #{data.tag}
                        </Typography>
                    </Grid>
                </Grid>
                <Typography variant="body1" color="text.secondary">
                    {data.textContent}
                </Typography>
              </CardContent>
                <CardActions>
                    <Grid container>
                        <Grid item xs={6} alignContent="left">
                            <Button sx={{ mx: "auto" }} onClick={handleLikePress}>
                                {
                                    likePressed ?
                                    <FavoriteIcon sx={{ color: "black" }}></FavoriteIcon>
                                    :
                                    <FavoriteBorderIcon sx={{ color: "black" }}></FavoriteBorderIcon>
                                }
                                <Typography sx={{padding: "15%"}}>{likes}</Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Box display="flex" justifyContent="flex-end">
                                <Button onClick={() => setConfirmOpen(true)}>
                                    <DeleteIcon sx={{ color: "black" }}></DeleteIcon>
                                    <Typography>Delete</Typography>
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
            <ConfirmDialog
                title="Delete Post?"
                open={confirmOpen}
                setOpen={setConfirmOpen}
                onConfirm={handleDelete}
              >
                Are you sure you want to delete this post?
             </ConfirmDialog>
        </Grid>
    )
}