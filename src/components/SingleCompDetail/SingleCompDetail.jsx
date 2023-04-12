import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const SingleCompDetail = () => {

    const [detaile,setDetaile]=useState({})
//console.log(detaile);
const details =useLoaderData()
    // console.log(details)
const params = useParams();
//console.log(params);

    useEffect(()=>{
        if(detaile){
const find =detaile.find(job=>job.id == params.id);
setDetaile(find)
        }
        
     },[])
    return (
        <div>
            <h1>description:{params.title}</h1>
        </div>
    );
};

export default SingleCompDetail;