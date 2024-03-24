# Code2Give

## Backend Application

- Need a local mysql connection
- Download MySQL workbench community 
- create a new user 
    * username - Code2Give
    * password - Code2Give
- Create a new server connection on workbench with
    * Connection Name - Code2Give
    * username - Code2Give
    * password - Code2Give


### For Now have created a basic layout for backend to register new resident and updating their profile(CRUD)
#### Internal Endpoints NOT FOR USE
- Register 
http://localhost:5454/api/v1/residents/register
- Get All Residents
http://localhost:5454/api/v1/residents/
- Update 
http://localhost:5454/api/v1/residents/update/{id}
- Get resident by ID
http://localhost:5454/api/v1/residents/id/{residentId}


### Updates in backend
#### Intervention Plan is created for a resident with appropriate fields
#### API ENDPOINTS - USE THESE

- Create New Intervention Plan 
http://localhost:5454/api/v1/interventions/create
- Let List of All Intervention Plans  
http://localhost:5454/api/v1/interventions
- Fetch an intervention plan using intervention ID
http://localhost:5454/api/v1/interventions/id/{interventionID}


## Frontend Application

Need to create a Axios request object with backend endpoints and cors configuration

Here's a demo config file for api config file

```
import axios from "axios";

export const API_BASE_URL="http://localhost:5454/api/v1";

export const api = axios.create({baseURL: API_BASE_URL,
  headers:{
    'Content-Type': 'application/json',
  }
})
```

Demo POST request to create a new intervention plan

Below you have a sample request for **interventionPlanObject** 
```
await axios.post(`${API_BASE_URL}/interventions/create`, interventionPlanObject,{
      headers: {
        "Content-Type": 'application/json',
      }})
```

Demo GET request to get list of all interventions
```
await axios.get(`${API_BASE_URL}/interventions`,{
      headers: {
        "Content-Type": 'application/json',
      }})
```

### Example JSON object for frontend Application - interventionPlanObject

```json

{
    "resident" : {
        "firstName":"John",
        "lastName":"Doe",
        "planStartDate": "2024-03-23",
        "startDateOfStay": "2024-03-25",
        "endDateOfStay": "2021-04-30",
        "placeOfAccommodation": "House 4",
        "firstVisit": true,
        "immigrationStatus": "Immigrant",
        "isNative" : false,
        "veteran": false,
        "withChildren": false,
        "exitOrientation": "",
        "challengesIssues": "Drug Abuse",
        "age": 24,
        "monthlyIncome": 1200,
        "caregivers": "Employee 1",
        "significantPersons" : "GrandMother - 000-000-0000" 
    },

    "treatmentTeam" : [
        {
            "role": "Psychiatrist",
            "name": "Dr. XYZ",
            "address": "Montreal",
            "phone" : "000-000-0000",
            "email": "xyz@gmail.com"
        }
    ],

    "communityServices" : [
        {
            "name": "Spectre de rue",
            "address": "1280 Ontario St E",
            "contact":"000-000-0000",
            "phone":"",
            "mission":"Home / support for substance users"
        }
    ],

    "objectives" : [
        {
            "title": "Improving consumption habits",
            "description": "Maintain a routine of consumption...",
            "term":"Short-term",
            "status":"In progress",
            "means":"Use addiction services and follow established routines (average 4 injections per day)",
            "healthDeterminants":"Physical Health | Mental health"
        }
    ]
}
```
```javascript

const initialFormData = {
  firstName:"",
  lastName:"",
  planStartDate:"",
  startDateOfStay:"",
  endDateOfStay:"",
  placeOfAccommodation:"",
  firstVisit:true,
  immigrationStatus:"",
  isNative:false,
  veteran:false,
  withChildren: false,
  exitOrientation:"",
  challengesIssues:"",
  age: 0,
  monthlyIncome:0,
  caregivers:"",
  significantPersons:""
}

const [formData, updateFormData] = React.useState(initialFormData);

const handleChange = (e) => {
  updateFormData({
    ...formData,

    // Trimming any whitespace
    [e.target.name]: e.target.value.trim()
  });
};

const handleSubmit = async (e) => {
  e.preventDefault()
  console.log(formData);
  
  // Create the request object here
  const data = {
      resident: formData,
    treatmentTeam:[
      {
        "role": "Psychiatrist",
        "name": "Dr. XYZ",
        "address": "Montreal",
        "phone" : "000-000-0000",
        "email": "xyz@gmail.com"
      }
    ],
    communityServices : [
      {
        "name": "Spectre de rue",
        "address": "1280 Ontario St E",
        "contact":"000-000-0000",
        "phone":"",
        "mission":"Home / support for substance users"
      }
    ],

    objectives : [
      {
        "title": "Improving consumption habits",
        "description": "Maintain a routine of consumption...",
        "term":"Short-term",
        "status":"In progress",
        "means":"Use addiction services and follow established routines (average 4 injections per day)",
        "healthDeterminants":"Physical Health | Mental health"
      }
    ]
  }
  // ... submit to API 

  const response = await axios.post(`${API_BASE_URL}/interventions/create`, data,{
    headers: {
      "Content-Type": 'application/json',
    }})
    
  console.log(respinse);  
  
}

```

