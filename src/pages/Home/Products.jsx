import LoadingProducts from "../../Components/LoadingProducts"

function Products({response}) {
    


    if(response.error) return <p>something went wrong :(</p> // if there any error
    if(response.loading) return <LoadingProducts/> // if there loading

    if(!response.error && !response.loading && response.data){
        return(
            <div className="py-8 px-4 bg-gray-50">
                    
            </div>
        )
    }
    
    
    
}

export default Products