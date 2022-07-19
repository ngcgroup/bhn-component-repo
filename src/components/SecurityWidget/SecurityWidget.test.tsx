import React from "react";

import { render } from "@testing-library/react";

import SecurityWidget from "./SecurityWidget";

describe("SecurityWidget", () => {
  test("render the SecurityWidget component", () => {
    console.log(process.env.STORYBOOK_DATADOME_CLIENT_KEY)
    render(<SecurityWidget datadome_key={process.env.STORYBOOK_DATADOME_CLIENT_KEY} />);
  });
});
