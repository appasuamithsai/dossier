import { useEffect, useState } from "react";
import API from "./API";
import { getDetails } from "./getDetails";

export const addPhonenumber = async(userId:string,data: any) => {
  const mobileNumber={
    "mobileNumber":data
  }
  await API.patch(`users/${userId}/user_profile`, mobileNumber);

};

export const getUserDetails = (userId:string) => {
  const [link, setLink] = useState("");
  useEffect(() => {
    getDetails(`/users/${userId}`)
      .then((res) => {
        setLink(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return link;
};
