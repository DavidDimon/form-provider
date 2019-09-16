import React, { useContext, createContext } from "react";

export const FormCtx = createContext();

export const useFormProps = () => useContext(FormCtx);

export const withFormProps = Component => props => {
  const formProps = useFormProps();
  return <Component {...props} formProps={formProps} />;
};

export const FormProvider = ({
  children,
  formValues,
  setFormValues,
  onChange
}) => (
  <FormCtx.Provider value={{ formValues, setFormValues, onChange }}>
    {children}
  </FormCtx.Provider>
);
