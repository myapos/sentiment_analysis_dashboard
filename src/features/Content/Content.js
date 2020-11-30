import { createUseStyles } from "react-jss";
import React from "react";
import InputForm from "./InputForm";
import classnames from "classnames";
import { styles } from "./styles";
import { commonStyles } from "../../common/styles";
const useStyles = createUseStyles({ ...styles, ...commonStyles });
function Content(props) {
  const classes = useStyles();
  const { handleSubmit } = props;
  return (
    <div className={classes.contentContainer}>
      <h1
        className={classnames(
          classes.center,
          classes.contentItem,
          classes.title
        )}
      >
        How to use?
      </h1>
      <div className={classnames(classes.description, classes.contentItem)}>
        Please insert a lexical term. Sentiment Analysis Dashbard will fetch the
        related tweets (one week range) using the Twitter API.
      </div>
      <div className={classnames(classes.description, classes.contentItem)}>
        Next, it will perform a sentiment analysis and provide a general score
        (positive or negative) as a metric of the public's opinion regarding the
        term that the user provided.
      </div>

      <InputForm className={classes.contentItem} handleSubmit={handleSubmit} />
    </div>
  );
}

export default Content;
