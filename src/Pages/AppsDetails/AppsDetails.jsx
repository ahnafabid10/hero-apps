import React, { Suspense, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'
import reviewImg from '../../assets/icon-review.png'
import {BarChart,Bar,CartesianGrid,Legend,ResponsiveContainer,Tooltip,XAxis,YAxis,} from 'recharts';

// export const installContext = createContext('');
const AppsDetails = () => {
    const { id } = useParams();
    const appsId = parseInt(id);
    const appsData = useLoaderData();
    const singleApps = appsData.find(apps => apps.id === appsId)
    const [installed, setInstalled] = useState(false)


    const handleClickInstall= () =>{
        alert(`${singleApps.title} installed successfully!`)
        setInstalled(true)
        const existingList = JSON.parse(localStorage.getItem('Installed'))
        let updateList = []
        if(existingList){
            const isDuplicated = existingList.some(p=>p.id === singleApps.id)
            if(isDuplicated) return alert ('already Installed')
            updateList =[...existingList, singleApps ]
        }
        else{
            updateList.push(singleApps)
        }
        localStorage.setItem('Installed', JSON.stringify(updateList))
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
                <button onClick={handleClickInstall} disabled={installed} className='btn justify-center items-center bg-[#00D390]'>
                    Install Now (${singleApps.size}MB)
                </button>
            </div>


            
            </div>
            
            
        </div>

        <div>
            <div>


    <div className='max-w-[800px] mx-auto my-10'>
        <h1 className='text-2xl font-semibold mb-5 text-center'>Ratings</h1>
        <ResponsiveContainer width='100%' height={300}>
          <BarChart
            data={singleApps.ratings}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='count' fill='#632EE3' />
          </BarChart>
        </ResponsiveContainer>
      </div>

        <div className='border-t-1'>
            <div className='max-w-[1440px] mx-auto p-5'>
            <p className='text-xl font-bold mt-8'>Description</p>
            <p className='mb-8'>{singleApps.description}</p>
            </div>
            
        </div>
        


            </div>
        </div>
        </div>
        
    );
};

export default AppsDetails;