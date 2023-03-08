import { Box } from "@mui/system";
import React from "react";

interface CreatePortfolioCardProps {
  name: string;
  image: string;
  handle: (item: string) => void;
}
const boxStyle = {
  height: "17rem",
  width: "15rem",
  padding: "1.25rem",
  cursor: "pointer",
};
const CreatePortfolioCard = (props: CreatePortfolioCardProps) => {
  return (
    <Box
      sx={boxStyle}
      onClick={() => props.handle(props.name)}
      data-testid="CreatePortfolioCard"
    >
      <img src={props.image} alt={props.name} />
    </Box>
  );
};
export default CreatePortfolioCard;
