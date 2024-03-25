import React, { useState } from 'react';
import "./ResidentForm.css"
import axios from "axios";
export const API_BASE_URL="http://localhost:5454/api/v1";



const ResidentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    planStartDate: '',
    startDateOfStay: '',
    endDateOfStay: '',
    placeOfAccommodation: '',
    firstVisit: false,
    immigrationStatus: '',
    isNative: false,
    veteran: false,
    withChildren: false,
    exitOrientation: '',
    challengesIssues: '',
    age: '',
    borough: '',
    monthlyIncome: '',
    caregivers: '',
    significantPersons: '',
  });

  const immigrationOptions = ["Citizen", "Permanent Resident", "Temporary Resident", "Visa Holder", "Asylum Seeker (Received)", "Asylum Seeker (In-Process)", "No Status"];


  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    console.log("Form submission attempted"); // Check if this logs

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

  const response = await axios.post(`${API_BASE_URL}/interventions/create`, data,{
    headers: {
      "Content-Type": 'application/json',
    }
  });
    
  console.log(response);  
  };


  return (
    <div className="form-container">

      <h2 className="form-title">Add/Create New User</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Start of Intervention:</label>
          <input
            type="date"
            name="planStartDate"
            value={formData.planStartDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Start Date:</label>
          <input
            type="date"
            name="startDateOfStay"
            value={formData.startDateOfStay}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>End Date:</label>
          <input
            type="date"
            name="endDateOfStay"
            value={formData.endDateOfStay}
            onChange={handleChange}
          />
          <div>
            <label>Place of Accommodation:</label>
            <input
              type="text" 
              name="placeOfAccommodation"
              value={formData.placeOfAccommodation}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label>First Visit:</label>
          <input
            type="checkbox"
            name="firstVisit"
            checked={formData.firstVisit}
            onChange={handleChange}
          />
        </div>
          <div>
            <label>Immigration Status:</label>
            {immigrationOptions.map((status) => (
              <div key ={status}>
                <input
                  type="radio"
                  name="immigrationStatus"
                  value = {status}
                  checked={formData.immigrationStatus === status}
                  onChange={handleChange}
            />
              {status}
            </div>
          ))}
        </div>
        <div>
        <label>Native: </label>
          <input
            type="checkbox"
            name="isNative"
            checked={formData.isNative}
            onChange={handleChange}
          />
        </div>
        <div>
        <label>Veteran</label>
          <input
            type="checkbox"
            name="veteran"
            checked={formData.veteran}
            onChange={handleChange}
          />
        </div>
        <div>
        <label>Children: </label>
          <input
            type="checkbox"
            name="withChildren"
            checked={formData.withChildren}
            onChange={handleChange}
          />
        </div>
        <div>
        <label>Orientation: </label>
          <input
            type="checkbox"
            name="exitOrientation"
            checked={formData.exitOrientation}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="otherChallenges">Challenges/Issues:</label>
          <textarea
            id="otherChallenges"
            name="otherChallenges"
            value={formData.otherChallenges}
            onChange={handleChange}
            placeholder="Please specify a ny challenges."
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number" 
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="0" 
          />
        </div>

        <div>
          <label>Borough:</label>
          <input
            type="text" 
            name="borough"
            value={formData.borough}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Monthly Income:</label>
          <input
            type="number" 
            name="monthlyIncome"
            value={formData.monthlyIncome}
            onChange={handleChange}
            min="0" 
          />
        </div>
        <div>
          <label>Caregivers:</label>
          <input
            type="text" 
            name="caregivers"
            value={formData.caregivers}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Significant Persons:</label>
          <input
            type="text" 
            name="significantPersons"
            value={formData.significantPersons}
            onChange={handleChange}
          />
        </div>
        

        
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ResidentForm;
