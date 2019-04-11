import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/get-music' component={Dashboard}/>
{/*       <Route path='/latest' component={LatestView}/>
      <Route path='/toprated' component={TopRatedView}/>
      <Route path='/seasons/:id' component={SeasonsList}/>
      <Route path='/season/:id/:number/:name' component={SeasonDetail}/> */}
    </Switch>
  </main>
)

export default Main;