import React from "react";
import { createUseStyles } from "react-jss";

import { useDispatch } from "react-redux";
import { styles } from "./styles";
import { commonStyles } from "../../common/styles";

import { showModal } from "../../features/Modal/ModalSlice";

const useStyles = createUseStyles({ ...styles, ...commonStyles });

function Header(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.headerContainer}>
      <div
        className={classes.logout}
        onClick={() => {
          dispatch(
            showModal({
              show: true,
              body: "Are you sure you want to logout?",
              title: "Exit",
            })
          );
        }}
      >
        Logout
      </div>
    </div>
  );
}

export default Header;
