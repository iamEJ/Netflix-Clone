import React from "react";
import { render } from "@testing-library/react";
import Home from "../../pages/home";

jest.mock("react-router-dom", () => ({
  Link: "Link",
  Route: ({ children, path }) => children({ match: path === "/somewhere" }),
}));

describe("Homepage", () => {
  it("renders home page", () => {
    const {
      getByText,
      getByTestId,
      getAllByPlaceholderText,
      getAllByText,
    } = render(<Home />);
    expect(getByText("Unlimited films, TV shows and more.")).toBeTruthy();
    expect(getByText("Watch anywhere. Cancel at any time.")).toBeTruthy();
    expect(getAllByText("Try it now")).toBeTruthy();
    expect(
      getAllByText(
        "Ready to watch? Enter your email to create or restart your membership."
      )
    ).toBeTruthy();
    expect(getAllByPlaceholderText("Enter an email"));
  });
});
