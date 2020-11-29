import React from "react";
import { useDispatch } from "react-redux";
import { createUseStyles } from "react-jss";
import classnames from "classnames";

import Header from "../../features/Header/Header";
import Content from "../../features/Content/Content";

import { styles } from "./styles";
import { sendLogout } from "../Login/LoginSlice";
import { commonStyles } from "../../common/styles";
const useStyles = createUseStyles({ ...styles, ...commonStyles });

const Dashboard = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <div className={classnames(classes.container)}>
      <Header />
      <Content />
    </div>
  );
};

export default Dashboard;
