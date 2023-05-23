import axios from "axios";

export const axiosClient = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: import.meta.env.VITE_APP_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export let textExcerpt = (text, len = 50) => {
  return text.length > len ? text.substring(0, len) + "..." : text;
};


