import { addDoc, collection, getDocs } from "firebase/firestore";
import { firebaseDb } from "./instance"

export const getMessages =async () => {
    const chatCol = collection(firebaseDb, 'chat');
    const chatSnapshot = await getDocs(chatCol);
    // const chatList = chatSnapshot.docs.map(doc => doc.data());
    return chatSnapshot
}

export const postMessage= async (message: string) => {
    try {
        const docRef = await addDoc(collection(firebaseDb, "chat"), {
            message: message,
            createdDate: new Date(),
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}