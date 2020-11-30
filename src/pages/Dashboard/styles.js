export const styles = {
  container: {
    height: "70vh",
    maxWidth: "80vh",
    backgroundColor: "whitesmoke",
    borderRadius: "5px",
    opacity: "0.9",
    boxShadow: "10px 8px 10px #000",
    padding: "5px",
  },
  logout: {
    border: "1px solid black",
    backgroundColor: "whitesmoke",
    "&:hover": {
      cursor: "pointer",
      filter: "brightness(80%)",
    },
  },
  "@media screen and (max-width: 600px)": {
    container: {
      height: "70vh",
      maxWidth: "50vh",
    },
  },
};
