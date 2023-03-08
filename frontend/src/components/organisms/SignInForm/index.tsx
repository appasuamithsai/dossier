import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import theme from "../../../theme/theme";
import Button from "../../atoms/Button";
import InputField from "../../atoms/InputField";
import {
  ENTER_MOBILE_NUMBER,
  MOBILE_NUMBER,
  GET_OTP,
} from "../../utils/constants";

interface SignInFormProps {
  onSubmit: (e: any) => void;
  firstName: string;
  pullData?: any;
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
};
const typoColorStyle = {
  color: theme.palette.text.secondary,
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "24px",
};
const mobileNumberColorStyle = {
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
const inputStyles = {
  color: theme.palette.text.primary,
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "22px",
};
const SignInForm: React.FC<SignInFormProps> = ({
  onSubmit,
  firstName,
  pullData,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submit, setSubmit] = useState(false);
  const phoneregex = /^\d{9}$/;
  const pregex = /^\d+$/;
  const onPhoneNumberChange = (e: any) => {
    const { value } = e.target;
    if (value.trim() === "" || pregex.test(value) || e.key === "Backspace") {
      if (value.length <= 10) {
        setPhoneNumber(e.target.value);
        if (phoneregex.test(phoneNumber)) {
          setSubmit(true);
          if (value.length === 10) pullData(phoneNumber);
        } else {
          setSubmit(false);
        }
      }
    }
  };
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
          {ENTER_MOBILE_NUMBER}
        </Typography>
      </Grid>
      <Grid item sx={gridItem3}>
        <Typography variant="overline1" sx={mobileNumberColorStyle}>
          {MOBILE_NUMBER}
        </Typography>
      </Grid>
      <Grid item sx={gridItem4}>
        <InputField
          styles={inputStyles}
          placeholder="eg. +1 330-617-3324"
          width="23.3125rem"
          onChange={onPhoneNumberChange}
          value={phoneNumber}
        />
      </Grid>
      <Grid item sx={gridBtnStyle}>
        <Button
          variant="contained"
          onClick={onSubmit}
          disabled={!submit}
          data-testid="signup"
        >
          <Typography variant="button" sx={siginTypoStyle} width="21.25rem">
            {GET_OTP}
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default SignInForm;
