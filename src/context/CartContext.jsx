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

    const removeProductFromCart = (productId) => {
        setCart(cart.filter( (product) => product.id !== productId ))
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (productId) => {
        return cart.some( (product) => product.id === productId )
    }

    return (
        <CartContext.Provider value={{cart, addProductToCart, removeProductFromCart, clearCart, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}