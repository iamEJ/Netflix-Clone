import React from "react";
import { render } from "@testing-library/react";
import Form from "../../components/form";

jest.mock("react-router-dom");

describe("<Form />", () => {
  it("renders <Form /> with populated data", () => {
    const { container, getByText, getByPlaceholderText } = render(
      <Form>
        <Form.Title>Sign In</Form.Title>
        <Form.Error></Form.Error>
        <Form.Base>
          <Form.Input
            placeholder="Enter email address"
            type="email"
            onChange={() => {}}
          />
          <Form.Input
            placeholder="Enter password"
            type="password"
            onChange={() => {}}
          />
          <Form.Submit type="submit" disabled>
            Sign In
          </Form.Submit>
        </Form.Base>
        <Form.Text>
          New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
        </Form.Text>
        <Form.TextSmall>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </Form.TextSmall>
      </Form>
    );
    expect(
      getByText(
        "This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more."
      )
    ).toBeTruthy();
    expect(getByText("Sign Up Now.")).toBeTruthy();
    expect(getByText("Sign In")).toBeTruthy();
    expect(getByText("Sign In").disabled).toBeTruthy();
    expect(getByPlaceholderText("Enter email address")).toBeTruthy();
    expect(getByPlaceholderText("Enter password")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
