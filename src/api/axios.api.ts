import axios from 'axios'
import { getTokenFromLocalStorage } from '../helper/localStorage.helper'

export const api = axios.create({
    baseURL: import.meta.env.VITE_BASEAPI_URL,
    headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
})
