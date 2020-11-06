import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Header from "../../components/header";

jest.mock("react-router-dom", () => ({
  Link: "Link",
  Route: ({ children, path }) => children({ match: path === "/somewhere" }),
}));

describe("<Header />", () => {
  it("renders <Header /> with a background", () => {
    const { container, getByText, getByTestId } = render(
      <Header>
        <Header.Frame>
          <Header.Logo
            src="https://www.brandvia.com/wp-content/uploads/2019/04/Netflix-Logo.png"
            alt="Netflix"
          />
          <Header.TextLink active="true">Hello. I am a link</Header.TextLink>
        </Header.Frame>
      </Header>
    );
    expect(getByText("Hello. I am a link")).toBeTruthy();
    expect(getByTestId("header-bg")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders <Header /> without a background", () => {
    const { container, getByText, queryByTestId } = render(
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo
            src="https://www.brandvia.com/wp-content/uploads/2019/04/Netflix-Logo.png"
            alt="Netflix"
          />
          <Header.Button>Sign In</Header.Button>
          <Header.TextLink active="false">Hello. I am a link</Header.TextLink>
        </Header.Frame>
      </Header>
    );
    expect(getByText("Hello. I am a link")).toBeTruthy();
    expect(queryByTestId("header-bg")).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders all the <Header /> with a background", () => {
    const { container, getByText, queryByTestId } = render(
      <Header src="joker1">
        <Header.Frame>
          <Header.Group>
            <Header.Logo
              src="https://www.brandvia.com/wp-content/uploads/2019/04/Netflix-Logo.png"
              alt="Netflix"
            ></Header.Logo>
            <Header.TextLink active={false} onClick={() => {}}>
              Series
            </Header.TextLink>
            <Header.TextLink active={false} onClick={() => {}}>
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search searchTerm="Joker" setSearchTerm={() => {}} />
            <Header.Profile>
              <Header.Picture src="/images/jenny.png" />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src="/images/jenny.png" />
                  <Header.TextLink>Jenny</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => {}}>Logout</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Now: The Joker</Header.FeatureCallOut>
          <Header.Text>
            In Gotham City, mentally troubled comedian Arthur Fleck is
            disregarded and mistreated by society.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
    );

    expect(queryByTestId("search-input")).toBeTruthy();
    expect(queryByTestId("search-input").value).toBe("Joker");
    fireEvent.change(
      queryByTestId("search-input", { target: { value: "Simpsons" } })
    );
    fireEvent.click(queryByTestId("search-click"));
    expect(getByText("Series")).toBeTruthy();
    expect(getByText("Films")).toBeTruthy();
    expect(getByText("Jenny")).toBeTruthy();
    expect(getByText("Watch Now: The Joker")).toBeTruthy();
    expect(getByText("Logout")).toBeTruthy();
    expect(
      getByText(
        "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society."
      )
    ).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
