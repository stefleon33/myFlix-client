import React from "react";
// Here you import the PropTypes library
import PropTypes from "prop-types";

import { Button, Card } from "react-bootstrap";

// The MovieCard function component 
export const MovieCard = ({ movie, onMovieClick }) => {
    return (
      <Card className="h-100" onClick={() => onMovieClick(movie)}>
        <Card.Img 
          variant = "top" 
          src={movie.image}
          // Bootstrap utility classes for horizontal and vertical centering
          className="mx-auto my-auto"
          />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Button onClick={() => onMovieClick(movie)}>
            Open
          </Button>
        </Card.Body>
      </Card>
    );
  };
  
  // Here is where we define all the props constraints for the MovieCard
MovieCard.propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
      description: PropTypes.string,
      director: PropTypes.shape({
        name: PropTypes.string,
        bio: PropTypes.string,
        birth: PropTypes.string,
        death: PropTypes.string
         }),
      genre: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string
      }),
      featured: PropTypes.bool,
      id: PropTypes.string
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
  };