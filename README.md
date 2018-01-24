# react-modal-image

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

A tiny an a simple React component providing modal image Lightbox.

[DEMO](https://aautio.github.io/react-modal-image/)

## Features

* Only _3 kB_ when gzipped.
* Zero dependencies.
* Includes builds for CommonJS and ES modules.
* For React 15.x and 16.x.
* Image alt text displayed as caption
* Download button
* Zoom and move the image

You need to bring your own `Object.assign()` polyfill if you use old Internet Explorers.

## API

```js
import ModalImage from 'react-modal-image'

<ModalImage
  preview={urlToTinyImageFile}
  previewSrcSet={srcSetDefToTinyImageFile}
  fullscreen={urlToLargeImageFile}
  download={urlToHugeImageFile}
  alt="Hello World!"
/>
```

| Prop            | Type     |          | Description                                                      |
| --------------- | -------- | -------- | ---------------------------------------------------------------- |
| `alt`           | `String` | Optional | alt text for the preview img and the header in Lightbox.         |
| `preview`       | `URL`    | Required | `src` for the small preview img.                                 |
| `previewSrcSet` | `String` | Optional | `srcSet` for the small preview imgs.                             |
| `fullscreen`    | `URL`    | Required | Image shown in Lightbox.                                         |
| `download`      | `URL`    | Optional | Download the image by clicking the icon in the top right corner. |

[build-badge]: https://img.shields.io/travis/aautio/react-modal-image/master.png?style=flat-square
[build]: https://travis-ci.org/aautio/react-modal-image
[npm-badge]: https://img.shields.io/npm/v/react-modal-image.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-modal-image
[coveralls-badge]: https://img.shields.io/coveralls/aautio/react-modal-image/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/aautio/react-modal-image
