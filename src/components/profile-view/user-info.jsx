import React from 'react';
import PropTypes from "prop-types";


export const UserInfo = ({ email, name, birthday}) => {
    return (
        <>
            <h4>My Profile</h4>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Birthday: {birthday}</p>
        </>
    )
}

UserInfo.propTypes = {
    email: PropTypes.string,
    name: PropTypes.string,
    birthday: PropTypes.date
  };