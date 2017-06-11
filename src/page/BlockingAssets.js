import React, { Component } from 'react';

import PageCanvas from '../components/PageCanvas';
import Section from '../components/Section';

class BlockingAssets extends Component {
  render() {
    return (
      <PageCanvas
        title="Blocking assets profiling"
        section={
          <Section
            title="Loading an image"
            content={
              <div className="Maw(400px)">
                <img className="W(100%)" alt="puppy"
                  src="https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/s1080x1080/e15/fr/18809583_812711995553463_3365235085484752896_n.jpg" />
              </div>
            }
          />
        }
      />
    );
  }
}

export default BlockingAssets;
