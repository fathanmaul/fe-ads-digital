
import GetStarted from "@/app/components/Landing/GetStarted";
import { render } from "@testing-library/react";

describe("Login", () => {
  it("should render login form", () => {
    const page = render(
      <GetStarted />
    );
    expect(page).toMatchSnapshot();
  });
});