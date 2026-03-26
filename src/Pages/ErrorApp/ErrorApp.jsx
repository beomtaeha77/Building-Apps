import React from 'react';
import errorAppImg from '../../../public/assets/App-Error.png'
const ErrorApp = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            
            <div>
                 <img className='mx-auto mt-20 mb-10' src={errorAppImg} alt="" />
            </div>

            <div>
                <h1  className='text-4xl font-semibold pb-4 text-center'>OPPS!! APP NOT FOUND</h1>
                <p className='text-[#627382] text-center'>The App you are requesting is not found on our system.  please try another apps</p>
            </div>
            <div className='text-center mt-3'>
                    <button className='btn btn-primary mb-5'><a href="/">Go Back!</a></button>
                </div>
        </div>
    );
};

export default ErrorApp;