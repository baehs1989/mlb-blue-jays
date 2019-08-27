import React, { Component} from "react";
import {NavLink} from 'react-router-dom';
import styles from './TeamLogo.module.css';

class TeamLogo extends Component {

  render(){

    let imgsrc = `https://www.mlbstatic.com/team-logos/${this.props.id}.svg`

    return (
          <div className={styles.TeamLogo + " col-5 col-sm-2"}>
            <NavLink
              to={"team/" + this.props.id}>
              <div className="row">
                <div className={styles.IMG + " col-12"}>
                  <img src={imgsrc} alt="Logo"/>
                </div>
                <div className="col-12">
                  {this.props.name}
                </div>
              </div>



            </NavLink>
          </div>
    )
  }
}

export default TeamLogo;
