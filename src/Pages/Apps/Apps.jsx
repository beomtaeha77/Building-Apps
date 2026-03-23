import React, { useEffect, useState } from 'react';

const Apps = () => {
    const [allApps, setAllApps] = useState([]);

    useEffect(() => {
        fetch("AppsData.json")
        .then(res=>res.json())
        .then(data =>{
            setAllApps(data);
        })
    })
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-3xl font-bold pt-20 pb-6'>Our All Applications</h2>
                <p className='pb-5'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
        </div>
    );
};

export default Apps;