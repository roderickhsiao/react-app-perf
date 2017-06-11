import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import BlockingAssets from './BlockingAssets';
import AspectRatio from './AspectRatio';
import BackgroundImage from './BackgroundImage';

class Main extends Component {
  render() {
    return (
      <div className="Py(1em) Px(20px)">
        <Route exact path="/" component={Home}/>
        <Route path="/image-tag" component={BlockingAssets}/>
        <Route path="/background-image" component={BackgroundImage}/>
        <Route path="/image-aspect-ratio" component={AspectRatio}/>
      </div>
    );
  }
};

export default Main;
