import React from 'react';
import { FaDownload } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

const TrendingPage = ({singleApp}) => {
    console.log(singleApp)
    const {image, title, downloads, ratingAvg} = singleApp
    return (
        <div className="max-w-[1440px] mx-auto borer-2">
            <div className="max-w-[1440px] mx-auto borer-2">
      <div className="card bg-base-10 shadow-sm">
        <figure>
          <img className='max-w-[300px] md:w-full h-[300px] rounded-4xl' src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center">{title}</h2>
          <div className="card-actions justify-between">
            <div className="badge badge-outline text-[#00D390] p-5"><FaDownload />{downloads}</div>
            <div className="badge badge-outline text-[#FF8811] p-5"><FaStarHalfAlt />{ratingAvg}</div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default TrendingPage;