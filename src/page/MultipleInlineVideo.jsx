import React, { PureComponent, Fragment } from "react";
import PageCanvas from "../components/PageCanvas";

class MultipleInlineVideo extends PureComponent {
  render() {
    return (
      <PageCanvas
        title="Multiple loop video"
        section={
          <Fragment>
            {Array(300)
              .fill(null)
              .map(() => (
                <video
                  playInline
                  muted
                  src="https://media1.giphy.com/media/5heUAvp8TZwuT2mtgD/200w.mp4"
                />
              ))}
          </Fragment>
        }
      />
    );
  }
}

export default MultipleInlineVideo;
