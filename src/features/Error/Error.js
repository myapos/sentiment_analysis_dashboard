import React from "react";
import Alert from "react-bootstrap/Alert";
import { useSelector } from "react-redux";

import { selectErrorStack } from "./ErrorSlice";

function Error(props) {
  const error = useSelector(selectErrorStack);

  console.log("error", error);
  if (error && error.message && error.message.length > 0) {
    return (
      <div>
        <Alert variant="danger">{error.message}</Alert>
      </div>
    );
  } else {
    return null;
  }
}

export default Error;
