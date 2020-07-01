import React from "react";
import { Formik } from "formik";

const Form = ({
  children,
  initialValues,
  onSubmit,
  validationSchema,
  ...otherProps
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} {...otherProps}>
          {children}
        </form>
      )}
    </Formik>
  );
};

export default Form;
