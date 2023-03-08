import React, { useState, useContext } from "react";
import Typography from "@mui/material/Typography";
import Button from "../../atoms/Button/index";
import { Box, Grid } from "@mui/material";
import CLOSE from "../../../assets/images/close2.png";
import AutoCompleteDropdown from "../../molecules/AutoCompleteDropdown";
import { CATEGORY_ARRAY } from "../../utils/constants";
import MuiChip from "../../atoms/Chip";
import { addAwardsData } from "../../../services/services";
import { UserContext } from "../../utils/context";
import {
  boxStyle,
  typoStyle,
  imageBox,
  boxStyleTwo,
  btnGridStyle,
  btnTypo,
} from "../UploadCertificate";
import theme from "../../../theme/theme";

const gridStyle = {
  padding: "2rem",
};
const InnerGridStyle = {
  padding: "1rem",
};
const containerroot = {
  width: "41rem",
  borderRadius: "10px",
};

interface AddSlideProps {
  onAdd: (item: any) => void;
  onClose: () => void;
}
const AddSlide: React.FC<AddSlideProps> = (props) => {
  const InitialchipData = [
    {
      id: 0,
      label: "PMI Fellow Award",

      variant: "outlined",
    },
    {
      id: 1,

      label: "PMI Eric Jenett Person of the Year Award",

      variant: "outlined",
    },
    {
      id: 2,

      label: "PMI Rising Leader Award",

      variant: "outlined",
    },
    {
      id: 3,

      label: "PMI PMO of the Year",

      variant: "outlined",
    },
    {
      id: 4,

      label: "Outstanding Project Manager Award",

      variant: "outlined",
    },
    {
      id: 5,

      label: "Others",
      variant: "outlined",
    },
  ];
  const [chipData, setChipData] = useState(InitialchipData);
  const [chipSelectedData, setChipSelectedData] = useState<any[]>([]);
  const [submit, setSubmit] = useState(false);
  const [display, setDisplay] = useState(false);
  const { userId } = useContext(UserContext);
  const onValueChange = (_e: any, newValue: string) => {
    if (newValue.toLowerCase() === "awards") {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  };
  const handleChipClick = (item: any) => {
   
    if (chipSelectedData.includes(item.label)) {
      let newChipSelected = [...chipSelectedData];
      let index = newChipSelected.indexOf(item.label)
        newChipSelected.splice(index, 1);
      setChipSelectedData(newChipSelected);
      let newArr = [...chipData];
      newArr[item.id].variant = "outlined";
      setChipData(newArr);
      if(newChipSelected.length===0)
      {
        setSubmit(false)
      }
    }
    else{
      let newChipSelected = [...chipSelectedData];
      newChipSelected.push(item.label);
      setChipSelectedData(newChipSelected);
      let newArr = [...chipData];
      newArr[item.id].variant = "filled";
      setChipData(newArr);
      setSubmit(true);
    }
  };
  const handleAdd = async () => {
    const item: any = {
      Data: chipSelectedData,
    };
    await addAwardsData(chipSelectedData, userId);

    return props.onAdd(item);
  };
  return (
    <Grid container sx={containerroot}>
      <Grid item>
        <Box sx={boxStyle}>
          <Typography sx={typoStyle}>Add Slide</Typography>
          <Box onClick={props.onClose} sx={imageBox}>
            <img src={CLOSE} alt="close" />
          </Box>
        </Box>
      </Grid>

      <Grid item sx={InnerGridStyle}>
        <Grid container rowSpacing="1rem">
          <Grid item>
            <Box sx={boxStyleTwo}>
              <Typography variant="overline2">Category Name </Typography>
            </Box>
          </Grid>
          <AutoCompleteDropdown
            onChange={onValueChange}
            label="Select Category"
            data-testid="CategoryChange"
            item_array={CATEGORY_ARRAY}
          />
          {display && (
            <Grid item data-testid="selectawards">
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "22px",
                  marginTop: "12px",
                  width: "624px",
                }}
                color={theme.palette.text.primary}
              >
                Select Your Awards
              </Typography>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: ".375rem",
                }}
              >
                {chipData.slice(0, 3).map((item) => (
                  <MuiChip
                    label={item.label}
                    variant={(item.variant as "filled") || "outlined"}
                    onClick={() => handleChipClick(item)}
                  />
                ))}
              </Box>
              <Grid
                style={{
                  marginTop: "0.3125rem",
                  display: "flex",
                  flexDirection: "row",
                  columnGap: ".375rem",
                }}
              >
                {chipData.slice(3, 5).map((item1) => (
                  <MuiChip
                    label={item1.label}
                    variant={(item1.variant as "filled") || "outlined"}
                    onClick={() => handleChipClick(item1)}
                  />
                ))}
              </Grid>
            </Grid>
          )}
          <Grid item sx={btnGridStyle}>
            <Button
              variant="contained"
              data-testid="addSlidebutton"
              disabled={!submit}
              onClick={() => handleAdd()}
            >
              <Typography variant="button" sx={btnTypo}>
                Add
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddSlide;
