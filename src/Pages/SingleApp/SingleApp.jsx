import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';

// import { useNavigate } from "react-router";


 import { useNavigate } from "react-router";
import { removeFromLocalStorage } from '../../Utility/addToDB';

const SingleApp = ({ singleApp, isList = false, onUninstall  }) => {
    const { id, title, companyName, image, downloads, ratingAvg, reviews, size } = singleApp;
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/appdetails/${id}`);
    };

    

     const handleUninstall = (e) => {
         toast.success('🦄 Uninstalled Successfully!', {
                       position: "top-center",
                     autoClose: 5000,
                       hideProgressBar: false,
                    closeOnClick: false,
                       pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                          theme: "light",
                        // transition: Bounce,
                          });
        e.stopPropagation(); 
        removeFromLocalStorage(id);
       
        const savedApps = JSON.parse(localStorage.getItem('installed-apps')) || [];
        const updatedApps = savedApps.filter(appId => appId !== id);
        localStorage.setItem('installed-apps', JSON.stringify(updatedApps));

        
        if (onUninstall) {
            onUninstall(id);
        }
     };

    

    
    const containerClasses = isList 
        ? "flex items-center justify-between bg-white p-4 hover:bg-gray-50 cursor-pointer" 
        : "bg-white p-2 m-2 shadow-2xl rounded-md cursor-pointer";

    return (
        <div onClick={handleCardClick} className={containerClasses}>
            <div className={`flex ${isList ? 'items-center gap-6' : 'flex-col'}`}>
                
                <div className={isList ? "w-20 h-20 flex" : "px-10"}>
                    <img className="w-full h-full object-contain" src={image} alt={title} />
                </div>

                <div className={isList ? "" : "px-10"}>
                    <h4 className="font-bold text-[#001931]">{title}</h4>
                    <div className="flex gap-4 text-sm text-gray-500 mt-1">
                       
                    </div>
                </div>
            </div>


            <ToastContainer 
                     position="top-center"
                      autoClose={5000}
                      hideProgressBar={false}
                         newestOnTop={false}
                          closeOnClick={false}
                         rtl={false}
                       pauseOnFocusLoss
                        draggable
                        pauseOnHover
                       theme="light"
                    //    transition={Bounce}
                       />

            
            {isList && (
                
                <button onClick={handleUninstall} className="bg-[#00D094] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#00b884] transition-colors">
                    Uninstall
                </button>
                 
            )}
        </div>
    );
};

export default SingleApp;






