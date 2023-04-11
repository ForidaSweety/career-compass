import React, { useEffect, useState } from 'react';
import banner from '/src/assets/banner.png'
import { useLoaderData } from 'react-router-dom';
import CompDetails from '../../CompDetails/CompDetails';


const Home = () => {

    const companyDetail = useLoaderData();
    // console.log(companyDetail);

    return (
        <div>
            {/* banner section */}
            <section className=' mx-20 my-20 flex flex-col items-center justify-between lg:flex-row mb-10 bg-violet-50 rounded-xl p-20'>

                {/* Text Content */}
                <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
                    <div className='max-w-xl ml-5 mb-6 lg:mt-8'>
                        <h2 className='max-w-lg mb-6 font-sans font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                            <span className='text-5xl'>Best Option</span> <br /> <span className='text-3xl'>To Choose</span>
                            <br /><span className='inline-block text-purple-400 text-5xl'>Your Career </span>
                        </h2>
                        <p className='text-base text-gray-700 md:text-lg'>
                            Keep moving forward, opening new doors, and doing new things, because we're curious and curiosity keeps leading us down new paths.
                        </p>
                    </div>
                    <div className='flex flex-col items-center ml-5 md:flex-row'>
                        <button className='btn bg-purple-700 rounded-md text-white p-4 mr-3'>Let's Started</button>
                    </div>
                </div>
                <div className='relative lg:w-1/2 mb-10'>
                    <div className='w-full lg:w-4/5 lg:ml-auto h-70 mr-10  sm:h-86'>
                        <img src={banner} alt="" />
                    </div>
                </div>

            </section>
            {/* section-2 */}
            <section className='mt-20'>
                <div className='flex flex-col items-center justify-center lg:flex-row'>
                    <div className='sm:inline-flex flex-col items-center justify-center mb-8'>
                        <h2 className='mb-6 font-bold text-4xl'>Job Category</h2>
                        <p>Select from the sections below to learn more about the different job categories and specializations available </p>
                    </div>
                </div>

                <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-5 justify-items-center mb-8 p-10'>
                    <div className='card bg-slate-100 p-8 rounded-xl'>
                        <img src="/src/assets/accounts 1.png" alt="" />
                        <h3>Account & Finance</h3>
                        <p><small>300 Jobs Available</small> </p>
                    </div>
                    <div className='card bg-slate-100 p-8 rounded-xl'>
                        <img src="/src/assets/business 1.png" alt="" />
                        <h3>Creative Design</h3>
                        <p><small>100+ Jobs Available </small> </p>
                    </div>
                    <div className='card bg-slate-100 p-8 rounded-xl'>
                        <img src="/src/assets/social-media 1.png" alt="" />
                        <h3>Marketing & Sales</h3>
                        <p><small> 150 Jobs Available</small> </p>
                    </div>
                    <div className='card bg-slate-100 p-8 rounded-xl'>
                        <img src="/src/assets/chip 1.png" alt="" />
                        <h3> Engineering Job </h3>
                        <p><small>224 Jobs Available</small> </p>
                    </div>
                </div>
            </section>
            {/* section-3 */}
            <section className='flex flex-col items-center justify-center mb-7'>
                <div className='sm:inline-flex flex-col items-center justify-center mb-8'>
                    <h2 className='mb-6 font-bold text-4xl'>Job Details</h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future </p>
                </div>
            </section>
            {/* dynamic card section */}
            <section>

                <div className='grid lg:grid-cols-2 lg:mx-40 my-10 sm:grid-cols-1 gap-8 '>
                    {
                        companyDetail.map(companyDetail => <CompDetails
                            key={companyDetail.id}
                            companyDetail={companyDetail}  
                        ></CompDetails>)
                    }
                </div>
            </section>
           <div className='flex flex-col items-center justify-center mb-7'>
           <button className='text-xl bg-violet-500 p-3 rounded text-white'>See All Jobs</button>
           </div>
        </div>
    );
};

export default Home;