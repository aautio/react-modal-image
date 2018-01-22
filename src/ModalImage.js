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
    // ESC or ENTER?
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

  getClickCoordinates = event => {
    const e = event.target;
    const dim = this.contentEl.getBoundingClientRect();
    const x = event.clientX - dim.left;
    const y = event.clientY - dim.top;

    return { x, y };
  };

  handleMouseDown = event => {
    event.preventDefault();

    const coords = this.getClickCoordinates(event);

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

    const moveEnd = this.getClickCoordinates(event);

    this.setState(prevState => {
      if (!prevState.moveStart) {
        return;
      }

      return {
        move: {
          x: moveEnd.x - prevState.moveStart.x,
          y: moveEnd.y - prevState.moveStart.y
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
    const { zoom } = this.state;
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
          onMouseLeave={this.handleMouseUp}
          ref={el => {
            this.contentEl = el;
          }}
          style={modalContentStyles}
        >
          {loading && (
            <div style={spinnerStyles}>
              <svg
                fill="#ffffff"
                height="48"
                viewBox="0 0 24 24"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z" />
                <path d="M0 0h24v24H0V0z" fill="none" />
              </svg>
            </div>
          )}
          <img
            style={Object.assign({}, imageStyles, imgTransform)}
            src={fullscreen}
            onLoad={this.hidePlaceholder}
          />
        </div>
        <div style={headerStyles}>
          <a style={iconStyles} onClick={onClose}>
            <svg
              fill="#ffffff"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </a>
          <a style={iconWithMarginRightStyles} onClick={this.handleZoomOut}>
            <svg
              fill="#ffffff"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z" />
            </svg>
          </a>
          <a style={iconStyles} onClick={this.handleZoomIn}>
            <svg
              fill="#ffffff"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
            </svg>
          </a>
          <a style={iconWithMarginRightStyles} href={download} download>
            <svg
              fill="#ffffff"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </a>
          <p style={captionStyles}>{alt}</p>
        </div>
      </div>
    );
  }
}
