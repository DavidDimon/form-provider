import React, { memo } from "react";
import { useFormProps } from "components";

const Header = memo(() => {
  const { formValues } = useFormProps();
  return <div>{`You have ${formValues.vehicles.length} car(s)`}</div>;
});

export default Header;
