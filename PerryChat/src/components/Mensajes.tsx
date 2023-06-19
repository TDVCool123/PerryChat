import { Box } from '@mui/material'
import  { memo, useEffect, useMemo, useRef, useState } from 'react'
import { Imessage } from '../models/chatBox';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { firebaseDb } from '../services/instance';

const Mensajes = () => {
const [messages,setMessages] = useState<Imessage[]>([]); 
const bottomRef = useRef<null | HTMLDivElement>(null);

const tamaño = useMemo(() => {
  return messages.length;
}, [messages]);
console.log("El numero de mensajes total es: ",tamaño);

function getMessage() {
    const queryChat = query(
      collection(firebaseDb, "chat"),
      orderBy("createdDate", "asc")
    );

     onSnapshot(queryChat, (querySnapshot) => {
      const messages: Imessage[] = [];
      querySnapshot.forEach((doc) => {
        messages.push({
          id: doc.id,
          message: doc.data().message,
          createdDate: new Date(doc.data().createdDate.seconds * 1000),
          userName: doc.data().userName||"noName"
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
    
      <Box display="flex" flexDirection="column" overflow="scroll">
        {messages.map((m, id) => (
          <Box
            key={id}
            alignSelf={"flex-start"}
            color="white"
            bgcolor="green"
            py={2}
            px={2}
            borderRadius={"16px 16px 16px 0px"}
            my={1}
            overflow={"hidden"}
            display={"flex"}
            fontFamily={"Monospace"}
            fontSize={20}
            flexDirection={"column"}
          >
            
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              fontSize={12}
              fontFamily={"Roboto"}
              color="white"
            >
              {m.userName} - {m.createdDate.toLocaleString()}
            </Box>

            { m.message}
            
          </Box>
        ))}
        <div ref={bottomRef} />
      </Box>
   
  )
}

export default memo(Mensajes);