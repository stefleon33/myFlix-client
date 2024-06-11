import React from 'react';
import PropTypes from "prop-types";


export const UserInfo = ({ email, name, birthday}) => {
    return (
        <>
            <h4>Your Info</h4>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Birthday: {birthday}</p>
        </>
    )
}

