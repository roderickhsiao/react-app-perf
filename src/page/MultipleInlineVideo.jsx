import React, { PureComponent, Fragment } from "react";
import PageCanvas from "../components/PageCanvas";

class AutoPlayVideo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      canPlay: false
    };
  }
  render() {
    return (
      <video
        className="Mx(12px) My(8px)"
        onCanPlay={() => this.setState({ canPlay: true })}
        autoPlay
        loop
        playsInline
        muted
        style={{ borderColor: this.state.canPlay ? "#00897b" : "transparent", borderWidth: '5px', borderStyle: 'solid' }}
        src={this.props.src}
      />
    );
  }
}
class MultipleInlineVideo extends PureComponent {
  render() {
    return (
      <PageCanvas
        title="Multiple loop video"
        section={
          <Fragment>
            {Array(300)
              .fill(null)
              .map((item, index) => (
                <AutoPlayVideo src="https://media1.giphy.com/media/5heUAvp8TZwuT2mtgD/200w.mp4" key={index} />
              ))}
          </Fragment>
        }
      />
    );
  }
}

export default MultipleInlineVideo;
