import React from 'react'


// 
import { useLocation } from 'react-router-dom'

function Products() {

    const loacationData = useLocation()

   return (
    <div>{JSON.stringify(loacationData.state, 2 , null)}</div>
  )
}

export default Products