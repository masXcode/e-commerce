import React, { createContext } from 'react'
import Navbar from './Header/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

export const contextAllData = createContext()

function MainLayout(props) {
  const response = props.response
  return (
    <>
      <contextAllData.Provider value={response}>
          <Navbar/>

          <Outlet/>

          <Footer/>
      </contextAllData.Provider>
    </>

  )
}

export default MainLayout