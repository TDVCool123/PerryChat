import { AccountCircle } from '@mui/icons-material';
import { Box, Button, Card, CardContent, TextField } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { loginModel } from '../models/loginModel';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from '../context/ContextProvider';
import { types } from '../context/storeReducer';
import { blue } from '@mui/material/colors';



const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<loginModel>({
    mode: 'onChange' // validate onBlur, not onChange
  });

  const dispatch = useDispatch();
   const navigate = useNavigate();
  const onSubmit: SubmitHandler<loginModel> = (data) => {

    localStorage.setItem("username", data.username)
    dispatch({ type: types.login });
    console.log(data);

    navigate("/chat");
  }
  



  return (

    <Box
        sx={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            bgcolor: blue
        }}
        >
        

        <Card sx={{ maxWidth: 345, justifyContent:"center", boxShadow: "0px 2px 5px" }}>
        <CardContent>
       
            <form onSubmit={handleSubmit(onSubmit)}>
            <Box display="flex" flexDirection="column" alignItems="center" alignContent="center">
                <TextField
                fullWidth
                label="Username"
                type="user"
                placeholder="username"
                variant="outlined"
                margin="normal"
                InputProps={{
                    startAdornment: <AccountCircle />
                }}
                {...register('username', { required: true })}
                error={Boolean(errors?.username?.message)}
                helperText={errors?.username?.message}
                />
                <TextField
                fullWidth
                label="Correo electronico"
                type="email"
                placeholder="email@gmail.com"
                variant="outlined"
                margin="normal"
                InputProps={{
                    
                }}
               
                error={Boolean(errors?.username?.message)}
                helperText={errors?.username?.message}
                />
                <TextField
                fullWidth
                label="Contraseña"
                type="password"
                placeholder="password"
                variant="outlined"
                margin="normal"
                InputProps={{
                    
                }}
                
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
    </Box>




  );

    
};

export default LoginPage;