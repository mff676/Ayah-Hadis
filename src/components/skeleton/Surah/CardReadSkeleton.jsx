const CardReadSkeleton = () => {
    return (
        <div className="card w-full flex flex-col gap-10 border-b-2 pb-4 animate-pulse">
          <div className="mb-10">
            <div className="text-center font-hafs text-4xl mb-6 bg-gray-300 h-16 rounded-lg"></div>
            {/* Uncomment below for a placeholder line */}
            {/* <p className='text-center bg-gray-300 h-6 rounded-lg'></p> */}
          </div>
          <div className="top-content flex justify-between w-full items-start">
            <div className="flex items-center">
              <div className="bg-gray-300 h-8 w-8 rounded-full"></div>
              <div className="ml-2 bg-gray-300 h-4 w-16 rounded-lg"></div>
            </div>
            <div className="bg-gray-300 h-8 w-20 rounded-lg"></div>
          </div>
          <div className="bottom-content">
            <div className="mt-2 bg-gray-300 h-4 rounded-lg"></div>
          </div>
        </div>
      );

}     
  export default CardReadSkeleton

  