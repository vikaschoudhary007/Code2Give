import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import UserProfile from '../dashboard/UserProfile';
import InterventionDetails from '../dashboard/InterventionDetails';
import Goals from '../dashboard/Goals';
import ShowData from '../ShowData';
import './DashboardPage.css'; // Adjust the path if your CSS file is located elsewhere


const DashboardPage = () => {
  
  // Example user data
  const [userData, setUserData] = useState({}); 

  // Example plan data
  const [userPlan, setUserPlan] = useState({
    startDate: "January 1, 2024",
    endDate: "December 31, 2024",
    monthlyIncome: "1200",
    caregivers: [
      { name: "Jane Doe", role: "Social Worker" },
      { name: "John Smith", role: "Psychologist" },
      { name: "Alice Johnson", role: "Financial Advisor" },
    ],
  });

  // Example goals remain the same as previously defined
  const [userGoals, setUserGoals] = useState([
    {
      title: "Empowerment Workshops",
      description: "Launch a series of workshops to enhance self-esteem and empower women to achieve their full potential.",
      term: "Q3 2024",
      status: "Planning"
    },
    {
      title: "Housing Solutions",
      description: "Expand our housing program to support an additional 50 women and children in need by the end of 2024.",
      term: "Year-end 2024",
      status: "In Progress"
    },
    // More goals can be added here as needed
  ]);

  // Example useEffect to simulate data fetching
  useEffect(() => {
    // Simulate a data fetch with a timeout
    // Here you could replace with actual fetch calls to a backend
    const timer = setTimeout(() => {
      // Example of dynamically setting data (even though it's static in this example)
      setUserData({
        ...userData,
        // Add or modify user data fields here if needed
      });
      setUserPlan({
        ...userPlan,
        // Add or modify plan details here if needed
      });
      setUserGoals(userGoals);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
     <ShowData data={userData} />
      <InterventionDetails plan={userPlan} />
      <Goals goals={userGoals} />
      
      <Link to="/residentForm" className="form-button">Add/Create User</Link>

    </div>
  );
};

export default DashboardPage;
