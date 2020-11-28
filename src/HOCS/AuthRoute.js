import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const AuthRoute = (props) => {
  const { type, authorized } = props;
  // check if login was succesful

  // cookies
  // action for login and save authorized to redux state
  console.log("document.cookie", document.cookie);
  if (type === "guest" && authorized) {
    return <Redirect to="/dashboard" />;
  } else if (type === "private" && !authorized) {
    return <Redirect to="/login" />;
  }
  return <Route {...props} />;
};

const mapStateToProps = ({ login: authorized }) => ({
  // ...authorized,
  authorized: false,
});

export default connect(mapStateToProps)(AuthRoute);
