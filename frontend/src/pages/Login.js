import React from "react";
import * as Yup from "yup";

import { Form, FormTextField } from "../components/form";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import FormCheckbox from "../components/form/FormCheckbox";
import Icon from "../components/Icon";
import PasswordField from "../components/PasswordField";
import FormPasswordField from "../components/form/FormPasswordField";

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
        initialValues={{ username: "", password: "", rememberMe: false }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        className="auth-form"
      >
        <Logo />
        <h2>Login</h2>
        <FormTextField
          name="username"
          label="Username"
          type="text"
          Icon={<Icon name="user" />}
        />
        <FormPasswordField
          name="password"
          label="Password"
          type="password"
          Icon={<Icon name="unlock-alt" />}
        />
        <div className="auth-form--action">
          <FormCheckbox color={"#fe346e"} name="rememberMe">
            <span>Remember me</span>
          </FormCheckbox>
          <Link
            className="auth-form--link"
            to="/auth/help"
            onClick={(e) => e.preventDefault()}
          >
            Forget password
          </Link>
        </div>
        <Button type="submit" color="primary">
          Login
        </Button>
        <p>
          Not registered?{" "}
          <Link className="auth-form--link" to="/register">
            Create an account
          </Link>
        </p>
      </Form>
      <div className="auth-illustration"></div>
    </div>
  );
};

export default Login;
