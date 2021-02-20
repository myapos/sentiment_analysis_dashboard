import { colors } from "common/colors";
export const styles = {
  container: {
    maxWidth: "400px",
    minWidth: "250px",
    maxHeight: "200px",
    // height: "35vh",
    width: "80vh",
    background: "whitesmoke",
    borderRadius: "5px",
    boxShadow: "10px 8px 10px #000",
    flexDirection: "column",
  },
  welcome: {
    fontSize: "1.4rem",
  },
  rowItem: {
    marginTop: "10px",
    marginBottom: "10px",
  },
  socialBtn: {
    color: colors.textColor,
    borderRadius: "5px",
    "&:hover": {
      filter: "brightness(120%)",
    },
  },
  facebookBtn: {
    backgroundColor: colors.btnBackgroundColor,
  },
  facebookLink: {
    marginTop: "5px",
    textDecoration: "none",
  },
  logo: {
    height: "20px",
    width: "20px",
  },
  facebookLogo: {
    color: "white",
  },
  twitter: {
    color: "#55acee",
    fill: "white",
  },
  particles: {
    position: "fixed",
    top: 0,
    zIndex: -1,
  },
  twitterBtn: {
    backgroundColor: "#55acee",
  },
  "@media screen and (max-width: 600px)": {
    container: {
      minWidth: "200px",
      minHeight: "100px",
    },
    welcome: {
      fontSize: "1.4rem",
    },
    facebookBtn: {
      width: "100%",
      fontSize: "0.8rem!important",
    },
  },
};
