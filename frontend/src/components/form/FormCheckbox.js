import React from "react";
import Checkbox from "../Checkbox";
import { useFormikContext } from "formik";
import ErrorMessage from "../ErrorMessage";

const FormCheckbox = ({ color, children, name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <Checkbox
        color={color}
        onChecked={() => {
          setFieldValue(name, !values[name]);
        }}
        value={values[name]}
      >
        {children}
      </Checkbox>
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
};

export default FormCheckbox;
