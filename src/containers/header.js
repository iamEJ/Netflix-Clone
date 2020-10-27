import React from "react";
import Header from "../components/header";
import * as ROUTES from "../constants/routes";

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo
          src="https://www.brandvia.com/wp-content/uploads/2019/04/Netflix-Logo.png"
          to={ROUTES.HOME}
          alt="Netflix"
        />
        <Header.Button to={ROUTES.SIGN_IN}>Sign In</Header.Button>
      </Header.Frame>
      {children}
    </Header>
  );
}
