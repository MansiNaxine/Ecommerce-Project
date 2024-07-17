import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    outline:"none",
    boxShadow: 24,
    p: 4,
  };

  
  export default function AuthModel({ handleClose, open }) {
    const location = useLocation();
    const { auth } = useSelector((store) => store);
    useEffect(() => {
      if (auth.user) handleClose();
    }, [auth.user]);
    return (
      <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        size="large"
      >
        <Box className="rounded-md" sx={style}>
          {location.pathname === "/login" ? (
            <LoginForm />
          ) : (
            <RegisterForm/>
          )}
        </Box>
      </Modal>
      
      </>
      
    );
  }