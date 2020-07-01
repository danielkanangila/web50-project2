import React from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import {
  Form,
  FormTextField,
  FormPasswordField,
  FormCheckbox,
} from "../components/form";
import { Button, Logo } from "../components";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().min(2).label("Username"),
  displayName: Yup.string().required().min(2).label("Display Name"),
  password: Yup.string().required().min(8).label("Password"),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password must match"
  ),
  term: Yup.boolean().required("Please accept the terms and conditions"),
});

const Register = () => {
  console.log(process.env.PUBLIC_URL);
  return (
    <div className="auth-container">
      <Form
        initialValues={{
          username: "",
          displayName: "",
          password: "",
          passwordConfirm: "",
          term: "",
        }}
        onSubmit={(data) => console.log(data)}
        validationSchema={validationSchema}
        className="auth-form"
      >
        <Logo />
        <h2>Register</h2>
        <FormTextField name="username" label="Username" type="text" />
        <FormTextField name="displayName" label="Display Name" type="text" />
        <FormPasswordField name="password" label="Password" type="password" />
        <FormPasswordField
          name="passwordConfirm"
          label="Confirm Password"
          type="password"
        />
        <div className="auth-form--action">
          <FormCheckbox color={"#fe346e"} name="term">
            <Link
              to="/term-and-conditions"
              onClick={(e) => e.preventDefault()}
              className="auth-form--link"
            >
              Accept Term & Conditions
            </Link>
          </FormCheckbox>
        </div>
        <Button type="submit" color="primary">
          Register
        </Button>
        <p>
          Already have an account?{" "}
          <Link className="auth-form--link" to="/login">
            Login
          </Link>
        </p>
      </Form>
      <div className="auth-illustration"></div>
    </div>
  );
};

export default Register;
