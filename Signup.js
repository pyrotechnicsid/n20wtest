import React, { useState } from 'react';
import ReactModal from 'react-modal';

const SignUpPage = () => {
  // Initialize the state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  // Handle the change of the username and password input fields
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  // Handle the submission of the sign up form
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the username and password are not empty
    if (username === '' || password === '') {
      alert('Username and password cannot be empty');
      return;
    }

    // Save the username and password

    // Show the success message in the modal
    setShowModal(true);
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label for="username">Username:</label><br>
        <input type="text" id="username" name="username" onChange={handleUsernameChange} /><br>
        <label for="password">Password:</label><br>
        <input type="password" id="password" name="password" onChange={handlePasswordChange} /><br><br>
        <input type="submit" value="Sign Up" />
      </form>
      <ReactModal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <h2>Sign Up Successful</h2>
        <p>You have successfully signed up.</p>
        <button onClick={() => setShowModal(false)}>Close</button>
      </ReactModal>
    </div>
  );
}
