import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from './hoc/Layout/Layout';
import Team from './containers/Team/Team'
import TeamDetails from './containers/TeamDetails/TeamDetails'
import PlayerDetails from './containers/PlayerDetails/PlayerDetails'
import {Route, Switch} from 'react-router-dom';


function App() {
  let errorPage = (
    <div className="alert alert-danger" style={{"padding":"1rem","fontSize":"1.2rem"}}>
      Sorry for the inconvenience. <br/>Our site is temporarily unavailable.<br/>Please try again later.
    </div>
  )

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/error" exact render={() => errorPage}/>
          <Route path="/team/:id([0-9]+)" component={TeamDetails}/>
          <Route path="/player/:id([0-9]+)" component={PlayerDetails}/>
          <Route path="/" component={Team}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
