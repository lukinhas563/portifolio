import { collection, getFirestore, onSnapshot, query } from "firebase/firestore"
import { app } from "../firebaseConfig";

const db = getFirestore(app);

export function addOnSnapshot(cb) {

    const q = query(collection(db, 'posts'))

    onSnapshot(q, (querySnapshot) => {

        const posts = []

        querySnapshot.forEach(doc => {

            const newValues = {
                id: doc.id,
                ...doc.data()
            }
            posts.push(newValues)
        })


        cb(posts)

    })


}