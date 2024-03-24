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

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would handle form submission, such as sending the data to a server
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
        {/* Repeat for other fields, adjusting the type attribute as needed (e.g., date, checkbox) */}
        <div>
          <label>Plan Start Date:</label>
          <input
            type="date"
            name="planStartDate"
            value={formData.planStartDate}
            onChange={handleChange}
          />
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
        {/* Add additional fields for all attributes */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

    </div>
  );
};

export default ResidentForm;
