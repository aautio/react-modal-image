import React from "react";

import { ZoomInIcon, ZoomOutIcon, DownloadIcon, CloseIcon, RotateIcon } from "./icons";

const Header = ({
  image,
  alt,
  zoomed,
  toggleZoom,
  toggleRotate,
  onClose,
  enableDownload,
  enableZoom,
  enableRotate
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
      {enableRotate && (
        <a onClick={toggleRotate}>
          <RotateIcon/>
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
