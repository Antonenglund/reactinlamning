import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../store/actions/cartActions'




export default function ShopingCartProduct({item}) {
    const dispatch = useDispatch()
   

    const add = (event) =>{
        
        dispatch(addToCart(item))
    }
    const delited = (event) =>{
        dispatch(removeFromCart(item._id))
    }
 

    return (
        <div>
             <div className="cart-item">
            <div className="p-2 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
             
              <div>
                  <div><strong> {item.productName}</strong></div>
                  <img className="divCart" alt="!#" src={item.image} />
                  <div><small> {item.quantity} * {item.price} sek </small></div>          
              </div>
             </div>
          <div>
                <div className="btn-group btn-group-sm" role="group" aria-label="quantity">
                    <button type="button" className="btn btn-grey px-3" onClick={delited}>-</button>
                    <button type="button" className="btn btn-grey px-3" onClick={add}>+</button>
                </div>
          </div>
      </div>
      <div className="dropdown-divider"></div>
  </div>
    </div>
    
    )
}
