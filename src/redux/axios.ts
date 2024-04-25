import axios from "axios";

const baseUrl = "http://www.omdbapi.com";
const baseUrl2 = "https://movi-backend-app.onrender.com";

export const apiGetAllMovies = async (path:string) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    },
  };
  return await axios.get(`${baseUrl}${path}`, config); 
};

export const apiGetSpecificMovie = async (path:string) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    },
  };
  return await axios.get(`${baseUrl}${path}`, config); 
};

export const apiLogin = async (path:string, data:unknown) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json"
    },
  };
  return await axios.post(`${baseUrl2}${path}`, data, config); 
};

export const apiSearchQueries = async (path:string, data:unknown) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json"
    },
  };
  return await axios.post(`${baseUrl2}${path}`, data, config); 
};

export const apiGetAllQueries = (path:string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json"
    },
  };

  return axios.get(`${baseUrl2}${path}`, config); 
};






















