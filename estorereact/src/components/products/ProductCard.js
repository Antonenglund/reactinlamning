import React from 'react'
import { Link } from 'react-router-dom'




export default function ProductCard({product}) {

    
    
     
        return (
            
            
            <div className="col-lg-4 col-md-12 mb-4">
                <div className="card">
                    <div className="view overlay">
                        <img className="card-img-top" src={product.image} alt="Card  cap"/>
                            <a href="/">
                                 <div className="mask rgba-white-slight"></div>
                           </a>
                       </div>

            <div className="card-body"> 

                <p className="mb-1"><a href="/" className="font-weight-bold black-text">{product.productName}</a></p>
        <p className="text-muted font-weight-light ml-3 mb-5">{product.short}</p>
        <p className="mb-1"><small className="mr-1"></small><strong>{product.price} kr</strong></p>
            
  
            <Link to={`/products/${product._id}`}>  <button onClick={product.id}type="button" className="btn btn-color btn-rounded btn-sm px-3">Mer info</button> </Link>
    
            </div>

                </div>
             </div>
                    
             
        
    )
     
    

    
    
}
