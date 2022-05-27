import axios from 'axios';

const request = axios.create({
    baseURL: '/api/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export async function getUser(username) {
    const response = await request.get(`get_user/${username}`);
    return response.data;
}

export async function getPublications({ pageParam=1 }) {
    const response = await request.get('/get_publications/?page=' + pageParam);
    return response.data;
}

export async function getUserPublications({username, pageParam=1}) {
    const response = await request.get('/get_publications/' + username + '/?page=' + pageParam);
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

export async function register({ first_name, last_name, username, password, email, summary, biography, orbi_url, github, linkedin, site }) {
    const social_networks = [
        {
            type: 'github',
            link: github,
        },
        {
            type: 'linkedin',
            link: linkedin,
        },
        {
            type: 'site',
            link: site,
        },
    ]
    const response = await request.post('/create_user/', {
        username: username,
        password: password,
        first_name: first_name,
        last_name: last_name,
        email: email,
        summary: summary,
        biography: biography,
        orbi_url: orbi_url,
        social_networks: social_networks,
    });
    return response.data;
}

export async function updateImage(token, image) {
    let formData = new FormData();
    formData.append('image', image);

    const response = await request.post('/update_image/', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + token,
        }
    });
    return response.data;
}

export async function getGroup(goup_name) {
    const response = await request.get('/get_group/' + goup_name);
    return response.data;
}


export async function getProjects() {
    const response = await request.get('/get_projects');
    return response.data;
}