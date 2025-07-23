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
import { FaShoppingCart } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";

// components
import StarRating from './StarRating'
import CardBtn from '../../Components/Btns/CardBtn';



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
      spacing: 2,
    },

    // make slider responsive
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2.5, spacing: 2 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2.5, spacing: 2 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.2, spacing: 1},
      },
      "(min-width: 1280px)": {
        slides: { perView: 4.2, spacing: 1 },
      },
    },
  });

    //  to navigate to product details and send data with
    const navigator = useNavigate();
    const navigateFunction = (product) => navigator(`product/${product.id}`, { state: { product } });

  

    // get data from session storage
    const vafourites_KEY = "favorites"
    const getSessionData = (Session_Key) => ( JSON.parse(sessionStorage.getItem(Session_Key)) || [] )

    // send data to session storage
    const saveSessionData = (newData, Session_Key) => 
          sessionStorage.setItem(Session_Key, JSON.stringify(newData))


    // check if the product in favourites or not 
    const isFavorite = (productId) => {
        const favorites = getSessionData(vafourites_KEY);
        return favorites.some((fav) => fav.id === productId);
    };

      // use it to rerender this component
      const [render, setRender] = useState(false)


      // toggle products in favourites 
      const toggleFavorite = (product) =>{
          const favourites = getSessionData(vafourites_KEY);
          let updatedFavorites ;

          if(favourites.some(fav => fav.id === product.id)){
              updatedFavorites = favourites.filter(fav => fav.id !== product.id)
          }else{
              updatedFavorites = [...favourites, product]
          }

          saveSessionData(updatedFavorites, vafourites_KEY)
          setRender(prev => !prev)
      }



      /////// Btn add to cart
      const Cart_key = "Cart-Products"
      const addToCart = (e , product) =>{
        e.stopPropagation()  // stop dragging

          // get old products in cart
          const cartProducts = getSessionData(Cart_key)
          let newData; 
          
           const existingProduct = cartProducts.find(p => p.id === product.id);

            if (existingProduct) {
              existingProduct.productNumber += 1;
              newData = [...cartProducts];
            } else {
              product.productNumber = 1;
              newData = [...cartProducts, product];
            }

          saveSessionData(newData, Cart_key)
      }


  return (
    <div className='mt-8 text-stone-800'>

      {/* title of category */}
      <h2 className="text-xl font-semibold mb-4 ml-4">{name}</h2>

      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <div key={product.id} className="keen-slider__slide p-2">

              {/* Card */}
              <div
                onClick={() => navigateFunction(product)}
                className="border shadow-md py-2 px-4 rounded-lg h-[450px] relative cursor-pointer hover:shadow-lg transition duration-300 hover:-translate-y-2 transform"
              >
                {/* Top Row: Discount and Like Button */}
                <div className="absolute flex justify-between items-center w-full top-2 left-0 px-3 z-10">

                  <div className="bg-red-600 text-white px-2 text-[12px] font-semibold rounded-md py-[2px]">
                    {Math.round(product.discountPercentage)}% OFF </div>

                    {/* favourite botton */}
                    <button
                      onClick={(e) => {e.stopPropagation(); toggleFavorite(product)}}
                      className={`p-2 shadow rounded-full text-gray-600 hover:shadow-lg group ${isFavorite(product.id) && "bg-red-100 transition-colors"}`}>
                        
                      {isFavorite(product.id) ? 
                      (<FaHeart className='text-red-600'/>) : (<FiHeart className='group-hover:text-red-600'/>)}
                    </button>
                </div>


                {/* Product Image */}
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-[170px] h-[170px] object-cover rounded mb-2 mx-auto mt-2 hover:scale-[1.1] transition-transform"
                />

                <div className='pt-5 space-y-2'>
                    {/* Product Title */}
                    <p className="text-sm font-semibold">{product.title}</p>

                    {/* star rating */}
                    <StarRating rating={product.rating}/>

                    {/* price */}
                    <div className='flex items-center gap-3'>
                      {/* discountPercentage price */}
                          <p className='text-lg font-bold '>
                            ${(product.price - (product.price * product.discountPercentage / 100) ).toFixed(2)}</p>

                          <p className='line-through text-gray-600 text-sm font-light decoration-gray-500'>${product.price}</p>
                    </div>
                
                    <div className='text-sm text-gray-800 font-light'>category: <span className='font-medium text-gray-600'>{product.category}</span></div>
                        
                        {/* stock */}
                    <div className='text-[12px] font-medium'>{product.stock >= 0 ? 
                      <p className='text-green-700'>In Stock <span>{product.stock}</span></p> : <p className='text-red-700'>Not In Stock</p>}</div>

                      {/* btn card to add in cart */}
                    <CardBtn text="add to cart" icon={<FaShoppingCart/>}  addToCart={addToCart} product={product}/>
                    
                
                    <div className='bg-gray-100 p-2 border-t absolute bottom-0 w-full left-0 flex items-center justify-between text-gray-600 text-sm'>
                        <div className='flex items-center gap-1'><FaTruckFast/> <span>Free Delivary</span></div>
                        <div>tomorrow</div>
                    </div>

                </div>
              </div>


            </div>
          );
        })}
      </div>
    </div>
  );
}
