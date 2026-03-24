import React from 'react';
import Banner from '../../components/Banner/Banner';
import { useLoaderData , Link } from 'react-router';
import Apps from '../Apps/Apps';
import SingleApp from '../SingleApp/SingleApp';

const Home = () => {
    const data = useLoaderData();

    const trendingApps = data ? data.slice(0, 8) : [];

    console.log(data)
    return (
        <div>
            <Banner></Banner>
            {/* <Apps data={data}></Apps> */}
             <div>
            <div className='text-center my-10'>
                <h1 className='text-4xl font-bold'>Trending Applications</h1>
                <p>Check out our most popular picks this week.</p>
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                {trendingApps.map((app) => (
                    <SingleApp key={app.id} singleApp={app} />
                ))}
            </div>
            
            
            <div className="text-center mt-10">
                <Link to="/apps" className="btn btn-outline mb-5">Show All</Link>
            </div>
        </div>
        </div>
           
    );
};

export default Home;