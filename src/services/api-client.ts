import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api", // https://api.rawg.io/docs/#operation/developers_read and click on a GET method
    params: {
        key: import.meta.env.VITE_REACT_APP_API_KEY // https://rawg.io/@njoror/apikey
    }
});

class APIClient<T> {
    endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data);
    }
}

export default APIClient;