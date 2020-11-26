import React from "react";
import { Form, Field } from "react-final-form";

function LoginForm(props) {
  return (
    <div>
      <div>Welcome to Sentimental analysis dashboard</div>
      <Form
        onSubmit={() => console.log("onSubmit")}
        initialValues={{ stooge: "larry", employed: false }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name</label>
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
}

export default LoginForm;
