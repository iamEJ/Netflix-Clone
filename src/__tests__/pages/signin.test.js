import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { FirebaseContext } from "../../context/firebase";
import SignIn from "../../pages/signIn";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({}),
}));

const firebaseApp = {
  auth: jest.fn(() => ({
    signInWithEmailAndPassword: jest.fn(() =>
      Promise.resolve("I am signed in!")
    ),
  })),
};

describe("<SignIn />", () => {
  it("renders <SignIn /> with a form submission", async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebaseApp }}>
          <SignIn />
        </FirebaseContext.Provider>
      </Router>
    );
    await act(async () => {
      await fireEvent.change(getByPlaceholderText("Enter email address"), {
        target: { value: "jenny@gmail.com" },
      });
      await fireEvent.change(getByPlaceholderText("Enter password"), {
        target: { value: "jennyis" },
      });
      fireEvent.click(getByTestId("sign-in"));

      expect(getByPlaceholderText("Enter email address").value).toBe(
        "jenny@gmail.com"
      );
      expect(getByPlaceholderText("Enter password").value).toBe("jennyis");
      expect(queryByTestId("error")).toBeFalsy();
    });
  });
});
