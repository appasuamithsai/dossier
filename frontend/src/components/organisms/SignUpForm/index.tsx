import { Grid, Typography } from "@mui/material";
import React from "react";
import Button from "../../atoms/Button";
import theme from "../../../theme/theme";
import InputField from "../../atoms/InputField";
import {
  SIGN_UP_WITH,
  FIRST_NAME,
  LAST_NAME,
  EMAIL,
  CONTINUE,
  SIGN_IN,
  PASSWORD,
  SIGN_UP_ERROR,
} from "../../utils/constants";
import { Link } from "react-router-dom";
import SocialOrEmailPassword from "../../molecules/SocialOrEmailPassword";

interface SignUpFormProps {
  submit: boolean;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  error: boolean;
  onSubmit: (e: any) => void;
  onFirstNameChange: (e: any) => void;
  onLastNameChange: (e: any) => void;
  onEmailChange: (e: any) => void;
  onPasswordChange: (e: any) => void;
}
const gridBtnStyle = {
  marginTop: "1.25rem",
};
const continueTypoStyle = {
  textTransform: "none",
  color: "white",
  fontWeight: "600",
  paddingTop: "0.375rem",
  paddingBottom: "0.375rem",
};
const siginGridStyle = {
  marginTop: "0.75rem",
};
const signinTypo = {
  marginLeft: "0.25rem",
  color: `${theme.palette.primary.main}`,
};
const errorStyle = {
  color: "red",
};
const colorStyle = {
  color: theme.palette.text.secondary,
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "18px",
};
const haveAccountStyle = {
  color: theme.palette.text.primary,
};
const inputStyles = {
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "22px",
};
const SignUpForm: React.FC<SignUpFormProps> = ({
  submit,
  firstName,
  lastName,
  email,
  password,
  onSubmit,
  error,
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
  onPasswordChange,
}) => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container direction="column" rowSpacing="1.375rem">
          <Grid item>
            <Typography variant="body1" sx={colorStyle}>
              {SIGN_UP_WITH}
            </Typography>
          </Grid>
          <Grid item>
            <SocialOrEmailPassword />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" rowSpacing="1.25rem">
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="overline1" sx={colorStyle}>
                  {FIRST_NAME}
                </Typography>
              </Grid>
              <Grid item>
                <InputField
                  styles={inputStyles}
                  onChange={onFirstNameChange}
                  placeholder="eg. Peter"
                  width="23.3125rem"
                  data-testid="firstName"
                  value={firstName}
                  onKeyDown={onFirstNameChange}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="overline1" sx={colorStyle}>
                  {LAST_NAME}
                </Typography>
              </Grid>
              <Grid item>
                <InputField
                  styles={inputStyles}
                  onChange={onLastNameChange}
                  placeholder="eg. Parker"
                  width="23.3125rem"
                  data-testid="lastName"
                  value={lastName}
                  onKeyDown={onLastNameChange}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="overline1" sx={colorStyle}>
                  {EMAIL}
                </Typography>
              </Grid>
              <Grid item>
                <InputField
                  styles={inputStyles}
                  placeholder="eg. peterparker@gmail.com"
                  width="23.3125rem"
                  onChange={onEmailChange}
                  data-testid="email"
                  value={email}
                  onKeyDown={onEmailChange}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="overline1" sx={colorStyle}>
                  {PASSWORD}
                </Typography>
              </Grid>
              <Grid item>
                <InputField
                  styles={inputStyles}
                  placeholder="eg. peter@1234"
                  width="23.3125rem"
                  onChange={onPasswordChange}
                  data-testid="password"
                  value={password}
                  onKeyDown={onPasswordChange}
                />
              </Grid>
            </Grid>
          </Grid>
          {error ? (
            <Grid item>
              <Typography variant="overline1" sx={errorStyle}>
                {SIGN_UP_ERROR}
              </Typography>
            </Grid>
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
      <Grid item sx={gridBtnStyle}>
        <Button variant="contained" onClick={onSubmit} disabled={!submit}>
          <Typography variant="button" sx={continueTypoStyle} width="21.25rem">
            {CONTINUE}
          </Typography>
        </Button>
      </Grid>
      <Grid item sx={siginGridStyle}>
        <Typography variant="caption3" sx={haveAccountStyle}>
          Already have an account?
        </Typography>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography variant="caption3" sx={signinTypo}>
            {SIGN_IN}
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
};

export default SignUpForm;
