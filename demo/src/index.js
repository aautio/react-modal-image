import React, { Component } from 'react'
import { render } from 'react-dom'

import ModalImage from '../../src'

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>react-modal-image</h1>

        <p>Square</p>

        <ModalImage
          alt="Here is the caption"
          preview="https://picsum.photos/100/100?image=0"
          src="https://picsum.photos/1000/1000?image=0"
        />

        <p>Vertical</p>

        <ModalImage
          alt="Here is a caption too"
          preview="https://picsum.photos/20/100?image=1"
          src="https://picsum.photos/200/1000?image=1"
        />

        <p>Horizontal</p>

        <ModalImage
          alt="This is the caption for the third image"
          preview="https://picsum.photos/100/20?image=2"
          src="https://picsum.photos/1000/200?image=2"
        />
      </div>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
