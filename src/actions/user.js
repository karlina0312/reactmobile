import React from "react";
import postFetch from '../utils/postFetch';
import fetchData from '../utils/fetchData';


const getUserData = (id) => {
    return fetchData(`users/${id}`);
}

const Login = (userName, password, uniqueId) => {
    return postFetch('users/login',JSON.stringify({name: userName, password: password, deviceId: uniqueId}));
}

const Register = (userName, password, email, uniqueId) => {
    return postFetch('users',JSON.stringify({name: userName, password: password, email: email, deviceId: uniqueId}));
}

const setToken = (id, token) => {
    return postFetch(`users/token/${id}`,JSON.stringify({token: token}))
}

const recover = (username, email) => {
    console.log(JSON.stringify({name: username, email: email}));
    return postFetch('users/recover',JSON.stringify({name: username, email: email}));
}

export { Login, getUserData, Register, setToken, recover };