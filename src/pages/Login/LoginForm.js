import React from "react";
import { Form } from "react-final-form";
import { createUseStyles } from "react-jss";

import { styles } from "./styles";
import { commonStyles } from "../../common/styles";
import classnames from "classnames";
import { ReactComponent as FBLogo } from "../../images/facebook-svgrepo-com.svg";
import { useSelector, useDispatch } from "react-redux";
import { auth, selectAuth } from "./LoginSlice";
const useStyles = createUseStyles({ ...styles, ...commonStyles });

function LoginForm(props) {
  const classes = useStyles();

  const authorized = useSelector(selectAuth);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={classnames(classes.welcome, classes.center, classes.rowItem)}
      >
        Welcome to SAM
      </div>
      <Form
        onSubmit={() => dispatch(auth())}
        initialValues={{ stooge: "larry", employed: false }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div className={classes.rowItem}>
              <button
                type="submit"
                onClick={() => {
                  //
                  // console.log("clicked");
                }}
                className={classnames(
                  classes.facebookBtn,
                  classes.center,
                  classes.button
                )}
              >
                <FBLogo className={classes.facebookLogo} />
                Continue with Facebook
              </button>
              {/* <a
                href="http://localhost:8585/login/facebook"
                // target="_blank"
                className={classnames(
                  classes.facebookBtn,
                  classes.center,
                  classes.button,
                  classes.facebookLink
                )}
              >
                <FBLogo className={classes.facebookLogo} />
                Continue with Facebook
              </a> */}
            </div>
          </form>
        )}
      />
    </>
  );
}

export default LoginForm;
