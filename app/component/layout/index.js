import React from "react";
import HeaderLayout from "./header";
import FooterLayout from "./footer";

const BasedLayout = ({ children }) => {
  return (
    <div>
      <HeaderLayout />
      {children}
      <FooterLayout />
    </div>
  );
};

export default BasedLayout;
