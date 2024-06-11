import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";

/* import { Link } from "react-router-dom";
import { Form }from "react-router-dom"; */
import "./profile-view.scss";
import { UserInfo } from './user-info';
import { FavoriteMovies} from './favorite-movies';
import { UpdateUser } from './update-user';

export const ProfileView = ({ localUser, movies, token}) => {

return (
    <Container>
        <Row>
            <Col xs={12} sm={4}>
                <Card>
                    <Card.Body>
                        <UserInfo  name={ user.Username} email={user.Email}/>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={8}>
            <Card>
                    <Card.Body>
                        <FavoriteMovies favoriteMovieList={favoriteMovieList}/>
                    </Card.Body>
                </Card>
            </Col>
        </Row>


        <UpdateUser handleSubmit={ handleSubmit} handleUpdate={handleUpdate}/>
    </Container>
);
}

ProfileView.propTypes = {
    localUser: PropTypes.object.isRequired,
    movies: PropTypes.array.isRequired,
    token: PropTypes.string.isRequired
  };
