import React from 'react';

function UserProfile(props) {
  const params = props.match.params;
  return (
    <div>
      <h2>User Profile</h2>
      <ul>
        <li>
          <b>Username:</b> <em>{params.githubLogin}</em>
        </li>
      </ul>
    </div>
  );
}
export default UserProfile;
