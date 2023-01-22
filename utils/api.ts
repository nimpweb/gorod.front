import axios, { AxiosError, AxiosRequestConfig } from "axios";

export const $api = axios.create({
    baseURL: 'http://localhost:8000/'
})

$api.interceptors.request.use(
    (request: AxiosRequestConfig) => {
        const token = localStorage.getItem('ACCESS_TOKEN') ?? '111';
        if (request.headers) {
            request.headers['Authorization'] = `Bearer ${token}`;
            request.headers['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
            request.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000';
        }
        // request.withCredentials = true;
        return request;
    },
    (error: AxiosError) => {
        console.log(error.message);
        // return new Promise.reject(error.message);
    },
);

$api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error?.response?.statusCode === 401) {
            // localStorage.removeItem('ACCESS_TOKEN');
        }
        console.log(error.message);
    },
);


export default $api;