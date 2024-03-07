import React, { useState } from 'react';
import { Dialog } from '@mui/material';

function ModalView({
  open,
  handleClose=()=>{},
  children
}) {
  const maxWidth = 'md';
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={maxWidth}
      >
        {children}
      </Dialog>
    </div>
  );
}

export default ModalView;