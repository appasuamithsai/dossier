import MemphisImage from "../../../public/assets/images/university_images/memphis.png";
import LowaImage from "../../../public/assets/images/university_images/lowa.png";
import SanfransiscoImage from "../../../public/assets/images/university_images/sanfransisco.png";
import brainStorimingIcon from "../../assets/icons/brainstorming.svg";
import feedbackIcon from "../../assets/icons/feedback.svg";
import npsIcon from "../../assets/icons/nps.svg";
import awardIcon from "../../assets/icons/award.svg";
import glassdoor from "../../assets/icons/socialIcons/glassdoor.svg";
import linkedin from "../../assets/icons/socialIcons/linkedin.svg";
import indeed from "../../assets/icons/socialIcons/indeed.svg";
import twitter from "../../assets/icons/socialIcons/twitter.svg";
import { addStakeholderData, updatePositionByOne } from '../../services/services';
import award1 from "../../../public/assets/images/award1.png";
import award2 from "../../../public/assets/images/award2.png";
import award3 from "../../../public/assets/images/award3.png";
import image1 from "../../assets/images/Slider1.png";
import image2 from "../../assets/images/SliderImg2.svg";
import image3 from "../../assets/images/SliderImg3.svg";
import image4 from "../../assets/images/SliderImg4.png";
import image5 from "../../assets/images/SliderImg5.svg";
import image8 from "../../assets/images/SliderImg6.1.png";
import image9 from "../../assets/images/SliderImg6.2.png";
import image10 from "../../assets/images/SliderImg6.3.png";
import image11 from "../../assets/images/SliderImg6.4.png";
import image12 from "../../assets/images/SliderImg6.5.png";
import image13 from "../../assets/images/SliderImg6.6.png";
import image14 from "../../assets/images/SliderImg7.png";
import { jsPDF } from "jspdf";
import { loadOptions } from "@babel/core";
export interface Icon {
  id?: number;
  name: string;
  description: string;
  isColored: boolean;
  position: number;
}
export interface inputDetails{
  userId:any;
  emailId:any;
  firstName:any;
  lastName:any;

}
export const getImageSrc = (item: string) => {
  switch (item) {
    case "University of San Francisco":
      return SanfransiscoImage;
    case "University of Memphis":
      return MemphisImage;
    case "University of Iowa":
      return LowaImage;
    default:
      break;
  }
};
const convertMonthNumberToMonth = (month: number) => {
  switch (month) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      break;
  }
};

export const convertDateToMonthAndYear = (
  date: string,
) => {
  const month1 = convertMonthNumberToMonth(
    parseInt(date.split("/")[0]) + 1
  );
  return `${month1} ${date.split("/")[1]}`;
};

export const getIconSrc = (name: string) => {
  if (name.toLowerCase() === "brainstorming") return brainStorimingIcon;
  if (name.toLowerCase() === "feedback") return feedbackIcon;
  if (name.toLowerCase() === "nps") return npsIcon;
  if (name.toLowerCase() === "award") return awardIcon;
  else return "";
};

export interface Icon {
  id?: number;
  name: string;
  description: string;
  isColored: boolean;
  position: number;
}

export const pushToStakeIcons = async(iconed: Icon,stakeHolderIcons:Icon[],userId:any) => {
  for (const element of stakeHolderIcons) {
    if (element.position > iconed.position) {
        await updatePositionByOne(element,userId);
    }
  }
  const newData: Icon = {
    id:stakeHolderIcons.length+1,
    name: iconed.name,
    description: iconed.description,
    isColored: false,
    position: iconed.position+1,
  };
 await addStakeholderData(newData,userId);
};

export const getSocialLogoSrc = (name: string) => {
  if (name === "glassdoor") return glassdoor;
  if (name === "indeed") return indeed;
  if (name === "linkedin") return linkedin;
  if (name === "twitter") {
    return twitter;
  }
};
export const sortAccordingToPostion = (data: Icon[]) => {
  let newArray = [];
  for (let i = 1; i <= data.length; i++) {
    newArray[i-1]=data.filter(e=>e.position===i)[0];
  }
  return newArray;
};

export const getAwardsImage = (item: string) => {
  switch (item) {
    case "PMI Fellow Award":
      return award1;
    case "PMI Eric Jenett Person of the Year Award":
      return award2;
    case "PMI Rising Leader Award":
      return award3;
      case "PMI PMO of the Year":
      return award2;
      case "Outstanding Project Manager Award":
      return award3;
    default:
      break;
  }
};
  

export const getSliderItems=(item:any)=>{
switch(item){
  case "FirstPageInResume":
    return( {
    id: 0,
    img: image1,
  });
  case "PersonalDetails":

 return({
    id: 1,
    img: image2,
  });
  case "EducationDetails":

  return({
    id: 2,
    img: image3,
  });
  case "ExperienceDetalis":

  return({
    id: 3,
    img: image4,
  })
  case "Certifications":

 return ({
    id: 4,
    img: image5,
  });
  case "ImageAndNameSlideContent1":

  return({
    id: 5,
    img: image8,
  });
  case "ImageAndNameSlideContent2":

  return({
    id: 6,
    img: image9,
  });
  case "ImageAndNameSlideContent3":

 return  ({
    id: 7,
    img: image10,
  })
  case "Accomplishmnets":

  return({
    id: 8,
    img: image11,
  });
  case "Graph":

  return({
    id: 9,
    img: image12,
  });
  case "SkyFlowValuation":

  return({
    id: 10,
    img: image13,
  });
  case "Awards":

  return({
    id: 11,
    img: image14,
  });
  default:
    break;
}
}
export const getBase64 = (file: any, cb: any) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    cb(reader.result);
  };
  reader.onerror = function (error) {
    console.log("Error: ", error);
  };
};
export const convertToPdf = (imageArray: string[]) => {
  const pdf = new jsPDF("p", "px", "a4");
  let pdfWidth;
  imageArray.forEach((img: any,index:number) => {
    pdfWidth = pdf.internal.pageSize.getWidth();
    pdf.addImage(img, "JPEG", 0, index%2==0?0:310, pdfWidth, 300);
    if(index%2!=0)pdf.addPage();
  });
  return pdf.save("finance-portfolio.pdf");
};
export const setThemeColour=(color:string)=>{
  switch(color){
    case "orange":
      return "#FF6161";
  
    case "Blue":
       return "#4C2CD9";
    case "Red":
        return "#ff0000";
    case "Pink":
         return "#FFC0CB";
    case "Black&White":
      return "#171717";
      default:
        return "#FF6161"
  }
}
