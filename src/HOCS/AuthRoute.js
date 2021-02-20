import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { withCookies } from "react-cookie";
import { useDispatch } from "react-redux";

import { auth } from "pages/Login/LoginSlice";

const AuthRoute = (props) => {
  const { type, authorized, cookies } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    // cookies
    const allCookies = cookies.getAll();
    // check if login was succesful

    // action for login and save authorized to redux state
    if (allCookies["connect.sid"]) {
      // I can save user data from url here to redux
      // login was succesful
      // trigger action to save authorized true
      dispatch(auth(true));
    }
  });

  if (type === "guest" && authorized) {
    return <Redirect to="/dashboard" />;
  } else if (type === "private" && !authorized) {
    return <Redirect to="/login" />;
  }
  return <Route {...props} />;
};

const mapStateToProps = ({ login: authorized }) => ({
  ...authorized,
  // authorized: false,
});
const Connected = connect(mapStateToProps)(AuthRoute);

const WithCookies = withCookies(Connected);

export default WithCookies;
