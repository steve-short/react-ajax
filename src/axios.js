import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

instance.interceptors.request.use(request => {
    console.log(request);
    //edit request config
    return request;
}, error => { // the error is only to handle errors sending the request like no internet connection
    console.log(error);
    return Promise.reject(error); //i think this re-throws the error
});

instance.interceptors.response.use(response => {
    console.log(response);
    //edit request config
    return response;
}, error => { // this handles any errors in the response from the server like bad url
    console.log(error);
    return Promise.reject(error); //i think this re-throws the error
});

export default instance;