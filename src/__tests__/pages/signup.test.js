import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { FirebaseContext } from "../../context/firebase";
import SignUp from "../../pages/signUp";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({}),
}));

const firebaseApp = {
  auth: jest.fn(() => ({
    createUserWithEmailAndPassword: jest.fn(() =>
      Promise.resolve({
        user: {
          updateProfile: jest.fn(() => Promise.resolve("I am sign up.")),
        },
      })
    ),
  })),
};

describe("<Signup />", () => {
  it("renders <SignUp /> with a form submission", async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebaseApp }}>
          <SignUp />
        </FirebaseContext.Provider>
      </Router>
    );
    await act(async () => {
      await fireEvent.change(getByPlaceholderText("Enter username"), {
        target: { value: "jenny" },
      });
      await fireEvent.change(getByPlaceholderText("Enter email address"), {
        target: { value: "jenny@gmail.com" },
      });
      await fireEvent.change(getByPlaceholderText("Enter password"), {
        target: { value: "jennyis" },
      });
      fireEvent.click(getByTestId("sign-up"));

      expect(getByPlaceholderText("Enter username").value).toBe("jenny");
      expect(getByPlaceholderText("Enter email address").value).toBe(
        "jenny@gmail.com"
      );
      expect(getByPlaceholderText("Enter password").value).toBe("jennyis");
      expect(queryByTestId("error")).toBeFalsy();
    });
  });
});
