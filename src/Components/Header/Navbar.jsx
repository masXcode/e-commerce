import React, { useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom';

// components
import TopBar from './TopBar'



// icons from react icons
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { HiMiniBars3BottomRight } from "react-icons/hi2";  // bars

function Navbar() { 
   

    const linkComponents = [
            {content:'Home', path:"/" ,isIcon:false},
            {content:'Shop', path:"shop" ,isIcon:false},
            {content:'Categories', path:"categories" ,isIcon:false},
            {content:'About', path:"about" ,isIcon:false},
            {content:<FaUser className='text-xl'/>, path:"/login" ,isIcon:true},
            {content:<FaHeart className='text-xl'/>, path:"wishlist" ,isIcon:true},
            {content:<FaShoppingCart className='text-xl'/>, path:"cart" ,isIcon:true},
    ]

    const links = linkComponents.map((link,index) =>{

        if(link.isIcon){
            return (
              <li key={index}><NavLink to={link.path}
                  className={({isActive}) => 
                  isActive? 'text-indigo-600' : ''}
              >   {link.content}</NavLink></li>
            )

        }else{
            return (
              <li key={index} >
                <NavLink to={link.path}   className={({isActive }) =>
                    isActive ? "text-indigo-600 border-b-2 border-indigo-600" : "hover:text-indigo-600 border-b-2 border-transparent" }>
                  {link.content} </NavLink>

              </li>
            )
        }
        
    })


  return (
    <>  
        <TopBar/>  {/* upper navBar */} 

          {/* start in nav bar */}
        <header className='sticky top-0 bg-white z-50 shadow'>

            <nav className='h-14 lg:h-16 px-4 container flex justify-between items-center '> 
              
              <div className='flex gap-16 items-center'>
                  {/* logo */}
                  <div className='text-2xl font-bold'><span className='text-indigo-600'>Shop</span>Ease</div>

                  {/* input */}
                  <div className='hidden lg:flex lg:w-[350px] xl:w-[580px] rounded-full overflow-hidden border-[1.25px] border-[transparent] focus-within:border-indigo-600'>  
                        {/* input */}
                      <input type="text" placeholder='Search products or categories' 
                              className='outline-none p-2 py-1 pl-5  flex-grow border rounded-l-full'/>

                      <button className='py-[14px] px-5 bg-gradient-to-r from-indigo-600 to-purple-600 '> 
                         <FaSearch className='text-white '/> 
                      </button>
                  </div>
              </div>

              {/* links */}
              <ul className='hidden lg:flex items-center gap-6 font-semibold text-stone-800'>{links}</ul>

              <HiMiniBars3BottomRight fontSize='25px' className='lg:hidden'/>
            </nav>

        </header>
    </>
  )
}

export default Navbar