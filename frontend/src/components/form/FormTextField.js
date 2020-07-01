import React from "react";
import { useFormikContext } from "formik";

import InputField from "../InputField";
import ErrorMessage from "../ErrorMessage";

const FormTextField = ({ Icon, label, name, type = "text" }) => {
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

export default FormTextField;
