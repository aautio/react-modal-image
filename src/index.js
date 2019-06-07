import React, { Component } from "react";
import ReactDOM from "react-dom";

import Lightbox from "./Lightbox";

export { default as Lightbox } from "./Lightbox";

export default class extends Component {
  state = { modalOpen: false };

  toggleModal = () => {
    this.setState(prev => ({
      modalOpen: !prev.modalOpen
    }));
  };

  render() {
    const {
      className,
      small,
      smallSrcSet,
      medium,
      large,
      alt,
      hideDownload,
      hideZoom,
      renderRoot
    } = this.props;
    const { modalOpen } = this.state;
    var wrapit = function(element) {
        return (renderRoot ? ReactDOM.createPortal(element, document.getElementById("root")) :
            element);
    };

    return (
      <div>
        <img
          className={className}
          style={{
            cursor: "pointer",
            maxWidth: "100%",
            maxHeight: "100%"
          }}
          onClick={this.toggleModal}
          src={small}
          srcSet={smallSrcSet}
          alt={alt}
        />
        {modalOpen && wrapit(
          <Lightbox
            medium={medium}
            large={large}
            alt={alt}
            onClose={this.toggleModal}
            hideDownload={hideDownload}
            hideZoom={hideZoom}
          />
        )}
      </div>
    );
  }
}
