import React from "react";
import { createUseStyles } from "react-jss";
import { styles } from "./styles";
const useStyles = createUseStyles(styles);
const Login = () => {
  const classes = useStyles();
  return <div className={classes.container}> Login </div>;
};

export default Login;
