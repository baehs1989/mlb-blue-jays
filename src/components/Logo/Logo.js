import React from 'react';
import mlblogo from '../../assets/images/logo.png';
import {NavLink} from 'react-router-dom';

const logo = (props) => (
    <div>
      <NavLink to="/">
        <img src={mlblogo} alt="Logo"/>
      </NavLink>

    </div>
);


export default logo;
