import React from 'react';
import Transition from './components/Landing';
import About from './components/About';
import Languages from './components/Languages'
import NavSlide from './components/Menu'

//router stuff
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      
      <Router>
      <NavSlide/>
      <Switch>
          <Route path="/" exact component={Transition} />
          <Route path="/About" component={About} />
          <Route path="/Languages" component={Languages} />
        </Switch>
        
        {/* <div>
          <Pages/>
        </div> */}
      </Router>
    </div>
  );
}

export default App;
