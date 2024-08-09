import axios from "axios";

const endpointInstance = axios.create({
  baseURL: "https://api-dev-konteks.santrichain.id/api/v1",
  timeout: 3000,
  headers: { forToken: "forAuth" },
});

export const getProductKebutuhanRumah = () => {
  return endpointInstance
    .get("/catalogue?category=kebutuhan-rumah")
    .then((res) => res)
    .catch((err) => console.log(err));
};

export const getProductKesehatan = () => {
  return endpointInstance
    .get("/catalogue?category=kesehatan")
    .then((res) => res)
    .catch((err) => console.log(err));
};
