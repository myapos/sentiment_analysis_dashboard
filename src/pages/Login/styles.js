import { colors } from "../../common/colors";
export const styles = {
  container: {
    zIndex: 0,
    minWidth: "400px",
    minHeight: "200px",
    background: "whitesmoke",
    borderRadius: "5px",
    boxShadow: "10px 8px 10px #000",
    flexDirection: "column",
  },
  welcome: {
    fontSize: "1.8rem",
  },
  rowItem: {
    marginTop: "10px",
    marginBottom: "10px",
  },
  facebookBtn: {
    backgroundColor: colors.btnBackgroundColor,
    color: colors.textColor,
    borderRadius: "5px",
    "&:hover": {
      filter: "brightness(120%)",
    },
  },
  facebookLogo: {
    height: "20px",
    width: "20px",
    color: "white",
  },
};
