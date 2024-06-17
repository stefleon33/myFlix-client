import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import  { MovieCard } from '../movie-card/movie-card'
import PropTypes  from "prop-types";

export const FavoriteMovies = ({ user, favoriteMovies, removeFav }) => {
    return (
            <Row>
                 <Col xs={12}>
                    <h4>Favorite Movies</h4>
                </Col>
                {favoriteMovies.map((movie) => {
                    return (
                        <Col xs={12} md={6} lg={3} key={movie.id} className="fav-movie">
                            <Link to={`/movies/${movie.Title}`}/>
                                <MovieCard 
                                    movie={movie} 
                                    isFavorite={user.favoriteMovies.includes(movie.title)} 
                                    />
                            <Button variant="secondary" onClick={() => removeFav(movie.id)}>Remove from list</Button>
                        </Col>
                    );
                })}
            </Row>
    );
}

FavoriteMovies.propTypes = {
    favoriteMovies: PropTypes.array.isRequired,
    localUser: PropTypes.object,
    removeFav: PropTypes.func
};
