
function CardBtn({text, icon, addToCart, product}) {
  return (
    <button onClick={(e) => addToCart(e , product)}
        className="flex items-center text-white bg-gradient-to-r from-blue-500 to-blue-600 w-full rounded p-2 text-sm
                    capitalize justify-center gap-1 hover:from-blue-600 hover:to-blue-700 transition-colors">
        {icon && icon}  {text}</button>
  )
}

export default CardBtn