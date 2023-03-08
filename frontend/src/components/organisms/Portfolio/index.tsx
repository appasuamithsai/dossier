import React, { useContext, useEffect, useRef, useState } from "react";
import { Dialog, Grid } from "@mui/material";
import PublishPortfolio from "../PublishPortFolio";
import Button from "../../atoms/Button";
import Certifications from "../Certifications";
import Slider, { ItemDataType } from "../../molecules/slider";
import CopyIcon from "../../../assets/icons/copyIcon.png";
import awardsImage from "../../../assets/images/screen12.png";
import TrashIcon from "../../../assets/icons/trashIcon.png";
import PersonalDetails from "../PersonalDetails";
import FirstPageInResume from "../FirstPageInResume";
import EducationDetails from "../EducationDetails";
import ExperienceDetalis from "../ExperienceDetails";
import Accomplishments from "../Accomplishments";
import Graph from "../../molecules/Graph";
import SkyFlowValuation from "../../molecules/SkyFlowValuation";
import PortfolioPreview from "../PortfolioPreview";
import CloseIcon from "@mui/icons-material/Close";
import {
  getPortfilioImages,
  savePublishData,
  UpdateNewSlide,
  updateSlideImage,
} from "../../../services/services";
import html2canvas from "html2canvas";
import {
  ENABLING_QA_ARRAY,
  ENABLING_QA,
  SPRINT_ARRAY,
  SPRINT_MANAGEMENT,
  RISK_MANAGEMENT,
  RISK_MGMT_ARRAY,
  slideScreensNames
} from "../../utils/constants";
import ImageAndNameSlideContent from "../../molecules/ImageAndNameSlideContent";
import AddSlide from "../AddSlide";
import theme from "../../../theme/theme";
import AwardsSlide from "../AwardsSlide";
import { UserContext } from "../../utils/context";

const previewButtonText = {
  color: "#4C2CD9",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "18px",
};
const DraftButtonText = {
  color: "#4C2CD9",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "18px",
};

const publishButtonStyle = {
  borderRadius: "4px",
  width: "130px",
  height: "36px",
  "&:hover": {
    background: "none",
  },
};
const dataFunc = (item: any) => {
  switch (item) {
    case "FirstPageInResume":
      return (
        <FirstPageInResume
          userName="Peter Parker"
          designation="Project Manager"
          heading="FINTECH PORTFOLIO"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum "
        />
      );
    case "PersonalDetails":
      return <PersonalDetails content="Hobbies - Cricket" />;
    case "EducationDetails":
      return <EducationDetails />;
    case "ExperienceDetalis":
      return <ExperienceDetalis />;
    case "Certifications":
      return <Certifications />;
    case "ImageAndNameSlideContent1":
      return (
        <ImageAndNameSlideContent
          title={ENABLING_QA}
          contentArray={ENABLING_QA_ARRAY}
        />
      );
    case "ImageAndNameSlideContent2":
      return (
        <ImageAndNameSlideContent
          title={RISK_MANAGEMENT}
          contentArray={RISK_MGMT_ARRAY}
        />
      );
    case "ImageAndNameSlideContent3":
      return (
        <ImageAndNameSlideContent
          title={SPRINT_MANAGEMENT}
          contentArray={SPRINT_ARRAY}
        />
      );
    case "Accomplishmnets":
      return <Accomplishments />;
    case "Graph":
      return <Graph />;
    case "SkyFlowValuation":
      return <SkyFlowValuation />;
    case "Awards":
      return <AwardsSlide />;
  }
};
const imageArray: string[] = [];

