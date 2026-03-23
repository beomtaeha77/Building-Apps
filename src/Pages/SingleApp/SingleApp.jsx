// import React, { use } from 'react';
// import { useLoaderData } from 'react-router';

const SingleApp = ({singleApp}) => {
    // const data = use(appPromise);

    const { title, image, downloads, ratings } = singleApp;

    //  console.log(singleApp)
    
    return (
        <div>
            <div>
                <img className='' src={image} alt="" />
            </div>
            <div><h4>{title}</h4>
                </div>
                <div className='justify-between'>
                    <p>{downloads.count}</p>
                    <p>{ratings.name}</p>
                </div>
        </div>
    );
};

export default SingleApp;