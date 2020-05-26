import React, {useEffect} from 'react'
import ProductCard from './ProductCard'
import {useDispatch, useSelector} from 'react-redux'
import {getProducts} from '../../store/actions/productAction'


export default function ProductCards() {

  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)


  useEffect(() =>{
      dispatch(getProducts())
  },[dispatch])
  
    return (
        <div>
             <div className="container my-5 py-5">
                <section className="text-center">
                 <div className="row">
                    {/*<ProductCard v-for="product in products" :key="product._id" :product="product" /> */}
                    
                    {
                      products && products.map(product => {
                        return <ProductCard key={product._id } product={product} />
                        
                      })
                    }
                    
               
                 
                
                  
                </div>
                </section>
             </div>
        </div>
    )
}
