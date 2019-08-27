import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from './hoc/Layout/Layout';
import Team from './containers/Team/Team'
import TeamDetails from './containers/TeamDetails/TeamDetails'
import PlayerDetails from './containers/PlayerDetails/PlayerDetails'
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/team/:id([0-9]+)" exact component={TeamDetails}/>
          <Route path="/player/:id([0-9]+)" exact component={PlayerDetails}/>
          <Route path="/" component={Team}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
