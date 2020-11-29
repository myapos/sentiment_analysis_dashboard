import React from "react";
import { createUseStyles } from "react-jss";

import LoginForm from "./LoginForm";

import withParticles from "../../HOCS/withParticles";
import { styles } from "./styles";
import { commonStyles } from "../../common/styles";
import classnames from "classnames";

const useStyles = createUseStyles({ ...styles, ...commonStyles });

const Login = () => {
  const classes = useStyles();

  const LoginFormWithBackground = withParticles(LoginForm);
  return (
    <div className={classnames(classes.container, classes.center)}>
      <LoginFormWithBackground />
    </div>
  );
};

export default Login;
