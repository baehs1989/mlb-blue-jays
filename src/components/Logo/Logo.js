import React from 'react';
import mlblogo from '../../assets/images/logo.png'
import styles from './Logo.module.css'

const logo = (props) => (
    <div className={styles.Logo}>
      <img src={mlblogo} alt="Logo"/>
    </div>
);


export default logo;
