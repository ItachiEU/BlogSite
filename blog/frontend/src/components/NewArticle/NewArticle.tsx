
import React, { useEffect, useState, useCallback } from "react";
import { Autocomplete, Grid, Input, TextField, Typography } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { debounce } from "lodash";
import { v4 } from "uuid";

interface IFormInput {
    image: MediaSource;
    message: string;
    tag: string;
}

function NewArticle() {
    const { control, handleSubmit } = useForm<IFormInput>();
    const [images, setImages] = useState<any>([]);
    const [imageURL, setImageURL] = useState<any>([]);
    const [allTags, setAllTags] = useState<string[]>([]);
    const [selectedTag, setSelectedTag] = useState("");

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        // take selected Tag here as well
        console.log(data);
        console.log(selectedTag); // update list of tags on backend
        // send the new post json to backend
    };

    const onImageUpload = (e: any) => {
        setImages([...e.target.files]);
    }

    const debounceSetTag = useCallback(debounce((value) => {
        setSelectedTag(value);
    }, 300), []);

    useEffect(() => {
        // fetch all tags endpoint here
        setAllTags(["food", "cinema", "car", "climbing", "football"]);
    }, []);

    useEffect(() => {
        if (images === null)
            return;
        let imagesURLS: string[] = [];
        images.forEach((image: MediaSource | Blob) => imagesURLS.push(URL.createObjectURL(image)));
        setImageURL(imagesURLS);
    }, [images]);

    return (
        <Grid container justifyContent={"center"} sx={{marginTop: "10%"}}>
            <form onSubmit={handleSubmit(onSubmit)} >
                <Grid container direction={"column"} alignItems={"center"} minWidth={"500px"} spacing={3}>
                    <Grid item>
                        <Typography variant={"h4"}>
                            Create your post:
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Controller
                            name="message"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <TextField {...field} multiline placeholder={"Message..."} required/>}
                        />
                    </Grid>
                    <Grid item>
                        <Controller
                            name="image"
                            control={control}
                            render={({ field }) => <Input type="file" {...field} onChange={onImageUpload}/>}
                        />
                    </Grid>
                    <Grid item>
                        <Autocomplete
                            freeSolo
                            disablePortal
                            options={allTags}
                            sx={{width: "300px"}}
                            renderInput={(params) => <TextField {...params} label="Tag" onChange={(e) => debounceSetTag(e.target.value)} />}
                        />
                    </Grid>
                    {imageURL.map((src: string | undefined) => <img alt="Couldn't load the file." src={src} width="720px" height="480px" key={v4()} />) }
                    <Grid item>
                        <Input type="submit" />
                    </Grid>
                </Grid>
            </form>
        </Grid>
    );
}

export default NewArticle;