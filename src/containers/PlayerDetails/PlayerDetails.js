import React, {Component} from "react";
import styles from './PlayerDetails.module.css';
import axios from '../../base-axios';
import ScrollInfo from '../../components/ScrollInfo/ScrollInfo'
import withErrorHandler from '../../hoc/withErrorHandler';
import Spinner from '../../components/Spinner/Spinner'

import { StickyTable, Row, Cell } from 'react-sticky-table';
import "./sticky-table.css";



class PlayerDetails extends Component {
  constructor(props){
    super(props)
    this.state = {
      player: null,
      buttons: {
        pbutton:true,
        bbutton:false
      },
      loading:true
    }
  }


  onScrollHandler() {
  }

  onScrollHandler = this.onScrollHandler.bind(this);


  componentDidMount(){
    window.addEventListener("scroll", this.onScrollHandler)

    axios.get(`/api/v1/people/${this.props.match.params.id}?hydrate=stats(group=[hitting,pitching],type=[yearByYear])`)
        .then(response => {
          this.setState({"player" : response.data.people[0], loading:false})

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

  componentWillUnmount(){
    window.removeEventListener("scroll", this.onScrollHandler)
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
    let hitting_tr = []

    if (this.state.player !== null){
      this.state.player.stats.forEach((el)=>{
        player_data[el.group.displayName] = el.splits.filter(elm => {
          return !("numTeams" in elm)
        })
      })

      pitching_tr = player_data["pitching"].map((data,index) => {
        return (
          <Row key={index+data.season}>
            <Cell className="pinned">{data.season}</Cell>
            <Cell>{data.team.name}</Cell>
            <Cell>{data.league.name}</Cell>
            <Cell>{data.stat.wins}</Cell>
            <Cell>{data.stat.losses}</Cell>
            <Cell>{data.stat.era}</Cell>
            <Cell>{data.stat.gamesPlayed}</Cell>
            <Cell>{data.stat.gamesStarted}</Cell>
            <Cell>{data.stat.completeGames}</Cell>
            <Cell>{data.stat.shutouts}</Cell>
            <Cell>{data.stat.holds}</Cell>
            <Cell>{data.stat.saves}</Cell>
            <Cell>{data.stat.saveOpportunities}</Cell>
            <Cell>{data.stat.inningsPitched}</Cell>
            <Cell>{data.stat.hits}</Cell>
            <Cell>{data.stat.runs}</Cell>
            <Cell>{data.stat.earnedRuns}</Cell>
            <Cell>{data.stat.homeRuns}</Cell>
            <Cell>{data.stat.numberOfPitches}</Cell>
            <Cell>{data.stat.hitBatsmen}</Cell>
            <Cell>{data.stat.baseOnBalls}</Cell>
            <Cell>{data.stat.intentionalWalks}</Cell>
            <Cell>{data.stat.strikeOuts}</Cell>
            <Cell>{data.stat.avg}</Cell>
            <Cell>{data.stat.whip}</Cell>
            <Cell>{data.stat.groundOutsToAirouts}</Cell>
          </Row>
        )
      })

      hitting_tr = player_data["hitting"].map((data,index) => {
        return (
          <Row key={index+data.season}>
            <Cell className="pinned">{data.season}</Cell>
            <Cell>{data.team.name}</Cell>
            <Cell>{data.league.name}</Cell>
            <Cell>{data.stat.gamesPlayed}</Cell>
            <Cell>{data.stat.atBats}</Cell>
            <Cell>{data.stat.runs}</Cell>
            <Cell>{data.stat.hits}</Cell>
            <Cell>{data.stat.totalBases}</Cell>
            <Cell>{data.stat.doubles}</Cell>
            <Cell>{data.stat.triples}</Cell>
            <Cell>{data.stat.homeRuns}</Cell>
            <Cell>{data.stat.rbi}</Cell>
            <Cell>{data.stat.baseOnBalls}</Cell>
            <Cell>{data.stat.intentionalWalks}</Cell>
            <Cell>{data.stat.strikeOuts}</Cell>
            <Cell>{data.stat.stolenBases}</Cell>
            <Cell>{data.stat.caughtStealing}</Cell>
            <Cell>{data.stat.avg}</Cell>
            <Cell>{data.stat.obp}</Cell>
            <Cell>{data.stat.slg}</Cell>
            <Cell>{data.stat.obp}</Cell>
            <Cell>{data.stat.groundOutsToAirouts}</Cell>
          </Row>
        )
      })
    }


    return (
      this.state.loading?
          <Spinner/>
        :
          <div className="row col-12 justify-content-center">
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

            <div className={styles.STAT + " col-12"}>

              <div className={styles.Buttons + " row justify-content-center"} onClick={(e) => this.buttonClickHandler(e)}>
                <div className={"col-3 " + (this.state.buttons.pbutton?styles.Clicked:"")} id="pbutton">Ptiching</div>
                <div className={"col-3 " + (this.state.buttons.bbutton?styles.Clicked:"")} id="bbutton">Batting</div>
              </div>

              <div className="row justify-content-center">

                  <div className="col-12 p-0" style={{"display":(this.state.buttons.pbutton?"block":"none")}}>

                    {pitching_tr.length > 0 ?
                      <div>
                      <ScrollInfo/>
                      <StickyTable>
                        <Row className="header">
                        <Cell className="pinned">Season</Cell>
                        <Cell>Team</Cell>
                        <Cell>LG</Cell>
                        <Cell>W</Cell>
                        <Cell>L</Cell>
                        <Cell>ERA</Cell>
                        <Cell>G</Cell>
                        <Cell>GS</Cell>
                        <Cell>CG</Cell>
                        <Cell>SHO</Cell>
                        <Cell>HLD</Cell>
                        <Cell>SV</Cell>
                        <Cell>SVO</Cell>
                        <Cell>IP</Cell>
                        <Cell>H</Cell>
                        <Cell>R</Cell>
                        <Cell>ER</Cell>
                        <Cell>HR</Cell>
                        <Cell>NP</Cell>
                        <Cell>HB</Cell>
                        <Cell>BB</Cell>
                        <Cell>IBB</Cell>
                        <Cell>SO</Cell>
                        <Cell>AVG</Cell>
                        <Cell>WHIP</Cell>
                        <Cell>GO/AO</Cell>
                        </Row>
                        {pitching_tr}
                      </StickyTable>
                      </div>
                      :
                      <div>No Record</div>
                    }

                  </div>

                  <div className="col-12 p-0" style={{"display":(this.state.buttons.bbutton?"block":"none")}}>
                    {hitting_tr.length > 0 ?
                      <div>
                      <ScrollInfo/>
                      <StickyTable>
                        <Row className="header">
                          <Cell className="pinned">Season</Cell>
                          <Cell>Team</Cell>
                          <Cell>LG</Cell>
                          <Cell>G</Cell>
                          <Cell>AB</Cell>
                          <Cell>R</Cell>
                          <Cell>H</Cell>
                          <Cell>TB</Cell>
                          <Cell>2B</Cell>
                          <Cell>3B</Cell>
                          <Cell>HR</Cell>
                          <Cell>RBI</Cell>
                          <Cell>BB</Cell>
                          <Cell>IBB</Cell>
                          <Cell>SO</Cell>
                          <Cell>SB</Cell>
                          <Cell>CS</Cell>
                          <Cell>AVG</Cell>
                          <Cell>OBP</Cell>
                          <Cell>SLG</Cell>
                          <Cell>OPS</Cell>
                          <Cell>GO/AO</Cell>
                        </Row>
                        {hitting_tr}
                      </StickyTable>
                      </div>
                      :
                      <div>No Record</div>
                    }
                  </div>

              </div>
            </div>



          </div>
    )
  }
}

export default withErrorHandler(PlayerDetails,axios);
