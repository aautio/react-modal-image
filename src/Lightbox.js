import React, { Component } from "react";

import StyleInjector, { lightboxStyles } from "./styles";

import Header from "./Header";
import Image from "./Image";

export default class Lightbox extends Component {
  state = {
    move: { x: 0, y: 0 },
    moveStart: undefined,
    zoomed: false
  };

  handleKeyDown = event => {
    // ESC or ENTER closes the modal
    if (event.keyCode === 27 || event.keyCode === 13) {
      this.props.onClose();
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }

  getCoordinatesIfOverImg = event => {
    const point = event.changedTouches ? event.changedTouches[0] : event;

    if (point.target.id !== "react-modal-image-img") {
      // the img was not a target of the coordinates
      return;
    }

    const dim = this.contentEl.getBoundingClientRect();
    const x = point.clientX - dim.left;
    const y = point.clientY - dim.top;

    return { x, y };
  };

  handleMouseDownOrTouchStart = event => {
    event.preventDefault();

    if (event.touches && event.touches.length > 1) {
      // more than one finger, ignored
      return;
    }

    const coords = this.getCoordinatesIfOverImg(event);

    if (!coords) {
      // click outside the img => close modal
      this.props.onClose();
    }

    if (!this.state.zoomed) {
      // do not allow drag'n'drop if zoom has not been applied
      return;
    }

    this.setState(prev => {
      return {
        moveStart: {
          x: coords.x - prev.move.x,
          y: coords.y - prev.move.y
        }
      };
    });
  };

  handleMouseMoveOrTouchMove = event => {
    event.preventDefault();

    if (!this.state.zoomed || !this.state.moveStart) {
      // do not allow drag'n'drop if zoom has not been applied
      // or if there has not been a click
      return;
    }

    if (event.touches && event.touches.length > 1) {
      // more than one finger, ignored
      return;
    }

    const coords = this.getCoordinatesIfOverImg(event);

    if (!coords) {
      return;
    }

    this.setState(prev => {
      return {
        move: {
          x: coords.x - prev.moveStart.x,
          y: coords.y - prev.moveStart.y
        }
      };
    });
  };

  handleMouseUpOrTouchEnd = event => {
    this.setState({
      moveStart: undefined
    });
  };

  toggleZoom = event => {
    event.preventDefault();
    this.setState(prev => ({
      zoomed: !prev.zoomed,
      // reset position if zoomed out
      move: prev.zoomed ? { x: 0, y: 0 } : prev.move
    }));
  };

  render() {
    const { medium, large, alt, onClose, hideDownload, hideZoom } = this.props;
    const { move, zoomed } = this.state;

    return (
      <React.Fragment>
        <StyleInjector
          name="__react_modal_image__lightbox"
          css={lightboxStyles}
        />

        <div className="__react_modal_image__modal_container">
          <div
            className="__react_modal_image__modal_content"
            onMouseDown={this.handleMouseDownOrTouchStart}
            onMouseUp={this.handleMouseUpOrTouchEnd}
            onMouseMove={this.handleMouseMoveOrTouchMove}
            onTouchStart={this.handleMouseDownOrTouchStart}
            onTouchEnd={this.handleMouseUpOrTouchEnd}
            onTouchMove={this.handleMouseMoveOrTouchMove}
            ref={el => {
              this.contentEl = el;
            }}
          >
            {zoomed && (
              <Image
                id="react-modal-image-img"
                className="__react_modal_image__large_img"
                src={large || medium}
                style={{
                  transform: `translate3d(-50%, -50%, 0) translate3d(${
                    move.x
                  }px, ${move.y}px, 0)`,
                  WebkitTransform: `translate3d(-50%, -50%, 0) translate3d(${
                    move.x
                  }px, ${move.y}px, 0)`,
                  MsTransform: `translate3d(-50%, -50%, 0) translate3d(${
                    move.x
                  }px, ${move.y}px, 0)`
                }}
                handleDoubleClick={this.toggleZoom}
              />
            )}
            {!zoomed && (
              <Image
                id="react-modal-image-img"
                className="__react_modal_image__medium_img"
                src={medium || large}
                handleDoubleClick={this.toggleZoom}
                contextMenu={!medium}
              />
            )}
          </div>

          <Header
            image={large || medium}
            alt={alt}
            zoomed={zoomed}
            toggleZoom={this.toggleZoom}
            onClose={onClose}
            enableDownload={!hideDownload}
            enableZoom={!hideZoom}
          />
        </div>
      </React.Fragment>
    );
  }
}
