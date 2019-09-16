import React, { useState } from "react";
import styled from "styled-components";
import { useFormProps } from "components";

const vehicleMock = { label: "test" };

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const WrapperItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Content = () => {
  const { formValues, onChange } = useFormProps();
  const [vehicles, setVehicles] = useState(formValues.vehicles);

  const onAddVehicle = () => {
    const result = [...vehicles, { ...vehicleMock, id: vehicles.length }];
    setVehicles(result);
    onChange("vehicles", result);
  };

  return (
    <Wrapper>
      <button type="button" onClick={onAddVehicle}>
        Adicionar Veiculo
      </button>

      {vehicles.map((item, index) => (
        <WrapperItem key={index}>{`${item.label} ${item.id}`}</WrapperItem>
      ))}
    </Wrapper>
  );
};

export default Content;
