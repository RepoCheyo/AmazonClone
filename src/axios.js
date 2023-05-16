import axios from "axios";

const instance = axios.create ({
    // API (funcion de la nube) URL
    baseURL: 'http://localhost:5001/clone-7c49e/us-central1/api'
});

export default instance;