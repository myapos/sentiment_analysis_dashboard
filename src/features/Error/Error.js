import React from "react";
import Alert from "react-bootstrap/Alert";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { createUseStyles } from "react-jss";

import { styles } from "./styles";
import { selectErrorStack, saveError } from "./ErrorSlice";
const useStyles = createUseStyles({ ...styles });

function Error(props) {
  const dispatch = useDispatch();
  const error = useSelector(selectErrorStack);
  const classes = useStyles();

  console.log("error", error);
  if (error && error.message && error.message.length > 0) {
    return (
      <span className={classes.container}>
        <Alert variant="danger">{error.message}</Alert>
        <FontAwesomeIcon
          icon={faTimes}
          color="slategray"
          className={classes.timesIcon}
          onClick={() => dispatch(saveError({}))}
        />
      </span>
    );
  } else {
    return null;
  }
}

export default Error;
