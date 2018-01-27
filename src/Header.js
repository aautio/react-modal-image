import React from "react";

import { header, iconMenu, icon, caption } from "./styles";

import { ZoomInIcon, ZoomOutIcon, DownloadIcon, CloseIcon } from "./icons";

const Header = ({ image, alt, zoomed, toggleZoom, onClose }) => (
  <div style={header}>
    <span style={iconMenu}>
      <a href={image} style={icon} download>
        <DownloadIcon />
      </a>
      <a href="" style={icon} onClick={toggleZoom}>
        {zoomed ? <ZoomOutIcon /> : <ZoomInIcon />}
      </a>
      <a style={icon} onClick={onClose}>
        <CloseIcon />
      </a>
    </span>
    {alt && <span style={caption}>{alt}</span>}
  </div>
);

export default Header;
