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
