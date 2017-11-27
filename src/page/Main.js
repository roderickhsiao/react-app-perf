import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import AspectRatio from './AspectRatio';
import AspectRatioFlexParent from './AspectRatioWithFlexParent';
import BackgroundImage from './BackgroundImage';
import BlockingAssets from './BlockingAssets';
import CenterAlign from './CenterAlign';
import Home from './Home';
import LazyloadWhenInViewport from './LazyloadWhenInViewport';
import LazyloadWithEmptyImage from './LazyloadWithEmptyImage';
import LazyloadWithPixelImage from './LazyloadWithPixelImage';
import StackingContext from './StackingContext';

class Main extends Component {
  render() {
    return (
      <div className="Py(1em) Px(20px)">
        <Route exact path="/" component={Home} />
        <Route path="/image-tag" component={BlockingAssets} />
        <Route path="/background-image" component={BackgroundImage} />
        <Route path="/image-aspect-ratio" component={AspectRatio} />
        <Route path="/image-aspect-ratio-flex-parent" component={AspectRatioFlexParent} />
        <Route
          path="/image-lazy-load-with-pixel-imge"
          component={LazyloadWithPixelImage}
        />
        <Route
          path="/image-lazy-load-with-empty-imge"
          component={LazyloadWithEmptyImage}
        />
        <Route
          path="/image-lazy-load-when-in-viewport"
          component={LazyloadWhenInViewport}
        />
        <Route path="/stacking-context" component={StackingContext} />
        <Route path="/center-align" component={CenterAlign} />
      </div>
    );
  }
}

export default Main;
