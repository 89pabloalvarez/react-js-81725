import { collection, getDocs, query, where, getDoc, doc, addDoc, updateDoc } from "firebase/firestore"
import { db } from "./firebase"
import { formatCategoryText, replaceHyphensWithSpaces } from "../helper/Helper"
import { PROJECTNAME, ORDERSTORAGE } from "../helper/constants"

/*////////////////////////////////////////////////////*/
/*//////////////////////PRODUCTS//////////////////////*/
/*////////////////////////////////////////////////////*/

const productsCollection = collection(db, PROJECTNAME)

export const getAllProducts = async () => {
    const dbConnection = await getDocs(productsCollection);
    return dbConnection.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export const getProductsByCategory = async (category) => {
    const productsByCategory = query(productsCollection, where("category", "==", formatCategoryText(category)))
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
        const dbConnection = await getDoc(
            doc(db, PROJECTNAME, id)
        )
        if (dbConnection.exists()) {
        return { id: dbConnection.id, ...dbConnection.data() }
        } else {
        throw new Error(`ID de Producto: ${id} no encontrado`)
        }
    } catch (error) {
        throw error
    }
}

export const updateProductStock = async (id, quantitySold) => {
  try {
    const productRef = doc(db, PROJECTNAME, id)
    const productSnapshot = await getDoc(productRef)

    if (!productSnapshot.exists()) {
      throw new Error(`Producto ID: "${id}" no encontrado.`)
    }

    const currentStock = productSnapshot.data().stock || 0
    const newStock = currentStock - quantitySold

    if (newStock < 0) {
      throw new Error(`No hay stock suficiente para el producto ID: "${id}".`)
    }

    await updateDoc(productRef, { stock: newStock })
    return { id, newStock }
  } catch (error) {
    throw error
  }
}

/*////////////////////////////////////////////////////*/
/*///////////////////////ORDERS///////////////////////*/
/*////////////////////////////////////////////////////*/

const ordersCollection = collection(db, ORDERSTORAGE)

export const createOrder = async (orderData) => {
  try {
    const dbConnection = await addDoc(ordersCollection, {
      ...orderData,
      createdAt: new Date().toISOString()
    })
    return { id: dbConnection.id, ...orderData }
  } catch (error) {
    throw error
  }
}