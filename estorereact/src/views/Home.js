import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
 
  
    return (

        <div className="bg-color">
        <div className="container  py-5 ">
    
      
      <section className="text-center px-md-5 mx-md-5 dark-grey-text">
        
        
    
        <h3 className="font-weight-bold mb-4 pb-2">Sveriges bästa skobutik</h3>
        
        <p className="text-center mx-auto mb-4 pb-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto explicabo.</p>
        
        <div className="row mb-5">
          <div className="col-md-4 mx-auto">
            <div className="view mb-4 pb-2">
              <img src="https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="img-fluid" alt=""/>
                  
                  <Link to="/products"> <button type="button" className="btn btn-purple btn-rounded my-5">Spana in våra produkter</button> </Link>
                  
            </div>
          </div>
        </div>
        
    
      </section>
    
      
    </div>
    
      </div>
    )
}
