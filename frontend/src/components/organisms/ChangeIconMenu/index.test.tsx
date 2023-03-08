import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Grid } from "@mui/material";
import ChangeIconMenu, { ChangeIconMenuProps } from ".";
import { rest } from "msw";
import { setupServer } from "msw/node";

const serverResponse = rest.post(
  `http://localhost:9001/undefined`,
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({})
    );
  }
);

const server = setupServer(...[serverResponse]);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Tesing ChangeIconMenu", () => {
  beforeEach(() => {
    render(<Grid id="render123" data-testid="render123"></Grid>);
    const props: ChangeIconMenuProps = {
      icon: {
        id: 1,
        name: "Brainstorming",
        description: `Brainstorming Sessions with Stakeholders`,
        isColored: true,
        position: 1
      },
      handleChangeIconMenuClose: () => {},
      emitClick: () => {},
      iconListMenuOpen: true,
      iconListAnchorEl: document.getElementById("render123"),
    };

    render(
      <>
        <ChangeIconMenu {...props}></ChangeIconMenu>
      </>
    );
  });
  test("render and clik to change Icon", () => {
    const changeIconMenu = screen.getByTestId("changeIconMenu");
    expect(changeIconMenu).toBeInTheDocument();
    const changeIconMenuItem = screen.getByTestId("changeIconMenuItem0");
    fireEvent.click(changeIconMenuItem);
  });
  test("test on close of menu", () => {
    const backdrop = screen.getByTitle("changeIconMenuBackdrop");
    fireEvent.click(backdrop);
  });
});
