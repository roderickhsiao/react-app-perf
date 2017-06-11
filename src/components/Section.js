import React, { PureComponent } from 'react';

class Section extends PureComponent {
  render() {
    return (
      <div className="section My(10px)">
        <h3 className="Fw(500) My(10px)">{this.props.title}</h3>
        <div className="H(100%) H(0) Mb(-1px) Bdbc(#000.12) BdB"></div>
        <div className="Py(10px)">
          {[]
            .concat(this.props.content)
            .map((item, i) => <div className="My(10px)" key={i}>{item}</div>)}
        </div>
      </div>
    );
  }
}

export default Section;
