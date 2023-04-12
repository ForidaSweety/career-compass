import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='m-60'>
            <h1 className='text-7xl text-center justify-center font-bold'>404</h1>
            <h1 className='text-4xl text-center justify-center '> Page Not Found</h1>

            <div className=' text-center justify-center mt-5'>
                <Link to={'/'}><button className='bg-violet-400 p-3 rounded-xl'>Back Home</button></Link>

            </div>
        </div>
    );
};

export default NotFound;