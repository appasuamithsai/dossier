import React from "react";
import EditLinkModal, { EditLinkModalProps } from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const props: EditLinkModalProps = {
  link: "www.dossier.com/peterpareker/finance-portfolio",
};

describe("Testing EditLinkModalSnapShot", () => {
  test("Testing snapshot", () => {
    render(<EditLinkModal {...props} />);
    const modal = screen.getByTestId("EditLinkModal");
    expect(modal).toBeVisible();
    const headerBox = screen.getByTestId("header");
    expect(headerBox).toBeVisible();
    const description = screen.getByTestId("Description");
    expect(description).toBeVisible();
    const textInputField = screen.getByTestId("TextInputField");
    expect(textInputField).toBeVisible();
    const updateButton = screen.getByTestId("updateButton");
    expect(updateButton).toBeVisible();
  });
  test("typing in inputField and update", () => {
    render(<EditLinkModal pullDataEditLinkModel={jest.fn()} {...props} />);
    const textInputField = screen.getByTestId("TextInputField");
    fireEvent.click(textInputField);
    fireEvent.input(textInputField, { target: { value: "EditingTheLink" } });
    expect(screen.getByDisplayValue("EditingTheLink")).toBeInTheDocument();
    const updateButton = screen.getByTestId("updateButton");

    expect(updateButton).toBeVisible();
    fireEvent.click(updateButton);
  });
});
