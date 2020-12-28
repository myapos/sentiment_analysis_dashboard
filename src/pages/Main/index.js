import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";

import { createUseStyles } from "react-jss";

import Routes from "./Routes";
import { styles } from "./styles";
import { commonStyles } from "../../common/styles";
import classnames from "classnames";
import { selectTweets } from "../Dashboard/DashboardSlice";
import { selectPageSize } from "../../features/Tweets/TweetsSlice";

import { observe } from "./observe";

const useStyles = createUseStyles({ ...styles, ...commonStyles });
const Main = () => {
  const [isVisible, setIsVisible] = useState(true);
  const tweets = useSelector(selectTweets);
  const pageSize = useSelector(selectPageSize);

  useEffect(() => {
    const gotIsVisible = observe();
    setIsVisible(gotIsVisible);
  }, [pageSize, tweets])

  const classes = useStyles();

  console.log('isVisible',isVisible);
  return (
    <div className={classnames(  {
      [classes['resetContainerHeight']]: !isVisible,
      [classes['container']]: isVisible
    }, classes.center)}>
      <Routes />
    </div>
  );
};

export default Main;
