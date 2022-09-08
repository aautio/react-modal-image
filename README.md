# react-modal-image

[![npm package][npm-badge]][npm]

A _lightweight_ React component providing modal image Lightbox.

[DEMO](https://aautio.github.io/react-modal-image/)

## Features

- Only _3 kB_ when gzipped.
- Zero dependencies.
- Includes builds for CommonJS and ES modules.
- For React 16.x, 17.x and 18.x.
- Esc, Enter & click outside the image close the lightbox
- User can zoom & move the image or download the highest quality one
- Download and Zoom -buttons can be hidden.
- Image alt shown as title of lightbox
- Background color of transparent images can be overridden.

You need to bring your own `Set` and `fetch` polyfills if you use old Internet Explorers.

## Simple API

```js
import ModalImage from "react-modal-image";

<ModalImage
  small={urlToTinyImageFile}
  large={urlToHugeImageFile}
  alt="Hello World!"
/>;
```

| Prop                   | Type      | Description                                                                                                   |
| ---------------------- | --------- | ------------------------------------------------------------------------------------------------------------- |
| `className`            | `String`  | Optional. `class` for the small preview image.                                                                |
| `alt`                  | `String`  | Optional. `alt` for the small image and the heading text in Lightbox.                                         |
| `small`                | `URL`     | `src` for the small preview image.                                                                            |
| `smallSrcSet`          | `String`  | Optional. `srcSet` for the small preview image.                                                               |
| `medium`               | `URL`     | Optional if `large` is defined. Image shown when zoomed out in Lightbox.                                      |
| `large`                | `URL`     | Optional if `medium` is defined. Image shown when zoomed in Lightbox. Downloadable.                           |
| `hideDownload`         | `boolean` | Optional. Set to `true` to hide download-button from the Lightbox.                                            |
| `hideZoom`             | `boolean` | Optional. Set to `true` to hide zoom-button from the Lightbox.                                                |
| `showRotate`           | `boolean` | Optional. Set to `true` to show rotate-button within the Lightbox.                                            |
| `imageBackgroundColor` | `String`  | Optional. Background color of the image shown in Lightbox. Defaults to black. Handy for transparent images.   |

## Lightbox-only API for advanced usage

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

[npm-badge]: https://img.shields.io/npm/v/react-modal-image.svg
[npm]: https://www.npmjs.org/package/react-modal-image
