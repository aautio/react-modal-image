import React, { Component } from "react";

import { SpinnerIcon } from "./icons";

export default class Image extends Component {
  state = {
    loading: true
  };

  handleOnLoad = () => {
    this.setState({ loading: false });
  };

  handleOnContextMenu = event => {
    !this.props.contextMenu && event.preventDefault();
  };

  render() {
    const { id, className, src, handleDoubleClick } = this.props;

    return (
      <React.Fragment>
        {this.state.loading && <SpinnerIcon />}
        <img
          id={id}
          className={className}
          src={src}
          onLoad={this.handleOnLoad}
          onDoubleClick={handleDoubleClick}
          onContextMenu={this.handleOnContextMenu}
        />
      </React.Fragment>
    );
  }
}
