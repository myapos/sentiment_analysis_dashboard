import React from "react";
import { useDispatch } from "react-redux";
import { createUseStyles } from "react-jss";
import classnames from "classnames";

import Header from "../../features/Header/Header";
import Content from "../../features/Content/Content";

import { styles } from "./styles";
import { commonStyles } from "../../common/styles";
import { fetchTweets } from "./DashboardSlice";
const useStyles = createUseStyles({ ...styles, ...commonStyles });

const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleSubmit = (term) => dispatch(fetchTweets(term));
  return (
    <div className={classnames(classes.container)}>
      <Header />
      <Content handleSubmit={handleSubmit} />
    </div>
  );
};

export default Dashboard;
