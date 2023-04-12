import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const SingleCompDetail = () => {
     const {comDetails}= useParams();
    console.log(comDetails);
    return (
        <div>
            <h1>job details</h1>
            {/* <h2>Job Description:{detail.title}</h2> */}
        </div>
    );
};

export default SingleCompDetail;