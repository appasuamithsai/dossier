import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Button from "../../atoms/Button";
import { ENTER_OTP, OTP, VERIFY } from "../../utils/constants";
import PinInput from "react-pin-input";
import theme from "../../../theme/theme";

interface SignInFormProps {
  onSubmit: (e: any) => void;
  firstName: string;
  otp?: string;
}

const gridBtnStyle = {
  marginTop: "1.25rem",
};
const siginTypoStyle = {
  textTransform: "none",
  color: "white",
  fontWeight: "600",
  paddingTop: "0.375rem",
  paddingBottom: "0.375rem",
};
const gridItem3 = {
  marginTop: "3.5rem",
};
const gridItem2 = {
  marginTop: "0.125rem",
};
const gridItem4 = {
  marginTop: "0.75rem",
  marginLeft: "0.375rem",
};
const inputStyle = {
  border: "none",
  borderBottom: "1px solid #6D6C73",
  width: "4.375rem",
  marginRight: "1.4375rem",
};
const inputFocusStyle = {
  borderBottomColor: theme.palette.primary.main,
  width: "4.375rem",
  marginRight: "1.4375rem",
};
const feildGrid = {
  ".css-ul016f-MuiInputBase-input-MuiInput-input": {
    textAlign: "center",
    max: "1",
    type: "number",
  },
};
const typoColorStyle = {
  color: theme.palette.text.secondary,
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "24px",
};
const otpColorStyle = {
  color: theme.palette.text.secondary,
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "18px",
};
const heyStyle = {
  color: theme.palette.text.primary,
  fontweight: 700,
  fontSize: "20px",
  lineHeight: "30px",
};
const signInInputStyles = {
  color: theme.palette.text.primary,
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "22px",
};
const OtpForm: React.FC<SignInFormProps> = ({ onSubmit, firstName, otp }) => {
  const [verify, setVerify] = useState(false);
  const name = `Hey ${firstName}`;
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="subtitle1" sx={heyStyle}>
          {name}
        </Typography>
      </Grid>
      <Grid item sx={gridItem2}>
        <Typography variant="body2" sx={typoColorStyle}>
          {ENTER_OTP}
        </Typography>
      </Grid>
      <Grid item sx={gridItem3}>
        <Typography variant="overline1" sx={otpColorStyle}>
          {OTP}
        </Typography>
      </Grid>
      <Grid item sx={gridItem4}>
        <PinInput
          length={4}
          initialValue=""
          onChange={(value) => {
            if (value.length < 3) {
              setVerify(false);
            }
          }}
          type="numeric"
          inputMode="number"
          inputStyle={inputStyle}
          inputFocusStyle={inputFocusStyle}
          onComplete={(value) => {
            if (value.trim().length < 3) {
              setVerify(false);
            }
            console.log(otp, " ", value);
            if (otp === value) {
              setVerify(true);
            }
          }}
          autoSelect={true}
          regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
          data-testid="pinview"
        />
      </Grid>
      <Grid item sx={gridBtnStyle}>
        <a href="/dashboard" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            onClick={onSubmit}
            disabled={!verify}
            data-testid="verify"
          >
            <Typography variant="button" sx={siginTypoStyle} width="21.25rem">
              {VERIFY}
            </Typography>
          </Button>
        </a>
      </Grid>
    </Grid>
  );
};

export default OtpForm;
