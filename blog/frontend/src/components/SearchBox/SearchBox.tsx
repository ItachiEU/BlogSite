import { useForm } from 'react-hook-form';
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Tooltip from "@mui/material/Tooltip";
import {Grid} from "@mui/material";

const SearchBox = () => {

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ mode: "onChange" });

    const onSubmit = (data: any) => {
    };
    
    return (
      <Grid container justifyContent={"center"} sx={{width: "100%"}}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Tag"
            placeholder="Enter tag..."
            variant="filled"
            {...register("tag", { required: true, maxLength: 20 })}
            helperText={
              errors.tag?.type === "required" ? (
                <p>Please enter the tag.</p>
              ) : errors.tag?.type === "maxLength" ? (
                <p>Maximum length is 20!</p>
              ) : null
            }
            sx={{width: "60%"}}
          />

          <Tooltip title="Search!">
            <IconButton edge="end" aria-label="search" type="submit">
              <SearchIcon />
            </IconButton>
          </Tooltip>
        </form>
      </Grid>
    );
};

export default SearchBox;