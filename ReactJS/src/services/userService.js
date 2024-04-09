import axios from "../axios";

const handleLoginAPI = (email, password) => {
  return axios.post("/api/login", { email, password });
};

const getAllUser = (id) => {
  return axios.get(`/api/get-all-user?id=${id}`);
};

const createNewUser = (data) => {
  return axios.post("/api/create-new-user", data);
};

const deleteUser = (id) => {
  return axios.delete("/api/delete-user", {
    data: {
      id,
    },
  });
};

const editUser = (data) => {
  return axios.put("/api/edit-user", data);
};

const getAllCodeService = (type) => {
  console.log("=====",type);
  return axios.get(`/api/allcode?type=${type}`);
};

export {
  handleLoginAPI,
  getAllUser,
  createNewUser,
  deleteUser,
  editUser,
  getAllCodeService,
};