import React, { useState } from 'react';
import './ResidentForm.css'; // Ensure you have this CSS file in the same directory

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

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // For development purposes
    // Actual submission logic goes here
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="resident-form">
        <h2>Add/Create New User</h2>

        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        {/* Repeat structured divs for other input fields */}
        <div className="form-group">
          <label htmlFor="planStartDate">Plan Start Date:</label>
          <input
            type="date"
            name="planStartDate"
            id="planStartDate"
            value={formData.planStartDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group checkbox-group">
          <label htmlFor="firstVisit">First Visit:</label>
          <input
            type="checkbox"
            name="firstVisit"
            id="firstVisit"
            checked={formData.firstVisit}
            onChange={handleChange}
          />
        </div>
        {/* Add additional structured divs for all attributes */}
        <div className="form-group">
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ResidentForm;
