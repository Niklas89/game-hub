import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }

export default axios.create({
    baseURL: "https://api.rawg.io/api", // https://api.rawg.io/docs/#operation/developers_read and click on a GET method
    params: {
        key: import.meta.env.VITE_REACT_APP_API_KEY // https://rawg.io/@njoror/apikey
    }
});