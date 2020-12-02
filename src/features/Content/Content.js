import { createUseStyles } from "react-jss";
import React from "react";
import { useSelector } from "react-redux";

import classnames from "classnames";

import InputForm from "./InputForm";
import Score from "../../features/Score";
import { styles } from "./styles";
import { commonStyles } from "../../common/styles";
import Banner from "../Banner/Banner";
import { selectScore } from "../../pages/Dashboard/DashboardSlice";
const useStyles = createUseStyles({ ...styles, ...commonStyles });

function Content(props) {
  const classes = useStyles();
  const { handleSubmit } = props;
  const score = useSelector(selectScore);

  console.log("score", score);
  return (
    <div className={classes.contentContainer}>
      <Banner />
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
      <Score score={score} />
      <InputForm className={classes.contentItem} handleSubmit={handleSubmit} />
    </div>
  );
}

export default Content;
