import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUseStyles } from "react-jss";
import classnames from "classnames";

import Header from "pages/ui-components/Header/Header";
import Content from "pages/ui-components/Content/Content";
import Modal from "pages/ui-components/Modal";

import { selectModal, showModal } from "pages/ui-components/Modal/ModalSlice";
import { sendLogout } from "pages/Login/LoginSlice";
import { commonStyles } from "common/styles";
import { fetchTweets } from "./DashboardSlice";
import { styles } from "./styles";

const useStyles = createUseStyles({ ...styles, ...commonStyles });

const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleSubmit = (term) => dispatch(fetchTweets(term));

  const modal = useSelector(selectModal);

  return (
    <div className={classnames(classes.container)}>
      <Modal
        handleClose={() => dispatch(showModal({ show: false }))}
        yes={sendLogout}
        {...modal}
      />
      <Header />
      <Content handleSubmit={handleSubmit} />
    </div>
  );
};

export default Dashboard;
