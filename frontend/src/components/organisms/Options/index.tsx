import { Grid, styled } from "@mui/material";
import React from "react";
import theme from "../../../theme/theme";
import IconWithTypograhy from "../../molecules/IconWithTypography";

export type OptionsProps1 = {
  src: any;
  label: string;
  action?: any;
};
export type OptionsProps = {
  data: OptionsProps1[];
  pullData?: any;
};

const Options = (props: OptionsProps) => {
  const ButtonStyle = styled(Grid)({
    borderRadius: "6px",
    boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.12)",
    backgroundColor: theme.palette.structural[50],
    width: "174px",
    height: "36px",
    display: "flex",
    flexDirection: "row",
    columnGap: "12px",
  });

  const InnerGrid = styled(Grid)({
    flexDirection: "row",
    columnGap: "12px",
    marginLeft: "6px",
    marginTop: "6px",
    cursor: "pointer",
  });

  const handleClick = (label: string) => {
    props.pullData(label);
  };

  return (
    <>
      <Grid container flexDirection="column" rowGap="20px">
        {props.data.map((item: { src: any; label: string }) => (
          <ButtonStyle>
            <InnerGrid container item onClick={() => handleClick(item.label)}>
              <IconWithTypograhy src={item.src} label={item.label} />
            </InnerGrid>
          </ButtonStyle>
        ))}
      </Grid>
    </>
  );
};

export default Options;
