import { Timestamp } from "firebase/firestore"

export interface Imessage {
    id?:string
    message:string
    createdDate:Date|Timestamp
    userName:string
}