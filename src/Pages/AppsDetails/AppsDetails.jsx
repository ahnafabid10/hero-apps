import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppsDetails = () => {
    const { id } = useParams();
    const appsId = parseInt(id);
    const appsData = useLoaderData();
    const singleApps = appsData.find(apps => apps.id === appsId)
    console.log(appsData)
    console.log(id, appsId)

    return (
        <div>
            <div>
                <img src={singleApps.image} alt="" />
                <h1>{singleApps.title}</h1>
            </div>
            
        </div>
    );
};

export default AppsDetails;