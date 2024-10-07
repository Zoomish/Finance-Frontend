import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_BASEAPI_URL,
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_BASEAPI_TOKEN}`,
    }
})