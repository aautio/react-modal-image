import React, { Component } from "react";

import { smallImage } from "./styles";
import Lightbox from "./Lightbox";

export { default as Lightbox } from "./Lightbox";

export default class extends Component {
  state = { modalOpen: false };

  toggleModal = () => {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen
    }));
  };

  render() {
    const { small, smallSrcSet, medium, large, alt } = this.props;
    const { modalOpen } = this.state;

    return (
      <div>
        <img
          style={smallImage}
          onClick={this.toggleModal}
          src={small}
          srcSet={smallSrcSet}
          alt={alt}
        />
        {modalOpen && (
          <Lightbox
            medium={medium}
            large={large}
            alt={alt}
            onClose={this.toggleModal}
          />
        )}
      </div>
    );
  }
}
