import React, { Suspense,  } from 'react';
import SingleApp from '../SingleApp/SingleApp';
import { useLoaderData } from 'react-router';

const Apps = () => {
    // const [allApps, setAllApps] = useState([]);

    // useEffect(() => {
    //     fetch("AppsData.json")
    //     .then(res=>res.json())
    //     .then(data =>{
    //         setAllApps(data);
    //     })
    // })  {data} useEffect, useState

    //  const appPromise = fetch('../../../public/AppsData.json').then(res => res.json())

 const allApps = useLoaderData();



    return (
        <div>
            <div className='text-center'>
                <h2 className='text-3xl font-bold pt-20 pb-6'>Our All Applications</h2>
                <p className='pb-5'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div>
                <div>

                </div>
                <div className='my-10'>
                    <input type="search" placeholder='search' />
                </div>
            </div>

            <div className='grid lg:grid-cols-4'>
                {/* <Suspense fallback={<span>Loading...</span>}>
                {
                    data.map((singleApp)=> <SingleApp key={singleApp.id} singleApp={singleApp}></SingleApp>)
                }

                </Suspense> */}

                <Suspense fallback={<span>Loading...</span>}>
                     {allApps && allApps.map((app) => (
                        <SingleApp key={app.id} singleApp={app}></SingleApp>
                     ))}
                </Suspense>
            </div>

        
        </div>
    );
};

export default Apps;