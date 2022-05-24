import axios from 'axios';

const request = axios.create({
    baseURL: '/api/',
});

export async function getToken(username, password) {
    const response = await request.post('/token/', {
        username: username,
        password: password,
    }, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });
    return response.data;
}

export async function refreshToken(token) {
    const response = await request.post('/token/refresh/', {
        refresh: token,
    }, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });
    return response.data;
}