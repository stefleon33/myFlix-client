import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import "./profile-view.scss";
import { UserInfo } from "./user-info";
import { FavoriteMovies } from "./favorite-movies";
import { UpdateUser } from "./update-user";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser, setToken } from "../../redux/reducers/user";

export const ProfileView = ({ localUser, movies, token, removeFavoriteMovie }) => {
  const storedUser = JSON.parse(localStorage.getItem("user")) || {};
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUserState] = useState(null);
  const [username, setUsername] = useState(storedUser.Username || "");
  const [password, setPassword] = useState(storedUser.Password || "");
  const [email, setEmail] = useState(storedUser.Email || "");
  const [birthday, setBirthday] = useState(formatDate(storedUser.Birthday) || "");

  const favoriteMovies = user?.FavoriteMovies
    ? movies.filter((m) => user.FavoriteMovies.includes(m.id))
    : [];

  const formData = {
    Username: username,
    Password: password,
    Email: email,
    Birthday: birthday,
  };

  function formatDate(dateString) {
    if (!dateString) return "";
    return dateString.split("T")[0];
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://movie-api33-c32ceac54882.herokuapp.com/users/${user.Username}`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Update successful");
          return response.json();
        } else {
          alert("Update failed");
          return null;
        }
      })
      .then((updatedUser) => {
        if (updatedUser) {
          localStorage.setItem("user", JSON.stringify(updatedUser));
          setUserState(updatedUser);
        }
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  const handleUpdate = (e) => {
    switch (e.target.type) {
      case "text":
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
        break;
      default:
        break;
    }
  };

  const handleDeleteAccount = () => {
    fetch(`https://movie-api33-c32ceac54882.herokuapp.com/users/${user.Username}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Account deleted successfully.");
          localStorage.clear();
          dispatch(setUser(null));
          dispatch(setToken(null));
          window.location.href = "/login"; // force full reload
        } else {
          alert("Something went wrong.");
        }
      })
      .catch((error) => {
        console.error("Error deleting account:", error);
      });
  };

  const fetchUserData = () => {
    if (!token) return;

    fetch("https://movie-api33-c32ceac54882.herokuapp.com/users", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        const matchedUser = data.find((u) => u.username === localUser.Username);
        if (matchedUser) {
          setUserState(matchedUser);
          setUsername(matchedUser.Username);
          setPassword(matchedUser.Password);
          setEmail(matchedUser.Email);
          setBirthday(formatDate(matchedUser.Birthday));
          localStorage.setItem("user", JSON.stringify(matchedUser));
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  useEffect(() => {
    if (storedUser?.Username) {
      setUserState(storedUser);
      setUsername(storedUser.Username);
      setPassword(storedUser.Password);
      setEmail(storedUser.Email);
      setBirthday(formatDate(storedUser.Birthday));
    } else {
      fetchUserData();
    }
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12} sm={4}>
          <Card>
            <Card.Body>
              <UserInfo name={username} email={email} />
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <UpdateUser
                formData={formData}
                handleSubmit={handleSubmit}
                handleUpdate={handleUpdate}
                handleDeleteAccount={handleDeleteAccount}
              />
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col className="mb-5" xs={12} md={12}>
                  {favoriteMovies && (
                    <FavoriteMovies
                      user={user}
                      favoriteMovies={favoriteMovies}
                      removeFavoriteMovie={removeFavoriteMovie}
                    />
                  )}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

ProfileView.propTypes = {
  localUser: PropTypes.object,
  movies: PropTypes.array,
  token: PropTypes.string,
};
