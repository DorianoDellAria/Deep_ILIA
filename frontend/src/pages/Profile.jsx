import React from 'react'
import './Profile.scss'
import { useParams } from 'react-router-dom';
import Publication from '../components/Publication'
import { useQuery, useInfiniteQuery } from 'react-query'
import { getUser, getUserPublications } from '../api'


function Profile() {
    const { username } = useParams();
    const { data: user, isLoading } = useQuery(['user', username], () => getUser(username));

    const { data: publications, fetchNextPage, hasNextPage } = useInfiniteQuery(['publications', username],  ({pageParam}) => getUserPublications({username: username, pageParam: pageParam}), {
        getNextPageParam: (lastPage) => lastPage.next,
    });
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
            <Publications publications={publications} />
            {hasNextPage && <button className="button is-primary" onClick={fetchNextPage}>Load more</button>}
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
    let desc = publications?.pages?.map(p => p?.results?.map((pub) => <Publication citation={pub.citation} link={pub.link} key={pub.id} />));
    return (
        <ProfileElement header="Publications" description={desc} />
    );
}

export default Profile