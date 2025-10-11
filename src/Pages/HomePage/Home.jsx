import React, { useEffect, useState } from 'react';
import Banner from '../../Components/Banner/Banner';
// import { useLoaderData } from 'react-router';
import TrendingPages from '../TrendingPages/TrendingPages';

const Home = () => {
    const [trendingApps, setTrendingApps] = useState([])
    useEffect(()=>{
        fetch('data.json').then(res=>res.json()).then(data=>setTrendingApps(data))
    }, [])
    // const trendingApps = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <TrendingPages trendingApps={trendingApps}></TrendingPages>
        </div>
    );
};

export default Home;