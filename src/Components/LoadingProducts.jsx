

function LoadingPage() {
  const arrLoading = Array(4).fill(0);

  const cards = arrLoading.map((_,index) =>{
    return(
        <div key={index} className="w-[250px] h-[350px] bg-white flex-grow p-3 rounded-lg space-y-4">
            <div className="h-1/2 animate-pulse bg-gray-200 rounded-lg"></div>

            <div className="animate-pulse bg-gray-200 p-3 rounded-full w-3/4"></div>
            <div className="flex gap-2">
                <div className="animate-pulse bg-gray-200 p-3 rounded-full flex-grow"></div>
                <div className="animate-pulse bg-gray-200 p-3 rounded-full flex-grow"></div>
            </div>
            <div className="flex gap-2">
                <div className="animate-pulse bg-gray-200 p-3 rounded-full flex-grow w-1/4"></div>
                <div className="animate-pulse bg-gray-200 p-3 rounded-full flex-grow w-3/4"></div>
            </div>
            <div className="animate-pulse bg-gray-200 p-3 rounded-full"></div>
        </div>
    )
  })

  return (
    <>
      <div className="2xl:container bg-gray-50 p-2 space-y-4">
          <div className="flex gap-4 flex-wrap">{cards}</div>
          <div className="flex gap-4 flex-wrap">{cards}</div>
      </div>
    
    
    </>
  )
}

export default LoadingPage