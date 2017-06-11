import React, { Component } from 'react';
import classNames from 'classnames';

class TwoColumnGrid extends Component {
  static defaultProps = {
    col1Width: '240px'
  }
  render() {
    return (
      <div className={classNames('Grid H(100%) D(f)', this.props.className)}>
        <div className="Col1" style={{ flex: `0 0 ${this.props.col1Width}` }}>{this.props.col1}</div>
        <div className="Col2 Flx(1)">{this.props.col2}</div>
      </div>
    );
  }
}

export default TwoColumnGrid;
