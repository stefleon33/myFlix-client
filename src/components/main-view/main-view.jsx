import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fecth("https://git.heroku.com/movie-api33.git")
    .then((response) => response.json())
    .then((data) => {
        const moviesFromApi = data.docs.map((doc) => {
            return {
                id: doc.id,
                image: doc.imagePath,
                title: doc.title,
                description: doc.description,
                genre: doc.genre.name,
                description: doc.genre.description,
                director: doc.director.name,
                bio: doc.director.bio,
                birth: doc.director.birth,
                death: doc.director.death,
                featured: doc.featured
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
