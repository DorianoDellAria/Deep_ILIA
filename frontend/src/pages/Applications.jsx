import React from 'react'
import { useQuery } from 'react-query'
import { getApplications } from '../api'
import { Github, Web } from '../components/icons'
import CredentialContext from '../CredentialContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Applications.scss'

function Applications() {

    const { data: applications, isLoading, isError, isSuccess } = useQuery('applications', getApplications)

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>Error :(</p>
    }

    return (
        <>
            <h1 className="is-primary">Applications &amp; Demos</h1>
            {isSuccess && applications.map(app => <Appli key={app.id} {...app} />)}
        </>
    )
}

function Appli({ id, name, description, abstract, video_id, application_uri, application_host, github_url, site_url }) {

    const { isLoged } = useContext(CredentialContext)
    return <>
        <div className="appli">
            <div className="appli-header">
                <div className="appli-title">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
                <div className="appli-networks">
                    {github_url && <a href={github_url} target="_blank" rel="noopener noreferrer">
                        <Github color='#000' width='30' height='30' />
                    </a>}
                    {site_url && <a href={site_url} target="_blank" rel="noopener noreferrer">
                        <Web color='#000' width='30' height='30' />
                    </a>}
                </div>

            </div>

            <div className="appli-content">
                <div className="appli-abstract">
                    <p>{abstract}</p>
                </div>
                {video_id &&
                    <div className="appli-video">
                        <iframe type="text/html" width="640" height="360"
                            src={`http://www.youtube.com/embed/${video_id}?autoplay=0`}
                            frameBorder="0" />
                    </div>
                }
            </div>
            <div className="appli-footer">
                {application_uri && <Link to={isLoged ? application_uri : '/login'} state={{ application_host: application_host, id: id }} >
                    <button className="button is-primary">Try It</button>
                </Link>
                }
            </div>

        </div>
    </>
}

export default Applications