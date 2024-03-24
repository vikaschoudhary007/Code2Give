import React from 'react';

const InterventionDetails = ({ plan }) => {
  return (
    <h2>Intervention Plan and Stay Details</h2>
    // <div className="intervention-details">
    //   <h2>Intervention Plan and Stay Details</h2>
    //   <p>Plan Duration: {plan.startDate} to {plan.endDate}</p>
    //   <p>Monthly Income: ${plan.monthlyIncome}</p>
    //   <h3>Assigned Caregivers</h3>
    //   <ul>
    //     {plan.caregivers.map((caregiver, index) => (
    //       <li key={index}>{caregiver.name} - {caregiver.role}</li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default InterventionDetails;
