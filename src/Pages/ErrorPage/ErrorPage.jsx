import React from 'react';
import errorImg from "../../assets/App-Error.png"
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='max-w-[1440px] my-[100px] mx-auto grid text-center items-center justify-center'>
            <img src={errorImg} alt="" />
            <h1 className='text-4xl font-bold my-[20px]'>Oops, page not found!</h1>
            <h3 className='text-lg text-[#627382]'>The page you are looking for is not available.</h3>
            <Link to={"/"}><button className=' m-2 lg:m-5 btn text-white bg-gradient-to-l from-[#9F62F2] to-[#632EE3]' >Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;