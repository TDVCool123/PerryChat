import { Box } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { Imessage } from '../models/chatBox';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { firebaseDb } from '../services/instance';

export const Mensajes = () => {
const [messages,setMessages] = useState<Imessage[]>([]); 
const bottomRef = useRef<null | HTMLDivElement>(null);

function getMessage() {
    const queryChat = query(
      collection(firebaseDb, "chat"),
      orderBy("createdDate", "asc")
    );
    const unsubscribe = onSnapshot(queryChat, (querySnapshot) => {
      const messages: Imessage[] = [];
      querySnapshot.forEach((doc) => {
        messages.push({
          id: doc.id,
          message: doc.data().message,
          createdDate: new Date(doc.data().createdDate.seconds * 1000),
        });
      });
      console.log(messages);
      setMessages(messages);
    });
  }

  useEffect(() => {
    getMessage();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="90vh"
      p={2}
      pb={0}
      
    >
      <Box display="flex" flexDirection="column" overflow="auto">
        {messages.map((m, id) => (
          <Box
            key={id}
            alignSelf={"flex-start"}
            color="white"
            bgcolor="green"
            py={5}
            px={2}
            borderRadius={"16px 16px 16px 0px"}
            my={1}
            overflow={"hidden"}
            display={"flex"}
            fontFamily={"Monospace"}
            fontSize={20}
            flexDirection={"column"}
          >
            {m.message}
            <Box
              display="flex"
              lineHeight={1}
              justifyContent="flex-end"
              alignItems="center"
              fontSize={12}
              fontFamily={"Roboto"}
              color="white"
            >
              {m.createdDate.toLocaleString()}
            </Box>
          </Box>
        ))}
        <div ref={bottomRef} />
      </Box>
    </Box>
  )
}
