import React, { useContext, useEffect, useState } from "react";
import SlideBackground from "../../utils/templates/SlideBackground";
import { Grid, Box, Typography, Dialog } from "@mui/material";
import ImageUploadOptions from "../../molecules/ImageUploadOptions/index";
import EditIcon from "../../../assets/icons/edit.png";
import AddSection from "../../../assets/icons/Boxplus-icon.png";
import ThreeDots from "../../../assets/icons/more.png";
import DeleteIcon from "../../../assets/icons/deleteIcon.png";
import { CERTIFICATIONS_ARRAY } from "../../utils/constants";
import UploadCertificate from "../UploadCertificate";
import { getBase64 } from "../../utils/mapperFunction";
import {
  getCertificationDetails,
  updateCertificateDetails,
} from "../../../services/services";
import { UserContext } from "../../utils/context";
export interface CertificateDetails {
  name: any;
  Image: any;
  id: number;
}

const container = {
  marginTop: "1rem",
  marginLeft: "3rem",
  width: "fit-content",
};
const gridStyle = {
  "& .css-zcxndt ": {
    display: "flex",
    justifyContent: "center",
  },
};
const outerBox = {
  display: "flex",
  justifyContent: "center",
};
const innerBox = {
  position: "absolute",
};
const borderDashed = {
  border: `2px dashed #7E64F3`,
  padding: "0.375rem",
};
const nameTypo = {
  fontSize: "16px",
  lineHeight: "24px",
  fontStyle: "normal",
  fontWeight: 500,
};

const Certifications: React.FC = () => {
  const [certificationDetailsArray, setCertificationDetails] =
    useState<any>(CERTIFICATIONS_ARRAY);
  const [value, setValue] = useState(0);
  const { userId } = useContext(UserContext);
  useEffect(() => {
    getCertificationDetails(userId).then((res:any) => {
      setCertificationDetails(res);
    });
  }, [value]);
  const handleonSubmit = (item: CertificateDetails, Id: number) => {
    getBase64(item.Image, async (result: any) => {
      const itemData: CertificateDetails = {
        id: Id,
        Image: result,
        name: item.name,
      };
      await updateCertificateDetails(itemData, () => setValue(value + 1), userId);
    });
  };
  const comp = (
    <>
      <Grid container direction="row" columnGap="1.3125rem" sx={container}>
        {certificationDetailsArray.map(
          (e: CertificateDetails, index: number) => {
            const [showForm, setShowForm] = useState(false);

            const triggerForm = () => {
              setShowForm(true);
            };
            const options = [
              {
                src: EditIcon,
                action: triggerForm,
              },
              {
                src: AddSection,
              },
              {
                src: DeleteIcon,
              },
              {
                src: ThreeDots,
              },
            ];

            const [showUploadOption, setShowUploadOption] = useState(false);
            const showOptions = (_e: any) => {
              if (showUploadOption) {
                setShowUploadOption(false);
              } else {
                setShowUploadOption(true);
              }
            };
            return (
              <>
                <Dialog maxWidth={false} open={showForm}>
                  <UploadCertificate
                    onClose={() => {
                      setShowForm(false);
                    }}
                    onSubmit={(item: CertificateDetails) => {
                      handleonSubmit(item, e.id);
                      setShowForm(false);
                    }}
                  />
                </Dialog>

                <Grid
                  item
                  onClick={(ea: any) => showOptions(ea)}
                  data-testid={`grid${index}`}
                  sx={showUploadOption ? borderDashed : {}}
                >
                  <Grid container rowSpacing="1rem" direction="column">
                    <Grid
                      item
                      key={e.name}
                      sx={{
                        position: "absolute",
                      }}
                    >
                      {showUploadOption ? (
                        <Box>
                          <ImageUploadOptions
                            options={options}
                            data-testid="optionstest"
                          />
                        </Box>
                      ) : (
                        <></>
                      )}
                    </Grid>

                    <Grid item>
                      <Typography sx={nameTypo}>{e.name}</Typography>
                    </Grid>
                    <Grid item sx={gridStyle}>
                      <Box alignItems="center" sx={outerBox}>
                        <img
                          width="249px"
                          height="136px"
                          src={e.Image}
                          alt="Image"
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            );
          }
        )}
      </Grid>
    </>
  );
  return <SlideBackground title="CERTIFICATIONS" children={comp} />;
};
export default Certifications;
