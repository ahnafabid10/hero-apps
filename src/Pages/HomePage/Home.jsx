import React from 'react';
import NavBar from '../../Components/Header/NavBar';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router';
import TrendingPage from '../TrendingPage/TrendingPage';

const Home = () => {
    const trendingApps = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <TrendingPage trendingApps={trendingApps}></TrendingPage>
        </div>
    );
};

export default Home;