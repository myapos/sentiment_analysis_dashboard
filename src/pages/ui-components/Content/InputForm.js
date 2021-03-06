import React from "react";
import { Form, Field } from "react-final-form";
import { createUseStyles } from "react-jss";
import classnames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";

import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { resetScore } from "pages/Dashboard/DashboardSlice";

import { commonStyles } from "common/styles";

import { styles } from "./styles";

const useStyles = createUseStyles({ ...styles, ...commonStyles });
function InputForm({ className, handleSubmit }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classnames(classes.formContainer, className)}>
      <Form
        onSubmit={(values) => handleSubmit(values)}
        initialValues={{ term: "" }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} className={classes.form}>
            <div className={classes.formRow}>
              {/* <label>Term</label> */}
              <Field name="term" component="input" placeholder="Search Twitter">
                {({ input, placeholder, meta, ...rest }) => {
                  return (
                    <span className={classes.searchBar}>
                      <FontAwesomeIcon
                        icon={faSearch}
                        color="slategray"
                        className={classes.searchIcon}
                      />
                      <input
                        {...input}
                        placeholder={placeholder}
                        className={classes.input}
                      />
                      {meta.dirty ? (
                        <FontAwesomeIcon
                          icon={faTimes}
                          color="slategray"
                          className={classes.timesIcon}
                          onClick={() => {
                            form.change("term", "");
                            dispatch(resetScore());
                          }}
                        />
                      ) : null}
                    </span>
                  );
                }}
              </Field>
            </div>
          </form>
        )}
      />
    </div>
  );
}

export default InputForm;
