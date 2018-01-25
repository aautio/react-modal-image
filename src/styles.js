export const smallImage = {
  cursor: "pointer",
  maxWidth: "100%",
  maxHeight: "100%"
};

export const modal = {
  position: "fixed",
  zIndex: 1000,
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  overflow: "auto",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  touchAction: "none"
};

export const modalContent = {
  textAlign: "center",
  position: "relative",
  height: "100%",
  width: "100%",
  overflow: "hidden"
};

export const spinner = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};

export const mediumImage = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate3d(-50%, -50%, 0)",
  maxWidth: "98%",
  maxHeight: "98%"
};

export const largeImage = (x, y) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: `translate3d(-50%, -50%, 0) translate3d(${x}px, ${y}px, 0)`,
  cursor: "move"
});

export const icon = {
  display: "inline-block",
  fontSize: "40px",
  cursor: "pointer",
  lineHeight: "40px",
  boxSizing: "border-box",
  border: "none",
  padding: "0px 5px 0px 5px",
  marginLeft: "10px",
  color: "white",
  backgroundColor: "rgba(0, 0, 0, 0)"
};

export const iconMenu = {
  display: "inline-block",
  float: "right"
};

export const caption = {
  display: "inline-block",
  color: "white",
  fontSize: "120%",
  padding: "10px",
  margin: "0"
};

export const header = {
  position: "absolute",
  top: 0,
  width: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.7)"
};
