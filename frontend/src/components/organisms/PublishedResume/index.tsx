import { Grid, styled, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import theme from "../../../theme/theme";
import ThreeDots from "../../../assets/icons/threeDots.svg";
import Icon from "../../atoms/Icon";
import { UserContext, PublishedFileContext } from "../../utils/context";
import { useNavigate } from "react-router-dom";
import { getPublishedData } from "../../../services/services";
import PortfolioImage from "../../../../public/assets/images/PortfolioImage1.svg";
const PublishedResume = () => {
  const navigate = useNavigate();
  const fileContext = useContext(PublishedFileContext);
  const MainGrid = styled(Grid)({
    height: "44rem",
    backgroundColor: theme.palette.structural[50],
  });
  const typoStyle = {
    marginLeft: "3.25rem",
    marginTop: "1.8125rem",
    textTransform: "none",
    color: theme.palette.text.secondary,
  };

  const OuterGrid = styled(Grid)({
    display: "flex",
    flexDirection: "row",
    columnGap: "24px",
    marginLeft: "52px",
  });
  const InnerGrid1 = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    marginLeft: "5px",
    rowGap: "-12px",
  });

  const InnerGrid2 = styled(Grid)({
    display: "flex",
    flexDirection: "row",
    columnGap: "95px",
    alignItems: "center",
  });
  const [extensions, setExtensions] = useState<any>([]);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(true);
  const { userId } = useContext(UserContext);
  useEffect(() => {
    getPublishedData(userId).then((data: any) => {
      setFileName(data.portfolioName);
      setExtensions(data.extensions);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <h1 data-testid="loading">Loading</h1>;
  }
  return (
    <>
      <MainGrid
        container
        style={{ display: "flex", flexDirection: "column", rowGap: "23px" }}
      >
        <Typography variant="h1" sx={typoStyle}>
          Portfolios
        </Typography>
        <Grid item>
          <OuterGrid
            item
            style={{
              display: "flex",
              flexDirection: "row",
              columnGap: "24px",
              marginLeft: "52px",
            }}
          >
            {extensions.map((item: string) => (
              <>
                <Grid
                  item
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <img
                    src={PortfolioImage}
                    onClick={() => {
                      if (fileContext) {
                        fileContext.setFileType(item);
                        navigate("/finance-portfolio");
                        console.log(fileContext.fileType);
                      }
                    }}
                    style={{
                      cursor: "pointer",
                    }}
                    data-testid="image"
                  />
                  <InnerGrid1 container>
                    <InnerGrid2 item>
                      <Typography
                        variant="caption3"
                        color={theme.palette.structural[700]}
                      >
                        {fileName + "." + item}
                      </Typography>
                      <Icon src={ThreeDots}></Icon>
                    </InnerGrid2>

                    <Typography
                      variant="overline2"
                      color={theme.palette.text.disabled}
                    >
                      Edited 45 min ago
                    </Typography>
                  </InnerGrid1>
                </Grid>
              </>
            ))}
          </OuterGrid>
        </Grid>
      </MainGrid>
    </>
  );
};
export default PublishedResume;
