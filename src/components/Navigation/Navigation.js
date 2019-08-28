import React from 'react';
// import NavigationItem from './NavigationItem/NavigationItem'
import Logo from "../Logo/Logo"
import styles from "./Navigation.module.css"


const Navigation = () => (
  <header className={styles.Header}>
  {/*
    <div className={styles.Menu}>
      <span className={styles.Bar}></span>
    </div>
  */}
  
    <nav className={styles.Nav}>
      <div className={styles.NavContainer}>
        <div className={styles.Logo}>
          <Logo/>
        </div>
        <ul>
          {/*<NavigationItem link="/">Home</NavigationItem>*/}
        </ul>
      </div>
    </nav>

  </header>

)

export default Navigation
