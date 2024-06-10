import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { Container, Col, Row, Card} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Form }from "react-router-dom";
import "./profile-view.scss";
import UserInfo from './user-info';
import FavoriteMovies from './favorite-movies';
import UpdateUser from './update-user';
return (
    <div>
        <UserInfo  name={ user.Username} email={user.Email}/>
        <FavoriteMovies favoriteMovieList={favoriteMovieList}/>
        <UpdateUser handleSubmit={ handleSubmit} handleUpdate={handleUpdate}/>
    </div>
);
}