export interface PortfolioProps {
  onPreviewportFolio?: (data: any) => void;
  onPublishPortFolio: () => void;
}
const Portfolio: React.FC<PortfolioProps> = (props) => {
  const [templates, setTemplates] = useState<any>([]);
  const [id, setId] = useState(0);
  const [slideForm, setslideForm] = useState(false);
  const [slideItems, setSlideItems] = useState<any>([]);
  const [preview, setPreview] = useState(false);
  const printRef = useRef(null);
  const { userId } = useContext(UserContext);
  const getSlide = document.getElementById("templatesImg");

  useEffect(() => {
    getPortfilioImages(userId).then((res) => {
      let newArray: any = [];
      slideScreensNames.forEach((item: any) => {
        newArray.push(dataFunc(item));
      });
      setTemplates(newArray);
      setSlideItems(res);
    });
  }, []);
  const convertToImage = async (template: any, slideId: number) => {
    console.log(slideId, template);
    const canvas = await html2canvas(template);
    const data = canvas.toDataURL("image/jpeg");
    if (data != null && !imageArray.includes(data)) imageArray[slideId] = data;
  };
  const handlePublish = ({ pdf, jpeg, png, doc }: any) => {
    const publishedTypes: string[] = [];
    if (pdf) {
      publishedTypes.push("pdf");
    }
    if (jpeg) {
      publishedTypes.push("jpeg");
    }
    if (png) {
      publishedTypes.push("png");
    }
    if (doc) {
      publishedTypes.push("doc");
    }
    savePublishData(publishedTypes, userId);
    props.onPublishPortFolio();
  };
  const handlePreview = () => {
    setPreview(true);
    return props.onPreviewportFolio?.(templates);
  };
  const addnewSlide = () => {
    setslideForm(true);
  };

  const handleSlide = async () => {
    const data: ItemDataType = {
      id: 11,
      img: awardsImage,
      title: "7.Awards",
    };
    let newArray = [...slideItems];
    if (newArray.length === 11) {
      newArray.push(data);
      setSlideItems(newArray);
      let newTemplates = [...templates];
      newTemplates.push(dataFunc("Awards"));
      setTemplates(newTemplates);
      setslideForm(false);
      document.getElementById("rightArrow")?.click();
      document.getElementById("sliderImage11")?.click();
      await UpdateNewSlide(userId);
    } else {
      setslideForm(false);
    }
  };
  const htmltoImage = async (key: number, element: any) => {
    const canvas = await html2canvas(element, { scale: 10 });
    const data = canvas.toDataURL("image/jpeg");
    console.log("Html Image has been called");
    slideItems[id].img = data;
    setSlideItems(slideItems);
    await updateSlideImage(data, id, userId);
    setId(key);
  };
  return (
    <>
      <Dialog data-testId maxWidth={false} open={slideForm}>
        <AddSlide
          onAdd={(_chipData: any) => {
            handleSlide();
          }}
          onClose={() => {
            setslideForm(false);
          }}
        />
      </Dialog>

      <Grid container direction="row" sx={{ paddingLeft: "3px" }}>
        <Grid item>
          <Grid container rowSpacing="20px" height="704px" direction="column">
            <Grid item>
              <Grid
                container
                width="1220px"
                direction="row"
                columnSpacing="10px"
                justifyContent="flex-end"
                alignContent="flex-end"
              >
                <Grid item>
                  <></>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    columnSpacing="15px"
                    justifyContent="flex-end"
                    alignContent="flex-end"
                  >
                    <Grid item>
                      <Button
                        data-testid="previewtestbutton"
                        variant="text"
                        sx={[previewButtonText, publishButtonStyle]}
                        onClick={handlePreview}
                      >
                        Preview
                      </Button>
                      <Dialog scroll="body" maxWidth={false} open={preview}>
                        <Grid container>
                          <Grid item>
                            <PortfolioPreview contentArray={slideItems} />
                          </Grid>
                          <Grid item>
                            <CloseIcon
                              data-testid="previewcloseicon"
                              onClick={() => setPreview(false)}
                              fontSize="large"
                              sx={{
                                position: "fixed",
                                paddingLeft: "-1px",
                                "&: hover": {
                                  backgroundColor:
                                    theme.palette.structural[300],
                                },
                                cursor: "pointer",
                              }}
                            />
                          </Grid>
                        </Grid>
                      </Dialog>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="outlined"
                        sx={[DraftButtonText, publishButtonStyle]}
                      >
                        Save As Draft{" "}
                      </Button>
                    </Grid>
                    <Grid item>
                      <PublishPortfolio
                        onPublish={(checked: any) => {
                          handlePublish(checked);
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item display="flex" justifyContent="center">
              <Grid
                container
                display="flex"
                justifyContent="center"
                alignContent="center"
                rowSpacing="8px"
                direction="column"
              >
                <Grid
                  item
                  id="templatesImg"
                  data-testid="slideScreentemp"
                  ref={printRef}
                >
                  {templates[id]}
                </Grid>
                <Grid item display="flex" justifyContent="center">
                  <img src={CopyIcon} alt="copyImage" />
                  <img
                    style={{ paddingLeft: "20px" }}
                    src={TrashIcon}
                    alt="delete"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              display="flex"
              justifyContent="center"
              data-testid="sliderContents"
            >
              <Slider
                handleClick={(key: number) => {
                  convertToImage(printRef.current, id);
                  htmltoImage(key, getSlide);
                }}
                itemData={slideItems}
                addSlideMethod={addnewSlide}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Portfolio;
