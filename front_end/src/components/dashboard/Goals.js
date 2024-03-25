import React from 'react';
import "./Goals.css";

const Goals = ({ goals }) => {
  return (
    <div className="goals-dashboard">
      <h2>Goals Dashboard</h2>
      {goals.map((goal, index) => (
        <div key={index} className="goal">
          <h3>{goal.title}</h3>
          <p>{goal.description}</p>
          <p>Term: {goal.term}</p>
          <p>Status: {goal.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Goals;
