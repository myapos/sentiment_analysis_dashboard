import { colors } from "common/colors";

export const styles = {
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    height: "90%",
    justifyContent: "space-around",
  },
  contentItem: {
    flexGrow: "2",
  },
  description: {
    textAlign: "justify",
    wordSpacing: "5px",
  },
  formContainer: {
    padding: "5px",
    height: "auto",
  },
  form: {
    display: "flex",
    height: "auto",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  formRow: {
    position: "relative",
  },
  searchBar: { display: "flex", alignItems: "center" },
  searchIcon: {
    position: "absolute",
    marginLeft: "5px",
  },
  timesIcon: {
    position: "absolute",
    right: "10px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  input: {
    width: "100%",
    height: "30px",
    borderRadius: "20px",
    border: "1px solid slategray",
    textAlign: "center",
    "&:focus": {
      outline: "none",
    },
  },
  btn: {
    width: "100%",
    backgroundColor: colors.btnBackgroundColor,
    color: colors.textColor,
    borderRadius: "5px",
    "&:hover": {
      filter: "brightness(120%)",
    },
  },
  logo: {
    width: "10%",
  },
  title: {},
  "@media screen and (max-width: 600px)": {
    contentContainer: {
      height: "80%",
    },
    title: {
      fontSize: "1.5rem",
    },
  },
};
