import React from 'react';
import './RegisterForm.css';
import { FaUser, FaEnvelope, FaCity, FaMapMarkerAlt, FaLock, FaKey } from 'react-icons/fa';

const RegisterForm = () => {
  return (
    <div className="register-container">
      <div className="content-wrapper">
        <div className="image-section">
          <div className="image-overlay">Agricultural Management System</div>
        </div>
        <div className="form-section">
          <form className="register-form">
            <h2>Register</h2>
            <div className="form-group">
              <FaUser className="icon" />
              <input type="text" id="name" name="name" placeholder="Name" required />
            </div>
            <div className="form-group">
              <FaEnvelope className="icon" />
              <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <FaCity className="icon" />
              <input type="text" id="city" name="city" placeholder="City" required />
            </div>
            <div className="form-group">
              <FaMapMarkerAlt className="icon" />
              <input type="text" id="place" name="place" placeholder="Place" required />
            </div>
            <div className="form-group">
              <FaLock className="icon" />
              <input type="password" id="password" name="password" placeholder="Password" required />
            </div>
            <div className="form-group">
              <FaKey className="icon" />
              <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" required />
            </div>
            <button type="submit" className="register-button">Register</button>
            <div className="already-account">
              <p>Already have an account?</p>
              <a href="/login" className="login-link">Login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
