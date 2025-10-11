import React from 'react';
import bannerImg from '../../assets/hero.png'
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa";



const Banner = () => {
    return (
        <div>
            <div className='max-w-[1440px] mx-auto'>
            <h1 className='text-6xl font-bold p-3 text-center mt-10'>We Build <br />
                <span className='text-[#632EE3]'>Productive</span> Apps</h1>
            <p className='text-[#627382] text-center p-3'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
            <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex p-3 gap-10 justify-center mb-10'>
                <a className='btn bg-white items-center text-[#000000]' href="https://play.google.com/store/apps"><BiLogoPlayStore />Google Play</a>
                <a className='btn bg-white items-center text-black' href="https://www.apple.com/app-store/"><FaAppStoreIos />App Store</a>
            </div>
            <div className='grid justify-center'>
                <img src={bannerImg} alt="" />
            </div>
        </div>

        <div className='bg-gradient-to-l from-[#9F62F2] to-[#632EE3]'>
            <div>
            {/* H1 */}
            <h1 className='text-4xl font-bold text-center p-5'>Trusted by Millions, Built for You</h1>
        </div>
        <div className='max-w-[1440px] mx-auto flex flex-col md:flex-row gap-10 text-center justify-between p-10'>   
            {/* 1st  */}
            <div className='space-y-5'>
            <p className='font-bold'>Total Downloads</p>
            <h2 className='text-6xl font-bold'>29.6M</h2>
            <p>21% more than last month</p>
            </div>
            <div className='space-y-5'>
            <p className='font-bold'>Total Reviews</p>
            <h2 className='text-6xl font-bold'>906K</h2>
            <p>46% more than last month</p>
            </div>
            <div className='space-y-5'>
            <p className='font-bold'>Active Apps</p>
            <h2 className='text-6xl font-bold'>132+</h2>
            <p>31 more will Launch</p>
            </div>

        </div>
        </div>

        
        </div>
        
    );
};

export default Banner;