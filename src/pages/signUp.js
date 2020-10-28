import React, { useState, useContext } from "react";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { FirebaseContext } from "../context/firebase";
import Form from "../components/form";
import * as ROUTES from "../constants/routes";
import { useHistory } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { firebaseApp } = useContext(FirebaseContext);
  const history = useHistory();

  const isInvalid = username === "" || password === "" || email === "";

  const handleSignUp = (e) => {
    e.preventDefault();
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: username,
            photoURL:
              "https://www.behance.net/gallery/33850498/Netflix-Profile-Avatars",
          })
          .then(() => history.push(ROUTES.BROWSE))
      )
      .catch((error) => {
        setUsername("");
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              placeholder="Enter username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Input
              placeholder="Enter email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              placeholder="Enter password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Submit type="submit" disabled={isInvalid}>
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user?{" "}
            <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>{" "}
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
