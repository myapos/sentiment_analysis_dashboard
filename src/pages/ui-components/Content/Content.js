import React from "react";
import { createUseStyles } from "react-jss";
import { useSelector } from "react-redux";
import classnames from "classnames";

import Logo from "pages/ui-components/Logo/Logo";

import InputForm from "./InputForm";
import Score from "../Score";
import Banner from "../Banner/Banner";
import Tweets from "../Tweets/Tweets";

import { styles } from "./styles";
import { commonStyles } from "common/styles";
import { selectScore } from "pages/Dashboard/DashboardSlice";
import { selectTweets } from "pages/Dashboard/DashboardSlice";

const useStyles = createUseStyles({ ...styles, ...commonStyles });

function Content(props) {
  const classes = useStyles();
  const { handleSubmit } = props;
  const score = useSelector(selectScore);
  const tweets = useSelector(selectTweets);

  return (
    <div className={classes.contentContainer}>
      <Logo className={classes.logo} />
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
      <p className={classnames(classes.description, classes.contentItem)}>
        Please insert a lexical term. Sentiment Analysis Dashbard will fetch the
        related tweets (one week range) using the Twitter API.
      </p>
      <p className={classnames(classes.description, classes.contentItem)}>
        Next, it will perform a sentiment analysis and provide a general score
        (positive or negative) as a metric of the public's opinion regarding the
        term that the user provided.
      </p>
      <Score score={score} />
      <InputForm className={classes.contentItem} handleSubmit={handleSubmit} />
      <Tweets score={score} tweets={tweets} />
    </div>
  );
}

export default Content;
