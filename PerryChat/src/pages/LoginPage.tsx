import { AccountCircle } from '@mui/icons-material';
import { Box, Button, Card, CardContent, TextField } from '@mui/material';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { loginModel } from '../models/loginModel';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<loginModel>({
    mode: 'onChange' // validate onBlur, not onChange
  });

   const navigate = useNavigate();
  const onSubmit: SubmitHandler<loginModel> = (data) => {
    localStorage.setItem("username", data.username)
    navigate("/chat");
  }
  



  return (

<Card>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              margin="normal"
              InputProps={{
                startAdornment: <AccountCircle />
              }}
              {...register('username', { required: true })}
              error={Boolean(errors?.username?.message)}
              helperText={errors?.username?.message}
            />
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );

    
};

export default LoginPage;