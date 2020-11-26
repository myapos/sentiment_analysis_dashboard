export const styles = {
  container: {
    zIndex: 0,
    minWidth: "400px",
    minHeight: "200px",
    background: "whitesmoke",
    borderRadius: "5px",
    boxShadow: "10px 8px 10px #000",
  },
  welcome: {
    fontSize: "1.8rem",
  },
  facebookBtn: {
    fontFamily:
      'Baloo2, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",    sans-serif',
    fontSize: "1.2rem",
    border: "0",
    backgroundColor: "#0e47a1",
    color: "white",
    borderRadius: "5px",
    "&:hover": {
      cursor: "pointer",
      filter: "brightness(120%)",
    },
    "&:focus": {
      outline: "none",
    },
  },
  facebookLogo: {
    height: "20px",
    width: "20px",
    color: "white",
  },
};
