export const MovieView = ({ movie, onBackClick }) => {
    return (
      <div>
        <div>
          <img src={movie.image} />
        </div>
        <div>
          <span>Title: </span>
          <span>{movie.title}</span>
        </div>
        <div>
          <span>Description: </span>
          <span>{movie.descritpion}</span>
        </div>
        <div>
          <span>Description: </span>
          <span>{movie.genre.descritpion}</span>
        </div>
        <div>
          <span>Genre: </span>
          <span>{movie.genre.Name}</span>
        </div>
        <div>
          <span>Genre: </span>
          <span>{movie.genre.descritpion}</span>
        </div>
        <div>
          <span>Director: </span>
          <span>{movie.director}</span>
        </div>
        <div>
          <span>Bio: </span>
          <span>{movie.director.bio}</span>
        </div>
        <button onClick={onBackClick}>Back</button>
      </div>
    );
  };
  