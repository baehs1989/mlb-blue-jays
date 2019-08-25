import React, { Component} from "react";
import styles from './Division.module.css'
import TeamLogo from '../TeamLogo/TeamLogo'

class Division extends Component {

  componentDidMount(){
    console.log("Division")
  }

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
        <div className={styles.DivisionTitle}>
          <span>
            {this.props.division_name}
          </span>
        </div>

        <div className="row justify-content-center">
          {teamlogos}
        </div>
      </div>

    )
  }
}

export default Division;
