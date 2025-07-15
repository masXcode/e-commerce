import React, { useContext } from 'react'

// components
import Background from './Background'
import Products from './Products'

// 
import {contextAllData} from '../../Components/MainLayout'

function Home() {
  // this variable has data from hook that its name is "useMainData"
  const response = useContext(contextAllData)


  return (
    <>  
      <Background/>
      <Products response={response}/>
    
    </>
  )
}

export default Home