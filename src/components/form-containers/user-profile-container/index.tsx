import React from 'react';
import UserProfileForm from '../../forms/user-profile';
import UserCredentialsForm from '../../forms/user-credentials';

function user_profile() {
    const onSubmitParentHandler = function () {
        console.log("On submit container parent handler fired");
    }
    return <div>
        <p>
            <UserProfileForm eventHandlers={{ onSubmit: onSubmitParentHandler }} />
        </p>
        <p>
            <UserCredentialsForm eventHandlers={{ onSubmit: onSubmitParentHandler }} />
        </p>
    </div>
}

export default user_profile;