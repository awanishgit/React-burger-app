import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-d3f7f.firebaseio.com/'
});

export default instance;