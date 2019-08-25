import React, { Component} from "react";
import {NavLink} from 'react-router-dom';
import styles from './TeamLogo.module.css';

class TeamLogo extends Component {

  render(){

    let imgsrc = `https://www.mlbstatic.com/team-logos/${this.props.id}.svg`

    return (
          <div className={styles.TeamLogo + " col-5 col-sm-2"}>
            <NavLink
              to={"team/" + this.props.abb}>
                <img src={imgsrc} height="80%" width="80%" alt="Logo"/>
                <div className={styles.TeamName}>
                  {this.props.name}
                </div>
                <div className={styles.TeamAbb}>
                  {this.props.abb}
                </div>
            </NavLink>
          </div>
    )
  }
}

export default TeamLogo;
