import React from "react";
import { Form } from "react-final-form";
import { createUseStyles } from "react-jss";
import { useDispatch } from "react-redux";
import cn from "classnames";

import { styles } from "./styles";
import { commonStyles } from "common/styles";
import Logo from "pages/ui-components/Logo";
import { ReactComponent as FBLogo } from "images/facebook-svgrepo-com.svg";
import { ReactComponent as TwitterLogo } from "images/twitter.svg";
import { ReactComponent as LinkedInLogo } from "images/linkedin.svg";
import { ReactComponent as GoogleLogo } from "images/google.svg";
import { sendLogin } from "./LoginSlice";

const useStyles = createUseStyles({ ...styles, ...commonStyles });

function LoginForm(props) {
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <>
      <Logo />
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
                  classes.facebookBtn,
                  classes.socialBtn,

                  "align-items-center"
                )}
                onClick={() => {
                  dispatch(sendLogin("FACEBOOK"));
                }}
              >
                <FBLogo
                  className={cn(classes.logo, classes.facebookLogo, "mr-2")}
                />
                <div>Login with Facebook</div>
              </button>
            </div>
            <div className={classes.rowItem}>
              <button
                className={cn(
                  classes.button,
                  classes.socialBtn,
                  classes.twitterBtn,

                  "align-items-center"
                )}
                onClick={() => {
                  console.log("Login with twitter");
                  dispatch(sendLogin("TWITTER"));
                }}
              >
                <TwitterLogo
                  className={cn(classes.logo, classes.twitter, "mr-2")}
                />
                <div>Login with Twitter</div>
              </button>
            </div>
            <div className={classes.rowItem}>
              <button
                className={cn(
                  classes.button,

                  classes.socialBtn,
                  classes.linkedInBtn,

                  "align-items-center"
                )}
                onClick={() => {
                  console.log("login with linkedin");

                  dispatch(sendLogin("LINKEDIN"));
                }}
              >
                <LinkedInLogo
                  className={cn(classes.logo, classes.linkedin, "mr-2")}
                />
                <div>Login with LinkedIn</div>
              </button>
            </div>
            <div className={classes.rowItem}>
              <button
                className={cn(
                  classes.button,

                  classes.socialBtn,
                  classes.googleBtn,

                  "align-items-center"
                )}
                onClick={() => {
                  console.log("login with google");

                  dispatch(sendLogin("GOOGLE"));
                }}
              >
                <GoogleLogo
                  className={cn(classes.logo, classes.google, "mr-2")}
                />
                <div>Login with Google</div>
              </button>
            </div>
          </form>
        )}
      />
    </>
  );
}

export default LoginForm;
