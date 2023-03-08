import API from "./API";

export const getLink = async (url: string) => {
  const response = await API.get(url);
  return response.data[0].portfolioLink;
};
