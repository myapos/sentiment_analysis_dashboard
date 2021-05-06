import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { createUseStyles } from "react-jss";
import classnames from "classnames";

import { styles } from "./styles";
import { commonStyles } from "common/styles";
import Routes from "./Routes";
import { selectPageSize } from "pages/ui-components/Tweets/TweetsSlice";
import { selectTweets } from "pages/Dashboard/DashboardSlice";
import { selectAuth } from "pages/Login/LoginSlice";

import { observe } from "./observe";

const useStyles = createUseStyles({ ...styles, ...commonStyles });
const Main = () => {
  const [isVisible, setIsVisible] = useState(true);
  const tweets = useSelector(selectTweets);
  const pageSize = useSelector(selectPageSize);
  const auth = useSelector(selectAuth);

  useEffect(() => {
    const gotIsVisible = observe();
    setIsVisible(gotIsVisible);
  }, [pageSize, tweets]);

  const classes = useStyles();

  const hasTweets = tweets.length > 0;

  return (
    <div
      className={classnames(
        {
          [classes["resetContainerHeight"]]: !isVisible && auth,
          [classes["centerContainer"]]: isVisible || !auth,
        },
        classes.center
      )}
    >
      <Routes />
    </div>
  );
};

export default Main;
