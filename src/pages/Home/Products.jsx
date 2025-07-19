import LoadingProducts from "../../Components/LoadingProducts"
import SliderCategory from './SliderCategory'

function Products({response}) {
    
    const categories = response.data


    if(response.error) return <p>something went wrong :(</p> // if there any error
    if(response.loading) return <LoadingProducts/> // if there loading

    if(!response.error && !response.loading && response.data){
        return(
            <div className="py-8 px-4 bg-gray-50 ">
                <div className="2xl:container">
                    {categories.map((category, index) =>(
                        <SliderCategory key={index} category={category}/> 
                    ))}
                    
                    {console.log(categories)}
                </div>
            </div>
        )
    }
    
    
    
}

export default Products