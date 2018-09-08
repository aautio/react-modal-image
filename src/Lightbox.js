import React, { Component } from "react";

import * as style from "./styles";

import Header from "./Header";
import Image from "./Image";

import { SpinnerIcon } from "./icons";

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

    this.setState(prevState => {
      return {
        moveStart: {
          x: coords.x - prevState.move.x,
          y: coords.y - prevState.move.y
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

    this.setState(prevState => {
      return {
        move: {
          x: coords.x - prevState.moveStart.x,
          y: coords.y - prevState.moveStart.y
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
    this.setState(prevState => ({
      zoomed: !prevState.zoomed,
      // reset position if zoomed out
      move: prevState.zoomed ? { x: 0, y: 0 } : prevState.move
    }));
  };

  render() {
    const { medium, large, alt, onClose, hideDownload, hideZoom } = this.props;
    const { move, zoomed } = this.state;

    return (
      <div style={style.modal}>
        <div
          onMouseDown={this.handleMouseDownOrTouchStart}
          onMouseUp={this.handleMouseUpOrTouchEnd}
          onMouseMove={this.handleMouseMoveOrTouchMove}
          onTouchStart={this.handleMouseDownOrTouchStart}
          onTouchEnd={this.handleMouseUpOrTouchEnd}
          onTouchMove={this.handleMouseMoveOrTouchMove}
          ref={el => {
            this.contentEl = el;
          }}
          style={style.modalContent}
        >
          {zoomed && (
            <Image
              id="react-modal-image-img"
              src={large || medium}
              styles={style.largeImage(move.x, move.y)}
              handleDoubleClick={this.toggleZoom}
            />
          )}
          {!zoomed && (
            <Image
              id="react-modal-image-img"
              src={medium || large}
              styles={style.mediumImage}
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
    );
  }
}
