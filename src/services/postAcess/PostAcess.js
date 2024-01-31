import { getFirestore, collection, addDoc, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore"
import { app } from "../firebaseConfig";

const db = getFirestore(app);

export async function addPostAcess(data) {

    const response = await addDoc(collection(db, 'posts'), data)
    return response

}

export async function getPostAcess(id) {

    const docRef = doc(db, 'posts', id)
    const response = await getDoc(docRef)

    return response
}

export async function updatePostAcess(id, data) {
    const docRef = doc(db, 'posts', id)
    const response = await updateDoc(docRef, data)

    return response
}

export async function deletePostAcess(id) {
    const docRef = doc(db, 'posts', id)
    const response = await deleteDoc(docRef)

    return response
}
