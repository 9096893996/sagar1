import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic login logic (hardcoded credentials for demo)
    if (userName === 'Sagar' && password === 'bhople') {
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="container-fluid p-3 my-5 h-custom">

    <div className="row">

      {/* Left Column with Image */}
      <div className="col-md-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample" />
      </div>

      {/* Right Column with Form */}
      <div className="col-md-6">

        {/* Social Media Sign In */}
        <div className="d-flex flex-row align-items-center justify-content-center mb-4">
          <p className="lead fw-normal mb-0 me-3">Sign in with</p>
          <button className="btn btn-primary me-2">
            <i className="fab fa-facebook-f"></i>
          </button>
          <button className="btn btn-info me-2">
            <i className="fab fa-twitter"></i>
          </button>
          <button className="btn btn-primary me-2">
            <i className="fab fa-linkedin-in"></i>
          </button>
        </div>

        <div className="divider d-flex align-items-center my-4">
          <p className="text-center fw-bold mx-3 mb-0">Or</p>
        </div>

        {/* Login Form */}
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>

          <div className="d-flex justify-content-between mb-4">
            <div>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe" className="ms-2">Remember me</label>
            </div>
            <a href="#">Forgot password?</a>
          </div>

          <div className="text-center text-md-start mt-4 pt-2">
            <button type="submit" className="btn btn-primary px-5">Login</button>
          </div>

          <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="text-danger">Register</a></p>
        </form>

      </div>
    </div>

    {/* Footer with Social Links */}
    <footer className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
      <div className="text-white mb-3 mb-md-0">
        Copyright © 2020. All rights reserved.
      </div>

      <div>
        <button className="btn btn-link text-white mx-3">
          <i className="fab fa-facebook-f"></i>
        </button>
        <button className="btn btn-link text-white mx-3">
          <i className="fab fa-twitter"></i>
        </button>
        <button className="btn btn-link text-white mx-3">
          <i className="fab fa-google"></i>
        </button>
        <button className="btn btn-link text-white mx-3">
          <i className="fab fa-linkedin-in"></i>
        </button>
      </div>
    </footer>
  </div>
  );
}

// Styling (inline styles)
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f7fc',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '14px',
  },
};

export default Login;
