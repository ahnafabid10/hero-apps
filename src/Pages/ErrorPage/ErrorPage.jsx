import React from 'react';
import errorImg from "../../assets/App-Error.png"

const ErrorPage = () => {
    return (
        <div className='max-w-[1440px] mt-[150px] mx-auto grid text-center items-center justify-center'>
            <img src={errorImg} alt="" />
            <h1 className='text-4xl font-bold my-[20px]'>Oops, page not found!</h1>
            <h3 className='text-lg text-[#627382]'>The page you are looking for is not available.</h3>
        </div>
    );
};

export default ErrorPage;