import React, { useState} from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/addToDB';

const AppDetails = () => {

    const {id} = useParams();
    // console.log(id);

    const appId = parseInt(id);

    const data = useLoaderData();

    const [isInstalled, setIsInstalled] = useState(false);

    // console.log(data)

    const singleData = data.find(app=>app.id===appId);
    

    const {title, image, companyName, size}= singleData || {};


    const handleAppInstalled = id => {

        addToStoredDB(appId);
        setIsInstalled(true);

    }



    return (
        <div >
            <div className='flex p-15'>
                <img src={image} alt="" />
                    <div className='ml-5'>
                             <h4 className='text-4xl font-semibold'>{title}</h4>
                              <p className='text-[#627382] mt-2'><small>Developed by: {companyName}</small></p>
                                                 <div className='btn btn-primary mt-30'>
                                                       <button onClick={()=>handleAppInstalled(id)} className={`m-6 ${isInstalled ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isInstalled}> {isInstalled ? "✅ Installed" : `Install Now (${size})`}</button>
                                                 </div>
                      </div>
                     
            </div>
        </div>
    );
};

export default AppDetails;