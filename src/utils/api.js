import axios from "axios";

export const api = axios.create({
  baseURL: 'http://34.194.219.49:3000/api/v1',
  //'http://localhost:8080/api/v1',
  //'http://34.194.219.49:3000/api/v1',//'http://localhost:8080/api/v1',
  headers: {
    Authorization: JSON.parse(localStorage.getItem("auth-token"))
  }
});
//http://34.194.219.49:3000/api/v1  34.194.219.49:3000
export const postForm = axios.create({
  baseURL: 'http://134.194.219.49:3000/api/v1',
  headers: {
    "content-type": "multipart/form-data",
    Authorization: JSON.parse(localStorage.getItem("auth-token"))
  }
});

export const API_URL = 'http://134.194.219.49:3000/api/v1';
