import React from "react";
import { Grid } from "@mui/material";
import Header from "../../../organisms/Header";
import SideNav from "../../../molecules/SideNav";

const header = {
  height: "4rem",
  border: " 1px solid #D4D2D9",
};
interface BasicProps{
  children?:any;
}

const Basic: React.FC<BasicProps> = ({children}) => {
  return (
    <Grid container direction="column">
      <Grid item sx={header}>
          <Header />
      </Grid>
     <Grid item>
       <Grid container direction="row">
          <Grid item>
              <SideNav />
          </Grid>
          <Grid item>
              {children}
          </Grid>
       </Grid>
     </Grid>
    </Grid>
  );
};

export default Basic;
