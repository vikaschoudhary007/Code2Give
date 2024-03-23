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
```
await axios.post(`${API_BASE_URL}/interventions/create`, interventionPlanObject,{
      headers: {
        "Content-Type": 'application/json',
      }
```

Demo GET request to get list of all interventions
```
await axios.get(`${API_BASE_URL}/interventions`,{
      headers: {
        "Content-Type": 'application/json',
      }
```


