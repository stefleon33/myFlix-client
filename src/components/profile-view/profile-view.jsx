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

    const [user, setUser] = useState(null);
    const [username, setUsername] =useState(storedUser.Username);
    const [password, setPassword] = useState(storedUser.Password);
    const [email, setEmail] = useState(storedUser.Email);
    const [birthday, setBirthday] = useState(storedUser.Birthday);
    const favoriteMovies = user?.FavoriteMovies  ? movies.filter(m => user.FavoriteMovies.includes(m.Title)) : [];

    const formData = {
        username: username,
        password: password,
        email: email,
        birthday: birthday
    };

    const handleSubmit = (event) => {
        event.preventDefault();
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


   

 const removeFav = (id) => {
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

const handleDeleteAccount = () => {
        fetch (`https://movie-api33-c32ceac54882.herokuapp.com/users/${user.username}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}`,
              "Content-Type": "application/json"
              }
          }).then ((response) => {
            if (response.ok) {
              alert("Account deleted successfully.");
              localStorage.clear();
              window.location.reload();
            } else {
              alert("Something went wrong.");
              }
            });
          };

    useEffect(() => {
        if (!token) {return;}
  
    fetch("https://movie-api33-c32ceac54882.herokuapp.com/users", {
      headers: { Authorization: `Bearer ${token}` },
    })
        .then((response) => response.json())
        .then((data) => {
        const usersFromApi = data.map((user) => {
            return {
                id:user._id,
                username: user.username,
                password: user.password,
                email: user.email,
                birthDate: user.birthDate,
                favoriteMovies: user.favoriteMovies
            };
          });
          setUser(usersFromApi.find((u) => u.username === localUser.username));
          
        })
        .catch((error) => {
            console.error(error);
        });
    }, [token]);
        
return (
    <Container>
        <Row>
            <Col xs={12} sm={4}>
                <Card>
                    <Card.Body>
                        <UserInfo  name={ user.Username} email={ user.Email} birthday={user.Birthday}/>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card>
                    <Card.Body>
                        <UpdateUser 
                        formData={formData} 
                        handleSubmit={ handleSubmit} 
                        handleUpdate={handleUpdate} 
                        />
                    </Card.Body>
                </Card>
            </Col>

            <Col xs={12} md={8}>
            <Card>
                <Card.Body>
                    <Row>
                        <Col className="mb-5" xs={12}  md={12}>
                        {
                        favoriteMovies && (<FavoriteMovies user={user} favoriteMovies={favoriteMovies} />)
                        }
                        </Col>
                    </Row>
                </Card.Body>
                </Card>
            </Col>
        </Row>       
    </Container>
)
}

ProfileView.propTypes = {
    localUser: PropTypes.object.isRequired,
    movies: PropTypes.array.isRequired,
    token: PropTypes.string.isRequired
  };
