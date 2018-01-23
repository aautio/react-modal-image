# react-modal-image

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

This is a tiny React component providing modal image Lightbox.

[DEMO](https://aautio.github.io/react-modal-image/)

## Features

* Only _3 kB_ when gzipped.
* Zero dependencies.
* Includes builds for CommonJS and ES modules.
* For React 15.x and 16.x.
* Image alt text displayed as caption
* Download button
* Zoom and move the image

You need to provide a polyfill for `Object.assign()` in your app to support old Internet Explorers.

## API

```
import ModalImage from 'react-modal-image'

<ModalImage
  preview={urlToTinyImageFile}
  fullscreen={urlToLargeImageFile}
  download={urlToHugeImageFile}
  alt="Hello World!"
/>
```

| Prop         | Type     | Description                                                                      |
| ------------ | -------- | -------------------------------------------------------------------------------- |
| `alt`        | `String` | alt text for the preview img and shown as a caption when the Lightbox is open.   |
| `preview`    | `URL`    | The small img to be rendered. Clicking the image will open Lightbox.             |
| `fullscreen` | `URL`    | This is shown if Lightbox is open. Can be zoomed in/out and dragged around.      |
| `download`   | `URL`    | Image to be downloaded when you click the download icon on the top right corner. |

[build-badge]: https://img.shields.io/travis/aautio/react-modal-image/master.png?style=flat-square
[build]: https://travis-ci.org/aautio/react-modal-image
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
[coveralls-badge]: https://img.shields.io/coveralls/aautio/react-modal-image/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/aautio/react-modal-image
