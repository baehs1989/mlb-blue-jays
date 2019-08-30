import React, {Component} from "react";
import {Link} from 'react-router-dom';
import styles from './PlayerList.module.css'

class PlayerList extends Component {
  render(){
    let players = this.props.players.map((player) => {
      return (
        <tr key={player.person.id}>
          <th scope="row">{player.jerseyNumber}</th>
          <td>
              <Link
                to={{
                  pathname:'/player/' + player.person.id,
                  button: this.props.button
                }}>
                <div className="row justify-content-end" style={{"alignItems":"center"}}>
                  <div className="col-12 col-md-3">
                    <img className={styles.Image} src={`https://securea.mlb.com/mlb/images/players/head_shot/${player.person.id}.jpg`} alt="Player"/>
                  </div>
                  <div className={styles.Name + " col-12 col-md-8"}>
                    {player.person.fullName}
                  </div>

                </div>

              </Link>
          </td>
          <td>{player.person.batSide.code}/{player.person.pitchHand.code}</td>
          <td>{player.person.height}</td>
          <td>{player.person.weight}lbs</td>
          <td>{player.person.birthDate}</td>
        </tr>
      )
    })

    if (this.props.players.length > 0){
      return (

        <div className="row col-12 col-l-8 justify-content-center">
            <table className={styles.Table + " table"} style={{"display":(this.props.shown?"table":"none"), "width":"100%"}}>
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
        </div>
      )
    }

    return null

  }
}

export default PlayerList;
