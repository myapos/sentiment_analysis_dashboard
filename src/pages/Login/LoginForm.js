import React from "react";
import { Form } from "react-final-form";
import { createUseStyles } from "react-jss";
import { useDispatch } from "react-redux";
import cn from "classnames";

import { styles } from "./styles";
import { commonStyles } from "common/styles";
import { ReactComponent as FBLogo } from "images/facebook-svgrepo-com.svg";
import { ReactComponent as TwitterLogo } from "images/twitter.svg";
import { sendLogin } from "./LoginSlice";

const useStyles = createUseStyles({ ...styles, ...commonStyles });

function LoginForm(props) {
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <>
      <div className={cn(classes.welcome, classes.center, classes.rowItem)}>
        Welcome to SAM
      </div>
      <Form
        onSubmit={() => {
          // dispatch(sendLogin())
        }}
        initialValues={{}}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div className={classes.rowItem}>
              <button
                className={cn(
                  classes.button,
                  classes.center,
                  classes.facebookBtn,
                  classes.socialBtn
                )}
                onClick={() => {
                  dispatch(sendLogin("FACEBOOK"));
                }}
              >
                <FBLogo className={cn(classes.logo, classes.facebookLogo)} />
                Continue with Facebook
              </button>
            </div>
            <div className={classes.rowItem}>
              <button
                className={cn(
                  classes.button,
                  classes.center,
                  classes.socialBtn,
                  classes.twitterBtn
                )}
                onClick={() => {
                  console.log("login with twitter");
                  dispatch(sendLogin("TWITTER"));
                }}
              >
                <TwitterLogo className={cn(classes.logo, classes.twitter)} />
                Continue with Twitter
              </button>
            </div>
          </form>
        )}
      />
    </>
  );
}

export default LoginForm;
