import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "./index";
import { MemoryRouter } from "react-router-dom";

describe("LoginForm component", () => {
  test("testing onchange for Email and Password", () => {
    const test = jest.fn();
    render(
      <MemoryRouter>
        <LoginForm
          onSubmit={test}
          submit={false}
          onEmailChange={() => {
            console.log("Email Changed");
          }}
          onPasswordChange={() => {
            console.log("Password Changed");
          }}
          password={""}
          email={""}
          error={false}
        />
      </MemoryRouter>
    );
    fireEvent.change(screen.getByPlaceholderText("eg. peterparker@gmail.com"), {
      target: { value: "peterparker@" },
    });
    fireEvent.change(screen.getByPlaceholderText("eg. peterparker@gmail.com"), {
      target: { value: "peterparker@gmail.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("eg. peter@1234"), {
      target: { value: "peter@1234" },
    });
    fireEvent.change(screen.getByPlaceholderText("eg. peter@1234"), {
      target: { value: "peter@123456789" },
    });
  });
});
