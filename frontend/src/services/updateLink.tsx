import API from "../services";

export const updateLink = async (url = "", data = {}) => {
  await API.put(url, data);
};
