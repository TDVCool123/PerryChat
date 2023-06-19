import React from 'react'
import { Navbar } from '../components/Navbar'
import { Input } from '../components/Input'
import { useLoaderData } from 'react-router-dom';
import { getMessages } from '../services/chatService';
import { Mensajes } from '../components/Mensajes';


export const Chat = () => {
  
  return (
    <>
    <Navbar/>
    <Mensajes/>
    <Input/>
    </>    

  )
  }