```javascript
  // same form for react
    // use this for reference - make sure your input fileds have prop "name" same as the the fileds in the initialFormData object
    // so that the handleChangeFunction works 

return (
        <>
          <label>
            First Name
            <input name="firstName" onChange={handleChange} />
          </label>
          <br />
          <label>
            Last Name
            <input name="lastName" onChange={handleChange} />
          </label>
          <br />
          <button onClick={handleSubmit}>Register Resident</button>
        </>
);
```

## You can use the following code for sending requested to backend and receiving data in response too!!

### function to create resident 
The below code uses static request object but the code is fully functional.

```javascript
import React, { useState } from 'react';
import { API_BASE_URL } from './Config';
import axios from 'axios';

const initialFormData = {
    firstName:"John",
    lastName:"Doe",
    planStartDate:"2024-03-24",
    startDateOfStay:"2024-03-28",
    endDateOfStay:"2024-05-24",
    placeOfAccommodation:"House 4",
    firstVisit:true,
    immigrationStatus:"Immigrant",
    isNative:false,
    veteran:false,
    withChildren: true,
    exitOrientation:"",
    challengesIssues:"",
    age: 25,
    monthlyIncome:1200,
    caregivers:"Employee 1",
    significantPersons:"GrandMother - 000-000-0000"
  }


const Function = () => {

    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
      updateFormData({
        ...formData,
    
        // Trimming any whitespace
        [e.target.name]: e.target.value.trim()
      });
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault()
      console.log(formData);
      
      // Create the request object here
      const data = {
        resident: formData,
        treatmentTeam:[
          {
            "role": "Psychiatrist",
            "name": "Dr. XYZ",
            "address": "Montreal",
            "phone" : "000-000-0000",
            "email": "xyz@gmail.com"
          }
        ],
        communityServices : [
          {
            "name": "Spectre de rue",
            "address": "1280 Ontario St E",
            "contact":"000-000-0000",
            "phone":"",
            "mission":"Home / support for substance users"
          }
        ],
    
        objectives : [
          {
            "title": "Improving consumption habits",
            "description": "Maintain a routine of consumption...",
            "term":"Short-term",
            "status":"In progress",
            "means":"Use addiction services and follow established routines (average 4 injections per day)",
            "healthDeterminants":"Physical Health | Mental health"
          }
        ]
      }

      console.log(data)
      // ... submit to API 
    
      const response = await axios.post(`http://localhost:5454/api/v1/interventions/create`, data,{
        headers: {
          "Content-Type": 'application/json'
        }})
        
      console.log(response);  
      
    }

    return (
        <div>
          <button onClick={handleSubmit}>Register Resident</button>
        </div>
    );
}

export default Function;
```

### function to get list of all residents

```javascript
import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from './Config';
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
        {data ? (
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        <p>Object Name: {item.resident.firstName}</p>
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
```