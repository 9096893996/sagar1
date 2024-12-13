import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation logic for matching passwords
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      setSuccess(true);
      setTimeout(() => navigate('/'), 2000);  // Redirect to Login page after successful registration
    }
  };

  return (
    <div style={styles.container}>
      <h2>Register</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Username:</label>
          <input 
            type="text" 
            value={userName} 
            onChange={(e) => setUserName(e.target.value)} 
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Confirm Password:</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            style={styles.input}
          />
        </div>

        {error && <p style={styles.error}>{error}</p>}
        {success && <p style={styles.success}>Registration successful! Redirecting to login...</p>}

        <button type="submit" style={styles.button}>Register</button>

        <p>Already have an account? <a href="/">Login</a></p>
      </form>
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
  success: {
    color: 'green',
    fontSize: '14px',
  },
};

export default Register;
