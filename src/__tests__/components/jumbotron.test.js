import React from "react";
import { render } from "@testing-library/react";
import Jumbotron from "../../components/jumbotron";
import jumboData from "../../fixtures/jumbo.json";

describe("<Jumbotron />", () => {
  it("renders <Jumbotron /> with populated data", () => {
    const { container, getByText, getByAltText, getByTestId } = render(
      <Jumbotron.Container>
        {jumboData.map((item) => (
          <Jumbotron key={item.id}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image
                src={item.image}
                alt={item.alt}
                data-testid={`${item.id}-jumbo-image`}
              />
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    );
    expect(getByAltText("Tiger King on Netflix")).toBeTruthy();
    expect(getByAltText("Watch on mobile")).toBeTruthy();
    expect(getByAltText("Money Heist on Netflix")).toBeTruthy();
    expect(getByText("Enjoy on your TV.")).toBeTruthy();
    expect(
      getByText("Download your programmes to watch on the go.")
    ).toBeTruthy();
    expect(getByText("Watch everywhere.")).toBeTruthy();
    expect(
      getByText("Save your data and watch all your favourites offline.")
    ).toBeTruthy();
    expect(getByTestId("1-jumbo-image"));
    expect(container.firstChild).toMatchSnapshot();
  });
});
