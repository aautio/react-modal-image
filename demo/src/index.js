import React, { Component } from "react";
import { render } from "react-dom";

import ModalImage from "../../src";

class Demo extends Component {
  render() {
    return (
      <div>
        <h2>You start with the imports</h2>
        <pre>import ModalImage from 'react-modal-image';</pre>

        <h2>then set up the component</h2>

        <pre>{`<ModalImage
  alt="Here is the caption"
  preview="https://picsum.photos/200/200?image=0"
  fullscreen="https://picsum.photos/1024/1024?image=0"
  download="https://picsum.photos/2048/2048?image=0"
/>
      `}</pre>

        <h2>and try it out in action </h2>

        <ModalImage
          alt="Here is the caption"
          preview="https://picsum.photos/200/200?image=0"
          fullscreen="https://picsum.photos/1024/1024?image=0"
          download="https://picsum.photos/2048/2048?image=0"
        />
        <p>^ click the image above</p>

        <h2>Further info</h2>

        <p>
          Project is hosted at{" "}
          <a href="https://github.com/aautio/react-modal-image">Github</a>
        </p>
        <p>
          Images for the demo are provided by{" "}
          <a href="https://picsum.photos/">Lorem Picsum</a>.
        </p>
        <p>
          Everything is put together with{" "}
          <a href="https://github.com/insin/nwb">nwb</a>.
        </p>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
