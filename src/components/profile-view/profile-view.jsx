import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";

/* import { Link } from "react-router-dom";
import { Form }from "react-router-dom"; */
import "./profile-view.scss";
import { UserInfo } from './user-info';
import { FavoriteMovies} from './favorite-movies';
import { UpdateUser } from './update-user';

export const ProfileView = ({ localUser, movies, token}) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
  
    const [user, setUser] = useState(storedUser? storedUser : null);
    const [username, setUsername] =useState(storedUser.username);
    const [password, setPassword] = useState(storedUser.password);
    const [email, setEmail] = useState(storedUser.email);
    const [birthday, setBirthday] = useState(storedUser.birthday);

    const favoriteMovies = user?.favoriteMovies  ? movies.filter(m => user.favoriteMovies.includes(m.title)) : [];

    const formData = {
        username: username,
        password: password,
        email: email,
        birthday: birthday
    };

    
    const handleSubmit = (event) => {
        event.preventDefault(event);
        fetch(`https://movie-api33-c32ceac54882.herokuapp.com/users/${user.username}`, {
            method: "PUT",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}` }
              })
              .then((response) => {
                if (response.ok) {
                    alert("Update successful");
                    window.location.reload();
    
                    return response.json()
                }
                 alert("Update failed");
                })
                .then((user) => {
                  if (user) {
                    localStorage.setItem('user', JSON.stringify(user));
                    setUser(user)
                  }    
                })
                .catch((error) => {
                  console.error(error);
                });
          };

   /*  const removeFav = (id) => {
        fetch(`https://movie-api33-c32ceac54882.herokuapp.com/users/${user.username}/movies/${encodeURIComponent(movie.id)}`,{
            method: "DELETE",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            }
            }).then((response) => {
              if (response.ok) {
                alert("Update successful");
                window.location.reload();
              } else {
                alert("Update failed");
              }
            });
          };
    }*/

    const handleUpdate = (e) => {
        switch(e.target.type) {
            case "text" : 
                setUsername(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "date":
                setBirthday(e.target.value);
                default:
        }
    }; 
return (
    <Container>
        <Row>
            <Col xs={12} sm={4}>
                <Card>
                    <Card.Body>
                        <UserInfo  name={ user.Username} email={user.Email}/>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={8}>
            <Card>
                    <Card.Body>
                        <FavoriteMovies favoriteMovieList={favoriteMovieList}/>
                    </Card.Body>
                </Card>
            </Col>
        </Row>


        <UpdateUser handleSubmit={ handleSubmit} handleUpdate={handleUpdate}/>
    </Container>
);
}

ProfileView.propTypes = {
    localUser: PropTypes.object.isRequired,
    movies: PropTypes.array.isRequired,
    token: PropTypes.string.isRequired
  };
