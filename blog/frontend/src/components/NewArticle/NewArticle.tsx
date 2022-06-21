
import React, { useEffect, useState, useCallback } from "react";
import { Autocomplete, Grid, Input, TextField, Typography } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { debounce } from "lodash";
import { IFormInput, ITag } from "../../interfaces/Interfaces";
import InfoDialog from "../ConfirmDialog/InfoDialog";
import axios from "axios";

function NewArticle() {
    const { control, handleSubmit, reset } = useForm<IFormInput>();
    const [images, setImages] = useState<any>([]);
    const [imageURL, setImageURL] = useState<string>("");
    const [allTags, setAllTags] = useState<string[]>([]);
    const [selectedTag, setSelectedTag] = useState("");
    const [showInfoDialog, setShowInfoDialog] = useState(false);

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        if (!allTags.includes(selectedTag) && selectedTag !== "") {
            fetch(`/app/tag?tag=${selectedTag}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ tag_name: selectedTag })
            })
        }
        const formData = new FormData();
        formData.append('file', images[0]);
        axios.post(`/app/blog?description=${data.title}&textContent=${data.message}&tag=${selectedTag}`, formData)
            .then(response => setShowInfoDialog(true))
    };

    const handleConfirm = () => {
        window.location.reload();
    }

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImages((images: any) => [...images, e.target.files?.[0]]);
    };

    const debounceSetTag = useCallback(debounce((value) => {
        setSelectedTag(value);
    }, 300), []);

    useEffect(() => {
        fetch("/app/tag").then(result => result.json()).then(tags => setAllTags(tags.map((x: ITag) => x.tag)));
    }, []);

    useEffect(() => {
        if (images === null || images.length === 0)
            return;
        setImageURL(URL.createObjectURL(images[0]));
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
                            name="title"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <TextField {...field} placeholder={"Title..."} required sx={{width: "50%", marginLeft: "25%"}} />}
                        />
                    </Grid>
                    <Grid item>
                        <Controller
                            name="message"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <TextField {...field} multiline placeholder={"Content..."} required/>}
                        />
                    </Grid>
                    <Grid item>
                        <Controller
                            name="image"
                            control={control}
                            render={({ field }) => <Input type="file" {...field} onChange={handleFileInputChange}/>}
                        />
                    </Grid>
                    <Grid item>
                        <Autocomplete
                            freeSolo
                            disablePortal
                            options={allTags}
                            sx={{ width: "300px" }}
                            //@ts-ignore
                            onChange={(e, value) => setSelectedTag(value)}
                            renderInput={(params) => <TextField {...params} label="Tag" onChange={(e) => debounceSetTag(e.target.value)} />}
                        />
                    </Grid>
                    <Grid item>
                        <Input type="submit" />
                    </Grid>
                </Grid>
            </form>
            <InfoDialog
                title="Success!"
                open={showInfoDialog}
                setOpen={setShowInfoDialog}
                onConfirm={handleConfirm}
              >
                Your post has been sent!
            </InfoDialog>
        </Grid>
    );
}

export default NewArticle;