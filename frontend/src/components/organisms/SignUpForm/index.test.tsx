import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SignUpForm from "./index";
import { MemoryRouter } from "react-router-dom";

describe("SignUpForm component", () => {
  test("testing onchange for First Name", () => {
    render(
      <MemoryRouter>
        <SignUpForm
          onSubmit={test}
          submit={false}
          onFirstNameChange={() => {
            console.log("First Name Changed");
          }}
          onLastNameChange={() => {
            console.log("Last Name Changed");
          }}
          onEmailChange={() => {
            console.log("Email Name Changed");
          }}
          firstName={""}
          lastName={""}
          email={""}
          password={""}
          onPasswordChange={() => {
            console.log("Password Changed");
          }}
          error={false}
        />
      </MemoryRouter>
    );
    fireEvent.change(screen.getByPlaceholderText("eg. Peter"), {
      target: { value: "peter" },
    });
  });

  test("testing onchange for Last Name", () => {
    render(
      <MemoryRouter>
        <SignUpForm
          onSubmit={test}
          submit={false}
          onFirstNameChange={() => {
            console.log("First Name Changed");
          }}
          onLastNameChange={() => {
            console.log("Last Name Changed");
          }}
          onEmailChange={() => {
            console.log("Email Name Changed");
          }}
          firstName={""}
          lastName={""}
          email={""}
          password={""}
          onPasswordChange={() => {
            console.log("Password Changed");
          }}
          error={false}
        />
      </MemoryRouter>
    );
    fireEvent.change(screen.getByPlaceholderText("eg. Parker"), {
      target: { value: "peter" },
    });
  });

  test("testing onchange for Email", () => {
    render(
      <MemoryRouter>
        <SignUpForm
          onSubmit={test}
          submit={false}
          onFirstNameChange={() => {
            console.log("First Name Changed");
          }}
          onLastNameChange={() => {
            console.log("Last Name Changed");
          }}
          onEmailChange={() => {
            console.log("Email Name Changed");
          }}
          firstName={""}
          lastName={""}
          email={""}
          password={""}
          onPasswordChange={() => {
            console.log("Password Changed");
          }}
          error={false}
        />
      </MemoryRouter>
    );
    fireEvent.change(screen.getByPlaceholderText("eg. peterparker@gmail.com"), {
      target: { value: "peter" },
    });
  });

  test("testing onchange for Email empty", () => {
    render(
      <MemoryRouter>
        <SignUpForm
          onSubmit={test}
          submit={false}
          onFirstNameChange={() => {
            console.log("First Name Changed");
          }}
          onLastNameChange={() => {
            console.log("Last Name Changed");
          }}
          onEmailChange={() => {
            console.log("Email Name Changed");
          }}
          firstName={""}
          lastName={""}
          email={""}
          password={""}
          onPasswordChange={() => {
            console.log("Password Changed");
          }}
          error={false}
        />
      </MemoryRouter>
    );
    fireEvent.change(screen.getByPlaceholderText("eg. peterparker@gmail.com"), {
      target: { value: "peter" },
    });
    fireEvent.change(screen.getByPlaceholderText("eg. Parker"), {
      target: { value: "peter" },
    });
    fireEvent.change(screen.getByPlaceholderText("eg. Peter"), {
      target: { value: "peter" },
    });
    fireEvent.change(screen.getByPlaceholderText("eg. Peter"), {
      target: { value: "" },
    });
  });

  test("testing onchange for Password", () => {
    render(
      <MemoryRouter>
        <SignUpForm
          onSubmit={test}
          submit={false}
          onFirstNameChange={() => {
            console.log("First Name Changed");
          }}
          onLastNameChange={() => {
            console.log("Last Name Changed");
          }}
          onEmailChange={() => {
            console.log("Email Name Changed");
          }}
          firstName={""}
          lastName={""}
          email={""}
          password={""}
          onPasswordChange={() => {
            console.log("Password Changed");
          }}
          error={false}
        />
      </MemoryRouter>
    );
    fireEvent.change(screen.getByPlaceholderText("eg. peter@1234"), {
      target: { value: "peter@1234" },
    });
    fireEvent.change(screen.getByPlaceholderText("eg. peter@1234"), {
      target: { value: "peter@12345678" },
    });
  });
});
