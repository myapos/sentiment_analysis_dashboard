export const styles = {
  centerContainer: {
    // height: "100vh",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: "auto",
  },
  resetContainerHeight: {
    height: "inherit",
  },
  "@media screen and (max-width: 768px), screen and (max-height:768px)": {
    container: {
      position: "inherit",
      top: "inherit",
      right: "inherit",
      bottom: "inherit",
      left: "inherit",
      margin: "inherit",
    },
  },
};
