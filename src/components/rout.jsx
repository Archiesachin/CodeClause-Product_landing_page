import { Route, Routes } from "react-router-dom"
import Home from './home'
import Product from './product'

export default function Rout(){
  return(
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/product" element={<Product/>}/>
      </Routes>
    </>
  )
}