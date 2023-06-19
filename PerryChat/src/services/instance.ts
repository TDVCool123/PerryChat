import { app } from "../utils/firebase";
import { getFirestore } from 'firebase/firestore';

export const firebaseDb = getFirestore(app);
