import React from "react";
import { createUseStyles } from "react-jss";

import { useDispatch } from "react-redux";
import { styles } from "./styles";
import { commonStyles } from "../../common/styles";
import { sendLogout } from "../../pages/Login/LoginSlice";

const useStyles = createUseStyles({ ...styles, ...commonStyles });

function Header(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.headerContainer}>
      <div
        className={classes.logout}
        onClick={() => {
          var r = window.confirm("Are you sure you want to logout?");
          if (r === true) {
            dispatch(sendLogout());
          }
        }}
      >
        Logout
      </div>
    </div>
  );
}

export default Header;
