# react-modal-image

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

A tiny an a simple React component providing modal image Lightbox.

[DEMO](https://aautio.github.io/react-modal-image/)

## Usage

You'll provide 3 images, a small, medium size and a large one. The component will display the small one by default and open a Lightbox for the medium & large ones if clicked.

## Features

* Only _3 kB_ when gzipped.
* Zero dependencies.
* Includes builds for CommonJS and ES modules.
* For React 15.x and 16.x.
* Image alt text displayed as caption
* Download button
* Zoom and move the image

You need to bring your own `Set` polyfill if you use old Internet Explorers.

## Simple API

```js
import ModalImage from 'react-modal-image'

<ModalImage
  small={urlToTinyImageFile}
  smallSrcSet={srcSetDefToTinyImageFile}
  medium={urlToLargeImageFile}
  large={urlToHugeImageFile}
  alt="Hello World!"
/>
```

| Prop          | Type     | Description                                            |
| ------------- | -------- | ------------------------------------------------------ |
| `alt`         | `String` | alt text for the small img and the header in Lightbox. |
| `small`       | `URL`    | `src` for the small small img.                         |
| `smallSrcSet` | `String` | `srcSet` for the small small imgs.                     |
| `medium`      | `URL`    | Image shown in Lightbox.                               |
| `large`       | `URL`    | Image shown when zoomed in Lightbox. Downloadable.     |

## Lightbox-only API

You can also choose to import only the Lightbox.

To use the Lightbox only, you'll need to handle the open state by yourself:

```js
import { Lightbox } from "react-modal-image";

// ...

const closeLightbox = () => {
  this.state.open = true;
};

// ...

{
  this.state.open && (
    <Lightbox
      medium={urlToLargeImageFile}
      large={urlToHugeImageFile}
      alt="Hello World!"
      onClose={this.closeLightbox}
    />
  );
}
```

| Prop      | Type       | Description                                             |
| --------- | ---------- | ------------------------------------------------------- |
| `onClose` | `function` | Will be invoked when the Lightbox requests to be closed |

[build-badge]: https://img.shields.io/travis/aautio/react-modal-image/master.png?style=flat-square
[build]: https://travis-ci.org/aautio/react-modal-image
[npm-badge]: https://img.shields.io/npm/v/react-modal-image.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-modal-image
[coveralls-badge]: https://img.shields.io/coveralls/aautio/react-modal-image/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/aautio/react-modal-image
