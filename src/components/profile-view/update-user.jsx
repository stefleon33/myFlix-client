import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const UpdateUser =({ formData, handleSubmit, handleUpdate, handleDeleteAccount }) =>  {
    return (
        <>
            <h4>Update</h4>
            <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Username:</Form.Label>
                <Form.Control
                type="text"
                value={formData.username}
                onChange={(e) => handleUpdate(e)}
                required
                minLength="3" 
                placeholder="Enter a username"
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control
                type="password"
                value={formData.password}
                onChange={(e) => handleUpdate(e)}
                required
                placeholder="Your password must be 8 or more characters"
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                type="email"
                value={formData.email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email address"
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Birthday:</Form.Label>
                <Form.Control
                type="date"
                value={formData.birthday}
                onChange={(e) => setBirthday(e.target.value)}
                required
                placeholder="Enter your birthday"
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit Changes
            </Button>

            <Button 
                onClick={() => handleDeleteAccount()}
                variant="outline-secondary"
                className="mx-3"
                >
                Delete Account
            </Button>
            </Form>
        </>           
    )
}
