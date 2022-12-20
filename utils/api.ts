import axios from "axios";

export const $api = axios.create({
    baseURL: 'http://localhost:8000/api'
})

$api.interceptors.request.use( 
    ( request ) => {
        const token = localStorage.getItem('ACCESS_TOKEN');
        request.headers.Authorization = `Bearer ${token}`;
        return request;
    }, 
    (error) => {
        return new Promise.reject(error);
    }
)

$api.interceptors.response = (
    (response) => {
        return response
    },
    (error) => {
        if (error.response.statusCode === 401) {
            localStorage.removeItem('ACCESS_TOKEN');
        }
        return new Promise.reject(error);
    }
)


export default $api;