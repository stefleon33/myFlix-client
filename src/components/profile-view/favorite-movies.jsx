import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import  { MovieCard } from '../movie-card/movie-card'
import PropTypes  from "prop-types";

export const FavoriteMovies = ({user, favoriteMovies}) => {
    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col xs={12}>
                        <h4>Favorite Movies</h4>
                    </Col>
                        {favoriteMovies.map((movie) => {
                        return (
                            <Col xs={12} md={6} lg={3} key={movie._id} className="fav-movie">
                               <Link to={`/movies/${movies._id}`}/>
                                <MovieCard movie={movie} isFavorite={user.favoriteMovies.includes(movie._id)}/>
                                <Button variant="secondary" onClick={() => removeFav(movie._id)}>Remove from list</Button>
                            </Col>
                        );
                    })
                    }
                </Row>
            </Card.Body>
        </Card>
    )
}

