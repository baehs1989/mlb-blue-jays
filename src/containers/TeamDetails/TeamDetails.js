import React, {Component} from "react";
import PlayerList from './PlayerList/PlayerList';
import styles from './TeamDetails.module.css'
import axios from '../../base-axios';
import withErrorHandler from '../../hoc/withErrorHandler'
import Spinner from '../../components/Spinner/Spinner'

class TeamDetails extends Component {
  constructor(props) {
    super(props);
    this.paths = window.location.pathname.split('/')
    let buttons = {
      all:true,
      pitcher:false,
      catcher:false,
      infielder:false,
      outfielder:false
    }

    if (this.paths.length > 3 && this.paths[3] in buttons){
      buttons = {
        all:false,
        pitcher:false,
        catcher:false,
        infielder:false,
        outfielder:false
      }
      buttons[this.paths[3]] = true
    }

    this.state = {
      teamInfo: {},
      Pitcher: [],
      Catcher: [],
      Infielder: [],
      Outfielder: [],
      Hitter: [],
      buttons:buttons,
      loading:true
    }


  }


  componentDidMount(){
    axios.get(`/api/v1/teams/${this.props.match.params.id}/roster/Active?hydrate=person(stats(type=season))`)
        .then(response => {
            let new_state = {...this.state, loading:false}
            response.data.roster.forEach((el)=>{
              new_state[el.position.type].push(el)
            })

            this.setState(new_state)
        })
        .catch(error => {

        });

        axios.get(`/api/v1/teams/${this.props.match.params.id}`)
            .then(response => {
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
      this.props.history.replace("/team/"+this.props.match.params.id+ "/"+e.target.id)
    }
  }

  render(){
    let render = <Spinner/>
    if (!this.state.loading){
      render = (
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


          <div className={styles.Buttons + " row col-12 col-sm-10 justify-content-center"} onClick={(e) => this.buttonClickHandler(e)}>
            <div className={"col px-0 " + (this.state.buttons.all ? styles.Clicked : "")} id="all">ALL</div>
            <div className={"col px-0 " + (this.state.buttons.pitcher ? styles.Clicked : "")} id="pitcher">Pitchers</div>
            <div className={"col px-0 " + (this.state.buttons.catcher ? styles.Clicked : "")} id="catcher">Catchers</div>
            <div className={"col px-0 " + (this.state.buttons.infielder ? styles.Clicked : "")} id="infielder">Infield</div>
            <div className={"col px-0 " + (this.state.buttons.outfielder ? styles.Clicked : "")} id="outfielder">Outfield</div>
          </div>

          <PlayerList button={this.state.buttons} players={this.state.Pitcher} shown={this.state.buttons.all || this.state.buttons.pitcher}>Pitchers</PlayerList>
          <PlayerList button={this.state.buttons} players={this.state.Catcher} shown={this.state.buttons.all || this.state.buttons.catcher}>Catchers</PlayerList>
          <PlayerList button={this.state.buttons} players={this.state.Outfielder} shown={this.state.buttons.all || this.state.buttons.outfielder}>Outfielders</PlayerList>
          <PlayerList button={this.state.buttons} players={this.state.Infielder} shown={this.state.buttons.all|| this.state.buttons.infielder}>Infeilders</PlayerList>
          <PlayerList button={this.state.buttons} players={this.state.Hitter} shown={this.state.buttons.all|| this.state.buttons.infielder}>Designated Hitter</PlayerList>
        </div>

      )
    }

    return (
      <React.Fragment>
        {render}
      </React.Fragment>
    )
  }
}

export default withErrorHandler(TeamDetails,axios)
