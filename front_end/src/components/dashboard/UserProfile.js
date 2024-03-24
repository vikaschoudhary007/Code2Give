import React from 'react';
import userData from './data.json'

const UserProfile = () => {
  const user = userData.user;
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      {user.photo && <img src={user.photo} alt={`${user.firstName} ${user.lastName}`} />}
      <p>Name: {user.firstName} {user.lastName}</p>
      <p>Age: {user.age}</p>
      <div>
        <p>Immigration Status: {user.immigrationStatus}</p>
        <p>Accommodation Status: {user.accommodationStatus}</p>
        <p>Orientation: {user.orientation}</p>
      </div>
    </div>
  );
};

export default UserProfile;
