import { collection, getDocs, query, where, getDoc, doc } from "firebase/firestore"
import { db } from "./firebase"
import { replaceHyphensWithSpaces } from "../helper/Helper"
import { PROJECTNAME } from "../helper/constants"

const productsCollection = collection(db, PROJECTNAME)

export const getAllProducts = async () => {
    const dbConnection = await getDocs(productsCollection);
    return dbConnection.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export const getProductsByCategory = async (category) => {
    const productsByCategory = query(productsCollection, where("category", "==", category))
    const dbConnection = await getDocs(productsByCategory)
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

export const getProductById = async (id) => {
    try {
        const dbConnection = doc(db, PROJECTNAME, id)
        const dbData = await getDoc(dbConnection)
        if (dbData.exists()) {
        return { id: dbData.id, ...dbData.data() }
        } else {
        throw new Error(`ID de Producto: ${id} no encontrado`)
        }
    } catch (error) {
        throw error
    }
}