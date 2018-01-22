import React, { Component } from "react";

import {
  modalStyles,
  modalContentStyles,
  spinnerStyles,
  imageStyles,
  spacerStyles,
  iconStyles,
  iconWithMarginRightStyles,
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
    const e = event.target;

    if (e.id !== "react-modal-fullscreen-img") {
      // the img was not a target of the coordinates
      return;
    }

    const dim = this.contentEl.getBoundingClientRect();
    const x = event.clientX - dim.left;
    const y = event.clientY - dim.top;

    return { x, y };
  };

  handleMouseDown = event => {
    event.preventDefault();

    const coords = this.getCoordinatesIfOverImg(event);

    if (!coords) {
      // click outside the img => close modal
      this.props.onClose();
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

  handleMouseMove = event => {
    event.preventDefault();

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

  handleMouseUp = event => {
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
      zoom: prevState.zoom / 1.5 < 1 ? 1 : prevState.zoom / 1.5
    }));
  };

  render() {
    const { fullscreen, download, alt, onClose } = this.props;

    const { loading, zoom, move } = this.state;

    const imgTransform = {
      transform: `translate(calc(-50% + ${move.x}px), calc(-50% + ${
        move.y
      }px)) scale(${zoom})`
    };

    return (
      <div style={modalStyles}>
        <div
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onMouseMove={this.handleMouseMove}
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
          <span style={{ display: "inline-block", float: "right" }}>
            <a href={download} style={iconWithMarginRightStyles} download>
              <DownloadIcon />
            </a>
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
            <a href="" style={iconStyles} onClick={onClose}>
              <CloseIcon />
            </a>
          </span>
          <span style={captionStyles}>{alt}</span>
        </div>
      </div>
    );
  }
}
