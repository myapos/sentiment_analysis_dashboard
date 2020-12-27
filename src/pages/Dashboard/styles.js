export const styles = {
  container: {
    // height: "35vh",
    width: "110vh",
    margin: "10px",
    minHeight: "360px",
    maxWidth: "140vh",
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
      maxWidth: "70vh",
    },
  },
};
