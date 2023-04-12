import React from 'react';
import { MapPinIcon,CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


const CompDetails = ({companyDetail}) => {

    const {id,img,title,workType,workType1,location,salary}=companyDetail;

    return (
        <div className='gap-6 mb-8 bg-slate-50 m-30 lg:p-20 '>
            <div className=''>
            <img className='mb-6' src={img} alt="" />
            <h3 className='mb-6 text-2xl font-semibold'>{title}</h3>
         
            <div className='flex gap-4 mb-6'>
                <p className='p-2 bg-gray-200'>{workType}</p>
                <p className='p-2 border bg-gray-200'>{workType1}</p>
            </div>
            
            <div className='flex gap-5 mb-6'><p className='flex'><MapPinIcon className="h-6 w-6 text-blue-500" />{location}</p>
            <p className='flex'><CurrencyDollarIcon className="h-6 w-6 text-blue-500" />Salary:{salary}</p></div>
            
            <Link to={`/detail/${id}`}><button className='btn rounded-full bg-blue-300 p-3'>View Details</button></Link>
            </div>
            
        </div>
    );
};

export default CompDetails;