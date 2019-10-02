import { Component } from "react";

function appendStyle(id, css) {
  if (!document.head.querySelector("#" + id)) {
    const node = document.createElement("style");
    node.textContent = css;
    node.type = "text/css";
    node.id = id;

    document.head.appendChild(node);
  }
}

export default class StyleInjector extends Component {
  componentDidMount() {
    appendStyle(this.props.name, this.props.css);
  }

  componentWillUnmount() {
    const node = document.getElementById(this.props.name);
    node.parentNode.removeChild(node);
  }

  render() {
    return null;
  }
}

export const lightboxStyles = ({ imageBackgroundColor }) => `
  body {
    overflow: hidden;
  }

  .__react_modal_image__modal_container {
    position: fixed;
    z-index: 5000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    touch-action: none;
    overflow: hidden;
  }

  .__react_modal_image__modal_content {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .__react_modal_image__modal_content img, 
  .__react_modal_image__modal_content svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    -webkit-transform: translate3d(-50%, -50%, 0);
    -ms-transform: translate3d(-50%, -50%, 0);
    overflow: hidden;
  }

  .__react_modal_image__medium_img {
    max-width: 98%;
    max-height: 98%;
    background-color: ${imageBackgroundColor};
  }

  .__react_modal_image__large_img {
    cursor: move;
    background-color: ${imageBackgroundColor}
  }

  .__react_modal_image__icon_menu a {
    display: inline-block;
    font-size: 40px;
    cursor: pointer;
    line-height: 40px;
    box-sizing: border-box;
    border: none;
    padding: 0px 5px 0px 5px;
    margin-left: 10px;
    color: white;
    background-color: rgba(0, 0, 0, 0);
  }

  .__react_modal_image__icon_menu {
    display: inline-block;
    float: right;
  }

  .__react_modal_image__caption {
    display: inline-block;
    color: white;
    font-size: 120%;
    padding: 10px;
    margin: 0;
  }

  .__react_modal_image__header {
    position: absolute;
    top: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    overflow: hidden;
  }
`;
