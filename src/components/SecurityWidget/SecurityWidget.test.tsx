import React from "react";

import { render } from "@testing-library/react";

import SecurityWidget from "./SecurityWidget";

describe("SecurityWidget", () => {
  test("render the SecurityWidget component", () => {
    render(<SecurityWidget type="primary" />);
  });
});
