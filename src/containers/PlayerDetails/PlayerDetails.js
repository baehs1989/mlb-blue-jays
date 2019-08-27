import React, {Component} from "react";
import styles from './PlayerDetails.module.css';
import axios from '../../base-axios';

class PlayerDetails extends Component {
  state = {
    player: null,
    buttons: {
      pbutton:true,
      bbutton:false
    }

  }

  componentDidMount(){

    axios.get(`/api/v1/people/${this.props.match.params.id}?hydrate=stats(group=[hitting,pitching],type=[yearByYear])`)
        .then(response => {
          this.setState({"player" : response.data.people[0]})

          if (this.state.player.primaryPosition.type !== "Pitcher"){
            let updated_buttons = {
              pbutton:false,
              bbutton:true
            }
            this.setState({buttons:updated_buttons})
          }
        })
        .catch(error => {

        });
  }

  buttonClickHandler(e){
    if (e.target.id.length > 0){
      let updated_buttons = {
        pbutton:false,
        bbutton:false
      }
      updated_buttons[e.target.id] = true
      this.setState({buttons:updated_buttons})

    }

  }


  render(){
    // 0 : pitching 1 : batting
    let player_data = {
      pitching : [],
      hitting: []
    }

    let pitching_tr =[]
    let hitting_tr = []

    if (this.state.player !== null){
      for (let data_set of this.state.player.stats){
        player_data[data_set.group.displayName] = data_set.splits.filter(elm => {
          return !("numTeams" in elm)
        })
      }

      pitching_tr = player_data["pitching"].map((data,index) => {
        return (
          <tr key={data.season+index}>
            <th className={styles.Pinned}><span>{data.season}</span></th>
            <td><span>{data.team.name}</span></td>
            <td><span>{data.league.name}</span></td>
            <td><span>{data.stat.wins}</span></td>
            <td><span>{data.stat.losses}</span></td>
            <td><span>{data.stat.era}</span></td>
            <td><span>{data.stat.gamesPlayed}</span></td>
            <td><span>{data.stat.gamesStarted}</span></td>
            <td><span>{data.stat.completeGames}</span></td>
            <td><span>{data.stat.shutouts}</span></td>
            <td><span>{data.stat.holds}</span></td>
            <td><span>{data.stat.saves}</span></td>
            <td><span>{data.stat.saveOpportunities}</span></td>
            <td><span>{data.stat.inningsPitched}</span></td>
            <td><span>{data.stat.hits}</span></td>
            <td><span>{data.stat.runs}</span></td>
            <td><span>{data.stat.earnedRuns}</span></td>
            <td><span>{data.stat.homeRuns}</span></td>
            <td><span>{data.stat.numberOfPitches}</span></td>
            <td><span>{data.stat.hitBatsmen}</span></td>
            <td><span>{data.stat.baseOnBalls}</span></td>
            <td><span>{data.stat.intentionalWalks}</span></td>
            <td><span>{data.stat.strikeOuts}</span></td>
            <td><span>{data.stat.avg}</span></td>
            <td><span>{data.stat.whip}</span></td>
            <td><span>{data.stat.groundOutsToAirouts}</span></td>
          </tr>
        )
      })

      hitting_tr = player_data["hitting"].map((data,index) => {
        return (
          <tr key={data.season+index}>
            <th className={styles.Pinned}><span>{data.season}</span></th>
            <td><span>{data.team.name}</span></td>
            <td><span>{data.league.name}</span></td>
            <td><span>{data.stat.gamesPlayed}</span></td>
            <td><span>{data.stat.atBats}</span></td>
            <td><span>{data.stat.runs}</span></td>
            <td><span>{data.stat.hits}</span></td>
            <td><span>{data.stat.totalBases}</span></td>
            <td><span>{data.stat.doubles}</span></td>
            <td><span>{data.stat.triples}</span></td>
            <td><span>{data.stat.homeRuns}</span></td>
            <td><span>{data.stat.rbi}</span></td>
            <td><span>{data.stat.baseOnBalls}</span></td>
            <td><span>{data.stat.intentionalWalks}</span></td>
            <td><span>{data.stat.strikeOuts}</span></td>
            <td><span>{data.stat.stolenBases}</span></td>
            <td><span>{data.stat.caughtStealing}</span></td>
            <td><span>{data.stat.avg}</span></td>
            <td><span>{data.stat.obp}</span></td>
            <td><span>{data.stat.slg}</span></td>
            <td><span>{data.stat.obp}</span></td>
            <td><span>{data.stat.groundOutsToAirouts}</span></td>
          </tr>
        )
      })
    }


    return (
          this.state.player !== null ?
          (
          <React.Fragment>
          <div className="row justify-content-center">
            <div className={styles.BIO + " card m-2"}>
              <div className="row no-gutters">
                <div className="col-6">
                  <img src={`https://securea.mlb.com/mlb/images/players/head_shot/${this.state.player.id}.jpg`} className="card-img-top" alt="Player"/>
                </div>
                <div className="col-6">
                    <div className="card-body" style={{"display" : "grid", "paddingLeft": "0.5rem", "textAlign": "left", "height": "100%"}}>
                      <span>#{this.state.player.primaryNumber}</span>
                      <span>{this.state.player.fullName}</span>
                      <span style={{"fontSize" : "0.9rem", "fontWeight": "400"}}>{this.state.player.primaryPosition.name}</span>
                      <table>
                      <tbody>
                      <tr>
                        <td>
                          B/T:
                        </td>
                        <td>
                          {this.state.player.batSide.code}/{this.state.player.pitchHand.code}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Born:
                        </td>
                        <td>
                          {this.state.player.birthDate} ({this.state.player.currentAge})
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Height:
                        </td>
                        <td>
                          {this.state.player.height}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Weight:
                        </td>
                        <td>
                          {this.state.player.weight}lbs
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Draft:
                        </td>
                        <td>
                          {this.state.player.draftYear}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Debut:
                        </td>
                        <td>
                          {this.state.player.mlbDebutDate}
                        </td>
                      </tr>
                      </tbody>
                      </table>
                    </div>
                </div>

              </div>


            </div>



            <div className={styles.STAT}>

              <div className={styles.Buttons + " row justify-content-center"} onClick={(e) => this.buttonClickHandler(e)}>
                <div className={"col-3 " + (this.state.buttons.pbutton?styles.Clicked:"")} id="pbutton">Ptiching</div>
                <div className={"col-3 " + (this.state.buttons.bbutton?styles.Clicked:"")} id="bbutton">Batting</div>
              </div>

              <div className="row justify-content-center">

                <div className="col-12">
                  <div className={styles.Wrapper} style={{"display":(this.state.buttons.pbutton?"table":"none")}}>
                    <div className={styles.Scroller}>
                      <table className="table">
                        <thead>
                          <tr>
                            <th className={styles.Pinned}><span>Season</span></th>
                            <th><span>Team</span></th>
                            <th><span>LG</span></th>
                            <th><span>W</span></th>
                            <th><span>L</span></th>
                            <th><span>ERA</span></th>
                            <th><span>G</span></th>
                            <th><span>GS</span></th>
                            <th><span>CG</span></th>
                            <th><span>SHO</span></th>
                            <th><span>HLD</span></th>
                            <th><span>SV</span></th>
                            <th><span>SVO</span></th>
                            <th><span>IP</span></th>
                            <th><span>H</span></th>
                            <th><span>R</span></th>
                            <th><span>ER</span></th>
                            <th><span>HR</span></th>
                            <th><span>NP</span></th>
                            <th><span>HB</span></th>
                            <th><span>BB</span></th>
                            <th><span>IBB</span></th>
                            <th><span>SO</span></th>
                            <th><span>AVG</span></th>
                            <th><span>WHIP</span></th>
                            <th><span>GO/AO</span></th>
                          </tr>
                        </thead>
                        <tbody>
                          {pitching_tr}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>


                <div className="col-12">
                  <div className={styles.Wrapper} style={{"display":(this.state.buttons.bbutton?"table":"none")}}>
                    <div className={styles.Scroller}>
                      <table className="table">
                        <thead>
                          <tr>
                            <th className={styles.Pinned}><span>Season</span></th>
                            <th><span>Team</span></th>
                            <th><span>LG</span></th>
                            <th><span>G</span></th>
                            <th><span>AB</span></th>
                            <th><span>R</span></th>
                            <th><span>H</span></th>
                            <th><span>TB</span></th>
                            <th><span>2B</span></th>
                            <th><span>3B</span></th>
                            <th><span>HR</span></th>
                            <th><span>RBI</span></th>
                            <th><span>BB</span></th>
                            <th><span>IBB</span></th>
                            <th><span>SO</span></th>
                            <th><span>SB</span></th>
                            <th><span>CS</span></th>
                            <th><span>AVG</span></th>
                            <th><span>OBP</span></th>
                            <th><span>SLG</span></th>
                            <th><span>OPS</span></th>
                            <th><span>GO/AO</span></th>
                          </tr>
                        </thead>
                        <tbody>
                          {hitting_tr}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>


              </div>
            </div>


          </div>
          </React.Fragment>
        ):
        null
    )
  }
}

export default PlayerDetails;
