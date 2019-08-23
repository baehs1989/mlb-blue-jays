import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from './hoc/Layout/Layout';


function App() {
  return (
    <div className="App">
      <Layout>
        <div className="container">

          <div className="row justify-content-center">
            <div className="league col-6">Amaerican League</div>
            <div className="league col-6">National League</div>
          </div>


          <div className="division">
            <span>NL East</span>
          </div>

          <div className="row justify-content-center">
            <div className="team_logo col-6 col-sm-2">
              <img src="https://www.mlbstatic.com/team-logos/141.svg" width="100%" alt="Logo"/>
            </div>
            <div className="team_logo col-6 col-sm-2">
              <img src="https://www.mlbstatic.com/team-logos/141.svg" width="100%" alt="Logo"/>
            </div>
            <div className="team_logo col-6 col-sm-2">
              <img src="https://www.mlbstatic.com/team-logos/141.svg" width="100%" alt="Logo"/>
            </div>
            <div className="team_logo col-6 col-sm-2">
              <img src="https://www.mlbstatic.com/team-logos/141.svg" width="100%" alt="Logo"/>
            </div>
            <div className="team_logo col-6 col-sm-2">
              <img src="https://www.mlbstatic.com/team-logos/141.svg" width="100%" alt="Logo"/>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default App;
