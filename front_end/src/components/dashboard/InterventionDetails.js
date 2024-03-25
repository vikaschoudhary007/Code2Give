import React from 'react';
import "./InterventionDetails.css";
const InterventionDetails = ({ plan }) => {
  return (
    <div className="intervention-details">
      <h2>Intervention Plan for LeChainon</h2>
      <p>Plan Duration: {plan.startDate} to {plan.endDate}</p>
      <p>Monthly Support: ${plan.monthlyIncome}</p>
      <h3>Support Team</h3>
      <ul>
        {plan.caregivers.map((caregiver, index) => (
          <li key={index}>{caregiver.name} - {caregiver.role}</li>
        ))}
      </ul>
    </div>
  );
};

export default InterventionDetails;
