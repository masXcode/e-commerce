import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./Components/MainLayout"
import Home from './pages/Home/Home.jsx'
import NoPage from "./pages/NoPage.jsx"

function App() {
  
    // https://dummyjson.com/products
  return (
    <>
        <BrowserRouter>
            <Routes>
                
                <Route path="/" element={ <MainLayout/> }>
                    
                    <Route index element={<Home/>}/> {/*default*/}



                    <Route path="*" element={<NoPage/>}/> 

                </Route>

            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App













// // categories 
// const categoriesData = [
//         { slug: "smartphones", name: "Smartphones", url: "https://dummyjson.com/products/category/smartphones" },
//         { slug: "laptops", name: "Laptops", url: "https://dummyjson.com/products/category/laptops" },
//         { slug: "tablets", name: "Tablets", url: "https://dummyjson.com/products/category/tablets" },
//         { slug: "mens-shirts", name: "Mens Shirts", url: "https://dummyjson.com/products/category/mens-shirts" },
//         { slug: "womens-dresses", name: "Womens Dresses", url: "https://dummyjson.com/products/category/womens-dresses" },
//         { slug: "mens-shoes", name: "Mens Shoes", url: "https://dummyjson.com/products/category/mens-shoes" },
//         { slug: "womens-shoes", name: "Womens Shoes", url: "https://dummyjson.com/products/category/womens-shoes" },
//         { slug: "mens-watches", name: "Mens Watches", url: "https://dummyjson.com/products/category/mens-watches" },
//         { slug: "womens-watches", name: "Womens Watches", url: "https://dummyjson.com/products/category/womens-watches" },
//         { slug: "sunglasses", name: "Sunglasses", url: "https://dummyjson.com/products/category/sunglasses" },
//         { slug: "womens-bags", name: "Womens Bags", url: "https://dummyjson.com/products/category/womens-bags" },
//         { slug: "womens-jewellery", name: "Womens Jewellery", url: "https://dummyjson.com/products/category/womens-jewellery" },
//         { slug: "kitchen-accessories", name: "Kitchen Accessories", url: "https://dummyjson.com/products/category/kitchen-accessories" },
//     ]

