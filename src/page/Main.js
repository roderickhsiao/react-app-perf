import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';

class Main extends PureComponent {
  render() {
    return (
      <div className="Py(1em) Px(20px)">
        <Route exact path="/" component={Home}/>
      </div>
    );
  }
};

export default Main;
