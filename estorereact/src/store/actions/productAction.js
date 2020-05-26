import actiontypes from '../actiontypes'
import axios from 'axios'


export const getProducts = () => {
    return async dispatch => {
        
        const res = await axios.get('http://localhost:9992/api/products/allproducts')
       
            dispatch(setProducts(res.data))
           
        
    }
 
  }

export const getProduct = (id) => {
    return async dispatch => {        
       const res = await axios.get(`http://localhost:9992/api/products/${id}`)
            dispatch(setProduct(res.data))
            
          
     
     
    }
}

export const setProducts = (products) => {
    return {
        type: actiontypes().products.getProducts,
        payload: products
    }
}

export const setProduct = (product) => {
    return {
        type: actiontypes().products.getProduct,
        payload: product
    }
}
