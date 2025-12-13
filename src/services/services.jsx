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

// Validar stock de todos los productos antes de crear la orden. Devuelvo los productos sin stock suficiente.
export const validateStockForOrder = async (products) => {
  const productsWithoutStock = []
  for (const product of products) {
    const dbConnection = await getDoc(
      doc(db, PROJECTNAME, product.id)
    )
    const currentStock = dbConnection.data().stock || 0
    if (currentStock < product.quantity) {
      productsWithoutStock.push({
        id: product.id,
        name: product.name,
        reason: `Stock actual: ${currentStock}, solicitado: ${product.quantity}`
      })
    }
  }
  return {
    stockAvailable: productsWithoutStock.length === 0,
    productsWithoutStock
  }
}

// Actualizar stock de todos los productos después de crear la orden.
export const updateStockForOrder = async (products) => {
  try {
    for (const product of products) {
      const dbConnection = await getDoc(
        doc(db, PROJECTNAME, product.id)
      )
      const currentStock = dbConnection.data().stock
      const newStock = currentStock - product.quantity
      await updateDoc(doc(db, PROJECTNAME, product.id), { stock: newStock })
    }
    return true
  } catch (error) {
    throw new Error("Error al actualizar el stock de los productos: " + error.message)
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