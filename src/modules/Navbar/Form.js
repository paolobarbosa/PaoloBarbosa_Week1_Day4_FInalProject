import React, { useState } from 'react';
import SignupForm from './modules/Navbar/SignupForm';
import { Button, Dialog, DialogTitle, DialogContent } from '@mui/material';

function Form() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="Form">
      <Button variant="contained" color="primary" onClick={handleOpenModal}>
        Open Signup Modal
      </Button>
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent>
          <SignupForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Form;
