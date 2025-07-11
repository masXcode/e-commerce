import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./Components/MainLayout"
import Home from './pages/Home/Home.jsx'

function App() {
  
    // https://dummyjson.com/products
  return (
    <>
        <BrowserRouter>
            <Routes>
                
                <Route path="/" element={ <MainLayout/> }>
                    
                    <Route index element={<Home/>}/> {/*default*/}

                </Route>

            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
