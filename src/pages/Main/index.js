import React from "react";

import { createUseStyles } from "react-jss";

import Routes from "./Routes";
import { styles } from "./styles";
import { commonStyles } from "../../common/styles";
import classnames from "classnames";

const useStyles = createUseStyles({ ...styles, ...commonStyles });

const Main = () => {
  //  {isLoggedIn ? <Dashboard /> : <Login />}
  const isLoggedIn = false;
  const classes = useStyles();

  return (
    <div className={classnames(classes.container, classes.center)}>
      <Routes />
    </div>
  );
};

export default Main;
