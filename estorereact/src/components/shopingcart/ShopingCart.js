import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ShopingCartProduct from './ShopingCartProduct'
import { clearCart } from '../../store/actions/cartActions'







export default function ShopingCart() {
    const dispatch = useDispatch()

    const shoppingcart = useSelector(state => state.cart.shoppingcart)
    const totalCartAmount = useSelector(state => state.cart.totalCartAmount)
    const totalCartQuantity = useSelector(state => state.cart.totalCartQuantity)

    const clear = (event) => {
        dispatch(clearCart())
    }


    return (

        <div> 


            <div className="p-2 d-flex justify-content-between align-items-center">

                <div className="ml-2">
                    {
                        shoppingcart.map(product => {
                            return (<ShopingCartProduct key={product._id} item={product} />)

                        })

                    }

                    {shoppingcart.length > 0 ?

                        <div className="text-center" role="group" aria-label="trash">
                        <div className="">
                                <div className="ml-1"> Totalsumma: {totalCartAmount}  SEK</div>
                                <div><small className="text-muted"> Antal produkter: {totalCartQuantity}</small></div>
                                <button className="btn btn-danger btn-sm px-5" onClick={() => clear()}><i className="fas fa-trash"></i> Töm kundvagn</button>
                                <button className="btn btn-default btn-sm px-5"> <i className="fas fa-money-bill-alt fa-1x"></i> Gå till Kassan</button>
                            </div>
                            

                        </div> :


                        <div className="cart-item">
                            <div className="p-2 d-flex justify-content-center align-items-center">
                                <div className="d-flex align-items-center">
                                   Du har inga produkter i din kundvagn
                                   
                                 </div>
                                 
                            </div>
                        <div className="dropdown-divider"></div>
                    </div>}
                </div>
            </div>
        </div>

    )
}
