import React from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";

import { styles } from "./styles";
import { commonStyles } from "../../common/styles";
const useStyles = createUseStyles({ ...styles, ...commonStyles });

function NoMatch(props) {
  const classes = useStyles();
  return (
    <div className={classnames(classes.message, classes.center)}>
      Page Not Found
    </div>
  );
}

export default NoMatch;
