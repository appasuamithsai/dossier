import { Grid, Box } from "@mui/material";
import React, { useState } from "react";
import theme from "../../../theme/theme";
import Stepper from "../../organisms/Stepper";
import LoginForm from "../../organisms/LoginForm";
import { webAuth } from "../../../services/webAuth";
const gridOneStyle = {
  backgroundColor: theme.palette.structural[400],
};
const logoBoxStyle = {
  width: "6.25rem",
  height: "1.375rem",
  marginTop: "3.5rem",
  marginLeft: "6.25rem",
};
const verifyImageStyle = {
  width: "9.5rem",
  height: "9.5rem",
  margin: "9.375rem 21rem 18rem 12.25rem",
};
const otpFormStyle = {
  padding: "16.625rem 10.125rem 17.125rem 10.0625rem",
};
const siginFormStyle = {
  padding: "16.625rem 10.125rem 17.125rem 10.0625rem",
};
const signupFormStyle = {
  padding: "8.125rem 10.125rem 8.125rem 10.0625rem",
};
const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [submit, setSubmit] = useState(false);
  const emailregex =
    /^[a-zA-Z0-9.!#$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
  const emailre = /^[A-Za-z0-9.@]+$/;
  const checkAll = () => {
    if (password.trim().length >= 8 && email.trim() != "") {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  };
  const onEmailChange = (e: any) => {
    const { value } = e.target;
    if (value.trim() === "" || emailre.test(value) || e.key === "Backspace") {
      setEmail(e.target.value);
      if (emailregex.test(email)) {
        checkAll();
      }
    }
  };
  const onPasswordChange = (e: any) => {
    setPassword(e.target.value);
    checkAll();
  };
  const onSubmit = (_e: any) => {
    webAuth.login(
      {
        realm: "Dossier",
        username: email,
        password: password,
        responseType: "token",
        redirectUri: process.env.DASHBOARD_URL,
      },
      (_result: any) => {
        setError(true);
      }
    );
  };
  return (
    <Grid container>
      <Grid item sx={gridOneStyle}>
        <Stepper />
      </Grid>
      <Grid item>
        <Box sx={signupFormStyle}>
          <LoginForm
            onSubmit={onSubmit}
            password={password}
            email={email}
            submit={submit}
            error={error}
            onPasswordChange={onPasswordChange}
            onEmailChange={onEmailChange}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
