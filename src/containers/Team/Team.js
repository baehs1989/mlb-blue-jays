import React, { Component} from "react";
import styles from './Team.module.css'
import Division from './Division/Division'
import axios from '../../base-axios';
import withErrorHandler from '../../hoc/withErrorHandler';

class Team extends Component {
  state = {
    //American League
    103 : {
      201 : [], //Amaerican League East
      202 : [], //American League Central
      200 : [], //American League West
    },
    //National League
    104 : {
      204 : [], //National League East
      205 : [], //National League Central
      203 : [], //National League West
    },
    buttons: {
      albutton:true,
      nlbutton:false
    }
  }

  componentDidMount(){
    this.props.history.replace('/')

    axios.get('/api/v1/teams?sportId=1')
        .then(response => {
            let new_state = {...this.state}
            for (let team of response.data.teams){
              new_state[team.league.id][team.division.id].push(team)
            }
            this.setState(new_state)
        })
        .catch(error => {

        });
  }

  buttonClickHandler(button){
    let updated_buttons = {
      albutton: false,
      nlbutton: false
    }
    updated_buttons[button] = true
    this.setState({buttons:updated_buttons})
  }


  render(){
    return (
      <div>
        <div className={"row justify-content-center " + styles.Leagues}>
            <div className={"col-5 col-md-5 " + (this.state.buttons.albutton ? styles.Clicked : "")} onClick={() => this.buttonClickHandler("albutton")}>Amaerican League</div>
            <div className={"col-5 col-md-5 " + (this.state.buttons.nlbutton ? styles.Clicked : "")} onClick={() => this.buttonClickHandler("nlbutton")}>National League</div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 mb-5">
            <div style={{"display":this.state.buttons.albutton ? "block" : "none"}}>
              <Division league="AL" division_name="Amaerican League East" teams={this.state[103][201]}/>
              <Division league="AL" division_name="American League Central" teams={this.state[103][202]}/>
              <Division league="AL" division_name="American League West" teams={this.state[103][200]}/>
            </div>

            <div style={{"display":this.state.buttons.nlbutton ? "block" : "none"}}>
              <Division league="NL" division_name="National League East" teams={this.state[104][204]}/>
              <Division league="NL" division_name="National League Central" teams={this.state[104][205]}/>
              <Division league="NL" division_name="National League West" teams={this.state[104][203]}/>
            </div>
          </div>
        </div>

      </div>

    )
  }
}

export default withErrorHandler(Team,axios);
