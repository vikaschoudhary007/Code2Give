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
- Register 
http://localhost:5454/api/v1/residents/register
- Get All Residents
http://localhost:5454/api/v1/residents/
- Update 
http://localhost:5454/api/v1/residents/update/{id}
- Get resident by ID
http://localhost:5454/api/v1/residents/id/{residentId}
