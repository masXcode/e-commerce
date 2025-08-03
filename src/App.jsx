import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages
import MainLayout from "./Components/MainLayout"
import Home from './pages/Home/Home.jsx'
import Product from "./pages/Product.jsx"
import Cart from "./pages/Cart.jsx"
import NotFound from "./Components/NotFound.jsx"


// hooks
import useMainData from "./Hooks/useMainData.js"
import Favourites from "./pages/Favourites.jsx"



function App() {
  
    const [data, loading, error] = useMainData()
    const response = {data,loading,error}
    // https://dummyjson.com/products
  return (
    <>
        <BrowserRouter>
            <Routes>
                
                <Route path="/" element={ <MainLayout response={response}/> }>
                    
                    <Route index element={<Home/>}/> {/*default*/}

                    <Route path="wishlist" element={<Favourites/>}/>

                    <Route path="cart" element={<Cart/>}/>

                    <Route path="product/:id" element={<Product/>}/> 


                    
                    <Route path="*" element={<NotFound/>}/> 

                </Route>

            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App










