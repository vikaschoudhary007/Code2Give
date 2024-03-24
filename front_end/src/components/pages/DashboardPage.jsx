import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import UserProfile from '../dashboard/UserProfile';
import InterventionDetails from '../dashboard/InterventionDetails';
import Goals from '../dashboard/Goals';

const DashboardPage = () => {
  const [userData, setUserData] = useState({}); // Placeholder for actual user data fetching logic
  const [userPlan, setUserPlan] = useState({}); // Placeholder for actual plan data fetching logic
  const [userGoals, setUserGoals] = useState([]); // Placeholder for actual goals data fetching logic

  // Example useEffect to fetch data on component mount
  useEffect(() => {
    // Fetch and set user data, plan, and goals
  }, []);

  return (
    <div>
      <UserProfile user={userData} />
      <InterventionDetails plan={userPlan} />
      <Goals goals={userGoals} />
      <Link to="/residentForm" className="form">Add/Create User</Link>
    </div>
  );
};

export default DashboardPage;
