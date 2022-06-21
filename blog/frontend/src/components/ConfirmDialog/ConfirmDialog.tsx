import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@mui/material';
import React from 'react';

const ConfirmDialog = (props: any) => {
  const { title, children, open, setOpen, onConfirm } = props;
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="confirm-dialog"
    >
      <DialogTitle id="confirm-dialog">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
         <Grid container>
            <Grid item xs={6}>
               <Button
                  variant="outlined"
                  color='info'
                  onClick={() => setOpen(false)}>
               No
               </Button>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent={'flex-end'}>
               <Button
                  variant="contained"
                  color='success'
                  onClick={() => {
                     setOpen(false);
                     onConfirm();
                  }}>
                  Yes
               </Button>
            </Grid>
         </Grid>
      </DialogActions>
    </Dialog>
  );
};
export default ConfirmDialog;