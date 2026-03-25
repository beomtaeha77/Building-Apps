
import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/addToDB';
import { Download, Star, MessageSquare } from 'lucide-react';

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';










const AppDetails = () => {
    const { id } = useParams();
    const appId = parseInt(id);
    const data = useLoaderData();
    const [isInstalled, setIsInstalled] = useState(false);

    const singleData = data.find(app => app.id === appId);
    

           const ratingsData = singleData?.ratings ? [...singleData.ratings].reverse() : [];








    const { title, image, companyName, size, downloads, ratingAvg, reviews, description } = singleData || {};

    const handleAppInstalled = () => {
        addToStoredDB(appId);
        setIsInstalled(true);
    };

    
    const formatNum = (num) => {
        if (!num) return "0";
        if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        return num;
    };

    return (
        <div className="max-w-6xl mx-auto my-10 p-10 bg-white border border-gray-100 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row gap-10 items-start">
                
               
                <div className="w-48 h-48 flex md:border-r border-gray-100 pr-10  items-center justify-center">
                    <img src={image} alt={title} className="w-full h-full object-contain" />
                </div>

                
                <div className="">
                   
                    <div className="mb-4">
                        <h4 className="text-4xl font-extrabold text-[#001931]">{title}</h4>
                        <p className="text-sm text-gray-500 mt-1">
                            Developed by <span className="text-purple-600 font-semibold hover:underline cursor-pointer">{companyName || 'productive.io'}</span>
                        </p>
                    </div>

                    <hr className="my-6 border-gray-100" />

                    
                    <div className="flex justify-between max-w-2xl mb-8">
                        
                         <div className="flex flex-col items-start">
                            <Download className="text-emerald-500 mb-2" size={28} strokeWidth={2.5} />
                            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Downloads</p>
                            <p className="text-3xl font-black text-[#001931]">{formatNum(downloads)}</p>
                        </div>

                        
                        <div className="flex flex-col items-start border-x border-gray-100 px-14">
                            <Star className="text-orange-400 mb-2 fill-orange-400" size={28} strokeWidth={2.5} />
                            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Avg Ratings</p>
                            <p className="text-3xl font-black text-[#001931]">{ratingAvg || '4.9'}</p>
                        </div>

                        
                        <div className="flex flex-col items-start">
                            <MessageSquare className="text-indigo-500 mb-2" size={28} strokeWidth={2.5} />
                            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Total Reviews</p>
                            <p className="text-3xl font-black text-[#001931]">{formatNum(reviews)}</p>
                        </div>
                    </div>

                    
                    <button 
                        onClick={handleAppInstalled} 
                        disabled={isInstalled}
                        className={`px-10 py-3 rounded text-white font-bold transition-all ${
                            isInstalled 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-[#00D094] hover:bg-[#00b884] shadow-lg shadow-green-100'
                        }`}
                    >
                        {isInstalled ? "✅ Installed" : `Install Now (${size} MB)`}
                    </button>

                </div>
            </div>



          <div className="mt-12 pt-8 border-t border-gray-100">
    <h3 className="text-xl font-bold text-[#001931] mb-6">Ratings</h3>
    <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                layout="vertical"
                data={ratingsData}
                margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
            >
                <XAxis type="number" hide />
                <YAxis 
                    dataKey="name" 
                    type="category" 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#9ca3af', fontSize: 14 }}
                />
                <Bar 
                    dataKey="count" 
                    fill="#ff8c00" 
                    radius={[0, 4, 4, 0]} 
                    barSize={20}
                >
                    
                    
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    </div>
</div>



              <div>
                    <h4 className='text-2xl font-semibold py-4 text-[#001931]'>Description</h4>
                    <p className='text-gray-500'><small >
                        {description}</small></p>
              </div>


        </div>
    );
};

export default AppDetails;
