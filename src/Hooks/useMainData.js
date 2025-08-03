import axios from "axios"
import { useEffect, useState } from "react"


// categories 
const categoriesData = [
        { slug: "smartphones", name: "Smartphones", url: "https://dummyjson.com/products/category/smartphones" },
        { slug: "laptops", name: "Laptops", url: "https://dummyjson.com/products/category/laptops" },
        { slug: "tablets", name: "Tablets", url: "https://dummyjson.com/products/category/tablets" },
        { slug: "mens-shirts", name: "Mens Shirts", url: "https://dummyjson.com/products/category/mens-shirts" },
        { slug: "womens-dresses", name: "Womens Dresses", url: "https://dummyjson.com/products/category/womens-dresses" },
        { slug: "mens-shoes", name: "Mens Shoes", url: "https://dummyjson.com/products/category/mens-shoes" },
        { slug: "womens-shoes", name: "Womens Shoes", url: "https://dummyjson.com/products/category/womens-shoes" },
        { slug: "mens-watches", name: "Mens Watches", url: "https://dummyjson.com/products/category/mens-watches" },
        { slug: "womens-watches", name: "Womens Watches", url: "https://dummyjson.com/products/category/womens-watches" },
        { slug: "sunglasses", name: "Sunglasses", url: "https://dummyjson.com/products/category/sunglasses" },
        { slug: "womens-bags", name: "Womens Bags", url: "https://dummyjson.com/products/category/womens-bags" },
        { slug: "womens-jewellery", name: "Womens Jewellery", url: "https://dummyjson.com/products/category/womens-jewellery" },
        { slug: "kitchen-accessories", name: "Kitchen Accessories", url: "https://dummyjson.com/products/category/kitchen-accessories" },
    ]



function useMainData() {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    useEffect(() =>{

        const getAllData = async () =>{
            setLoading(true)

            try{
                
                const result = await Promise.all(
                    
                    categoriesData.map(async (category) =>{
                        const response = await axios.get(category.url)
                        return {slug:category.slug, name:category.name, products: response.data.products}
                    })
                )
                setData(result)
                setError(false)

            }
            catch(error){
                console.log(error.message)
                setData(null)
                setError(true)
            }
            finally{
                setLoading(false)
            }

        }
        getAllData()

    },[])



  return [data, loading, error]
}

export default useMainData















