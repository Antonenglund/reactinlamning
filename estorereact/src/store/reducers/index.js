import {combineReducers} from 'redux'

// REDucers
import cartReducer from './cartReducer'
import productReducer from './productReducer'

export default combineReducers({
    cart: cartReducer,
    products: productReducer,
    

    

})