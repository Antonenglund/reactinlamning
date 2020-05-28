import React, {useEffect} from 'react'
import { getProduct } from '../../store/actions/productAction'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../../store/actions/cartActions';







export default function ProductDetail() {

  const {id} = useParams()

  const add = (product) => {
    dispatch(addToCart(product))
  }

  const dispatch = useDispatch()
  const product = useSelector(state => state.products.product)
  

  useEffect(() =>{
    dispatch(getProduct(id))
    
  }, [dispatch, id])
  


  
    return (
        <div className="container mt-5">
  
  <section className="mb-5">

    <h3 className="text-center font-weight-bold mb-5"> {product.productName}</h3>
    

  	<div className="row">

    
      <div className="col-md-12">
      
        <div className="card">
          <div className="card-body">
            <div className="row h-100 d-flex align-items-center">
              <div className="col-lg-6">
                  <p className="text-muted font-weight-light ml-3 mb-5">{product.description}
                </p>
                <div className="fa-ul mb-5 text-muted font-weight-light">
                  <li className="mb-2"><span className="fa-li"><i className="fas fa-check green-text"></i></span>Alltid 30 dagars öppetköp</li>
                  <li className="mb-2"><span className="fa-li"><i className="fas fa-check green-text"></i></span>Alltid ett par extra skosnören</li>
                  <li className="mb-2"><span className="fa-li"><i className="fas fa-check green-text"></i></span>Krav märkta</li>
                  
                </div>
                <div className="d-flex justify-content-between ml-3">

                  <button type="button" className="btn btn-purple mx-0" onClick={()=> add(product)}> Lägg till i kundvagn</button>

                  <div className="text-center">
                    <h4 className="mb-0">{product.price} kr</h4>
            
                  </div>
                </div>
              </div>
              <div className="col-lg-6">

               
                <div id="carousel-thumb" className="carousel slide carousel-thumbnails " data-ride="carousel">
                  
                  <div className="carousel-inner text-center text-md-left" role="listbox">
                    <div className="carousel-item active">
                      <img className="productDetail"  src={product.image} alt=""/>
                    </div>
                   
                  </div>
                  
                  <a className="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
              

                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      
      

    </div>
  </section>



</div>
    )
      }