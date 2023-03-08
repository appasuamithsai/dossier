import { Grid, Typography } from "@mui/material";
import React from "react";
import Button from "../../atoms/Button";
import InputField from "../../atoms/InputField";
import theme from "../../../theme/theme";
import {
  CONTINUE,
  EMAIL,
  PASSWORD,
  SIGN_IN_ERROR,
  SIGN_IN_WITH,
  SIGN_UP,
} from "../../utils/constants";
import { Link } from "react-router-dom";
import SocialOrEmailPassword from "../../molecules/SocialOrEmailPassword";
interface LoginFormProps {
  onSubmit: (e: any) => void;
  password: string;
  email: string;
  submit: boolean;
  error: boolean;
  onPasswordChange: (e: any) => void;
  onEmailChange: (e: any) => void;
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
const siginErrorStyle = {
  marginTop: "1rem",
  color: "red",
  textTransform: "none",
};
const typoColorStyle = {
  color: theme.palette.text.secondary,
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "18px",
};
const signUpStyle = {
  color: theme.palette.text.primary,
};
const loginInputStyles = {
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "22px",
};
const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  password,
  email,
  submit,
  error,
  onPasswordChange,
  onEmailChange,
}) => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container direction="column" rowSpacing="1.375rem">
          <Grid item>
            <Typography variant="body1" sx={typoColorStyle}>
              {SIGN_IN_WITH}
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
                <Typography variant="overline1" sx={typoColorStyle}>
                  {EMAIL}
                </Typography>
              </Grid>
              <Grid item>
                <InputField
                  styles={loginInputStyles}
                  onChange={onEmailChange}
                  placeholder="eg. peterparker@gmail.com"
                  width="23.3125rem"
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
                <Typography variant="overline1" sx={typoColorStyle}>
                  {PASSWORD}
                </Typography>
              </Grid>
              <Grid item>
                <InputField
                  styles={loginInputStyles}
                  onChange={onPasswordChange}
                  placeholder="eg. peter@1234"
                  width="23.3125rem"
                  data-testid="password"
                  value={password}
                  onKeyDown={onPasswordChange}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {error ? (
        <Typography variant="overline1" sx={[siginErrorStyle]} width="21.25rem">
          {SIGN_IN_ERROR}
        </Typography>
      ) : (
        <></>
      )}
      <Grid item sx={gridBtnStyle}>
        <Button variant="contained" onClick={onSubmit} disabled={!submit}>
          <Typography variant="button" sx={continueTypoStyle} width="21.25rem">
            {CONTINUE}
          </Typography>
        </Button>
      </Grid>
      <Grid item sx={siginGridStyle}>
        <Typography variant="caption3" sx={signUpStyle}>
          Don't have an account?
        </Typography>
        <Link to="signup" style={{ textDecoration: "none" }}>
          <Typography variant="caption3" sx={signinTypo}>
            {SIGN_UP}
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
};
export default LoginForm;
