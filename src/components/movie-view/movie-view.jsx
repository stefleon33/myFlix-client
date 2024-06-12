import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./movie-view.scss";
import { Button } from 'react-bootstrap';


export const MovieView = ({ movies }) => {
    const {movieId} = useParams();
    
    const movie = movies.find((b) => b.id === movieId);

    return (
      <div>
        <div>
          <img src={movie.image} className="img"/>
        </div>
        <div className="card-body bg-transparent"> 
          <div className="fw-bold card text-center bg-transparent border-transparent">{movie.title}</div>
          <ul className="list-group list-group-flush ">
        <li className="list-group-item bg-transparent">
          <span className="card-text fw-bold">Description: </span>
          <span >{movie.description}</span></li>
        </ul>                                       
        </div>
        <ul className="list-group list-group-flush ">
        <li className="list-group-item bg-transparent">
          <div>
            <span className="fw-bold">Genre: </span>
            <span>{movie.genre.name}</span>
          </div> 
          <span className="fw-bold">Genre Description: </span>
          <span>{movie.genre.description}</span></li>
        </ul>                                                                                              
        <ul className="list-group list-group-flush">
        <li className="list-group-item bg-transparent">
          <div>
            <span className="fw-bold">Director: </span>
            <span>{movie.director.name}</span>
          </div>
          <div>
            <span className="fw-bold">Bio: </span>
            <span>{movie.director.bio}</span>
          </div>
          <div> 
            <span className="fw-bold">Birth: </span>
            <span>{movie.director.birth}</span>
          </div>
          <div>
             <span className="fw-bold">Death: </span>
              <span>{movie.director.death}</span>
          </div>
          </li>
          </ul>
         <div style= {{display: "flex", justifyContent: "center"}}>
        <Link to= {`/`}>
          <Button
            className="back-button"
            style={{ cursor: "pointer"}}>
            Back
          </Button>
        </Link>
        </div>
      </div>
    );
  };



  