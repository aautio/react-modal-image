import React, { Component } from "react";

import {
  modalStyles,
  modalContentStyles,
  spinnerStyles,
  imageStyles,
  spacerStyles,
  iconStyles,
  iconWithMarginRightStyles,
  iconMenuStyles,
  captionStyles,
  headerStyles
} from "./styles";

import {
  ZoomInIcon,
  ZoomOutIcon,
  DownloadIcon,
  CloseIcon,
  SpinnerIcon
} from "./icons";

export default class extends Component {
  state = {
    loading: true,
    move: { x: 0, y: 0 },
    moveStart: undefined,
    zoom: 1
  };

  hidePlaceholder = () => {
    this.setState({ loading: false });
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

    if (point.target.id !== "react-modal-fullscreen-img") {
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

    if (this.state.zoom === 1) {
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

    if (this.state.zoom === 1) {
      // do not allow drag'n'drop if zoom has not been applied
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
      if (!prevState.moveStart) {
        return;
      }

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

  handleZoomIn = event => {
    event.preventDefault();
    this.setState(prevState => ({ zoom: prevState.zoom * 1.5 }));
  };

  handleZoomOut = event => {
    event.preventDefault();
    this.setState(prevState => ({
      zoom: prevState.zoom / 1.5 <= 1 ? 1 : prevState.zoom / 1.5,
      // reset position if zoome out all the way
      move: prevState.zoom / 1.5 <= 1 ? { x: 0, y: 0 } : prevState.move
    }));
  };

  render() {
    const { fullscreen, download, alt, onClose } = this.props;

    const { loading, zoom, move } = this.state;

    const imgTransform = {
      cursor: zoom > 1 ? "move" : undefined,
      transform: `translate3d(-50%, -50%, 0) translate3d(${move.x}px, ${
        move.y
      }px, 0) ${zoom > 1 ? `scale3d(${zoom}, ${zoom}, 1)` : ""}`
    };

    return (
      <div style={modalStyles}>
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
          style={modalContentStyles}
        >
          {loading && (
            <div style={spinnerStyles}>
              <SpinnerIcon />
            </div>
          )}
          <img
            onContextMenu={event => {
              event.preventDefault();
            }}
            id="react-modal-fullscreen-img"
            style={Object.assign({}, imageStyles, imgTransform)}
            src={fullscreen}
            onLoad={this.hidePlaceholder}
          />
        </div>
        <div style={headerStyles}>
          <span style={iconMenuStyles}>
            {download && (
              <a href={download} style={iconWithMarginRightStyles} download>
                <DownloadIcon />
              </a>
            )}
            <a href="" style={iconStyles} onClick={this.handleZoomIn}>
              <ZoomInIcon />
            </a>
            <a
              href=""
              style={iconWithMarginRightStyles}
              onClick={this.handleZoomOut}
            >
              <ZoomOutIcon />
            </a>
            <a style={iconStyles} onClick={onClose}>
              <CloseIcon />
            </a>
          </span>
          <span style={captionStyles}>{alt}</span>
        </div>
      </div>
    );
  }
}
