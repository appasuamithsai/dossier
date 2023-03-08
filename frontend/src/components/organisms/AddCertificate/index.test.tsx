import React from "react";
import { fireEvent,render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";       
import AddCertificate from "./index";
import { ADD_CERTIFICATE } from "../../utils/constants";
import userEvent from '@testing-library/user-event';

describe("AddCertificate Component", () => {
  it("should match snapshot", () => {
    const test1=jest.fn();
    const test2=jest.fn();
    render(<AddCertificate onSubmit={test1} setForm={test2}/>);
    const wrapper = screen.getByText(ADD_CERTIFICATE);
    expect(wrapper).toBeTruthy;
  });

  it("Click on Button", () => {
    const test1=jest.fn();
    const test2=jest.fn();
    const {getByTestId}=render(<AddCertificate onSubmit={test1} setForm={test2}/>);
    fireEvent.click(getByTestId("button"));
  });

  it('should trigger FiledOfStudy onChange with selected option', () => {
    const test1=jest.fn();
    const test2=jest.fn();
    const screen1 = render(<AddCertificate onSubmit={test1} setForm={test2}/>);
    userEvent.type(screen1.getByTestId('textfield-Eg: Pharmaueticals'), 'ucla');
    const autocomplete = screen.getByPlaceholderText("Eg: Pharmaueticals");
    autocomplete.focus();
    fireEvent.change(autocomplete, { target: { value: "Man" } });
    fireEvent.keyDown(autocomplete, { key: "ArrowDown" });
    fireEvent.keyDown(autocomplete, { key: "Enter" });
    expect(autocomplete).toHaveValue("Management of Information System");
  });

  it('should trigger University onChange with selected option', () => {
    const test1=jest.fn();
    const test2=jest.fn();
    const screen1 = render(<AddCertificate onSubmit={test1} setForm={test2}/>);
    userEvent.type(screen1.getByTestId('autocomplete-Search University Here'), 'ucla');
    const autocomplete = screen.getByPlaceholderText("Search University Here");
    autocomplete.focus();
    fireEvent.change(autocomplete, { target: { value: "Univ" } });
    fireEvent.keyDown(autocomplete, { key: "ArrowDown" });
    fireEvent.keyDown(autocomplete, { key: "Enter" });
    expect(autocomplete).toHaveValue("University of San Francisco");
  });

  it('should trigger Degree onChange with selected option', () => {
    const test1=jest.fn();
    const test2=jest.fn();
    const screen1 = render(<AddCertificate onSubmit={test1} setForm={test2}/>);
    userEvent.type(screen1.getByTestId(`textfield-Eg:Bachelor's`), 'ucla');
    const autocomplete = screen.getByPlaceholderText("Eg:Bachelor's");
    autocomplete.focus();
    fireEvent.change(autocomplete, { target: { value: "bach" } });
    fireEvent.keyDown(autocomplete, { key: "ArrowDown" });
    fireEvent.keyDown(autocomplete, { key: "Enter" });
    expect(autocomplete).toHaveValue("Bachelor of Business Administration");
  });
});
