import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ShowData = () => {

    const [data, setData] = useState(null); // Initialize state to hold data


    useEffect(() => {

        const fetchData = async() => {
            try{
                const response = await axios.get('http://localhost:5454/api/v1/interventions',{
                    headers: {
                      "Content-Type": 'application/json'
                }})
                
                console.log(response.data)
                setData(response.data); // Set the fetched data to state
            }catch(error){
                console.log(error)
            }
        }

        fetchData();
    },[])

    return (
        <div>
        <h2>Resident Information</h2>


        {data ? (
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        <p>Resident Name: {item.resident.firstName} {item.resident.lastName}</p>
                        <p>Intervention Plan: {item.resident.i}</p>
                        {/* Render other properties of the object as needed */}
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