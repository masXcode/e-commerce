// hooks from React
import { useState } from 'react';

// hooks from react-router-dom
import { useNavigate } from 'react-router-dom';

// slider from 'keen-slider/react'
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';


// Icons
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";



export default function CategorySlider({ category }) {

  // data from prop category 
  const name = category.name;
  const products = category.products;

  // settings to use and control slider 
  const [sliderRef] = useKeenSlider({

    loop: false,
    mode: "free",
    rubberband: true,
    slides: {
      perView: 1.3,
      spacing: 10,
    },

    // make slider responsive
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2.5, spacing: 15 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2.5, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.2, spacing: 10 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 4.2, spacing: 10 },
      },
    },
  });

    //  to navigate to product details and send data with
    const navigator = useNavigate();
    const navigateFunction = (product) => navigator(`product/${product.id}`, { state: { product } });

  

    // get data from session storage
    const getFavorites = () => ( JSON.parse(sessionStorage.getItem("favorites")) || [] )

    // send data to session storage
    const saveFavorites = (newFavourites) => sessionStorage.setItem("favorites", JSON.stringify(newFavourites))


    // check if the product in favourites or not 
    const isFavorite = (productId) => {
        const favorites = getFavorites();
        return favorites.some((fav) => fav.id === productId);
    };

      // use it to rerender this component
      const [render, setRender] = useState(false)


      // toggle products in favourites 
      const toggleFavorite = (product) =>{
          const favourites = getFavorites();
          let updatedFavorites ;

          if(favourites.some(fav => fav.id === product.id)){
              updatedFavorites = favourites.filter(fav => fav.id !== product.id)
          }else{
              updatedFavorites = [...favourites, product]
          }

          saveFavorites(updatedFavorites)
          setRender(prev => !prev)
      }



  return (
    <div>

      {/* title of category */}
      <h2 className="text-xl font-semibold mb-4">{name}</h2>

      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <div key={product.id} className="keen-slider__slide p-2">

              {/* Card */}
              <div
                onClick={() => navigateFunction(product)}
                className="border shadow-md py-2 px-4 rounded-lg h-[330px] relative cursor-pointer hover:shadow-lg transition duration-300"
              >
                {/* Top Row: Discount and Like Button */}
                <div className="absolute flex justify-between items-center w-full top-2 left-0 px-3 z-10">

                  <div className="bg-red-600 text-white px-2 text-sm rounded-md py-[2px]">
                    {Math.round(product.discountPercentage)}% OFF </div>

                  <button
                    onClick={(e) => {e.stopPropagation(); toggleFavorite(product)}}
                    className={`p-2 shadow rounded-full text-gray-600 hover:shadow-lg group ${isFavorite(product.id) && "bg-red-100 transition-colors"}`}
                  >
                    {isFavorite(product.id) ? 
                    (<FaHeart className='text-red-600'/>) : (<FiHeart className='group-hover:text-red-600'/>)}
                  </button>
                </div>

                {/* Product Image */}
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-[170px] h-[170px] object-cover rounded mb-2 mx-auto mt-2"
                />

                {/* Product Title */}
                <p className="text-sm font-semibold">{product.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
