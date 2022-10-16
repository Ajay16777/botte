// import { Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/logo.svg';

function Logo({ w, h, comp }) {
  return (
    <div id='logo'>
      <Link component={Link} to='/'>
        <img
          src={logo}
          width={w}
          height={h}
          alt='logo'
          style={{ marginTop: '10px' }}
        />
      </Link>
    </div>
  );
}

export default Logo;
