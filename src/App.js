import React, { PureComponent } from 'react';
import { HashRouter as Router } from 'react-router-dom';

import Nav from './components/Nav';
import navData from './data/nav';
import TwoColumnGrid from './components/TwoColumnGrid';

// pages
import Main from './page/Main';

import './atomic.css';

class App extends PureComponent {
  render() {
    return (
      <Router>
        <div className="App H(100vh)">
          <div className="App-header P(20px) C(#fff) Bgc(#263238) Ta(c)">
            <h2>I am a simple app <span role="img" aria-label="wave">👋 </span></h2>
          </div>
          <TwoColumnGrid
            col1={<Nav data={navData}/>}
            col2={<Main />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
