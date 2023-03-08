import ArrowBack from "@mui/icons-material/ArrowBack";
import { Box, Button, Grid, Tab, Tabs, Typography, Modal } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import theme from "../../../theme/theme";
import Resume from "../../molecules/Resume";
import Header from "../../organisms/Header";
import Options from "../../organisms/Options";
import PortfolioPreview from "../../organisms/PortfolioPreview";
import image1 from "../../../assets/icons/OptionsImg1.svg";
import image2 from "../../../assets/icons/OptionsImg2.svg";
import image3 from "../../../assets/icons/OptionsImg3.svg";
import image4 from "../../../assets/icons/OptionsImg4.svg";
import image5 from "../../../assets/icons/OptionsImg5.svg";
import image6 from "../../../assets/icons/OptionsImg6.svg";
import EditLinkModal from "../../molecules/EditLinkModal";
import SharePortFolio from "../../molecules/SharePortFolio";
import copy from "copy-to-clipboard";
import { makeStyles } from "@mui/styles";
import { usePortfolioLink } from "./hook";
import { useNavigate } from "react-router-dom";
import { PublishedFileContext, UserContext } from "../../utils/context";
import { convertToPdf } from "../../utils/mapperFunction";
import {
  getPortfilioImages,
  getResumeDetails,
  updatePortfolioData,
} from "../../../services/services";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const classes = makeStyles({
  root: {},
});

