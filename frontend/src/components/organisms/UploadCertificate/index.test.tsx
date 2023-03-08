import React from "react";
import {
  act,
  fireEvent,
  getByTestId,
  render,
  RenderResult,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { ADD_CERTIFICATE } from "../../utils/constants";
import userEvent from "@testing-library/user-event";
import UploadCertificate from "./index";
describe("UploadCertificateForm Component", () => {
  let file: File;

  beforeEach(() => {
    file = new File(['hello'], 'hello.png', { type: 'image/png' });
  });
  global.URL.createObjectURL = jest.fn();

  it("should match snapshot", () => {
    const test1 = jest.fn();
    const test2 = jest.fn();
    render(<UploadCertificate onSubmit={test1} onClose={test2} />);
    const wrapper = screen.getByText(ADD_CERTIFICATE);
    expect(wrapper).toBeTruthy;
  });

  it("should trigger Certificate onChange with selected option", () => {
    const test1 = jest.fn();
    const test2 = jest.fn();
    const screen1 = render(
      <UploadCertificate onSubmit={test1} onClose={test2} />
    );

    userEvent.type(screen1.getByTestId("textfiledcertificate"), "proj");
  });
  it("should trigger ShowOptions ", () => {
    const test1 = jest.fn();
    const test2 = jest.fn();
    const screen1 = render(
      <UploadCertificate onSubmit={test1} onClose={test2} />
    );
    userEvent.type(screen1.getByTestId("textfiledcertificate"), "proj");
    let element = screen.getByTestId("showOptionsTest");
    fireEvent.click(element);
    expect(element).toBeTruthy();
  });
  it("should trigger ShowImage ", () => {
    const test1 = jest.fn();
    const test2 = jest.fn();
    const screen1 = render(
      <UploadCertificate onSubmit={test1} onClose={test2} />
    );
    userEvent.type(screen1.getByTestId("textfiledcertificate"), "proj");
    let element = screen.getByTestId("showOptionsTest");
    fireEvent.click(element);
    element = screen.getByTestId("showImageTest");

    expect(element).toBeTruthy();
    fireEvent.click(element);
  });
  it("should chage input value", async () => {
    const test1 = jest.fn();
    const test2 = jest.fn();

    const screen1 = render(
      <UploadCertificate onSubmit={test1} onClose={test2} />
    );
    const autocomplete = screen1.getByPlaceholderText("Finance Portfolio");
    let element = screen.getByTestId("showOptionsTest");
    autocomplete.focus();
    // assign value to input field
    fireEvent.change(autocomplete, { target: { value: "proj" } });
    // navigate to the first item in the autocomplete box
    fireEvent.keyDown(autocomplete, { key: "ArrowDown" });
    // select the first item
    fireEvent.keyDown(autocomplete, { key: "Enter" });
    // check the new value of the input field
    expect(autocomplete).toHaveValue("Project Management Professional (PMP)");
    element = screen.getByTestId("showOptionsTest");
    fireEvent.click(element);
    fireEvent.click(element);
    fireEvent.click(element);

    element = screen.getByTestId("uploadmediabutton");
    fireEvent.click(element);
  });
  it("should trigger uploading ", async () => {
    const test1 = jest.fn();
    const test2 = jest.fn();
    const screen1 = render(
      <UploadCertificate onSubmit={test1} onClose={test2} />
    );
    const autocomplete = screen1.getByPlaceholderText("Finance Portfolio");
    autocomplete.focus();
    // assign value to input field
    fireEvent.change(autocomplete, { target: { value: "proj" } });
    // navigate to the first item in the autocomplete box
    fireEvent.keyDown(autocomplete, { key: "ArrowDown" });
    // select the first item
    fireEvent.keyDown(autocomplete, { key: "Enter" });
    // check the new value of the input field
    expect(autocomplete).toHaveValue("Project Management Professional (PMP)");
    let element = screen.getByTestId("showOptionsTest");
    fireEvent.click(element);
    element = screen.getByTestId("showImageTest");
    fireEvent.click(element);
    let wrapper = screen.getByTestId("uploadbuttoninput");
    await waitFor(() =>
      fireEvent.change(wrapper, {
        target: { files: [file] },
      })
    );
    element = screen.getByTestId("canceluploadicon");
    fireEvent.click(element)
  });
  it("should trigger onsubmit ", async () => {
    const test1 = jest.fn();
    const test2 = jest.fn();
    const screen1 = render(
      <UploadCertificate onSubmit={test1} onClose={test2} />
    );
    const autocomplete = screen1.getByPlaceholderText("Finance Portfolio");
    autocomplete.focus();
    // assign value to input field
    fireEvent.change(autocomplete, { target: { value: "proj" } });
    // navigate to the first item in the autocomplete box
    fireEvent.keyDown(autocomplete, { key: "ArrowDown" });
    // select the first item
    fireEvent.keyDown(autocomplete, { key: "Enter" });
    // check the new value of the input field
    expect(autocomplete).toHaveValue("Project Management Professional (PMP)");
    let element = screen.getByTestId("showOptionsTest");
    fireEvent.click(element);
    element = screen.getByTestId("showImageTest");
    fireEvent.click(element);
    let wrapper = screen.getByTestId("uploadbuttoninput");
    await waitFor(() =>
      fireEvent.change(wrapper, {
        target: { files: [file] },
      })
    );
    element = screen.getByTestId("UploadSubmitbutton");
    fireEvent.click(element)
  });
});
