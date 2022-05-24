import axios from 'axios';

const request = axios.create({
    baseURL: '/api/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export async function getPublications() {
    const response = await request.get('/get_publications');
    return response.data;
}

export async function getPserPublications(username) {
    const response = await request.get('/get_publications/' + username);
    return response.data;
}

export async function getToken(username, password) {
    const response = await request.post('/token/', {
        username: username,
        password: password,
    });
    return response.data;
}

export async function refreshToken(token) {
    const response = await request.post('/token/refresh/', {
        refresh: token,
    });
    return response.data;
}
