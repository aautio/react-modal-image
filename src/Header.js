import React from "react";

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
  <div className="__react_modal_image__header">
    <span className="__react_modal_image__icon_menu">
      {enableDownload && (
        <a href={image} download>
          <DownloadIcon />
        </a>
      )}
      {enableZoom && (
        <a onClick={toggleZoom}>
          {zoomed ? <ZoomOutIcon /> : <ZoomInIcon />}
        </a>
      )}
      <a onClick={onClose}>
        <CloseIcon />
      </a>
    </span>
    {alt && <span className="__react_modal_image__caption">{alt}</span>}
  </div>
);

export default Header;
