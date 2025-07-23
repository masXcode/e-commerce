import { useEffect, useState } from "react"

function Cart() {
    const [data, setData] = useState([])

    useEffect(() =>{
        const data = sessionStorage.getItem("Cart-Products")
        setData(data)
    },[])

  return (
    <div>{data}</div>
  )
}

export default Cart