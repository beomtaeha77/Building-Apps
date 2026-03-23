import React from 'react';
import Banner from '../../components/Banner/Banner';
import { useLoaderData } from 'react-router';
import Apps from '../Apps/Apps';

const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <Banner></Banner>
            <Apps data={data}></Apps>
        </div>
    );
};

export default Home;