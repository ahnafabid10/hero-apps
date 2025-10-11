import React, { Suspense, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'
import reviewImg from '../../assets/icon-review.png'
import Ratings from '../Ratings/Ratings';
import axios from 'axios';

// export const installContext = createContext('');
const AppsDetails = () => {
    const getRatings = axios.get('data.json')
    const { id } = useParams();
    const appsId = parseInt(id);
    const appsData = useLoaderData();
    const singleApps = appsData.find(apps => apps.id === appsId)
    const [installed, setInstalled] = useState(false)


    const handleClickInstall= () =>{
        alert(`${singleApps.title} installed successfully!`)
        setInstalled(true)
    }

    return (
        <div>
            <div className='flex max-w-[1440px] mx-auto '>
            <div className='max-w-[400px] h-[400px] mr-10'>
                <img className=' rounded-2xl' src={singleApps.image} alt="" />             
            </div>
            <div className=''>

            <div className='border-b-1 space-y-5 flex flex-col'>
                {/* Title & company Name */}
                <h1 className='text-2xl'>{singleApps.title}</h1>
                <p>Developed by <span className='font-bold text-[#632EE3]'>{singleApps.companyName}</span></p>
                <p className='border-dashed border-[#001931]'></p>
            </div >
            {/* download, ratings */}
            <div className='flex flex-col md:flex-row items-center justify-center gap-20 my-10'>
                    <div>
                <img src={downloadImg} alt="" />
                <p>Downloads</p>
                <p className='text-4xl font-bold'>{singleApps.downloads}</p>
            </div>
            <div>
                <img src={ratingImg} alt="" />
                <p>Average Ratings</p>
                <p className='text-4xl font-bold'>{singleApps.ratingAvg}</p>
            </div>
            <div>
                <img src={reviewImg} alt="" />
                <p>Total Reviews</p>
                <p className='text-4xl font-bold'>{singleApps.reviews}</p>
            </div>

            </div>

            {/* install */}
            <div>
                <button onClick={handleClickInstall} disabled={installed} className='btn bg-[#00D390]'>
                    Install Now (${singleApps.size}MB)
                </button>
            </div>


            
            </div>
            
            
        </div>

        <div>
            <h1>Ratings</h1>
            <div>

        <Suspense fallback={<span>Loading....</span>}>
            <Ratings getRatings={getRatings}></Ratings>
        </Suspense>


            </div>
        </div>
        </div>
        
    );
};

export default AppsDetails;