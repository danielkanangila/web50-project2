import React from "react";
import * as Yup from "yup";

import { Form, FormTextField } from "../components/form";
import Button from "../components/Button";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().min(2).label("Username"),
  password: Yup.string().required().min(8).label("Password"),
});

const Login = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="auth-container">
      <Form
        initialValues={{ username: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        className="auth-form"
      >
        <FormTextField name="username" label="Username" type="text" />
        <FormTextField name="password" label="Password" type="password" />
        <Button type="submit" color="primary">
          Login
        </Button>
      </Form>
      <div className="auth-illustration"></div>
    </div>
  );
};

export default Login;
