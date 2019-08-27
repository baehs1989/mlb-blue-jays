import React, {Component} from "react";
import PlayerList from './PlayerList/PlayerList';
import styles from './TeamDetails.module.css'
import axios from '../../base-axios';

class TeamDetails extends Component {
  state = {
    teamInfo: {},
    Pitcher: [],
    Catcher: [],
    Infielder: [],
    Outfielder: [],
    Hitter: [],
    buttons:{
      all:true,
      pitcher:false,
      catcher:false,
      infielder:false,
      outfielder:false
    }
  }

  componentDidMount(){
    axios.get(`/api/v1/teams/${this.props.match.params.id}/roster/Active?hydrate=person(stats(type=season))`)
        .then(response => {
            let new_state = {...this.state}
            for (let player of response.data.roster){
              new_state[player.position.type].push(player)
            }
            this.setState(new_state)
        })
        .catch(error => {

        });

        axios.get(`/api/v1/teams/${this.props.match.params.id}`)
            .then(response => {
                let new_state = {...this.state}
                this.setState({teamInfo:response.data.teams[0]})
            })
            .catch(error => {

            });
  }

  buttonClickHandler(e){
    if (e.target.id.length > 0){
      let updated_buttons = {
        all:false,
        pitcher:false,
        catcher:false,
        infielder:false,
        outfielder:false
      }
      updated_buttons[e.target.id] = true
      this.setState({buttons:updated_buttons})
    }

  }



  render(){

    return (
          <div className="row col-12 justify-content-center">

            <div className={styles.TeamDetails + " row col-12 justify-content-center"}>
              <div className="card mb-3 col-10 col-sm-10" style={{"maxWidth": "600px" ,"padding":"0rem"}}>
                <div className="row no-gutters justify-content-center">
                  <div className="col-5 col-sm-5 p-3">
                    <img src={`https://www.mlbstatic.com/team-logos/${this.props.match.params.id}.svg`} alt="Logo"/>
                  </div>
                  <div className="col-7 col-sm-5 p-3" style={{"display":"flex", "alignItems":"center"}}>
                    <div>
                      <h5 style={{"marginTop":"0.5rem"}}>{this.state.teamInfo.name}</h5>
                      <p>({this.state.teamInfo.firstYearOfPlay}-present)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className={styles.Buttons + " row col-12 col-sm-8 justify-content-center"} onClick={(e) => this.buttonClickHandler(e)}>
              <div className={"col-2 col-md-2 px-0 " + (this.state.buttons.all ? styles.Clicked : "")} id="all">ALL</div>
              <div className={"col-2 col-md-2 px-0 " + (this.state.buttons.pitcher ? styles.Clicked : "")} id="pitcher">Pitchers</div>
              <div className={"col-2 col-md-2 px-0 " + (this.state.buttons.catcher ? styles.Clicked : "")} id="catcher">Catchers</div>
              <div className={"col-2 col-md-2 px-0 " + (this.state.buttons.infielder ? styles.Clicked : "")} id="infielder">Infield</div>
              <div className={"col-2 col-md-2 px-0 " + (this.state.buttons.outfielder ? styles.Clicked : "")} id="outfielder">Outfield</div>
            </div>

            <PlayerList players={this.state.Pitcher} shown={this.state.buttons.all || this.state.buttons.pitcher}>Pitchers</PlayerList>
            <PlayerList players={this.state.Catcher} shown={this.state.buttons.all || this.state.buttons.catcher}>Catchers</PlayerList>
            <PlayerList players={this.state.Outfielder} shown={this.state.buttons.all || this.state.buttons.infielder}>Outfielders</PlayerList>
            <PlayerList players={this.state.Infielder} shown={this.state.buttons.all|| this.state.buttons.outfielder}>Infeilders</PlayerList>
            <PlayerList players={this.state.Hitter} shown={this.state.buttons.all|| this.state.buttons.infielder}>Designated Hitter</PlayerList>
          </div>
    )
  }
}

export default TeamDetails;
