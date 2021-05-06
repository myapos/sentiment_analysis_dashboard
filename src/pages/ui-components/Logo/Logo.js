import React from "react";
import { createUseStyles } from "react-jss";
import cn from "classnames";
import { styles } from "./styles";

import logo from "images/sam_logo.png";
const useStyles = createUseStyles({ ...styles });

const Logo = ({ className }) => {
  const classes = useStyles();

  console.log("className", className);
  return (
    <div className={cn(classes.container, "d-flex", "justify-content-center")}>
      <img
        src={logo}
        alt="Sentiment Analysis Dashboard Logo"
        className={cn(classes.responsive, {
          [className]: typeof className !== "undefined",
        })}
      />
    </div>
  );
};

export default Logo;
