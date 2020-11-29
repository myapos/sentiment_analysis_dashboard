import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { withCookies } from "react-cookie";
import { useDispatch } from "react-redux";

import { auth } from "../pages/Login/LoginSlice";

const AuthRoute = (props) => {
  const { type, authorized, cookies, ...rest } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    // cookies
    const allCookies = cookies.getAll();
    // check if login was succesful
    console.log("allCookies", allCookies);
    debugger;
    // action for login and save authorized to redux state
    if (allCookies["connect.sid"]) {
      debugger;
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
