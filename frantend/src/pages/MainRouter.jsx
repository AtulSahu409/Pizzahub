import React from 'react'
import{Route,Routes} from "react-router-dom"
import PizzaList from '../Components/PizzaList'
import Product from './product'
import Cart from './cart'
import Order from './orders'


const MainRouter = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<PizzaList/>} />
          <Route path="/Product/:id" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/order" element={<Order/>}/>
      </Routes>
    </div>
  )
}

export default MainRouter