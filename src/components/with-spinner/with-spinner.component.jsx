import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

//Higher order component is function which takes a component as argument and return a
// new component;
const WithSpinner = (WrapperComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrapperComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
