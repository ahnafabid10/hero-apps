import React, { useEffect, useState } from 'react';
import notFound from '../../assets/error-404.png'
import { FaDownload } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';


const Installation = () => {
    const [install, setInstall] = useState([])
    const [sortOrder, setSortOrder] = useState('none')
    useEffect(() =>{
        const savedList = JSON.parse(localStorage.getItem('Installed'))
        if(savedList) setInstall (savedList)
    }, [])



    const sortedItem = () =>{
        if(sortOrder === 'price-asc'){
            return [...install].sort((a,b)=> a.downloads-b.downloads)
        }
        else if(sortOrder === 'price-desc'){
            return [...install].sort((a,b)=> b.downloads-a.downloads)
        }
        else{
            return install
        }
    }
       


    const handleRemove = (id)=>{
        const existingList = JSON.parse(localStorage.getItem('Installed'))
         let updateList = existingList.filter(p=> p.id !== id)
         toast('Successfully Uninstalled')

        // Ui Instant Update
        // setInstall.apply(prev => prev.filter(p=> p.id !== id))
        setInstall(updateList)
        
        localStorage.setItem('Installed', JSON.stringify(updateList))
    }






    return (
        <div className='space-y-6 max-w-[1440px] mx-auto'>
         <div className='text-center p-10 space-y-5'>
        <h1 className='text-4xl font-bold'>Your Installed Apps</h1>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
     </div>
            <div className='flex justify-between'>
                <h2>{install.length} Apps Found</h2>
    <label className='form-control w-full max-w-xs'>
                  <select className='select select-bordered' value={sortOrder} onChange={e=>setSortOrder(e.target.value)}>
         <option value="none">Sort by Downloads</option>
     <option value="price-asc">Low-&gt; High</option>
          <option value="price-desc">High-&gt; Low</option>
             </select>
            </label>
                
         </div>


            <div>
        {install.length === 0 ? (
          <div className='flex flex-col items-center justify-center mt-10'>
            <img src={notFound} alt='No apps found' className='my-20' />
            <p className='text-gray-500 text-lg mb-10'>No installed apps found!</p>
          </div>
        ) : (
          <div>
            {sortedItem().map((p) => (
              <div
                key={p.id}
                className='flex flex-col md:flex-row gap-10 items-center justify-between border-b border-dotted border-blue-300 py-4'
              >
     <div className='flex flex-col md:flex-row items-center'>
      <img src={p.image} alt={p.title} className='w-30 h-30 mr-4 rounded' />
          <div>
             <h3 className='font-medium'>{p.title}</h3>
           <div className='flex text-gray-600 text-sm gap-4 items-center'>
           <p className='text-[#00D390] flex gap-1 items-center'><FaDownload />{p.downloads}</p>
          <p className='text-[#FF8811] flex gap-1 items-center'><FaStarHalfAlt />{p.ratingAvg}</p>
  <p className='text-[#627382] flex gap-1 items-center'>{p.size}MB</p>
  </div>
           </div>
        </div>
                <button onClick={() => handleRemove(p.id)} className='bg-[#00D390] text-white px-4 py-2 rounded'>Uninstall</button>
      </div>
            ))}
 </div>
        )}
  </div>

            <ToastContainer />
            
        </div>
    );
};

export default Installation;
