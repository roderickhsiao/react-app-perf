import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import BlockingAssets from './BlockingAssets';

class Main extends Component {
  render() {
    return (
      <div className="Py(1em) Px(20px)">
        <Route exact path="/" component={Home}/>
        <Route path="/blocking-assets" component={BlockingAssets}/>
      </div>
    );
  }
};

export default Main;
