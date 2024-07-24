import React from 'react';

const CardSurahSkeleton = () => {
  return (
    <div className="">
      <div className="animate-pulse">
        <div className="card group cursor-pointer flex sm:flex-row justify-between items-center p-3.5 sm:p-7 gap-3 sm:gap-5 border-2 rounded-md border-gray-300 w-full">
          <div className="flex items-center gap-2">
            <div className="rounded number-surah w-8 h-8 rotate-45 flex items-center justify-center bg-gray-300"></div>
            <div className="ml-3 sm:ml-5">
              <h2 className="bg-gray-300 h-3 w-24 mb-1"></h2>
              <h4 className="bg-gray-300 h-2 w-16"></h4>
            </div>
          </div>
          <div className="flex flex-col sm:ml-auto">
            <h2 className="bg-gray-300 rounded-sm h-3 w-12 mb-1 self-end"></h2>
            <h4 className="bg-gray-300 h-4 rounded w-20"></h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSurahSkeleton;
