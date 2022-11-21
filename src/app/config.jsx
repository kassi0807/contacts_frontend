import axios from "axios"


// API CLINET SETUP
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.baseURL = "http://127.0.0.1:8000/api"
    