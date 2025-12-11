import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addProductToCart = (product, quantity ) => {
        if (isInCart(product.id)){
            const updatedCart = cart.map( (item) => {
                if (item.id === product.id){
                    return {...item, quantity: item.quantity + quantity}
                } else {
                    return item
                }
            })
            setCart(updatedCart)
        } else {
            setCart([...cart, {...product, quantity: quantity}])
        }
    }

    const removeProductFromCart = (id) => {
        setCart(cart.filter( (product) => product.id !== id ))
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some( (product) => product.id === id )
    }

    const cartQuantity = ()=>{
        return cart.reduce((acc , prod)=> acc += prod.quantity, 0) // Todas las unidades que tengo en el carrito (para cumplir con la consigna de la entrega final).
        // return cart.length // Ésto me da la cantidad de productos diferentes en el carrito que es lo que busco en mi aplicación.
    }

    const productQuantity = (id)=>{
        const productInCart = cart.find((prod)=> prod.id === id)
        if(productInCart){
            return productInCart.quantity
        }else{
            return 0
        }
    }

    const productWithTaxes = (id)=>{
        const productInCart = cart.find((prod)=> prod.id === id)
        if(productInCart){
            return productInCart.price * 1.21
        }else{
            return 0
        }
    }

    const totalWithTaxes = () => {
        const subtotal = cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0)
        return subtotal * 1.21
    }

    const removeProduct = (id)=>{
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    return (
        <CartContext.Provider value={{cart, addProductToCart, removeProductFromCart, clearCart, isInCart, productQuantity, productWithTaxes, totalWithTaxes, removeProduct, cartQuantity}}>
            {children}
        </CartContext.Provider>
    )
}