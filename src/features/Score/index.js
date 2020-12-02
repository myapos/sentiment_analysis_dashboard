import React from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";

import { styles } from "./styles";
import { commonStyles } from "../../common/styles";

const useStyles = createUseStyles({ ...styles, ...commonStyles });

function Score({ score }) {
  const classes = useStyles();
  return (
    <div className={classnames(classes.description, classes.center)}>
      Sentiment Analysis Score:
      <span
        className={classnames({
          [classes.positive]: score > 0,
          [classes.negative]: score < 0,
        })}
      >
        {score}
      </span>
    </div>
  );
}

export default Score;
