import React from 'react';
import './Goals.css'; 

const Goals = ({ goals }) => {
  return (
    <div className="goals-dashboard">
      <h2 className="dashboard-title">Goals Dashboard</h2>
      <div className="goals-container">
        {goals.map((goal, index) => (
          <div key={index} className="goal-card">
            <h3 className="goal-title">{goal.title}</h3>
            <p className="goal-description">{goal.description}</p>
            <p className="goal-term">Term: {goal.term}</p>
            <p className="goal-status">Status: {goal.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals;
