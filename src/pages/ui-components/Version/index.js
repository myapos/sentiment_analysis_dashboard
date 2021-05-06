import React from "react";
import { createUseStyles } from "react-jss";
import cn from "classnames";
import { styles } from "./styles";

const useStyles = createUseStyles({ ...styles });

const Version = () => {
  const classes = useStyles();
  return (
    <div className={classes.version}>
      2021, version 1.0.0. Created by Myron Apostolakis
    </div>
  );
};

export default Version;
