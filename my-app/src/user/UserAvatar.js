import React from 'react';
import UserContext from './UserContext';
import withUser from './withUser';

function UserAvatar({user}) {
    return (
       
        <div className= "UserAvatar" >
            Hello, { user.firstName } { user.lastName }
        </div>
        
    )
}
export default withUser(UserAvatar);