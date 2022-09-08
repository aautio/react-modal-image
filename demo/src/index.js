import React from "react";
import { createRoot } from 'react-dom/client';

import ModalImage from "../../src";

import pkg from "../../package.json"

const Demo = () => (
  <div>
    <h1>Demo of react-modal-image@{pkg.version}</h1>

    <h2>#1 with alt, small, medium and large props</h2>

    <div>
      <ModalImage
        alt="Here is the caption"
        small="example_img_small.jpg"
        medium="example_img_medium.jpg"
        large="example_img_large.jpg"
      />
    </div>
    <p>^ click or inspect the image above</p>

    <h2>#2 with small and large props defined only</h2>

    <div>
      <ModalImage
        small="example_img_small.jpg"
        large="example_img_large.jpg"
      />
    </div>
    <p>^ click or inspect the image above</p>

    <h2>#3 with small and medium props defined only</h2>

    <div>
      <ModalImage
        small="example_img_small.jpg"
        medium="example_img_medium.jpg"
      />
    </div>
    <p>^ click or inspect the image above</p>

    <h2>#4 with download and zoom -buttons hidden</h2>

    <div>
      <ModalImage
        small="example_img_small.jpg"
        large="example_img_large.jpg"
        hideDownload={true}
        hideZoom={true}
      />
    </div>
    <p>^ click or inspect the image above</p>

    <h2>#5 with transparent png shown in hotpink background</h2>

    <div>
      <ModalImage
        small="example_transparent_heart.png"
        large="example_transparent_heart.png"
        hideDownload={true}
        hideZoom={true}
        imageBackgroundColor="hotpink"
      />
    </div>
    <p>^ click or inspect the image above</p>

    <h2>#6 with rotation -button displayed</h2>

    <div>
      <ModalImage
        small="example_img_small.jpg"
        large="example_img_large.jpg"
        showRotate={true}
      />
    </div>
    <p>^ click or inspect the image above</p>

    <h2>#7 with images from external domain</h2>

    <div>
      <ModalImage
        small="https://dummyimage.com/420x200/000/aaa"
        large="https://dummyimage.com/640x360/000/aaa"
      />
    </div>

    <h2>Further info</h2>

    <p>
      <a href="https://github.com/aautio/react-modal-image">Github</a>
    </p>
  </div>
);

// @ts-ignore
const root = createRoot(document.querySelector("#demo"));
root.render(<Demo />);
