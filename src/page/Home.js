import React, { Component } from 'react';

import PageCanvas from '../components/PageCanvas';
import Section from '../components/Section';

class Home extends Component {
  render() {
    return (
      <PageCanvas
        title={'A simple App to show cases different performance related topics'}
        section={
          <Section
            title={'Credits'}
            content={
              [
                'This app is created using react-creat-app. Thanks to the community support.',
                'CSS is built on top of Atomic CSS'
              ]
            }
          />
        }
      />
    );
  }
};

export default Home;
