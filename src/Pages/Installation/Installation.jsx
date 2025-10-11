import React, { useEffect, useState } from 'react';

const Installation = () => {
    const [install, setInstall] = useState([])
    useEffect(() =>{
        const savedList = JSON.parse(localStorage.getItem('Installed'))
        if(savedList) setInstall (savedList)
    }, [])
    return (
        <div className='space-y-6'>
            <div>
                <h1 className='text-4xl font-bold'>Your Installed Apps</h1>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between'>
                <h2>savedList: {install.length}</h2>
                <p>Sorted By Size</p>
            </div>

            <div>
                <div className='flex justify-between'>
                    <img src="" alt="" />
                </div>
                
                
                
                <div>
                    <div className='flex'>
                        <div>
                            <h1>title</h1>
                        </div>

                        <div className='flex'>
                            <p>downloads</p>
                            <p>downloads</p>
                            <p>downloads</p>
                        </div>
                    </div>

                    <div>
                        <button>Uninstall</button>
                    </div>
                </div>
               
            </div>
            
        </div>
    );
};

export default Installation;