import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { Container, Col, Row, Card} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Form }from "react-router-dom";
import "./profile-view.scss";
import UserInfo from './user-info';
import FavoriteMovies from './favorite-movies';
import UpdateUser from './update-user';
    useEffect(() => {
       let isMounted = true;
       isMounted && getUser();
       return() => {
        isMounted = false
       }
      }, []);

return (
    <Container>
        <Row>
            <Col xs={12} sm={4}>
                <UserInfo  name={ user.Username} email={user.Email}/>
            </Col>
            <Col xs={12} md={8}>
                <FavoriteMovies favoriteMovieList={favoriteMovieList}/>
            </Col>
        </Row>


        <UpdateUser handleSubmit={ handleSubmit} handleUpdate={handleUpdate}/>
    </div>
);
}
