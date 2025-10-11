import React from 'react';
import NavBar from '../../Components/Header/NavBar';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router';
import TrendingPages from '../TrendingPages/TrendingPages';

const Home = () => {
    const trendingApps = useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
            <TrendingPages trendingApps={trendingApps}></TrendingPages>
        </div>
    );
};

export default Home;