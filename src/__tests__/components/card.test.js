import React from "react";
import { render, fireEvent, getByAltText } from "@testing-library/react";
import Card from "../../components/card";
import Player from "../../components/player";

const category = "series";
const slideRows = [
  {
    title: "Comedy",
    data: [
      {
        id: "bb25cb15-1509-4f19-930a-ad3323074118",
        title: "The Office",
        description:
          "A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company.",
        genre: "comedies",
        maturity: "15",
        slug: "the-office",
        docId: "ZNgJ0KqUxbq6U9XNIGIb",
      },
    ],
  },
  {
    title: "Children",
    data: [
      {
        id: "9c5e35ca-6707-4bc5-b88e-8542c389d87b",
        title: "Peppa Pig",
        description:
          "Peppa, an outgoing preschool pig, participates in many energetic activities. She learns something new every day and has a lot of fun with her family and friends.",
        genre: "children",
        maturity: "0",
        slug: "peppa-pig",
        docId: "P7H1WR6YEnTE91wH2bU1",
      },
    ],
  },
];

describe("<Card />", () => {
  it("renders <Card /> with populated data", () => {
    const { container, getByText } = render(
      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image src={item.image} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    );
    expect(getByText("Comedy")).toBeTruthy();
    expect(getByText("The Office")).toBeTruthy();
    expect(
      getByText(
        "A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company."
      )
    ).toBeTruthy();

    expect(getByText("Children")).toBeTruthy();
    expect(getByText("Peppa Pig")).toBeTruthy();
    expect(
      getByText(
        "Peppa, an outgoing preschool pig, participates in many energetic activities. She learns something new every day and has a lot of fun with her family and friends."
      )
    ).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders <Card /> and toggles card feature", () => {
    const { container, queryByText, getByTestId, getByAltText } = render(
      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item
                  key={item.docId}
                  item={item}
                  data-testid={`${item.slug}-item-feature`}
                >
                  <Card.Image src={item.image} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    );
    expect(queryByText("15")).toBeFalsy();
    fireEvent.click(getByTestId("the-office-item-feature"));
    expect(queryByText("15")).toBeTruthy();

    expect(queryByText("PG")).toBeFalsy();
    fireEvent.click(getByTestId("peppa-pig-item-feature"));
    expect(queryByText("PG")).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
