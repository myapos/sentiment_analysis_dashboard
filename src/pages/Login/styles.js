import { colors } from "common/colors";
export const styles = {
  container: {
    maxWidth: "500px",
    minWidth: "250px",
    maxHeight: "350px",
    height: "35vh",
    width: "80vh",
    background: "whitesmoke",
    borderRadius: "5px",
    boxShadow: "10px 8px 10px #000",
    display: "flex",
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
  linkedin: {
    color: "#0B78B7",
    fill: "white",
  },
  google: {
    backgroundColor: "white",
  },
  particles: {
    position: "fixed",
    top: 0,
    zIndex: -1,
  },
  twitterBtn: {
    backgroundColor: "#55acee",
  },
  googleBtn: {
    backgroundColor: "#4285f4",
  },
  linkedInBtn: {
    backgroundColor: "#0B78B7",
  },
  "@media screen and (max-width: 600px)": {
    container: {
      minWidth: "200px",
      minHeight: "100px",
      width: "35vh",
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
