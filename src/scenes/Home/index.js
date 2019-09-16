import React from "react";
import { withFormik } from "formik";
import styled from "styled-components";

import { FormProvider } from "components";
import { Header, Content } from "./Sections";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

const Home = ({ values, setValues, setFieldValue }) => {
  return (
    <Wrapper>
      <FormProvider
        formValues={values}
        setFormValues={setValues}
        onChange={setFieldValue}
      >
        <Header />
        <Content />
      </FormProvider>
    </Wrapper>
  );
};

const mapForm = {
  mapPropsToValues: () => ({
    name: "",
    age: "",
    vehicles: []
  })
};

export default withFormik(mapForm)(Home);
