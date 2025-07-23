
// framer-motion
import { motion } from 'framer-motion' 

// icons
import { FaTruckFast } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

function Footer() {


    // Animation Variant
    const fadeUpVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: .8, ease: "easeOut" } }
    };

    const container = {
        hidden: {},
        visible: {
        transition: {
            staggerChildren: 0.2
        }
        }
    };




    
    // footer cards in footer top
    const footerCardsComponent = [
          {icon: <FaTruckFast/>, bold:"Free Shipping", thin:"On orders over $50"},
          {icon: <FaCreditCard/>, bold:"Secure Payment", thin:"100% secure checkout"},
          {icon: <MdOutlineSecurity/>, bold:"Quality Guarantee", thin:"Top-notch products"},
          {icon: <MdOutlineSupportAgent/>, bold:"Support 24/7", thin:"Always ready to help"},
    ]

    const footerCards = footerCardsComponent.map((card, index) => (
        <div key={index}  className='text-center hover:-translate-y-2 transition-transform p-3 duration-300'>
            <div className='flex justify-center text-indigo-400 text-2xl mb-1'>{card.icon}</div>
            <h3 className='text-sm font-semibold'>{card.bold}</h3>
            <p className='text-sm text-gray-400 font-light'>{card.thin}</p>
        </div>
    ) )


    // links 
    const middleLinksComponents = [
        {linksName:"Quick Links", links:['Home', 'Shop', 'About Us', 'Contact']},
        {linksName:"Customer Care", links:['Account', 'Order Tracking', 'Wishlist', 'Help']},
    ]

    const createMiddleLinks = middleLinksComponents.map((group, index) => {

        const links = group.links.map((link, index) => (
           <p key={index}  className='cursor-pointer hover:translate-x-2 transition-transform hover:text-white'>{link}</p>
        ))

        return(
        <div key={index}  className='space-y-2'>
            <h3 className='font-bold text-sm'>{group.linksName}</h3>
            <div className='space-y-2 text-sm text-gray-400'>{links}</div>
        </div>
    )})






  return (

    <motion.div className='bg-[#0f172a]' 
            variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
    >
        <footer className='p-6  text-white 2xl:container'>

          {/* footer top */}
          <div className='py-4 grid grid-cols-2 lsm:grid-cols-4 border-gray-700 border-b'>{footerCards}</div>

          {/* footer middle */}
          <motion.div 
                    className='py-2 px-2 border-b border-gray-700 pb-16 flex items-center justify-between flex-wrap gap-5 space-y-6' 
                    variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>

              {/* left ==>  icons logo text */}
              <motion.div variants={fadeUpVariant} className='space-y-3 w-full lg:w-auto'>

                  <h3 className='font-bold text-xl'>ShopEase</h3>
                  <p className='text-sm text-gray-400 tracking-wide'>Your destination for quality and affordable products <br />since 2023.</p>
                  
                  <div className='flex items-center space-x-4 text-gray-400 text-lg'>
                        <FaFacebookF className='hover:-translate-y-1 transition-transform duration-200 cursor-pointer hover:text-indigo-400'/>
                        <FaTwitter className='hover:-translate-y-1 transition-transform duration-200 cursor-pointer hover:text-indigo-400'/>
                        <FaInstagram className='hover:-translate-y-1 transition-transform duration-200 cursor-pointer hover:text-indigo-400'/>
                        <FaLinkedinIn className='hover:-translate-y-1 transition-transform duration-200 cursor-pointer hover:text-indigo-400'/>
                        <FaPinterestP className='hover:-translate-y-1 transition-transform duration-200 cursor-pointer hover:text-indigo-400'/>

                  </div>
              </motion.div>

              {/* middle ==> links */}
              <motion.div variants={fadeUpVariant} className='flex justify-around sm:justify-between lg:justify-around xl:justify-between w-full sm:w-[50%] lg:w-[300px] xl:w-[350px]'
              >{createMiddleLinks}</motion.div>


                {/* subscripe  */}
                <motion.div variants={fadeUpVariant} className='space-y-2 w-full sm:w-auto'>
                    <h3 className='font-bold text-sm'>Newsletter</h3>
                    <p className='text-[12px] text-gray-400'>Subscribe for latest updates & offers.</p>

                    <div className='flex w-[100%]'>
                        <input type="email" placeholder='email' 
                                className='px-2 py-1 w-full text-sm rounded-l-md bg-gray-800 text-white outline-none' />
                        <button className='bg-indigo-500 px-3 py-1 text-sm rounded-r-md hover:bg-indigo-600 '>Subscripe</button>
                    </div>

                </motion.div>
          </motion.div>

          {/* footer bottom */}
          <div className='flex flex-col items-center justify-center text-[12px] p-4 text-gray-500'>
              <p>© 2025 ShopEase. All rights reserved.</p>
              <p>Developed with by <span className='font-bold text-indigo-400'>Mohamed Ahmed Salah "MAS"</span></p>
          </div>

        </footer>
      </motion.div>
  )
}

export default Footer