import React from 'react';
import '../../sass/Page-404.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='page-404'>
      <h1>404</h1>
      <h2>Oh Oh! You're lost</h2>
      <p>
        The page you are looking for doesn't exist. Click the button below to go
        back to the homepage.
      </p>
      <Link to='/'>
        <button className='btn-404'>Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
