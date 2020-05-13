import React from 'react';
import Home from './Home';
import SinglePlayer from './SinglePlayer';
import Join from './Join';
import Create from './Create';
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/badchess" exact component={Home}/>
        <Route path="/badchess/create" component={Create}/>
        <Route path="/badchess/join" component={Join}/>
        <Route path="/badchess/singleplayer" component={SinglePlayer}/>
      </Switch>
    </Router>
  );
}

export default App;
