import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api", // https://api.rawg.io/docs/#operation/developers_read and click on a GET method
    params: {
        key: "6db50bce615c49afbdf20be326ba1c83" // https://rawg.io/@njoror/apikey
    }
});