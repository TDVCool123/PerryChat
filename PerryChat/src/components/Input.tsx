import { FormControl, InputLabel, OutlinedInput, InputAdornment, Button } from '@mui/material'
import React from 'react'

export const Input = () => {
  return (
    <FormControl fullWidth sx={{ m: 1 }}>
    <InputLabel htmlFor="outlined-adornment-chat">Chat:</InputLabel>
    <OutlinedInput
      id="outlined-adornment-chat"
      label="chat"
    />
    <Button variant="contained">Contained</Button>

  </FormControl>  )
}
