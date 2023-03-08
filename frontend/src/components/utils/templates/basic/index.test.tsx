import React from "react";
import Basic from ".";
import {  render, screen } from "@testing-library/react";
import { Box, Typography } from "@mui/material";
import "@testing-library/jest-dom/extend-expect";

const props = {
  children: (
    <Box data-testid="body">
      <Typography data-testid="bodyText">
        Your Content here!!!
      </Typography>
    </Box>
  ),
};

describe("testing the basic", () => {
  test("to test the snap shot", () => {
    render(<Basic {...props}/>);
    const body = screen.getByTestId("body");
    expect(body).toBeVisible();
    const bodyText = screen.getByTestId("bodyText");
    expect(bodyText).toHaveTextContent("Your Content here!!!");
  });
});
