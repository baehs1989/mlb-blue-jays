import React, { Component} from "react";
import styles from './Team.module.css'
import Division from './Division/Division'
import axios from '../../base-axios';
import withErrorHandler from '../../hoc/withErrorHandler';

import Spinner from "../../components/Spinner/Spinner"

class Team extends Component {
  constructor(props){
    super(props)

    this.paths = window.location.pathname.split('/')

    let buttons = {
        al:true,
        nl:false
    }

    if (this.paths.length > 1 && this.paths[1] in buttons){
      buttons = {
          al:false,
          nl:false
      }
      buttons[this.paths[1]] = true
      console.log(this.props.match)
      this.props.history.replace('/'+this.paths[1])
    }else{
      this.props.history.replace('/')
    }

    this.state = {
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
      buttons: buttons,
      loading:true
    }

  }


  componentDidMount(){
    axios.get('/api/v1/teams?sportId=1')
        .then(response => {
            let new_state = {...this.state, loading:false}
            response.data.teams.forEach((el) => {
              new_state[el.league.id][el.division.id].push(el)
            })

            this.setState(new_state)
        })
        .catch(error => {

        });
  }

  buttonClickHandler(button){
    let updated_buttons = {
      al: false,
      nl: false
    }
    updated_buttons[button] = true
    this.setState({buttons:updated_buttons})

    this.props.history.replace(button)
  }




  render(){
    return (
      <div>
        {this.state.loading?
          <div><Spinner/></div>
          :
          <div>
            <div className={"row justify-content-center " + styles.Leagues}>
                <div className={"col-6 col-md-5 " + (this.state.buttons.al ? styles.Clicked : "")} onClick={() => this.buttonClickHandler("al")}>Amaerican League</div>
                <div className={"col-6 col-md-5 " + (this.state.buttons.nl ? styles.Clicked : "")} onClick={() => this.buttonClickHandler("nl")}>National League</div>
            </div>

            <div className="row justify-content-center">
              <div className="col-12 mb-5">
                <div style={{"display":this.state.buttons.al ? "block" : "none"}}>
                  <Division league="AL" division_name="Amaerican League East" teams={this.state[103][201]}/>
                  <Division league="AL" division_name="American League Central" teams={this.state[103][202]}/>
                  <Division league="AL" division_name="American League West" teams={this.state[103][200]}/>
                </div>

                <div style={{"display":this.state.buttons.nl ? "block" : "none"}}>
                  <Division league="NL" division_name="National League East" teams={this.state[104][204]}/>
                  <Division league="NL" division_name="National League Central" teams={this.state[104][205]}/>
                  <Division league="NL" division_name="National League West" teams={this.state[104][203]}/>
                </div>
              </div>
            </div>

          </div>
        }
      </div>



    )
  }
}

export default withErrorHandler(Team,axios);
