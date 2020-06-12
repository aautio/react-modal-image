import React, { Component } from "react";

import { SpinnerIcon } from "./icons";

export default class Image extends Component {
  state = {
    loading: true,
    lastClickTs: 0
  };

  handleOnLoad = () => {
    this.setState({ loading: false });
  };

  handleOnContextMenu = event => {
    !this.props.contextMenu && event.preventDefault();
  };

  // Fixes dblClick on mobile devices
  handleClick = event => {
    const { handleDoubleClick } = this.props;
    const { lastClickTs } = this.state
    const now = Date.now()
    const delta = now - lastClickTs;

    if (delta > 20 && delta < 500) {
      this.setState({ lastClickTs: 0 });
      handleDoubleClick(event);
    } else {
      this.setState({ lastClickTs: now });
    }
  };

  render() {
    const { id, className, src, style } = this.props;

    return (
      <div>
        {this.state.loading && <SpinnerIcon />}
        <img
          id={id}
          className={className}
          src={src}
          style={style}
          onLoad={this.handleOnLoad}
          onClick={this.handleClick}
          onContextMenu={this.handleOnContextMenu}
        />
      </div>
    );
  }
}
