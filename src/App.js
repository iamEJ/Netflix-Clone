import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Home from "./pages/home";
import Browse from "./pages/browse";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import AuthListener from "./hooks/authListener";

function App() {
  const { user } = AuthListener();
  console.log(user);
  return (
    <Router>
      <ProtectedRoute user={user} exact path={ROUTES.BROWSE}>
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}
        exact
      >
        <SignIn />
      </IsUserRedirect>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_UP}
        exact
      >
        <SignUp />
      </IsUserRedirect>

      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.HOME}
        exact
      >
        <Home />
      </IsUserRedirect>
    </Router>
  );
}

export default App;
