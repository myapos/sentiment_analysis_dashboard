import React from "react";
import { Form, Field } from "react-final-form";
import { createUseStyles } from "react-jss";

import { styles } from "./styles";
import { commonStyles } from "../../common/styles";
import classnames from "classnames";
import { ReactComponent as FBLogo } from "../../images/facebook-svgrepo-com.svg";
const useStyles = createUseStyles({ ...styles, ...commonStyles });

function LoginForm(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classnames(classes.welcome, classes.center)}>Welcome</div>
      <Form
        onSubmit={() => console.log("onSubmit")}
        initialValues={{ stooge: "larry", employed: false }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div className="buttons">
              <button
                type="submit"
                className={classnames(classes.facebookBtn, classes.center)}
              >
                <FBLogo className={classes.facebookLogo} />
                Continue with Facebook
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
}

export default LoginForm;
