import React from "react";
import * as Yup from "yup";

import Button from "../components/Button";
import { Form, FormTextField } from "../components/form";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().min(2).label("Username"),
  displayName: Yup.string().required().min(2).label("Display Name"),
  password: Yup.string().required().min(8).label("Password"),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password must match"
  ),
});

const Register = () => {
  return (
    <div className="auth-container">
      <Form
        initialValues={{
          username: "",
          displayName: "",
          password: "",
          passwordConfirm: "",
        }}
        onSubmit={(data) => console.log(data)}
        validationSchema={validationSchema}
        className="auth-form"
      >
        <FormTextField name="username" label="Username" type="text" />
        <FormTextField name="displayName" label="Display Name" type="text" />
        <FormTextField name="password" label="Password" type="password" />
        <FormTextField
          name="passwordConfirm"
          label="Confirm Password"
          type="password"
        />
        <Button type="submit" color="primary">
          Register
        </Button>
      </Form>
      <div className="auth-illustration"></div>
    </div>
  );
};

export default Register;
