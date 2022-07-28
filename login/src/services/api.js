import axios from "axios";

const token = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_API_URL

const AxiosInstance = axios.create({
    baseURL: url,
    headers: { "Content-type": "application/json" },
});

AxiosInstance.interceptors.request.use(
    async (config) => {
        
        config.params = {
            ...config.params,
            key: token
        };
        return config;
    },
    async (error) => {
        return Promise.reject(error);
    }
);

AxiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        console.log(error);
        const { response = {} } = error || {};

        return Promise.reject(response);
    }
);
export default AxiosInstance;



