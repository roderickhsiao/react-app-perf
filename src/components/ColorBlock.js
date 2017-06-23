import React from 'react';
import classNames from 'classnames';

const ColorBlock = props =>
  <div
    className={classNames(
      'Bdrs(4px)',
      props.width,
      props.height,
      props.className
    )}
  >
    <div className="W(100%) H(100%) Ta(c)">
      <span className="W(0) H(100%) Va(m) D(ib)" />
      <div className="Va(m) D(ib)">{props.children}</div>
    </div>
  </div>;

ColorBlock.defaultProps = {
  width: 'W(400px)',
  height: 'H(300px)'
};

export default ColorBlock;
