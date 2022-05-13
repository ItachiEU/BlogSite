import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {Grid, Input, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";

interface IFormInput {
    name: string;
    email: string;
    message:  string;
}

const Contact = () => {
    const { control, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log(data)
    };

    return (
        <Grid container justifyContent={"center"} sx={{marginTop: "10%"}}>
            <form onSubmit={handleSubmit(onSubmit)} >
                <Grid container direction={"column"} alignItems={"center"} minWidth={"500px"} spacing={3}>
                    <Grid item>
                        <Typography variant={"h4"}>
                            You can contact us here:
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Controller
                            name="name"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <Input {...field} placeholder={"name"} required/>}
                        />
                    </Grid>
                    <Grid item>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <Input {...field} placeholder={"email"} required/>}
                        />
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
                        <Input type="submit" />
                    </Grid>
                </Grid>
            </form>
        </Grid>
    );
}

export default Contact;