import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "./firebase"
import { replaceHyphensWithSpaces } from "../helper/Helper"

const productsCollection = collection(db, "kiosco")

export const getAllProducts = async () => {
    const dbConnection = await getDocs(productsCollection);
    return dbConnection.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export const getProductsByCategory = async (category) => {
    const q = query(productsCollection, where("category", "==", category))
    const dbConnection = await getDocs(q)
    return dbConnection.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export const getProductsBySearch = async (searchedText) => {
    const lowerText = replaceHyphensWithSpaces(searchedText.toLowerCase())
    const allProducts = await getAllProducts()
    return allProducts.filter(product =>
        replaceHyphensWithSpaces(product.name.toLowerCase()).includes(lowerText) ||
        replaceHyphensWithSpaces(product.description.toLowerCase()).includes(lowerText) ||
        replaceHyphensWithSpaces(product.category.toLowerCase()).includes(lowerText)
    )
}