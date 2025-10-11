import React, { Suspense } from 'react';
import TrendingPage from '../TrendingPage/TrendingPage';
import logo from "../../assets/logo.png"

const TrendingPages = ({trendingApps}) => {
    return (
        <div>
            <div className='text-center p-3'>
                <h1 className='text-4xl font-bold text-black'>Trending Apps</h1>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className="max-w-[1440px] mx-auto borer-2">
                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                <Suspense fallback={<span className='text-2xl text-center'>{logo}Loading...</span>}>
                {
                    trendingApps.map(singleApp=><TrendingPage singleApp={singleApp}></TrendingPage>)
                }
                </Suspense>
                </div>
            </div>
           
            
        </div>
    );
};

export default TrendingPages;