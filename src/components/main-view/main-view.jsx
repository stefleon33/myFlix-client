import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://movie-api33-c32ceac54882.herokuapp.com/")
    .then((response) => response.json())
    .then((data) => {
        const moviesFromApi = data.movies.map((movie) => {
            return {
                id: movie.id,
                image: movie.imagePath,
                title: movie.title,
                description: movie.description,
                genre: movie.genre.name,
                description: movie.genre.description,
                director: movie.director.name,
                bio: movie.director.bio,
                birth: movie.director.birth,
                death: movie.director.death,
                featured: movie.featured
            };
        });

        setMovies(moviesFromApi);
    });
  }, []);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
