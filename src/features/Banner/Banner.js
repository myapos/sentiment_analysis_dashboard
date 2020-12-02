import React from "react";
import Alert from "react-bootstrap/Alert";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { createUseStyles } from "react-jss";

import { styles } from "./styles";
import { selectBannerStack, showBanner, selectShowBanner } from "./BannerSlice";

import { selectTweets } from "../../pages/Dashboard/DashboardSlice";

const useStyles = createUseStyles({ ...styles });

function Banner(props) {
  const dispatch = useDispatch();
  const error = useSelector(selectBannerStack);
  const tweets = useSelector(selectTweets);
  const displayBanner = useSelector(selectShowBanner);
  const classes = useStyles();

  console.log("error", error, " tweets", tweets);

  let BANNER_MESSAGE = "";
  let BANNER_TYPE = "";

  const hasError = error && error.message && error.message.length > 0;
  const hasTweets = tweets.length > 0;
  if (hasError) {
    BANNER_TYPE = "danger";
    BANNER_MESSAGE = error.message;
  }

  if (hasTweets) {
    BANNER_TYPE = "success";
    BANNER_MESSAGE = "Success";
  }

  if (displayBanner) {
    return (
      <span className={classes.container}>
        <Alert variant={BANNER_TYPE}>{BANNER_MESSAGE}</Alert>
        <FontAwesomeIcon
          icon={faTimes}
          color="slategray"
          className={classes.timesIcon}
          onClick={() => {
            dispatch(showBanner(false)); // hide banner
          }}
        />
      </span>
    );
  }

  return null;
}

export default Banner;
