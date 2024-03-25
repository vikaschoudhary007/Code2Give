import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./ShowData.css"; // Ensure this CSS file is updated with the new styles

const ShowData = () => {

    const [data, setData] = useState(null);

    useEffect(() => {

        const fetchData = async() => {
            try{
                const response = await axios.get('http://localhost:5454/api/v1/interventions', {
                    headers: {
                      "Content-Type": 'application/json'
                    }
                });
                
                console.log(response.data);
                setData(response.data); // Set the fetched data to state
            }catch(error){
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='ShowData'>
            <h2 className="showdata-title">Users</h2>

            {data ? (
                <ul>
                    {data.map((item, index) => (
                        <li key={index} className="user-item">
                            <div className="user-content">
                                <p>Resident Name: {item.resident.firstName} {item.resident.lastName}</p>
                                <p>Intervention Plan: {item.resident.interventionPlan}</p>
                                {/* Render other properties of the object as needed */}
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default ShowData;
