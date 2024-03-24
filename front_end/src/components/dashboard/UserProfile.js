import React from 'react';
import userData from './data.json';
import './UserProfile.css'; // Ensure this points to the correct path of your CSS file

const UserProfile = () => {
  const user = userData.user;
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      {user.photo && <div className="profile-photo-container"><img src={user.photo} alt={`${user.firstName} ${user.lastName}`} className="profile-photo" /></div>}
      <div className="user-details">
        <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <div className="status-details">
          <p><strong>Immigration Status:</strong> {user.immigrationStatus}</p>
          <p><strong>Accommodation Status:</strong> {user.accommodationStatus}</p>
          <p><strong>Orientation:</strong> {user.orientation}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
