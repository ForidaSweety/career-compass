import React from 'react';
 import banner from '/src/assets/banner.png'


const Home = () => {
    return (
       <div>
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
       
       </div>
    );
};

export default Home;