import React from "react";
import { useFormikContext } from "formik";

import InputField from "../InputField";
import ErrorMessage from "../ErrorMessage";

const FormTextField = ({ label, name, type = "text" }) => {
  const {
    errors,
    setFieldTouched,
    setFieldValue,
    touched,
    values,
  } = useFormikContext();

  return (
    <div className="form-field">
      <InputField
        label={label}
        name={name}
        onBlur={() => setFieldTouched(name)}
        onChange={(e) => setFieldValue(name, e.target.value)}
        type={type}
        value={values[name]}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </div>
  );
};

export default FormTextField;
