import { Grid, Typography } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { getAwardsData } from "../../../services/services";
import theme from "../../../theme/theme";
import SlideBackground from "../../utils/templates/SlideBackground";
import { UserContext } from "../../utils/context";
import { getAwardsImage } from "../../utils/mapperFunction";

const gridStyle = {
  marginTop: "1.5rem",
};
const typo = {
  color: theme.palette.grey[500],
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "16px",
};
const AwardsSlide: React.FunctionComponent = () => {
  const [awardsData, setAwardsData] = useState([]);
  const { userId } = useContext(UserContext);
  useEffect(() => {
    getAwardsData(userId).then((res) => {
      setAwardsData(res);
    });
  }, []);
  const comp = (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        marginTop="3rem"
      >
        {awardsData.map((itemData: any) => {
          return (
            <Grid item data-testid="awardsdata">
              <Grid container width="133px" direction="column">
                <Grid item display="flex"  justifyContent="center">
                  <img src={getAwardsImage(itemData)} />
                </Grid>
                <Grid item display="flex" textAlign="center">
                  <Typography  sx={typo}>
                    {itemData}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
  return <SlideBackground title="AWARDS" children={comp} />;
};
export default AwardsSlide;
