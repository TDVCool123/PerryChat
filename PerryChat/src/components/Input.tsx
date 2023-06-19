import {  Button, TextField, Box } from '@mui/material'
import React, { useState } from 'react'
import { postMessage } from '../services/chatService'
import SendIcon from "@mui/icons-material/Send";

export const Input = () => {
  const [message,setMessage] = useState<string>("");
  const handleSend = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    postMessage(message)
    setMessage("");
  };

  return (
    <Box display="flex" alignItems="center" component="form" onSubmit={handleSend}>
        <TextField
          fullWidth
          label="Type your message"
          value={message}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMessage(e.target.value)
          }
          autoFocus
        />
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          disabled={!message.trim()}
          sx={{ height: "100%" }}
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </Box> )
}
