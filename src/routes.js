import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './global.css';
import Home from './pages/index';

const Index = () => {
  return (
    <Router>
        <Switch>
            <Route path="/" exact={true} component={Home} />
        </Switch>
    </Router>
  )
}

export default Index;