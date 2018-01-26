import React, { Component } from "react";
import { render } from "react-dom";

import ModalImage from "../../src";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>react-modal-image</h1>

        <h2>#1 with alt, small, medium and large props</h2>

        <div style={{ maxWidth: "400px" }}>
          <ModalImage
            alt="Here is the caption"
            small="https://raw.githubusercontent.com/aautio/react-modal-image/master/demo/src/example_img_small.jpg"
            medium="https://raw.githubusercontent.com/aautio/react-modal-image/master/demo/src/example_img_medium.jpg"
            large="https://raw.githubusercontent.com/aautio/react-modal-image/master/demo/src/example_img_large.jpg"
          />
        </div>
        <p>^ click or inspect the image above</p>

        <h2>#2 with small and large props defined only</h2>

        <div style={{ maxWidth: "400px" }}>
          <ModalImage
            small="https://raw.githubusercontent.com/aautio/react-modal-image/master/demo/src/example_img_small.jpg"
            large="https://raw.githubusercontent.com/aautio/react-modal-image/master/demo/src/example_img_large.jpg"
          />
        </div>
        <p>^ click or inspect the image above</p>

        <h2>#3 with small and medium props defined only</h2>

        <div style={{ maxWidth: "400px" }}>
          <ModalImage
            small="https://raw.githubusercontent.com/aautio/react-modal-image/master/demo/src/example_img_small.jpg"
            medium="https://raw.githubusercontent.com/aautio/react-modal-image/master/demo/src/example_img_medium.jpg"
          />
        </div>
        <p>^ click or inspect the image above</p>

        <h2>Further info</h2>

        <p>
          <a href="https://github.com/aautio/react-modal-image">Github</a>
        </p>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
