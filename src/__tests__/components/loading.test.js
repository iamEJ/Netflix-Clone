import React from "react";
import { render } from "@testing-library/react";
import Loading from "../../components/loading";

describe("<Loading />", () => {
  it("renders <Loading /> ", () => {
    const { container, getByTestId } = render(
      <Loading src="/images/spinner.png" data-testid="loading" />
    );
    expect(getByTestId("loading")).toBeTruthy();
    expect(getByTestId("loading-picture")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders <Loading.ReleaseBody /> ", () => {
    const { container } = render(<Loading.ReleaseBody />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
