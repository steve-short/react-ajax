import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json'; //this is already the default, just here to show that you can set it to something

axios.interceptors.request.use(request => {
    console.log(request);
    //edit request config
    return request;
}, error => { // the error is only to handle errors sending the request like no internet connection
    console.log(error);
    return Promise.reject(error); //i think this re-throws the error
});

axios.interceptors.response.use(response => {
    console.log(response);
    //edit request config
    return response;
}, error => { // this handles any errors in the response from the server like bad url
    console.log(error);
    return Promise.reject(error); //i think this re-throws the error
});

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
