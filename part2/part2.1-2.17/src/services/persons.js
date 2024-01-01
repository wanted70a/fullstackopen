import axios from "axios";
const baseUrl = "http://localhost:3005/persons";

const getAll = () => {
  const reqPromes = axios.get(baseUrl);
  return reqPromes.then(({ data }) => data);
};

const create = (newObject) => {
  const reqPromes = axios.post(baseUrl, newObject);
  return reqPromes.then(({ data }) => data);
};

const update = (id, newObject) => {
  const reqPromes = axios.put(`${baseUrl}/${id}`, newObject);
  return reqPromes.then(({ data }) => data);
};

const erase = (id) => {
  const reqPromes = axios.delete(`${baseUrl}/${id}`);
  return reqPromes.then(({ data }) => data);
};

export default {
  getAll,
  create,
  update,
  erase,
};
