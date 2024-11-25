import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log(formData);
    // Simulate successful login
    navigate('/home1');
  };

  return (
    <div className="login-container">
      <div className="form-section">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="heading">Login</h2>
          <div className="form-group">
            <label htmlFor="email" className="label">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="label">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="input"
            />
          </div>
          <button type="submit" className="login-button">Login</button>
          <div className="already-account">
            <p>Don't have an account?</p>
            <a href="/register" className="register-link">Register</a>
          </div>
        </form>
      </div>
      <div className="image-section">
        <div className="image-overlay">Agricultural Management System</div>
      </div>
    </div>
  );
};

export default Login;
