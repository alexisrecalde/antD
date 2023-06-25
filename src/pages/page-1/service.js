import axios from "axios";

// export const getData = async (status) => {
//   const response = await axios.get(`API_URL?status=${status}`);
//   return response.data;
// };

export const getDataPending = async () => {
  const response = await axios.get(
    "./tracking_pendiente_aprobacion_qf_001.json"
  );
  console.log(response.data.data);
  return response.data.data.data;
};

export const getDataToDeliver = async () => {
  const response = await axios.get("/tracking_aprobado_por_qf_002.json");
  console.log(response.data.data.data);
  return response.data.data.data;
};

export const getDataDelivered = async () => {
  const response = await axios.get("/tracking_listo_para_retiro_004.json");
  console.log(response.data.data.data);
  return response.data.data.data;
};
