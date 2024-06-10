import "./profile-view.scss";
import UserInfo from './user-info';
import FavoriteMovies from './favorite-movies';
import UpdateUser from './update-user';
return (
    <div>
        <UserInfo  name={ user.Username} email={user.Email}/>
        <FavoriteMovies favoriteMovieList={favoriteMovieList}/>
        <UpdateUser handleSubmit={ handleSubmit} handleUpdate={handleUpdate}/>
    </div>
);
}
