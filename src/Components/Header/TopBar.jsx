import { useEffect, useRef } from 'react'

// icons from react-icons
import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function TopBar() {

    // array that containes icons and links 
    const linkComponents = [
                    {icon:<FaFacebookF />, URL:"https://www.facebook.com"},
                    {icon:<FaDiscord />, URL:"https://www.discord.com"},
                    {icon: <FaInstagram />, URL:"https://www.instagram.com"},
                  ];

    // create links from linkComponents
    const links = linkComponents.map((link,index) =>{

        return <li key={index}><a className='text-[18px] hover:text-indigo-300 transition-colors' 
        href={link.URL} target='_blank'>{link.icon}</a></li>
    })


    // fast message
    const fastMessages = {
        bigScreen:"Free shipping on orders over $50",
        smallScreen:"Welcome to ShopEase"
    }

    // on resize ==> check the width to change the text 
    const eleMSG_Ref = useRef(null)
    useEffect(() => {
        const checkResize = () =>{
            window.innerWidth > 640 ? eleMSG_Ref.current.innerHTML = fastMessages.bigScreen : 
            eleMSG_Ref.current.innerHTML = fastMessages.smallScreen
        }

        window.addEventListener("resize", checkResize) // resize event

        return () => window.removeEventListener("resize", checkResize) // clear event
    },[window.innerWidth])



  return (
    <div className='bg-gray-900 text-white'>
        <div className='flex justify-between py-2 px-4 items-center md:container' >

            {/* fast info */}
            <div className='text-sm' ref={eleMSG_Ref}>
                {window.innerWidth > 640 ? fastMessages.bigScreen:fastMessages.smallScreen}
            </div>

            {/* ul of icons */}
            <ul className='flex gap-4'>{links}</ul>

        </div>
    </div>
  )
}

export default TopBar