import React, { Suspense, useState} from 'react';
import SingleApp from '../SingleApp/SingleApp';
import { useLoaderData } from 'react-router';
import ErrorApp from '../ErrorApp/ErrorApp';


const Apps = () => {
   

 const allApps = useLoaderData();

const [searchApp, setSearchApp] = useState('');

 const filteredApps = allApps.filter(app =>
        app.title.toLowerCase().includes(searchApp.toLowerCase())
    );

    return (
        <div>
            <div className='text-center'>
                <h2 className='text-3xl font-bold pt-20 pb-6'>Our All Applications</h2>
                <p className='pb-5'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div>
                
                     
                                       <div className='flex justify-between items-center'>
                                                     <div>
                                                           <h4 className='font-semibold'>Apps found: {filteredApps.length}</h4>
                                                     </div>
                                                     <div>
                                                              <input 
                                                                      type="search" 
                                                                       placeholder='Search by title...' 
                                                                       className='border p-2 rounded'
                                                                       value={searchApp}
                                                                          onChange={(e) => setSearchApp(e.target.value)}
                                                                  />
                                                         </div>
                                              </div>
                
                
            </div>

            <div className='grid lg:grid-cols-4 gap-5'>
               

                {/* <Suspense fallback={<span>Loading...</span>}>
                     {allApps && allApps.map((app) => (
                        <SingleApp key={app.id} singleApp={app}></SingleApp>
                     ))}
                </Suspense> */}

                <Suspense fallback={<span>Loading...</span>}>
                    {filteredApps.length > 0 ? (
                        filteredApps.map((app) => (
                            <SingleApp key={app.id} singleApp={app}></SingleApp>
                        ))
                    ) : (
                        <div className="col-span-4 text-center py-10">
                            {/* <h3 className="text-xl text-gray-500">No App Found</h3> */}
                            <ErrorApp></ErrorApp>
                        </div>
                    )}
                </Suspense>
                
            </div>

           

            

        
        </div>
    );
};

export default Apps;