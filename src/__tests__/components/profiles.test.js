import React from "react";
import { render, getByTestId } from "@testing-library/react";
import Profiles from "../../components/profiles";

describe("<Profiles /> ", () => {
  it("renders <Profiles /> with populated data", () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.Item onClick={() => {}}>
            <Profiles.Picture
              src="/images/profile.png"
              data-testid="profile-image"
            />
            <Profiles.Name>Jenny</Profiles.Name>
          </Profiles.Item>
        </Profiles.List>
      </Profiles>
    );
    expect(getByText("Who's watching?")).toBeTruthy();
    expect(getByTestId("profile-image")).toBeTruthy();
    expect(getByText("Jenny")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
