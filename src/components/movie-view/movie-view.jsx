import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
    const {movieId} = useParams();
    
    const movie = movies.find((b) => b.id === movieId);

    return (
      <div>
        <div>
          <img className="w-100" src={movie.image}/>
        </div>
        <div>
          <span>Title: </span>
          <span>{movie.title}</span>
        </div>
        <div>
          <span>Description: </span>
          <span>{movie.description}</span>
        </div>
        <div>
          <span>Genre: </span>
          <span>{movie.genre.name}</span>
        </div>
        <div>
          <span>Genre Description: </span>
          <span>{movie.genre.description}</span>
        </div>                                                                                              
        <div>
          <span>Director: </span>
          <span>{movie.director.name}</span>
        </div>
        <div>
          <span>Bio: </span>
          <span>{movie.director.bio}</span>
        </div>
        <div>
          <span>Birth: </span>
          <span>{movie.director.birth}</span>
        </div>
        <div>
          <span>Death: </span>
          <span>{movie.director.death}</span>
        </div>
        <div>
          <span>ID: </span>
          <span>{movie.id}</span>
        </div>
        <Link to= {`/`}>
          <button
            className="back-button"
            style={{ cursor: "pointer" }}
          >
            Back
          </button>
        </Link>
      </div>
    );
  };
