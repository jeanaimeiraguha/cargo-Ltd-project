import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    // Check if the credentials are correct (simple validation)
    if (username !== "Iraguha" || password !== "Iraguha1") {
      alert("Wrong credentials");
      return; // Prevent the rest of the login process
    }
    else{
     navigate('/')
    }

    try {
      const response = await axios.post('http://localhost:3000/login', {
        username,
        password,
      });

      // If login is successful, store user information in local storage or state
      localStorage.setItem('user', JSON.stringify(response.data.user));

      // Redirect user to the dashboard or homepage
      navigate('/dashboard'); // Replace with your desired route
    } catch (error) {
      setError(error.response ? error.response.data.error : 'An error occurred');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
