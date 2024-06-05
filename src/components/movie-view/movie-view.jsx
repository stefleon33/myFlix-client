import "./movie-view.scss";
export const MovieView = ({ movie, onBackClick }) => {
    return (
      <div>
        <div>
          <img src={movie.image} w-100/>
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
        <button
          onClick={onBackClick}
          className="back-button"
          style={{ cursor: "pointer" }}
        >
          Back
        </button>
      </div>
    );
  };
