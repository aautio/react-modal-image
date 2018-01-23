import React, { Component } from "react";
import { render } from "react-dom";

import ModalImage from "../../src";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

class Demo extends Component {
  render() {
    const scope = { ModalImage };

    const demoCode = `<ModalImage
  alt="Here is the caption"
  preview="https://picsum.photos/200/200?image=0"
  fullscreen="https://picsum.photos/1024/1024?image=0"
  download="https://picsum.photos/2048/2048?image=0"
/>
`;

    return (
      <LiveProvider scope={scope} code={demoCode}>
        <h2>You start with the imports</h2>
        <pre>import ModalImage from 'react-modal-image';</pre>

        <h2>then set up the component</h2>
        <LiveEditor style={{ marginTop: "20px", marginBottom: "20px" }} />
        <LiveError
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            padding: "20px",
            backgroundColor: "lightpink"
          }}
        />
        <h2>and try it out in action </h2>
        <LivePreview />
        <p>^ click the image above</p>

        <h2>Further info</h2>

        <p>
          Project is hosted at{" "}
          <a href="https://github.com/aautio/react-modal-image">Github</a>
        </p>
        <p>
          The live editor is made with{" "}
          <a href="https://github.com/FormidableLabs/react-live">react-live</a>.
        </p>
        <p>
          Images for the demo are provided by{" "}
          <a href="https://picsum.photos/">Lorem Picsum</a>.
        </p>
        <p>
          Everything is put together with{" "}
          <a href="https://github.com/insin/nwb">nwb</a>.
        </p>
      </LiveProvider>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
