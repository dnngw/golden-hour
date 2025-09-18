import api from "..";

const getGoldenHour = async (data) => {
  const response = await api.get("", { params: data });
  return response.data;
};

export default getGoldenHour;
