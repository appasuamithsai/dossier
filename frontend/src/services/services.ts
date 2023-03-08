import { webAuth } from "./webAuth";
import { Icon, inputDetails } from "../components/utils/mapperFunction";
import API from "./API";
import { EducationUniversityDetails } from "../components/organisms/EducationDetails";
import { CertificateDetails } from "../components/organisms/Certifications";
import { ItemDataType } from "../components/molecules/slider";
import { certificationsBlob,educationDetailsBlob,workExperienceBlob,FirstPageInResumeBlob,PersonalDetailsBlob,stakeholderDataBlob, ImagesBlob } from "./postUserData";
import { EDUCATION_DETAILS_SLIDE, USER_ACCOMPLISHMENTS } from "../components/utils/constants";





export async function signUpUser(
  userData: any,
  setSigin: any,
  setError: any,
  setUserId: any
) {
  webAuth.signup(userData, async function (err, result) {
    if (err) {
      setError(true);
    }
    if (!err) {
     
      setError(false);
      setUserId(result.Id);
      let newUserData: inputDetails ={
        userId: result.Id,
        emailId:userData.email,
        firstName :userData.firstName ,
        lastName:userData.lastName
      };
   
      await API.post(`/users`, newUserData)
      await API.post(`/portfolios/${result.Id}`);
      const portfolioId= await getPortfilioId(`${result.Id}`);
      await API.put(`portfolios/${portfolioId}/portfolio-slides/FirstPageInResume`,converttoBlob( FirstPageInResumeBlob));
      await API.put(`portfolios/${portfolioId}/portfolio-slides/PersonalDetails`,converttoBlob (PersonalDetailsBlob));
      await API.put(`portfolios/${portfolioId}/portfolio-slides/EducationDetails`,converttoBlob (educationDetailsBlob));
      await API.put(`portfolios/${portfolioId}/portfolio-slides/Certifications`,converttoBlob (certificationsBlob));
      await API.put(`portfolios/${portfolioId}/portfolio-slides/ExperienceDetails`,converttoBlob (workExperienceBlob));
      await API.put(`portfolios/${portfolioId}/portfolio-slides/Accomplishments`,converttoBlob (stakeholderDataBlob));
      await API.put(`portfolios/${portfolioId}/portfolio_image/`, ImagesBlob);
      setSigin(true);
      console.log("Successful")
     return result._id;
    }
  });
}
export async function getUserUsingAccessToken(url: any, setUserId: any) {
  webAuth.parseHash({ hash: url.hash }, function (err, authResult) {
    if (err) {
      return console.log(err);
    }
    webAuth.client.userInfo(
      authResult?.accessToken || "",
      async function (_err, user) {
        const id = user.sub.split("|")[1];
        setUserId(id);
//Update Image Here user.picture
      }
    );
  });
}
export const getAwardsData = async (id: any) => {
  const portfolioId= await getPortfilioId(id);
  const res =  await API.get(`portfolios/${portfolioId}/portfolio-slides/Awards/`);
  return res.data;
};
export async function addAwardsData(chipSelectedData: any, id: any) {
  const portfolioId= await getPortfilioId(id);
const str = JSON.stringify(chipSelectedData);
const bytes = new TextEncoder().encode(str);
const blob = new Blob([bytes], {
    type: "application/json;charset=utf-8"
});
await API.put(`portfolios/${portfolioId}/portfolio-slides/Awards/`, blob);
}


