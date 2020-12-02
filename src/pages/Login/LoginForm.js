import React from "react";
import { Form } from "react-final-form";
import { createUseStyles } from "react-jss";
import { useDispatch } from "react-redux";
import classnames from "classnames";

import { styles } from "./styles";
import { commonStyles } from "../../common/styles";
import { ReactComponent as FBLogo } from "../../images/facebook-svgrepo-com.svg";
import { sendLogin } from "./LoginSlice";

const useStyles = createUseStyles({ ...styles, ...commonStyles });

function LoginForm(props) {
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <>
      <div
        className={classnames(classes.welcome, classes.center, classes.rowItem)}
      >
        Welcome to SAM
      </div>
      <Form
        onSubmit={() => dispatch(sendLogin())}
        initialValues={{}}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div className={classes.rowItem}>
              <button
                type="submit"
                className={classnames(
                  classes.button,
                  classes.center,
                  classes.facebookBtn
                )}
              >
                <FBLogo className={classes.facebookLogo} />
                Continue with Facebook
              </button>
            </div>
          </form>
        )}
      />
    </>
  );
}

export default LoginForm;
