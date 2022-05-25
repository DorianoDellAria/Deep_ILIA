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

export async function register(username, password, first_name, last_name, email) {
    const response = await request.post('/register/', {
        username: username,
        password: password,
        first_name: first_name,
        last_name: last_name,
        email: email,
    });
    return response.data;
}

export async function updateImage(token, image) {

    const response = await request.post('/update_image/', {
        image: image,
        token: token,
    }, headers = {
        'Content-Type': 'multipart/form-data',
    });
    return response.data;
}