const gridOneStyle = {
  height: "158px",
};
const typoOneStyle = {
  position: "relative",
  top: "33px",
  alignSelf: "center",
  textAlign: "center",
  zIndex: -1,
};
const buttonOneStyle = {
  textTransform: "none",
  padding: "0",
  marginTop: "8px",
};
const tabOneStyle = {
  borderBottom: 0,
  minHeight: "0",
  marginTop: "39px",
  height: "29px",
};
const tabTwoStyle = {
  minHeight: "0",
  height: "29px",
  padding: 0,
  ". MuiTab-root": {
    padding: "0",
    minHeight: "0",
  },
};
const tabThreeStyle = {
  minHeight: "0",
  height: "29px",
  padding: 0,
  ". MuiTab-root": {
    padding: "0",
    minHeight: "0",
  },
};
const boxOneStyle = {
  borderBottom: `1px solid ${theme.palette.grey[100]}`,
  width: "210px",
};
const gridTwoStyle = {
  marginLeft: "7.3206%",
};
const gridThreeStyle = {
  marginTop: "32px",
};
const gridFourStyle = {
  overflowY: "auto",
  height: "500px",
  width: "900px",
  "&::-webkit-scrollbar": {
    width: "6.67px",
    marginLeft: "17px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#F2F2F2",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#9986F0",
    borderRadius: "9px",
  },
};
const gridFiveStyle = {
  marginTop: "32px",
};
const gridSixStyle = {
  overflowY: "auto",
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)",
  height: "764px",
  width: "920px",
  "&::-webkit-scrollbar": {
    width: "6.67px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#F2F2F2",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#9986F0",
    borderRadius: "9px",
  },
};
const gridSevenStyle = { marginLeft: "100px" };
const gridEightStyle = { marginLeft: "100px" };
const buttonStyle = {
  width: "113px",
  height: "48px",
  backgroundColor: "#3C3B40",
  borderRadius: "8px",
  marginTop: "564px",
  marginLeft: "607px",
  position: "fixed",
  textTransform: "none",
  color: "#FFFFFF",
};
const FinancePortfolio: React.FC = () => {
  const fileContext = useContext(PublishedFileContext);
  const { userId } = useContext(UserContext);
  const navigate = useNavigate();
  const ModalStyle = { marginLeft: "428px", marginTop: "248px" };
  const [value, setValue] = React.useState(0);
  const [editLink, setEditLink] = React.useState(false);
  const [resumeLinkEditOpen, setResumeLinkEditOpen] = React.useState(false);
  const [resumeShareOpen, setResumeShareOpen] = React.useState(false);
  const link = usePortfolioLink(userId);
  const [editLinkValue, setEditLinkValue] = useState(link);
  const [resumeLink, setResumeLink] = React.useState(
    "www.dossier.com/peterpareker/finance-portfolio"
  );
  const [sharePortfolio, setSharePortfolio] = React.useState(false);
  const [copyLinkModal, setCopyLinkModal] = React.useState(false);
  const [imageArray, setImageArray] = React.useState([]);
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const getLabel = (name: string) => {
    return (
      <Typography textTransform={"none"} variant="caption2">
        {" "}
        {name}
      </Typography>
    );
  };

  useEffect(() => {
    getPortfilioImages(userId).then((res) => {
      setImageArray(res);
    });
    getResumeDetails(userId)
  }, []);
  useEffect(() => {
    if (link) setEditLinkValue(link);
  }, [link]);
  const handleDownload = (fileType: string) => {
    const images = imageArray.map((image: any) => image.img);
    if (fileType === "jpeg") {
      images.forEach((image: string, index: number) => {
        const imageElement = document.createElement("a");
        imageElement.href = image;
        imageElement.download = `slide ${index}.jpeg`;
        document.body.appendChild(imageElement);
        imageElement.click();
        document.body.removeChild(imageElement);
      });
    }
    if (fileType == "pdf") {
      convertToPdf(images);
    }
  };
  const handleOptions = (label: string) => {
    if (label === "Copy link") {
      copy(editLinkValue);
      setCopyLinkModal(true);
      setTimeout(closeCopyModel, 1000);
    }
    if (label === "Edit link") {
      setEditLink(true);
    }
    if (label === "Share Portfolio") {
      setSharePortfolio(true);
    }
    if (label == "Download Portfolio") {
      if (fileContext) handleDownload(fileContext?.fileType);
    }
  };
  function closeCopyModel() {
    setCopyLinkModal(false);
  }
  const handleResumeOptions = (label: string) => {
    if (label === "Edit link") {
      setResumeLinkEditOpen(true);
    }
    if (label === "Share Resume") {
      setResumeShareOpen(true);
    }
  };

  const handleEditLinkClose = () => {
    setEditLink(false);
    updatePortfolioData(userId, {
      portfolioLink: editLinkValue,
    });
    handleOptions("Copy link");
  };
  const handleResumeLinkEditClose = () => {
    setResumeLinkEditOpen(false);
  };
  const handleSharePortfolioClose = () => {
    setSharePortfolio(false);
    handleOptions("Copy link");
  };
  const handleShareResumeLinkClose = () => {
    setResumeShareOpen(false);
  };

  const handleSharePortfolioCopy = () => {
    copy(editLinkValue);
  };
  const pullDataEditLinkModel = (val: string) => {
    setEditLinkValue(val);
  };

  const pullEditedResumeLink = (val: string) => {
    setResumeLink(val);
  };
  return (
    <>
      <Modal open={editLink} style={ModalStyle}>
        <EditLinkModal
          link={editLinkValue}
          onClose={handleEditLinkClose}
          pullDataEditLinkModel={pullDataEditLinkModel}
        />
      </Modal>
      <Modal open={sharePortfolio} style={ModalStyle}>
        <SharePortFolio
          link={editLinkValue}
          onClose={handleSharePortfolioClose}
          onCopy={handleSharePortfolioCopy}
        />
      </Modal>
      <Modal open={resumeLinkEditOpen} style={ModalStyle}>
        <EditLinkModal
          link={resumeLink}
          onClose={handleResumeLinkEditClose}
          pullDataEditLinkModel={pullEditedResumeLink}
        />
      </Modal>
      <Modal open={resumeShareOpen} style={ModalStyle}>
        <SharePortFolio
          link={resumeLink}
          onClose={handleShareResumeLinkClose}
          onCopy={() => copy(resumeLink)}
        />
      </Modal>

      {copyLinkModal && (
        <Button
          variant="contained"
          children="Link Copied"
          sx={buttonStyle}
        ></Button>
      )}

      <Grid>
        <Header></Header>
      </Grid>
      <Grid sx={gridOneStyle}>
        <Typography variant="h1" sx={typoOneStyle}>
          Finance Portfolio
        </Typography>
        <Grid marginLeft={"7.3206%"}>
          <Button
            sx={buttonOneStyle}
            startIcon={<ArrowBack />}
            onClick={() => {
              navigate(-1);
            }}
          >
            <Typography
              variant="button"
              color={"primary"}
              textTransform={"none"}
            >
              Back
            </Typography>
          </Button>
          <Box sx={boxOneStyle}>
            <Tabs
              sx={tabOneStyle}
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                sx={tabTwoStyle}
                label={getLabel("Portfolio")}
                {...a11yProps(0)}
              />
              <Tab
                data-testid="resumeTab"
                label={getLabel("Resume")}
                sx={tabThreeStyle}
                {...a11yProps(1)}
              />
            </Tabs>
          </Box>
        </Grid>
        <hr></hr>
        <Grid sx={gridTwoStyle}>
          <TabPanel value={value} index={0}>
            <Grid display="flex" sx={gridThreeStyle}>
              <Grid sx={gridFourStyle} maxHeight="514px">
                <PortfolioPreview contentArray={imageArray}></PortfolioPreview>
              </Grid>
              <Grid sx={gridSevenStyle}>
                <Options
                  data={[
                    {
                      label: "Copy link",
                      src: image1,
                      action: "",
                    },
                    {
                      label: "Edit link",
                      src: image2,
                    },
                    {
                      label: "Share Portfolio",
                      src: image3,
                    },
                    {
                      label: "Edit Portfolio",
                      src: image4,
                    },
                    {
                      label: "Download Portfolio",
                      src: image5,
                    },
                    {
                      label: "Duplicate Portfolio",
                      src: image6,
                    },
                  ]}
                  pullData={handleOptions}
                />
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid display="flex" sx={gridFiveStyle}>
              <Grid sx={gridSixStyle} maxHeight="65.6vh">
                <Resume></Resume>
              </Grid>
              <Grid sx={gridEightStyle}>
                <Options
                  data={[
                    {
                      label: "Copy link",
                      src: image1,
                      action: "",
                    },
                    {
                      label: "Edit link",
                      src: image2,
                    },
                    {
                      label: "Share Resume",
                      src: image3,
                    },
                    {
                      label: "Edit Resume",
                      src: image4,
                    },
                    {
                      label: "Download Resume",
                      src: image5,
                    },
                    {
                      label: "Duplicate Resume",
                      src: image6,
                    },
                  ]}
                  pullData={handleResumeOptions}
                ></Options>
              </Grid>
            </Grid>
          </TabPanel>
        </Grid>
      </Grid>
    </>
  );
};

export default FinancePortfolio;
