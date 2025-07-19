import React from 'react'

function Favourites() {
    const data = sessionStorage.getItem("favorites") || "no favourite products yet"

  return (
    <div>{data}</div>
  )
}

export default Favourites