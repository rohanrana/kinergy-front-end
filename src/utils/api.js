import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  headers: {
    Authorization: JSON.parse(localStorage.getItem("auth-token"))
  }
});

export const postForm = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  headers: {
    "content-type": "multipart/form-data",
    Authorization: JSON.parse(localStorage.getItem("auth-token"))
  }
});

export const API_URL = 'http://localhost:8080/api/v1';
