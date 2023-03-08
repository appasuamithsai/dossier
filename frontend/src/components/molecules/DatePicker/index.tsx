import React from "react";
import Calendar from "@mui/icons-material/CalendarTodayOutlined";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DatePicker } from "@mui/lab";
import { Grid } from "@mui/material";

interface DatePickerProps {
  label: string;
  id?: string;
  date: Date;
  setChanged?: (item: any) => void;
  checkAll?: () => void;
}

const ResponsiveDatePickers = (props: DatePickerProps) => {
  const [value, setValue] = React.useState<Date | null>();
  return (
    <Grid
      style={{
        width: "302px",
        height: "40px",
        borderRadius: "10px",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          PopperProps={{
            sx: { margin: "10px !important"},
          }}
          views={["year", "month"]}
          disableFuture
          value={value}
          onChange={(newValue) => {
            if (newValue) {
              const mm =
                newValue.getMonth() + 1 < 9
                  ? "0" + newValue.getMonth()
                  : newValue.getMonth();
              const mmYY = mm + "/" + newValue.getFullYear();
              setValue(newValue);
              if (props.setChanged && props.checkAll) {
                props.setChanged(mmYY);
                props.checkAll();
              }
            }
          }}
          renderInput={(params) => (
            <TextField
              size="small"
              sx={{
                "& .css-33lfn3-MuiInputBase-input-MuiOutlinedInput-input": {
                  font: "revert",
                },
              }}
              fullWidth
              {...params}
            />
          )}
          components={{
            OpenPickerIcon: Calendar,
          }}
          inputFormat="MM/yyyy"
        />
      </LocalizationProvider>
    </Grid>
  );
};
export default ResponsiveDatePickers;
