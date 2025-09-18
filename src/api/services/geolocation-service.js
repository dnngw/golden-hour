import api from "../index-geo";

export const getGeoLocation = async (data) => {
  const response = await api.get("", { params: data });
  return response.data;
};

