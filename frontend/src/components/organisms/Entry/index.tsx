import { Grid, Box } from "@mui/material";
import React, { useContext, useState } from "react";
import theme from "../../../theme/theme";
import LogoImage from "../../../assets/images/logo.png";
import VerificationImage from "../../../assets/images/mobileverification.png";
import Stepper from "../Stepper";
import SignUpForm from "../SignUpForm";
import SignInForm from "../SignInForm";
import OtpForm from "../OtpForm";
import { addPhonenumber } from "../../../services/hook";
import {  signUpUser } from "../../../services/services";
import { UserContext } from "../../utils/context";
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
const Entry: React.FC = () => {
  const [signin, setSignin] = useState(false);
  const [otp, setOtp] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [error, setError] = useState(false);
  const { userId, setUserId } = useContext(UserContext);
  const re = /^[A-Za-z ]+$/;
  const emailre = /^[A-Za-z0-9.@]+$/;
  const emailregex =
    /^[a-zA-Z0-9.!#$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
  const checkAll = () => {
    if (
      firstName.trim() != "" &&
      lastName.trim() != "" &&
      email.trim() != "" &&
      password.trim().length >= 8
    ) {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  };
  const onFirstNameChange = (e: any) => {
    const { value } = e.target;
    if (value.trim() === "" || re.test(value) || e.key === "Backspace") {
      setFirstName(value);
      checkAll();
    }
  };
  const onLastNameChange = (e: any) => {
    const { value } = e.target;
    if (value.trim() === "" || re.test(value) || e.key === "Backspace") {
      setLastName(e.target.value);
      checkAll();
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
    const { value } = e.target;
    setPassword(value);
    checkAll();
  };
  const showSiginForm = async () => {
    await signUpUser(
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        connection: process.env.REACT_APP_AUTH0_CONNECTION,
        client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
      },
      setSignin,
      setError,
      setUserId
    );
  };
  const showOtpForm = () => {
    setOtp(true);
  };
  const handlePhoneNumber = async (phone: string) => {
    setOtpValue("7900");
  await  addPhonenumber(userId, phone);
  };

  return (
    <Grid container>
      <Grid item sx={gridOneStyle}>
        <Grid item>
          {signin ? (
            <Grid item>
              <Box sx={logoBoxStyle}>
                <img src={LogoImage} alt="logo" />
              </Box>
              <Box sx={verifyImageStyle}>
                <img src={VerificationImage} alt="logo" />
              </Box>
            </Grid>
          ) : (
            <Stepper />
          )}
        </Grid>
      </Grid>
      <Grid item>
        {signin && otp && (
          <Box sx={otpFormStyle}>
            <OtpForm
              onSubmit={showOtpForm}
              firstName={firstName}
              otp={otpValue}
            />
          </Box>
        )}
        {signin && !otp && (
          <Box sx={siginFormStyle}>
            <SignInForm
              onSubmit={showOtpForm}
              firstName={firstName}
              pullData={handlePhoneNumber}
            />
          </Box>
        )}
        {!signin && (
          <Box sx={signupFormStyle}>
            <SignUpForm
              onSubmit={showSiginForm}
              firstName={firstName}
              lastName={lastName}
              email={email}
              password={password}
              submit={submit}
              error={error}
              onFirstNameChange={onFirstNameChange}
              onLastNameChange={onLastNameChange}
              onEmailChange={onEmailChange}
              onPasswordChange={onPasswordChange}
              datatest-id="signup"
            />
          </Box>
        )}
      </Grid>
    </Grid>
  );
};
export default Entry;
