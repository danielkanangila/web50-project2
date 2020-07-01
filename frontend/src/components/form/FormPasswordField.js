import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "../ErrorMessage";
import PasswordField from "../PasswordField";

const FormPasswordField = ({ Icon, label, name, type = "text" }) => {
  const {
    errors,
    setFieldTouched,
    setFieldValue,
    touched,
    values,
  } = useFormikContext();

  return (
    <div className="form-field">
      <PasswordField
        className={Icon ? "input-icon" : "input"}
        label={label}
        name={name}
        onBlur={() => setFieldTouched(name)}
        onChange={(e) => setFieldValue(name, e.target.value)}
        type={type}
        value={values[name]}
        placeholder={label}
        Icon={Icon}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </div>
  );
};

export default FormPasswordField;
