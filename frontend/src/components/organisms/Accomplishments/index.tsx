import { Grid, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import SlideBackground from "../../utils/templates/SlideBackground";
import { ACCOMPLISHMENTS } from "../../utils/constants";
import IconWithBgAndTypography from "../IconWithBgAndTypography";
import {
  getIconSrc,
  Icon,
  sortAccordingToPostion,
} from "../../utils/mapperFunction";
import { makeStyles } from "@mui/styles";
import { getAllStakeHolderIcons } from "../../../services/services";
import { UserContext } from "../../utils/context";
const classes = makeStyles(() => ({
  headingStyles: {
    position: "relative",
    bottom: "20px",
    marginLeft: "32px",
  },
  bodyGridStyles: {
    marginTop: "47px",
    display: "flex",
    alignContent: "center",
    justifyContent: "space-evenly",
  },
}));
const Accomplishments: React.FC = () => {
  const { userId } = useContext(UserContext);

  const [stakeHolderIcons, setStakeHolderIcons] = useState<Icon[]>([]);
  const [loading, setIsLoading] = useState<boolean>(true);
  const [newState, setNewState] = useState(0);
  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }
  const changeState = async () => {
    await timeout(4000);
    setNewState((prev) => prev + 1);
  };
 
  useEffect(() => {
    getAllStakeHolderIcons(userId).then((data) => {
      setStakeHolderIcons(sortAccordingToPostion(data));
      setIsLoading(false);
    });
  }, [newState]);
  const styles = classes();
  if (loading) {
    return <h1 data-testid="loading">Loading</h1>;
  }
  return (
    <SlideBackground title={ACCOMPLISHMENTS}>
      <>
        <Typography
          data-testid="slideHeading"
          className={styles.headingStyles}
          variant="body1"
        >
          STAKEHOLDER MANAGEMENT
        </Typography>
        <Grid className={styles.bodyGridStyles} data-testid="accomplishments">
          {stakeHolderIcons.map((stakeHolderIcon, index) => {
            const src = getIconSrc(stakeHolderIcon.name);
            return (
              <IconWithBgAndTypography
                icon={stakeHolderIcon}
                iconSrc={src}
                index={index}
                key={index}
                emitClick={changeState}
              />
            );
          })}
        </Grid>
      </>
    </SlideBackground>
  );
};

export default Accomplishments;
