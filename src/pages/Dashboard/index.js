import React from "react";
import { useDispatch } from "react-redux";
import { createUseStyles } from "react-jss";
import classnames from "classnames";
import { styles } from "./styles";
import { sendLogout } from "../Login/LoginSlice";
import { commonStyles } from "../../common/styles";
const useStyles = createUseStyles({ ...styles, ...commonStyles });

const Dashboard = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <div>
      Dashboard
      <div
        className={classnames(classes.logout, classes.center)}
        onClick={() => dispatch(sendLogout())}
      >
        Logout
      </div>
    </div>
  );
};

export default Dashboard;
