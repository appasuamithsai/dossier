import React, { Dispatch, SetStateAction } from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Popup, { PopupProps } from ".";
import "@testing-library/jest-dom";
import { Grid } from "@mui/material";

const dispact: Dispatch<SetStateAction<boolean>> = () => console.log("true");

describe("Testing popup", () => {
  beforeEach(() => {
    render(<Grid id="render123" />);
    const props: PopupProps = {
      anchorEl: document.getElementById("render123"),
      open: true,
      handleOnClose: () => {},
    };
    render(<Popup {...props}></Popup>);
  });
  test("Render and open close of popup", () => {
    const popup = screen.getByTestId("popup");
    expect(popup).toBeVisible();
    const backdrop = screen.getByTitle("backdrop");
    fireEvent.click(backdrop);
  });
});
