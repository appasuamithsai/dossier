import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  variant:
    | "companyLogo"
    | "companyLogoWithBackground"
    | "entryPage"
    | "createPortfolioPage"
    | "collegeLogo"
    | "template";
  src: string;
  alt: string;
}

const classes = makeStyles(() => ({
  companyLogo: {
    width: "1.625rem",
    height: "1.625rem",
  },
  entryPage: {
  },
  companyLogoWithBackground: {
    width: "3.25rem",
    height: "3.25rem",
    backgroundColor: "white",
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.16)",
    padding: "13px",
    borderRadius: "3.25rem",
  },
  collegLogoStyles: {
    width: "2rem",
    height: "2rem",
  },

  createPortfolioPageImage: {
    width: "12.5rem",
    height: "11.25rem",
  },

  templateImageStyle: {
    width: "8.5rem",
    height: "4.25rem",
  },
}));

const Image: React.FC<ImageProps> = ({ variant, src, alt }) => {
  const styles = classes();
  const getClassName: any = (variantName: string) => {
    if (variantName === "companyLogo") {
      return styles.companyLogo;
    }
    if (variantName === "companyLogoWithBackground") {
      return styles.companyLogo;
    }
    if (variantName === "entryPage") {
      return styles.entryPage;
    }
    if (variantName === "createPortfolioPage") {
      return styles.createPortfolioPageImage;
    }
    if (variantName === "collegeLogo") {
      return styles.collegLogoStyles;
    }
    if (variantName === "template") {
      return styles.templateImageStyle;
    }
  };

  const getBackground: any = (variantName: string) => {
    if (variantName === "companyLogoWithBackground")
      return styles.companyLogoWithBackground;
    else return null;
  };

  return (
    <Box className={getBackground(variant)}>
      <img
        src={src}
        alt={alt}
        data-testid={alt + "image"}
        className={getClassName(variant)}
      ></img>
    </Box>
  );
};

export default Image;
