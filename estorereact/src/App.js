import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navbar';
import Home from './views/Home'
import Products from './views/product/Products'
import ProductDetail from './views/product/ProductDetail'
import { BrowserRouter, Switch,Route } from 'react-router-dom'



function App() {
  return (
    
      <BrowserRouter> 
        <Navigation />
        
        
          <Switch>

            <Route path="/" exact component={Home} />
            <Route path="/products" exact component={Products} />
            <Route path="/products/:id" exact component={ProductDetail} />

          </Switch>
        
      </BrowserRouter>
   
  );
}

export default App;
