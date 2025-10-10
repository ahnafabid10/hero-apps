import React from 'react';
import bannerImg from '../../assets/hero.png'

const Banner = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <h1 className='text-6xl font-bold p-3 text-center mt-10'>We Build <br />
                <span className='text-[#632EE3]'>Productive</span> Apps</h1>
            <p className='text-[#627382] text-center p-3'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
            <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex p-3 gap-10 justify-center mb-10'>
                <button className='btn bg-white text-[#000000]'>Google Play</button>
                <button className='btn bg-white text-black'>App Store</button>
            </div>
            <div className='grid justify-center'>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;