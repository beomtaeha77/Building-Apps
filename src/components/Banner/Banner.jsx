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
                        <button className='btn m-5'><a href="https://play.google.com/store/games?hl=en">Google Play</a></button>
                        <button className='btn '><a href="https://play.google.com/store/apps/developer?id=App+Store.&hl=en">App Store</a></button>
                    </div>
            </div>
            <div className='mx-auto w-3/5 '>
                <img src={heroimg} alt="" />
            </div>
            <div className='text-center bg-linear-to-bl from-violet-500 to-fuchsia-500'>
                <div>
                    <h2 className='text-white text-4xl pt-10 pb-10'>Trusted by Millions, Built for You</h2>
                </div>

                <div className='grid lg:grid-cols-3'>
                    <div className='p-10'>
                        <p className='text-white'><small>Total Downloads</small></p>
                        <h1 className='text-white text-6xl'>29.6M</h1>
                        <p className='text-white'><small>21% more than last month</small></p>
                    </div>
                    <div className='p-10'>
                        <p className='text-white'><small>Total Reviews</small></p>
                        <h1 className='text-white text-6xl'>906K</h1>
                        <p className='text-white'><small>46% more than last month</small></p>
                    </div>
                    <div className='p-10'>
                        <p className='text-white'><small>Active Apps</small></p>
                        <h1 className='text-white text-6xl'>132+</h1>
                        <p className='text-white'><small>31 more will Launch</small></p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Banner;