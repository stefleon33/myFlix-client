import React from "react"

function UpdateUser({handleSubmit, handleUpdate}) {
    return (
        <form className='profile-form' onSubmit={(e) => handleSubmit(e)}>
            <h2>Want to change some info?</h2>
            <label>Username:</label>
            <input
                type='text'
                name='Username'
                defaultValue={user.Username}
                onChange={e => handleUpdate(e)}/>
            <label>Password</label>
            <input
                type='password'
                name='password'
                defaultValue={user.Password}
                onChange={e => handleUpdate(e)}/>
            <label>Email</label>
            <input
                type='email'
                name='email'
                defaultValue={user.Email}
                onChange={e => handleUpdate(e)}/>
            <button varitant='primary' type='sumbit'>
                Update
            </button>
        </form>
    )
}

export default UpdateUser
