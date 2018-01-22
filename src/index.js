import React, { Component } from "react";

import ModalImage from "./ModalImage";

const previewStyles = {
  cursor: "pointer"
};

export default class extends Component {
  state = { modalOpen: false };

  toggleModal = () => {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen
    }));
  };

  render() {
    const { preview, fullscreen, download, alt } = this.props;
    const { modalOpen } = this.state;

    return (
      <div>
        <img
          style={previewStyles}
          onClick={this.toggleModal}
          src={preview}
          alt={alt}
        />
        {modalOpen && (
          <ModalImage
            fullscreen={fullscreen}
            download={download}
            alt={alt}
            onClose={this.toggleModal}
          />
        )}
      </div>
    );
  }
}
