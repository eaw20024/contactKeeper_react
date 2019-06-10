import React, { Fragment } from '../node_modules/react';
import { BrowserRouter  as Router, Route, Switch } from '../node_modules/react-router-dom';
import Navbar from './component/layout/Navbar';
import './App.css';
import Home from './component/pages/Home'
import About from './component/pages/About'
import ContactState from './context/contact/ContactState'

const App = () => {
  return (
    <ContactState>
    <Router>
    <Fragment>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
      </div>
    </Fragment>
    </Router>
    </ContactState>
  );
}

export default App;
