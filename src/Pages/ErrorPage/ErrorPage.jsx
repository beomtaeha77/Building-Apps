import React from 'react';
import error404 from '../../../public/assets/error-404.png'
import Navbar from '../../components/Header/Navbar';

const ErrorPage = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
            <img className='mx-auto mt-20 mb-10' src={error404} alt="" />
            <div>
                <h3 className='text-4xl text-center pb-5'>Oops, page not found!</h3>
                <p className='text-center pb-4 text-[#627382]'>The page you are looking for is not available.</p>
                <div className='text-center'>
                    <button className='btn btn-primary'><a href="/">Go Back!</a></button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;