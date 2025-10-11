import React, { Suspense, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router';

const Apps = () => {
    const allData = useLoaderData();
    const [search, setSearch] = useState('')
    console.log(allData)
    const term = search.trim().toLocaleLowerCase();


    const searchProducts = term 
    ? allData.filter(product => product.title.toLocaleLowerCase().includes(term)) : allData;


    return (
        <div>
            <div className="max-w-[1440px] mx-auto">
  <div className='text-center py-10'>
                <h1 className='text-4xl text-black font-bold'>Our All Applications</h1>
  <p className='text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
              </div>

<div className='flex justify-between py-10'>
   <div>
                <h3 className='text-'>({searchProducts.length})Apps Found</h3>
              </div>

              {/* search  option */}
              <div>
                <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" value={search} onChange={e => setSearch(e.target.value)} required placeholder="Search" />
</label>
              </div>
              </div>

              


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {searchProducts.length > 0 ? (
                        searchProducts.map(appData => (
               <NavLink key={appData.id} to={`/appsDetails/${appData.id}`}>
 <div className="max-w-[1440px] mx-auto">
    <div className="card bg-base-10 shadow-sm">
             <figure>
                        <img
                           className='max-w-[300px] md:w-full h-[300px] rounded-4xl'
                       src={appData.image}
                     alt={appData.title}
         />
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
             </NavLink>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-10">
                            <p className="text-xl font-semibold text-gray-500">No apps found</p>
                        </div>
                    )}
           
            </div>
            </div>
        </div>
        
        
        
        
    );
};

export default Apps;
