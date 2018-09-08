import React from "react";

import { header, iconMenu, icon, caption } from "./styles";

import { ZoomInIcon, ZoomOutIcon, DownloadIcon, CloseIcon } from "./icons";

const Header = ({
  image,
  alt,
  zoomed,
  toggleZoom,
  onClose,
  enableDownload,
  enableZoom
}) => (
  <div style={header}>
    <span style={iconMenu}>
      {enableDownload && (
        <a
          className="react-modal-image-download"
          href={image}
          style={icon}
          download
        >
          <DownloadIcon />
        </a>
      )}
      {enableZoom && (
        <a
          className="react-modal-image-zoom"
          href=""
          style={icon}
          onClick={toggleZoom}
        >
          {zoomed ? <ZoomOutIcon /> : <ZoomInIcon />}
        </a>
      )}
      <a className="react-modal-image-close" style={icon} onClick={onClose}>
        <CloseIcon />
      </a>
    </span>
    {alt && <span style={caption}>{alt}</span>}
  </div>
);

export default Header;
