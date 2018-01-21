import React, { Fragment, Component } from 'react'

import ModalImage from './ModalImage'

const previewStyles = {
  cursor: 'pointer',
}

export default class extends Component {
  state = { modalOpen: false }

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    })
  }

  render() {
    const { preview, src, alt } = this.props
    const { modalOpen } = this.state

    return (
      <Fragment>
        <img
          style={previewStyles}
          onClick={this.toggleModal}
          src={preview}
          alt={alt}
        />
        {modalOpen && (
          <ModalImage src={src} alt={alt} onClose={this.toggleModal} />
        )}
      </Fragment>
    )
  }
}
