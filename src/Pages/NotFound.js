import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <p style={styles.message}>Oops! Page not found.</p>
      <Link to="/" style={styles.link}>Go back home</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '10vh',
    padding: '2rem',
  },
  code: {
    fontSize: '6rem',
    color: '#ff4757',
  },
  message: {
    fontSize: '1.5rem',
    margin: '1rem 0',
  },
  link: {
    fontSize: '1rem',
    textDecoration: 'none',
    color: '#3742fa',
  }
};

export default NotFound;
