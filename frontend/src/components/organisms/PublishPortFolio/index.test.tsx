import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PublishPortfolio from "./index";
import BootstrapDialogTitle from "./index"
describe("PublishPortfolio Component", () => {
  it("should match snapshot", () => {
    const wrapper = render(<PublishPortfolio />);

    expect(wrapper).toBeTruthy;
    let element = screen.getByTestId("publish-button");
    fireEvent.click(element);
    element = screen.getByTestId("customized-dialog-title");
    expect(element).toHaveTextContent(
      "How do you want to save your portfolio?"
    );
  });
  it("should check checkbox", () => {
    const wrapper = render(<PublishPortfolio />);

    expect(wrapper).toBeTruthy;
    let element = screen.getByTestId("publish-button");
    fireEvent.click(element);
    element = screen.getByTestId("customized-dialog-title");
    const checkbox=screen.getByTestId("checkboxitem")
    fireEvent.click(checkbox)

  });
  it("should close dialog", () => {
    const wrapper = render(<PublishPortfolio />);

    expect(wrapper).toBeTruthy;
    let element = screen.getByTestId("publish-button");
    fireEvent.click(element);
    element = screen.getByTestId("customized-dialog-title");
    const cancel=screen.getByTestId("cancelbutton")
    fireEvent.click(cancel)
    expect(element).not.toBeInTheDocument;
  });
  it("should trigger handlePublish", () => {
    const wrapper = render(<PublishPortfolio />);

    expect(wrapper).toBeTruthy;
    let element = screen.getByTestId("publish-button");
    fireEvent.click(element);
    element = screen.getByTestId("customized-dialog-title");
    const publish=screen.getByTestId("dialogpublish")
    fireEvent.click(publish)
    expect(element).not.toBeInTheDocument;
  });
  it("should handle close button", () => {
    render(<BootstrapDialogTitle />);

    let element = screen.getByTestId("publish-button");
    fireEvent.click(element);
    
  });
  
});
