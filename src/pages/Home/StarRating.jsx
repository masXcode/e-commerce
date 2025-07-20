// hooks from react
import React from 'react'


// icons from react-icons
import { FaStar } from "react-icons/fa";

function StarRating({rating}) {

    const totalStars = 5;
    const fullStars = Math.floor(rating)
    const decimal = rating - fullStars
    const starArray = Array(totalStars).fill(0);


    // check if the star is full or not 
    const starRaiting = starArray.map((_ , index) => {
        if(index < fullStars){
            return <FaStar key={index} className='text-yellow-400 text-[13px]'/>
        }
        
        else if(index === fullStars && decimal > 0){
            return (
            <div key={index} className='relative inline-block'>
                <FaStar className='text-gray-300 text-[13px]'/>

                <div className='absolute top-0 left-0 overflow-hidden' style={{width: `${decimal * 100}%`}}>

                    <FaStar key={index} className='text-yellow-400 text-[13px]'/>
                </div>


            </div>
          );
        }
        else{
            return <FaStar key={index} className='text-gray-300 text-[13px]'/>
        }
    })


    return (
       <div className='flex gap-2'>

        {/* star rating */}
        <div className='flex items-center'>
            {starRaiting}
        </div>

        {/* text rating */}
        <p className='text-[12px] text-indigo-600'>{rating} </p>

       </div>
    )

}

export default StarRating





















