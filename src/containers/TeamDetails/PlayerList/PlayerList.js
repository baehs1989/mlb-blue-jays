import React, {Component} from "react";
import {Link} from 'react-router-dom';
import styles from './PlayerList.module.css'

class PlayerList extends Component {
  componentDidMount(){
    console.log(this.props.players)
  }

  render(){
    let players = this.props.players.map((player) => {
      return (
        <tr key={player.person.id}>
          <th scope="row">{player.jerseyNumber}</th>
          <td>
            <div className="row justify-content-center" style={{"alignItems":"center"}}>
              <img className={styles.Image} src={`https://securea.mlb.com/mlb/images/players/head_shot/${player.person.id}.jpg`} alt="Player"/>
              <Link
                to={{
                  pathname:'/player/' + player.person.id,
                }}>
                {player.person.fullName}
              </Link>
            </div>
          </td>
          <td>{player.person.batSide.code}/{player.person.pitchHand.code}</td>
          <td>{player.person.height}</td>
          <td>{player.person.weight}lbs</td>
          <td>{player.person.birthDate}</td>
        </tr>
      )
    })

    return (
      <table className={styles.Table + " table col-10"}>
        <thead>
          <tr>
            <th colSpan="6">{this.props.children}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">B/T</th>
            <th scope="col">Ht</th>
            <th scope="col">Wt</th>
            <th scope="col">DOB</th>
          </tr>
          {players}
        </tbody>
      </table>
    )
  }
}

export default PlayerList;
