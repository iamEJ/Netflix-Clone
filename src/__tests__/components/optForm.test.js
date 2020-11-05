import React from "react";
import { render } from "@testing-library/react";
import OptForm from "../../components/optForm";

describe("<OptForm />", () => {
  it("renders <OptForm /> with populated data", () => {
    const { container, getByText, getByPlaceholderText } = render(
      <OptForm>
        <OptForm.Input placeholder="Enter an email" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
      </OptForm>
    );
    expect(
      getByText(
        "Ready to watch? Enter your email to create or restart your membership."
      )
    ).toBeTruthy();
    expect(getByText("Try it now")).toBeTruthy();
    expect(getByPlaceholderText("Enter an email")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