export async function getCertificationDetails(userId: any) {
  const portfolioId= await getPortfilioId(userId);
  const res =  await API.get(`portfolios/${portfolioId}/portfolio-slides/Certifications/`);
  return res.data;
}
export async function updateCertificateDetails(
  item: CertificateDetails,
  load: any,
  id: any
) {
  const portfolioId= await getPortfilioId(id);

  getCertificationDetails(id).then(async (res: any) => {
    res.forEach((t: any) => {
      if (t.id == item.id) {
        t.Image = item.Image;
        t.name = item.name;
      }
    });
    const str = JSON.stringify(res);
    const bytes = new TextEncoder().encode(str);
    const blob = new Blob([bytes], {
        type: "application/json;charset=utf-8"
    });
   
    await API.put(`portfolios/${portfolioId}/portfolio-slides/Certifications/`, blob);
    load();
  });
}
export const getPortfilioId=async(userId:any)=>{
  const res =  await API.get(`portfolios/${userId}`);
     return res.data[0].id;
}
export const updateSlideImage = async (
  dataUrl: any,
  id: number,
  userId: string
) => {
  const portfolioId= await getPortfilioId(userId);

  getPortfilioImages(userId).then((res) => {
    res[id].img = dataUrl;
    const str = JSON.stringify(res);
    const bytes = new TextEncoder().encode(str);
    const blob = new Blob([bytes], {
        type: "application/json;charset=utf-8"
    });
    
     API.put(`portfolios/${portfolioId}/portfolio_image/`, blob);
  });
};

export const UpdateNewSlide = async (userId: string) => {
  const portfolioId= await getPortfilioId(userId);

  getPortfilioImages(userId).then(async(res) => {
    const item: ItemDataType = {
      id: 11,
      title: "7.Awards",
      img: "https://i.ibb.co/vc2vZ2Q/Screen-12-1.png",
    };
    res.push(item);
    const str = JSON.stringify(res);
    const bytes = new TextEncoder().encode(str);
    const blob = new Blob([bytes], {
        type: "application/json;charset=utf-8"
    });
   
    API.put(`portfolios/${portfolioId}/portfolio_image/`, blob);
  });
};
export const getPortfilioImages=async(userId:any)=>{
  const portfolioId= await getPortfilioId(userId);

  const res =  await API.get(`portfolios/${portfolioId}/portfolio_image`);
  return res.data;

}
export async function getAllStakeHolderIcons(userId:any) {
  const portfolioId= await getPortfilioId(userId);
  const res =  await API.get(`portfolios/${portfolioId}/portfolio-slides/Accomplishmnets/`);
  return res.data;
}
export async function addStakeholderData(data: Icon,userId:any) {
  const portfolioId= await getPortfilioId(userId);
  const stakeholderData=await getAllStakeHolderIcons(userId);
  stakeholderData.push(data)
  const str = JSON.stringify(stakeholderData);
  const bytes = new TextEncoder().encode(str);
  const blob = new Blob([bytes], {
      type: "application/json;charset=utf-8"
  });

  await API.put(`portfolios/${portfolioId}/portfolio-slides/Accomplishmnets/`, blob);
}
export async function updatePositionByOne(data: Icon,userId:any) {
  const portfolioId= await getPortfilioId(userId);
  const stakeholderData=await getAllStakeHolderIcons(userId);
  stakeholderData[data.id as number-1].position=stakeholderData[data.id as number-1].position+1
  const str = JSON.stringify(stakeholderData);
  const bytes = new TextEncoder().encode(str);
  const blob = new Blob([bytes], {
      type: "application/json;charset=utf-8"
  });

  await API.put(`portfolios/${portfolioId}/portfolio-slides/Accomplishmnets/`, blob);
}



export async function updateIconColor(data: Icon,userId:any) {
  const portfolioId= await getPortfilioId(userId);
  const stakeholderData=await getAllStakeHolderIcons(userId);

 stakeholderData[data.id as number-1].isColored=!stakeholderData[data.id as number-1].isColored
  const str = JSON.stringify(stakeholderData);
  const bytes = new TextEncoder().encode(str);
  const blob = new Blob([bytes], {
      type: "application/json;charset=utf-8"
  });

  await API.put(`portfolios/${portfolioId}/portfolio-slides/Accomplishmnets/`, blob);
}

