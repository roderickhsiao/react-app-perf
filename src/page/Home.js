import React, { PureComponent } from 'react';
import Section from '../components/Section';

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h1 className="C(#00897b) Fz(1.2rem) Fw(n)">A simple App to show cases different performance related topics</h1>
        <div className="C(#000.87) Fz(.9rem)">
          <Section
            title={'Credits'}
            content={
              [
                'This app is created using react-creat-app. Thanks to the community support.',
                'CSS is built on top of Atomic CSS'
              ]
            }
          />
        </div>
      </div>
    );
  }
};

export default Home;
