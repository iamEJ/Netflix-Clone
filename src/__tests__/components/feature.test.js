import React from "react";
import { render } from "@testing-library/react";
import Feature from "../../components/feature";

describe("<Feature /> ", () => {
  it("renders <Feature /> with populated data", () => {
    const { container, getByText } = render(
      <Feature>
        <Feature.Title>Unlimited films, TV shows and more.</Feature.Title>
        <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
      </Feature>
    );
    expect(getByText("Unlimited films, TV shows and more.")).toBeTruthy();
    expect(getByText("Watch anywhere. Cancel at any time.")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders <Feature /> with just a title", () => {
    const { container, getByText, queryByText } = render(
      <Feature>
        <Feature.Title>Unlimited films, TV shows and more.</Feature.Title>
      </Feature>
    );
    expect(getByText("Unlimited films, TV shows and more.")).toBeTruthy();
    expect(queryByText("Watch anywhere. Cancel at any time.")).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