export async function updateNewIconChange(data: Icon,userId:any) {
  const portfolioId= await getPortfilioId(userId);
  const stakeholderData=await getAllStakeHolderIcons(userId);
  stakeholderData[data.id as number-1]=data
  const str = JSON.stringify(stakeholderData);
  const bytes = new TextEncoder().encode(str);
  const blob = new Blob([bytes], {
      type: "application/json;charset=utf-8"
  });

  await API.put(`portfolios/${portfolioId}/portfolio-slides/Accomplishmnets/`, blob);

}
export async function getUserPreferencesById(userId:any){
  const userPreferencesData = await API.get(`users/${userId}/user_preferences`);
  return userPreferencesData.data;

}
export async function getUserProfileDetailsById(userId:any){
  const userProfileData = await API.get(`users/${userId}/user_profile`);
  return userProfileData.data;

}


export async function getFirstpageInResumedetailsById(userId:any){
  const portfolioId= await getPortfilioId(userId);
  const coverPageData =  await API.get(`portfolios/${portfolioId}/portfolio-slides/FirstPageInResume/`);
  const userPreferencesData = await API.get(`users/${userId}/user_preferences`);
  const userProfileData = await API.get(`users/${userId}/user_profile`);
  const firstPageData={
    ProfileData:userProfileData.data,
    preferencesData:userPreferencesData.data,
    profileImageData:coverPageData.data
  }
  return firstPageData;

}


export async function updateProfilePhoto(result:any,userId:any){
  const portfolioId= await getPortfilioId(userId);
await API.get(`portfolios/${portfolioId}/portfolio-slides/FirstPageInResume/`).then(async(res)=>{
  res.data=`${result}`
  const str = JSON.stringify(res.data);
  const bytes = new TextEncoder().encode(str);
  const blob = new Blob([bytes], {
      type: "application/json;charset=utf-8"
  });
  await API.put(`portfolios/${portfolioId}/portfolio-slides/FirstPageInResume/`, blob);
})
}
export const updatePreferencesByUserID = async(preferenceType:any,data:any,userId:any) => {
  const myArray = data.split(" ");
let word = myArray[0];
  const preference={
    portfolioType:word
  }
  await API.patch(`users/${userId}/user_preferences`, preference);
};
export const updatePreferencesDataByUserID = async(preferenceType:any,data:any,userId:any) => {
  let preference:any;
  if(preferenceType=="experience"){
   preference={
    experience:data
  }
  await API.patch(`users/${userId}/user_preferences`, preference);

}
if(preferenceType=="color"){
  preference={
    color:data
 }
 await API.patch(`users/${userId}/user_preferences`, preference);

}
if(preferenceType=="designation"){
  preference={
    designation:data
 }
 await API.patch(`users/${userId}/user_preferences`, preference);

}
if(preferenceType=="portfolioType"){
  preference={
    portfolioType:data
 }
 await API.patch(`users/${userId}/user_preferences`, preference);

}
if(preferenceType=="industry"){
  preference={
    industry:data
 }
 await API.patch(`users/${userId}/user_preferences`, preference);

}
};
export async function getPesronalDetailsSlideData(userId:any){

  const portfolioId= await getPortfilioId(userId);
  const HobbiesData =  await API.get(`portfolios/${portfolioId}/portfolio-slides/PersonalDetails/`);
  const userPreferencesData = await API.get(`users/${userId}/user_preferences`);
  const userProfileData = await API.get(`users/${userId}/user_profile`);
  const firstPageData={
    profileData:userProfileData.data,
    preferencesData:userPreferencesData.data,
    Hobbie:HobbiesData.data
  }
  return firstPageData;

}
export async function updateAgeDetails(value:any,userId:any){
  const update={
    "age":parseInt(value)
  }
  await API.patch(`users/${userId}/user_profile`, update);

}
export async function updateHobbies(value:any,userId:any){
  const portfolioId= await getPortfilioId(userId);

  const str = JSON.stringify(value);
  const bytes = new TextEncoder().encode(str);
  const blob = new Blob([bytes], {
      type: "application/json;charset=utf-8"
  });

  await API.put(`portfolios/${portfolioId}/portfolio-slides/PersonalDetails/`, blob);

}






