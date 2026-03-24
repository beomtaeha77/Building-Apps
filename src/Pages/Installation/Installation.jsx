import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp } from '../../Utility/addToDB';
import SingleApp from '../SingleApp/SingleApp';


const Installation = () => {
    const [installedAppsList, setInstalledAppsList] = useState([]);


    const [sort, setSort] = useState(";")
    const data = useLoaderData();

    useEffect(() => {
        const storedAppData = getStoredApp();
        const convertedStoredApps = storedAppData.map(id => parseInt(id));
        
        
        const installedApps = data.filter(app => convertedStoredApps.includes(app.id));
        setInstalledAppsList(installedApps);
    }, [data]);



    const handleSort =(type) => {
        setSort(type)
        if(type === "rating"){
            const sortedByRating = [...installedAppsList].sort((a,b)=>a.ratingAvg-b.ratingAvg)
            setInstalledAppsList(sortedByRating)
        }
        if(type === "size"){
            const sortedBySize= [...installedAppsList].sort((a,b)=>a.size-b.size)
            setInstalledAppsList(sortedBySize)
        }
    }

    return (
      

 <div>
    <div className='flex justify-between items-center bg-[#f8f9fa] border border-[#e2e8f0] p-4 rounded-t-lg'>
        <h4 className="text-xl font-bold text-[#001931]">
            {installedAppsList.length} Apps Found
        </h4>
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost border-[#cbd5e1] flex items-center gap-2">
                Sort By :{sort?sort:""} <i className="fa-solid fa-chevron-down text-xs"></i>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg">
                <li><a onClick={() =>handleSort("rating")}>Rating</a></li>
                <li><a onClick={() =>handleSort("size")}>Size</a></li>
            </ul>
        </div>
    </div>

    
    <div className="flex flex-col border-x border-b border-[#e2e8f0] rounded-b-lg overflow-hidden bg-white">
        {
            installedAppsList.map((a, index) => (
                <div 
                    key={a.id} 
                    className={`p-6 ${index !== installedAppsList.length - 1 ? 'border-b border-[#e2e8f0]' : ''}`}
                >
                    <SingleApp singleApp={a} isList={true}></SingleApp>
                </div>
            ))
        }
    </div>
</div>

    );
};

export default Installation;

                



       

           











