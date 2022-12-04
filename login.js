import React, { useState } from 'react';
import bcrypt from 'bcrypt';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    // Update the username state with the value of the input field
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    // Update the password state with the value of the input field
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the username and password are not empty
    if (username === '' || password === '') {
      alert('Username and password cannot be empty');
      return;
    }

    // Check if the username and password are correct
    if (username === 'admin') {
      // Hash the password
      const hash = bcrypt.hashSync(password, 10);

      // Compare the hashed password to the correct password
      if (bcrypt.compareSync('admin', hash)) {
        alert('Login successful');
      } else {
        alert('Invalid username or password');
      }
    } else {
      alert('Invalid username or password');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label for="username">Username:</label><br>
      <input type="text" id="username" name="username" onChange={handleUsernameChange} /><br>
      <label for="password">Password:</label><br>
      <input type="password" id="password" name="password" onChange={handlePasswordChange} /><br><br>
      <input type="submit" value="Submit" />
    </form>
  );
}
