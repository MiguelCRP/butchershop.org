import { makeRequest } from "./makeRequest";

export function newMessage(data) {
  makeRequest("/createmessage", { method: "POST", data });
}
