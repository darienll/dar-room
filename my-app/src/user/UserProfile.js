import React from 'react';
import UserContext from './UserContext';
import withUser from './withUser';

function UserProfile({user}) {
    return (
        
        <ul>
            <li>First name: { user.firstName }</li>
            <li>Last name: { user.lastName }</li>
        </ul>
       
    )
}
export default withUser(UserProfile);