import React from "react";
import { render, screen } from "@testing-library/react";
import Avatar from ".";
import "@testing-library/jest-dom";

test("Test - Avatar", () => {
  render(
    <Avatar variant="square" src="../../../../public/assets/images/user.svg" />,
  );
  const avatar = screen.getByRole("img");
  expect(avatar).toHaveAttribute(
    "src",
    "../../../../public/assets/images/user.svg",
  );
});
