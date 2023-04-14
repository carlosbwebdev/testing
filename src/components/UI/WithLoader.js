import React, { useState, useEffect } from "react";
import Loader from "./Loader";

const withLoader = (WrappedComponent) => {
  const WithLoaderComponent = (props) => {
    return (
      <>
        <Loader />
        <WrappedComponent {...props} />
      </>
    );
  };
  return WithLoaderComponent;
};

export default withLoader;
