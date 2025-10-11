import React, { Suspense, useState, } from 'react';
import TrendingPage from '../TrendingPage/TrendingPage';
import logo from "../../assets/logo.png"
import { NavLink } from 'react-router';

const TrendingPages = ({trendingApps}) => {
    const [showAll, SetShowAll] = useState(false)
    const only8 = 8;

    const sortedApps = [...trendingApps].sort((a,b)=>b.downloads - a.downloads)

    const appShow = showAll ? sortedApps : sortedApps.slice(0, only8)

    return (
        
            <div>
            
            <div className='text-center p-3'>
                <h1 className='text-4xl font-bold text-black'>Trending Apps</h1>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className="max-w-[1440px] mx-auto">
                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                <Suspense fallback={<span className='text-2xl text-center'>L{logo}ading...</span>}>
                {appShow.map(singleApp => (
            <NavLink key={singleApp.id} to={`/appsDetails/${singleApp.id}`}>
              <TrendingPage singleApp={singleApp} />
            </NavLink>
          ))}
                </Suspense>
                </div>
            </div>
           <div className='text-center'>
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                <NavLink to={"/apps"}><li className=' m-2 lg:m-5 btn text-white bg-gradient-to-l from-[#9F62F2] to-[#632EE3]' >Show All</li></NavLink>
            </Suspense>
                
           </div>
           
            
        </div>
        
    );
};

export default TrendingPages;