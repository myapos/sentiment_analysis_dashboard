import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUseStyles } from "react-jss";
import classnames from "classnames";

import Header from "../../features/Header/Header";
import Content from "../../features/Content/Content";
import Modal from "../../features/Modal/";
import { selectModal, showModal } from "../../features/Modal/ModalSlice";

import { styles } from "./styles";
import { commonStyles } from "../../common/styles";
import { fetchTweets } from "./DashboardSlice";
const useStyles = createUseStyles({ ...styles, ...commonStyles });

const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleSubmit = (term) => dispatch(fetchTweets(term));

  const modal = useSelector(selectModal);
  return (
    <div className={classnames(classes.container)}>
      {/* <Modal handleClose={() => dispatch(showModal(false))} {...modal} /> */}
      <Header />
      <Content handleSubmit={handleSubmit} />
    </div>
  );
};

export default Dashboard;
