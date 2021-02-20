import { colors } from "common/colors";
export const styles = {
  tweetsContainer: {
    display: "flex",
    flexDirection: "column",
    height: "90%",
    justifyContent: "space-around",
  },
  searchPanel: {
    display: "flex",
    "& label": {
      flexGrow: "2",
    },
  },
  searchBar: {
    //  width: '600px'
  },
  clearBtn: {
    backgroundColor: colors.btnBackgroundColor,
    color: colors.textColor,
    borderRadius: "5px",
    height: "80%",
    marginLeft: "5px",
    "&:hover": {
      filter: "brightness(120%)",
      color: colors.textColor,
    },
  },
};
