import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landingpage from './landingpage';
import Przepisy from './przepisy';
import Kalkulatory from './kalkulatory';
import Info from './info';
import Kontakt from './kontakt';
import Blog from './blog';
import Tabele from './tabele';
import Home from './home';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/landingpage" component={Landingpage} />
    <Route path="/info" component={Info} />
    <Route path="/przepisy" component={Przepisy} />
    <Route path="/kalkulatory" component={Kalkulatory} />
    <Route path="/tabele" component={Tabele} />
    <Route path="/blog" component={Blog} />
    <Route path="/kontakt" component={Kontakt} />
  </Switch>
)

export default Main;
