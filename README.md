# react-modal-image

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]

A _lightweight_ React component providing modal image Lightbox.

[DEMO](https://aautio.github.io/react-modal-image/)

## Features

* Only _3 kB_ when gzipped.
* Zero dependencies.
* Includes builds for CommonJS and ES modules.
* For React 15.x and 16.x.
* Esc, Enter & click outside the image close the lightbox
* User can zoom & move the image or download the highest quality one
* Image alt shown as title of lightbox

You need to bring your own `Set` polyfill if you use old Internet Explorers.

## Simple API

```js
import ModalImage from 'react-modal-image'

<ModalImage
  small={urlToTinyImageFile}
  large={urlToHugeImageFile}
  alt="Hello World!"
/>
```

| Prop          | Type     | Description                                                                         |
| ------------- | -------- | ----------------------------------------------------------------------------------- |
| `className`   | `String` | Optional. `class` for the small preview image.                                      |
| `alt`         | `String` | Optional. `alt` for the small image and the heading text in Lightbox.               |
| `small`       | `URL`    | `src` for the small preview image.                                                  |
| `smallSrcSet` | `String` | Optional. `srcSet` for the small preview image.                                     |
| `medium`      | `URL`    | Optional if `large` is defined. Image shown when zoomed out in Lightbox.            |
| `large`       | `URL`    | Optional if `medium` is defined. Image shown when zoomed in Lightbox. Downloadable. |

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
