import { render, screen } from "@testing-library/react";

import { Link } from "./Link";

describe("Link", () => {
  it("should render a basic link component", () => {
    const { container } = render(<Link href="https://fuel.sh">Click</Link>);
    expect(container.querySelector("a")).toBeInTheDocument();
    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("should add an external icon when isExternal prop is passed", () => {
    const { container } = render(
      <Link href="https://fuel.sh" isExternal>
        Click
      </Link>
    );

    expect(container.querySelector("a")).toBeInTheDocument();
    expect(container.querySelector("svg")).toBeInTheDocument();
    expect(screen.getByRole("link")).toBeInTheDocument();
  });
});