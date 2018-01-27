import React, { Component } from "react";

import { SpinnerIcon } from "./icons";

import { spinner } from "./styles";

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
    const { id, src, handleDoubleClick, styles } = this.props;

    return (
      <div>
        {this.state.loading && (
          <div style={spinner}>
            <SpinnerIcon />
          </div>
        )}
        <img
          id={id}
          src={src}
          onLoad={this.handleOnLoad}
          onDoubleClick={handleDoubleClick}
          onContextMenu={this.handleOnContextMenu}
          style={styles}
        />
      </div>
    );
  }
}
