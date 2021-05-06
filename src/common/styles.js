export const commonStyles = {
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: "230px",
    width: "230px",
    fontFamily:
      'Baloo2, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",    sans-serif',
    fontSize: "1.2rem",
    border: "0",
    display: "flex",
    // justifyContent: "space-between",
    borderRadius: "5px",
    "&:hover": {
      cursor: "pointer",
    },
    "&:focus": {
      outline: "none",
    },
    boxShadow: "5px 4px 2px #000",
  },
  "@media screen and (max-width: 768px)": {
    button: {
      fontSize: "0.8rem",
      width: "160px",
      minWidth: "160px",
    },
  },
};
