import React from 'react';
import { FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CardBlogSkeleton = () => (
    <div className="animate-pulse">
        <div className="card shadow-md w-96 rounded-lg h-72 lg:h-72 pb-24 max-w-full cursor-not-allowed">
            <div className="card-header">
                <div className="bg-gray-300 rounded-t-lg max-w-full object-cover w-full h-48 sm:h-40 md:h-48" />
            </div>
            <div className="card-body p-5 flex flex-col gap-2">
                <div className="publish-date">
                    <p className="text-gray-400 text-xs sm:text-sm flex items-center gap-1 font-montserrat font-medium">
                        <FaClock size={14} />
                        {/* Placeholder for date */}
                        <span className="bg-gray-300 h-4 w-20 block rounded-sm"></span>
                    </p>
                </div>
                <h3 className="font-poppins text-sm">
                    {/* Placeholder for title */}
                    <span className="bg-gray-300 h-5 w-4/5 block rounded-sm"></span>
                </h3>
            </div>
        </div>
    </div>
);

export default CardBlogSkeleton;
