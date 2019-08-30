import React, { Component} from "react";
import styles from './Division.module.css'
import TeamLogo from '../TeamLogo/TeamLogo'

class Division extends Component {

  render(){

    let teamlogos = this.props.teams.map(team => {
      return (
        <TeamLogo
          key={team.id}
          id={team.id}
          name={team.name}
          abb={team.abbreviation}/>
      )
    })

    return (
      <div className={this.props.league + " " + styles.Division}>
        <div className="row justify-content-center">
          <div className={styles.DivisionTitle}>
              {this.props.division_name}
          </div>
        </div>

        <div className="row justify-content-center">
          {teamlogos}
        </div>
      </div>

    )
  }
}

export default Division;
