import userAPI from ".";

const postUserDetails = async function postData(url = "", data = {}) {
  await userAPI.put(url, data);
};

export default postUserDetails;
