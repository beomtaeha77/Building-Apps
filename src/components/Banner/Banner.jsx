import React from 'react';
import heroimg from '../../assets/hero (2).png'

const Banner = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-6xl font-bold pt-20 pb-5 text-[#001931]'>We Build <br />
                    Productive Apps</h1>
                    <p className='pb-10 text-[#627382]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                    <div className='m-5 '>
                        <button className='btn btn-primary m-5'>Google Play</button>
                        <button className='btn btn-primary'>App Store</button>
                    </div>
            </div>
            <div className='mx-auto w-3/5 '>
                <img src={heroimg} alt="" />
            </div>
            <div className='text-center h-14 bg-linear-to-bl from-violet-500 to-fuchsia-500'>
                <div>
                    <h2 className='text-white text-4xl'>Trusted by Millions, Built for You</h2>
                </div>

            </div>
        </div>
    );
};

export default Banner;