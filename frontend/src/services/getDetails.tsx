import API from ".";
export const getDetails = async (url: string) => {
  const response = await API.get(url);
  return response.data;
};
