import React, { PureComponent } from 'react';

class PageCanvas extends PureComponent {
  render() {
    return (
      <div className="canvas">
        <h1 className="C(#00897b) Fz(1.2rem) Fw(n)">{this.props.title}</h1>
        {this.props.subtitle &&
          <div className="Fs(i)">{this.props.subtitle}</div>}

        <div className="C(#000.87) Fz(.9rem)">
          {this.props.section}
        </div>
      </div>
    );
  }
}

export default PageCanvas;
