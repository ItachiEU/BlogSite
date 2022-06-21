import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@mui/material';
import React from 'react';

const InfoDialog = (props: any) => {
  const { title, children, open, setOpen, onConfirm } = props;
  return (
    <Dialog
      open={open}
        onClose={() => {
           setOpen(false);
           onConfirm();
        }}
        aria-labelledby="confirm-dialog"
    >
      <DialogTitle id="confirm-dialog">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
         <Grid container justifyContent={"center"}>
            <Button
               variant="contained"
               color='info'
               onClick={() => {
                  setOpen(false);
                  onConfirm();
               }}>
               Okay
            </Button>
         </Grid>
      </DialogActions>
    </Dialog>
  );
};
export default InfoDialog;