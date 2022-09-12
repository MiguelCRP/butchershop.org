import axios from "axios";

console.log(process.env.REACT_APP_BASE_URL)

const api = axios.create({
  baseURL: "http://localhost:1337/api",
});

export function makeRequest(url, options) {
  return api(url, options)
    .then((res) => res.data)
    .catch((error) =>
      Promise.reject(error?.response?.data?.message ?? "Error")
    );
}

export function newMessage(data) {
  makeRequest("/createmessage", { method: "POST", data });
}
