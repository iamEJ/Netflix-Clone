import React from "react";
import * as ROUTES from "../constants/routes";
import Header from "../components/header";
import { auth } from "../lib/firebase.prod";
import Profiles from "../components/profiles";

export function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo
            src="https://www.brandvia.com/wp-content/uploads/2019/04/Netflix-Logo.png"
            to={ROUTES.HOME}
            alt="Netflix"
          ></Header.Logo>
          <Header.Button to={ROUTES.HOME} onClick={() => auth.signOut()}>
            Logout
          </Header.Button>
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.Item
            data-testid="user-profile"
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.Item>
        </Profiles.List>
      </Profiles>
    </>
  );
}
