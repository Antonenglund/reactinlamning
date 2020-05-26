import actiontypes from '../actiontypes'



export const addToCart = (product) => {
    console.log(product)
    return {
        type: actiontypes().cart.add,
        product: product
    }
}

export const removeFromCart = (id) => {
    return {
        type: actiontypes().cart.remove,
        id: id
    }
}
export const clearCart = () => {
    return {
        type: actiontypes().cart.clear
    }
}

