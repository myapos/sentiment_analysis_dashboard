import React from "react";
import { createUseStyles } from "react-jss";
import LoginForm from "./LoginForm";
import { styles } from "./styles";
import { commonStyles } from "../../common/styles";
import classnames from "classnames";

const useStyles = createUseStyles({ ...styles, ...commonStyles });

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classnames(classes.container, classes.center)}>
      <LoginForm />
    </div>
  );
};

export default Login;
