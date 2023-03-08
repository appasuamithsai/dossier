import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Grid } from "@mui/material";
import IconToolBar, { IconToolBarProps } from ".";
import { rest } from "msw";
import { setupServer } from "msw/node";

const serverResponse = rest.put(
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

describe("testing for icon without color", () => {
  beforeEach(() => {
    render(<Grid id="render123" data-testid="render123"></Grid>);
    const props: IconToolBarProps = {
      icon: {
        id: 1,
        name: "Brainstorming",
        description: `Brainstorming Sessions with Stakeholders`,
        isColored: true,
        position: 1
      },
      index: 0,
      imageMenuOpen: true,
      emitClick: () => {},
      handleImageMenuClose: () => {},
      setImageClicked: () => {},
      imageAnchorEl: document.getElementById("render123"),
    };
    render(<IconToolBar {...props} />);
  });
  test("snapshot", () => {
    const menu = screen.getByTestId("iconToolBar");
    expect(menu).toBeInTheDocument();
  });
  test("on close or click backdrop", () => {
    const backdrop = screen.getByTitle("iconToolBarBackdrop");
    fireEvent.click(backdrop);
  });

  test("click on ChangeIcon should open ChangeIconMenu", () => {
    const changeIconButton = screen.getByTestId("iconToolBarItem0");
    fireEvent.click(changeIconButton);
    const changeIconMenu = screen.getByTestId("changeIconMenu");
    expect(changeIconMenu).toBeInTheDocument();
    const backdrop = screen.getByTitle("changeIconMenuBackdrop");
    fireEvent.click(backdrop);
  });
  test("click on colorIcon ", () => {
    const colorIcon = screen.getByTestId("iconToolBarItem1");
    fireEvent.click(colorIcon);
  });
});

describe("testing for icon with color", () => {
  beforeEach(() => {
    render(<Grid id="render123" data-testid="render123"></Grid>);
    const props: IconToolBarProps = {
      icon:  {
        id: 1,
        name: "Brainstorming",
        description: `Brainstorming Sessions with Stakeholders`,
        isColored: true,
        position: 1
      },
      index: 0,
      imageMenuOpen: true,
      emitClick: () => {},
      handleImageMenuClose: () => {},
      setImageClicked: () => {},
      imageAnchorEl: document.getElementById("render123"),
    };
    render(<IconToolBar {...props} />);
  });
  test("snapshot", () => {
    const menu = screen.getByTestId("iconToolBar");
    expect(menu).toBeInTheDocument();
  });
});
