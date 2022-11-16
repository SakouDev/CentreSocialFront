import axios from 'axios'

const url = 'https://centresocialeclater.onrender.com';

const ApiService = {
    init() {},
    login(logs) {
        return axios
            .post(`${url}/authentication_token`, logs)
    },
    get(ressource) {
        return axios
            .get(`${url}/api/${ressource}`)
    },
    post(ressource, data) {
        return axios
            .post(`${url}/api/${ressource}`, data)
    },
    put(ressource, data) {
        return axios
            .put(`${url}/api/${ressource}`, data)
    },
    delete(ressource, data) {
        return axios
            .delete(`${url}/api/${ressource}/${data}`)
    },
}

export { ApiService }