export const getPortfolioId=async(userId:any)=>{
  const res =  await API.get(`portfolios/${userId}`);
     return res.data[0].id;
}
export const getPortfoliosByUserId=async(userId:any)=>{
  const res=await API.get(`portfolios/${userId}`);
  return res.data;
}
export const updatePortfolioData=async(id:string,data={})=>{
  const portfolioId=await getPortfolioId(id);
  API.patch(`/portfolios/${portfolioId}`,data);

}

export async function getSlideContent(id: string, slideName: string) {
  const portfolioId=await getPortfolioId(id);
    const slideContent = await API.get(
      `/portfolios/${portfolioId}/portfolio-slides/${slideName}`)
  return slideContent.data;
}
export async function upDateEducationDetails(
  item: EducationUniversityDetails,
  load: any,
  education: any,
  userId: string
) {
  education.forEach((t: any, index: number) => {
    if (index == item.id) {
      t.image = item.image;
      t.collegeName = item.collegeName;
      t.degree = item.degree;
      t.startDate = item.startDate;
      t.endDate = item.endDate;
    }
  });
  await getPortfolioId(userId).then(async (id: number) => {
    await API.put(
      `/portfolios/${id}/portfolio-slides/${EDUCATION_DETAILS_SLIDE}`,
      education
    );
  });
  load();
}
async function getPortfolioExtensions(id:number){
  const portfolioExtensions=await API.get(`portfolios/${id}/extensions`);
  return JSON.parse(portfolioExtensions.data.extensions);
}
export async function getPublishedData(userId:string){
  const  portfolios={portfolioName:"",extensions:[]}
   const res=await getPortfoliosByUserId(userId);
    portfolios.portfolioName=res[0].portfolioName;
    portfolios.extensions=await  getPortfolioExtensions(res[0].id)
  return portfolios;
}
export async function savePublishData(
  publishedTypes: string[],
  userId: string,
) {
  const portfolioId=await getPortfolioId(userId);
  API.patch(`/portfolios/${portfolioId}/extensions`,{
    "extensions":JSON.stringify(publishedTypes)
  })}

  export async function getResumeDetails(userId:any){
    const sessionResumeData=sessionStorage.getItem("ResumeData")
    if(sessionResumeData==null){
    const portfolioId= await getPortfilioId(userId);
    const portfolioDetailsData=await API.get(`portfolios/${userId}`)
    const userData=await API.get(`users/${userId}`)
    const userPreferencesData = await API.get(`users/${userId}/user_preferences`);
    const userProfileData = await API.get(`users/${userId}/user_profile`);
    const addressData=await API.get(`users/${userId}/address`);
    const EducationDetailsData =  await API.get(`portfolios/${portfolioId}/portfolio-slides/EducationDetails/`);
    const ExperienceDetailsData= await API.get(`portfolios/${portfolioId}/portfolio-slides/ExperienceDetalis/`);
    const CertificationsData=await API.get(`portfolios/${portfolioId}/portfolio-slides/Certifications/`); 
    const AwardsData=await API.get(`portfolios/${portfolioId}/portfolio-slides/Awards/`); 
    const ResumeData={
      profileDetails:userProfileData.data,
      preferencesDetails:userPreferencesData.data,
      addressDetails:addressData.data,
      EducationDetails:EducationDetailsData.data,
      ExperienceDetails:ExperienceDetailsData.data,
      CertificationsDetails:CertificationsData.data,
      AwardsDetails:AwardsData.data,
      userDetails:userData.data,
      portfolioDetails:portfolioDetailsData.data,
      accomplishments:USER_ACCOMPLISHMENTS
    }
    sessionStorage.setItem("ResumeData",JSON.stringify(ResumeData))
    }
    return sessionResumeData;
  }
  export const converttoBlob=(data:any)=>{
    const str = JSON.stringify(data);
    const bytes = new TextEncoder().encode(str);
    const blobData = new Blob([bytes], {
        type: "application/json;charset=utf-8"
    });
    return blobData;
  }
  