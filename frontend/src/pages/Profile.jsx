import React from 'react'
import './Profile.scss'
import { useParams } from 'react-router-dom';
import Publication from '../components/Publication'
import { useQuery, useInfiniteQuery } from 'react-query'
import { getUser, getUserPublications } from '../api'
import { Linkedin, Github, Web } from '../components/icons'


function Profile() {
    const { username } = useParams();
    const { data: user, isLoading } = useQuery(['user', username], () => getUser(username));

    const { data: publications, fetchNextPage, hasNextPage } = useInfiniteQuery(['publications', username], ({ pageParam }) => getUserPublications({ username: username, pageParam: pageParam }), {
        getNextPageParam: (lastPage) => lastPage.next,
    });

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Banner firstName={user.first_name} lastName={user.last_name} links={user.social_networks} image={user.profile_pic} />
            <ProfileElement header="Biography" description={user.biography} />
            <Publications publications={publications} />
            {hasNextPage && <button className="button is-primary" onClick={fetchNextPage}>Load more</button>}
        </>
    );
}

function Banner({ firstName, lastName, links, image }) {
    const image_url = image || "/src/assets/profiles/john_doe.png";
    let social_networks = {}
    links.map((link) => {
        if (link.type === 'linkedin') {
            social_networks.linkedin = link.link
        }
        if (link.type === 'github') {
            social_networks.github = link.link
        }
        if (link.type === 'site') {
            social_networks.site = link.link
        }
    })
    return (
        <div className="banner">
            <div className="banner-content">
                <div className="banner-name">{firstName} {lastName}</div>
                <div className="banner-info">
                    {social_networks.github && <a href={social_networks.github} target="_blank" style={{ margin: '0 10px' }}>
                        <Github color="#fff" width='30' height='30' />
                    </a>}
                    {social_networks.linkedin && <a href={social_networks.linkedin} target="_blank" style={{ margin: '0 10px' }}>
                        <Linkedin color="#fff" width='30' height='30' />
                    </a>}
                    {social_networks.site && <a href={social_networks.site} target="_blank" style={{ margin: '0 10px' }}>
                        <Web color="#fff" width='30' height='30' />
                    </a>}
                    <img src={image_url} alt="" width={261} />
                </div>
            </div>
        </div >
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
    let desc = publications?.pages?.map(p => p?.results?.map((pub) => <Publication citation={pub.citation} link={pub.link} key={pub.id} />));
    return (
        <ProfileElement header="Publications" description={desc} />
    );
}

export default Profile