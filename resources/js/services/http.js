import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8000/api'

export function get(url, config = {}) {
    return axios.get(url, config)
}

export function post(url, payload, config) {
    return axios.post(url, payload, config)
}

export function del(url, config = {}) {
    return axios.delete(url, config = {})
}

export function put(url, payload, config) {
    return axios.put(url, payload, config)
}