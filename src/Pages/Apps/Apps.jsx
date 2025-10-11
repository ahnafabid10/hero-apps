import React, { Suspense } from 'react';
import { NavLink, useLoaderData } from 'react-router';

const Apps = () => {
    const allData = useLoaderData();
    console.log(allData)

    return (
        <div>
            <div className="max-w-[1440px] mx-auto">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {
                allData.map(appData=>
                  <NavLink to={`/appsDetails/${appData.id}`}>
                     <div className="max-w-[1440px] mx-auto">
            <div className="max-w-[1440px] mx-auto ">
      <div className="card bg-base-10 shadow-sm">
        <figure>
          <img className='max-w-[300px] md:w-full h-[300px] rounded-4xl' src={appData.image} alt={appData.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center">{appData.title}</h2>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{appData.downloads}</div>
            <div className="badge badge-outline">{appData.ratingAvg}</div>
          </div>
        </div>
      </div>
    </div>
        </div>
                    </NavLink>
                )
            }
           
        </div>
            </div>
        </div>
        
        
        
        
    );
};

export default Apps;