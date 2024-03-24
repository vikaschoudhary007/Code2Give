import React, { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>

      <h2>Add/Create New User</h2>

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
            name="startDateofStay"
            value={formData.startDateOfStay}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>End Date:</label>
          <input
            type="date"
            name="endDateofStay"
            value={formData.endDateOfStay}
            onChange={handleChange}
          />
          <div>
            <label>Place of Accommodation:</label>
            <input
              type="text" 
              name="placeOfAccomodation"
              value={formData.placeOfAccommodation}
              onChange={handleChange}
              min="0" 
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
            name="withChildren"
            checked={formData.withChildren}
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
            name="age"
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
