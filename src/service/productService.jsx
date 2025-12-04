import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "./firebase"

const productsCollection = collection(db, "kiosco")

export const getAllProducts = async () => {
    const snapshot = await getDocs(productsCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export const getProductsByCategory = async (category) => {
    const q = query(productsCollection, where("category", "==", category))
    const snapshot = await getDocs(q)
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}