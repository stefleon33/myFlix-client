import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import  { MovieCard } from '../movie-card/movie-card'
import PropTypes  from "prop-types";

export const FavoriteMovies = ({user, favoriteMovies}) => {
    return (
      <div>
        <h2>Favorite Movies</h2>
        {favoriteMovieList.map((movies) => {
            return (
                <div key={movies._id}>
                    <img src={movies.ImapgePath} />
                    <Link to={`/movies/${movies._id}`}>
                        <h4>{movies.Title}</h4>
                    </Link>
                    <button variant="secondary" onClick={() => removeFav(movies._id)}>Remove from list</button>
                </div>
            )
        })
        }
        </div>
    )
}

