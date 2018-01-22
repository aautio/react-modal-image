export const modalStyles = {
  position: "fixed",
  zIndex: 1000,
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  overflow: "auto",
  backgroundColor: "rgba(0, 0, 0, 0.8)"
};

export const modalContentStyles = {
  textAlign: "center",
  position: "relative",
  height: "100%",
  width: "100%",
  overflow: "hidden"
};

export const spinnerStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};

export const imageStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  maxWidth: "98%",
  maxHeight: "98%",
  cursor: "move"
};

export const iconStyles = {
  fontSize: "40px",
  cursor: "pointer",
  float: "right",
  lineHeight: "40px",
  boxSizing: "border-box",
  border: "none",
  padding: "0px 5px 0px 5px",
  color: "white",
  backgroundColor: "rgba(0, 0, 0, 0)"
};

export const iconWithMarginRightStyles = Object.assign({}, iconStyles, {
  marginRight: "10px"
});

export const captionStyles = {
  color: "white",
  fontSize: "120%",
  padding: "10px",
  margin: "0"
};

export const headerStyles = {
  position: "absolute",
  top: 0,
  width: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.7)"
};
