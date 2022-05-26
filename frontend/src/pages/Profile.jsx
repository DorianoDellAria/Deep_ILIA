import React from 'react'
import './Profile.scss'
import { useParams } from 'react-router-dom';
import Publication from '../components/Publication'
import { useQuery } from 'react-query'
import { getUser } from '../api'


function Profile() {
    const { username } = useParams();
    const { data: user, isLoading } = useQuery(['user', username], () => getUser(username));
    const testUser = {
        username: username,
        link: 'google.com'
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Banner name={username} link={testUser.link} image={user.profile_pic} />
            <ProfileElement header="Biography" description={user.biography} />
            <Publications publications={user.publications} />
        </>
    );
}

function Banner({ name, link, image }) {
    const image_url = image || "/src/assets/profiles/john_doe.png";
    return (
        <div className="banner">
            <div className="banner-content">
                <div className="banner-name">{name}</div>
                <img src={image_url} alt="" width={261} />
            </div>
        </div>
    );
}

function ProfileElement({ header, description }) {
    return (
        <div className="profile">
            <div className="profile-header">
                <h3>
                    {header}
                </h3>
            </div>
            <div className="profile-description">
                {description}
            </div>
        </div>
    );
}

function Publications({ publications }) {
    let desc = publications.map((pub) => <Publication citation={pub.citation} link={pub.link} key={pub.id} />);
    return (
        <ProfileElement header="Publications" description={desc} />
    );
}

export default Profile