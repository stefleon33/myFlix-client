import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://movie-api33-c32ceac54882.herokuapp.com/movies")
    .then((response) => response.json())
    .then((data) => {
        //console.log("movies from api:", data);
        const moviesFromApi = data.map((movie) => {
            return {
                id: movie._id,
                image: movie.ImagePath,
                title: movie.Title,
                description: movie.Description,
                genre: { name: movie.Genre.Name, description: movie.Genre.Description },
                director: { name: movie.Director.Name, bio: movie.Director.Bio, birth: movie.Director.Birth, death: movie.Director.Death },
                featured: movie.Featured,
            };
        });
        

        setMovies(moviesFromApi);
    });
  }, []);

  if (!user) {
    return <LoginView onLoggedIn={(user) => setUser(user)} />;
  }

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
