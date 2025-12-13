import { collection, getDocs, query, where, getDoc, doc, addDoc, updateDoc } from "firebase/firestore"
import { db } from "./firebase"
import { formatCategoryText, replaceHyphensWithSpaces } from "../helper/Helper"
import { PROJECTNAME, ORDERSTORAGE } from "../helper/constants"

/*////////////////////////////////////////////////////*/
/*//////////////////////PRODUCTS//////////////////////*/
/*////////////////////////////////////////////////////*/

const productsCollection = collection(db, PROJECTNAME)

// GET de todos los productos.
export const getAllProducts = async () => {
    const dbConnection = await getDocs(productsCollection);
    return dbConnection.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

// GET de todos los productos por categoría.
export const getProductsByCategory = async (category) => {
    const productsByCategory = query(productsCollection, where("category", "==", formatCategoryText(category)))
    const dbConnection = await getDocs(productsByCategory)
    return dbConnection.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

// GET de todos los productos por búsqueda de texto.
export const getProductsBySearch = async (searchedText) => {
    const lowerText = replaceHyphensWithSpaces(searchedText.toLowerCase())
    const allProducts = await getAllProducts()
    return allProducts.filter(product =>
        replaceHyphensWithSpaces(product.name.toLowerCase()).includes(lowerText) ||
        replaceHyphensWithSpaces(product.description.toLowerCase()).includes(lowerText) ||
        replaceHyphensWithSpaces(product.category.toLowerCase()).includes(lowerText)
    )
}

// GET de un producto por ID.
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

// Validar stock de todos los productos antes de crear la orden.
export const validateStockForOrder = async (products) => {
  for (const product of products) {
    const productRef = doc(db, PROJECTNAME, product.id)
    const productSnapshot = await getDoc(productRef)
    if (!productSnapshot.exists()) {
      throw new Error(`Producto ID: "${product.id}" no encontrado.`)
    }
    const currentStock = productSnapshot.data().stock || 0
    if (currentStock < product.quantity) {
      throw new Error(
        `Stock insuficiente para el producto "${product.name}" (ID: ${product.id}).`
      )
    }
  }
  return true
}

// Actualizar stock de todos los productos después de crear la orden.
export const updateStockForOrder = async (products) => {
  const results = []
  for (const product of products) {
    const productRef = doc(db, PROJECTNAME, product.id)
    const productSnapshot = await getDoc(productRef)
    const currentStock = productSnapshot.data().stock || 0
    const newStock = currentStock - product.quantity
    await updateDoc(productRef, { stock: newStock })
    results.push({ id: product.id, newStock })
  }
  return results
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