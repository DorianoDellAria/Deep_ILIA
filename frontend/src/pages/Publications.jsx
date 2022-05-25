import React from 'react'
import './Publications.scss'
import { useQuery } from 'react-query'
import { getPublications } from '../api'

function Publication({ citation, link }) {

  const [title, setTitle] = React.useState('')
  const [authors, setAuthors] = React.useState('')

  React.useEffect(() => {
    const [authors, title] = citation.split(').', 2)
    setTitle(title)
    setAuthors(authors + ').')
  }, [])

  return <div className="publication">
    <span className="publication-title">{title}</span>
    {" " + authors} <br />
    <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
  </div>
}

function Publications() {

  const { data: publications, isLoading } = useQuery('publications', getPublications)

  return <>
    <h1 className="is-primary">Publications</h1>
    <div className="publications">
      <div className="publications-header">
        <h3>Publications</h3>
      </div>
      <div className="publications-elements">
        {isLoading ? "loading..." :publications?.map((publication) => <Publication key={publication.id} link={publication.link} citation={publication.citation}></Publication>)}
      </div>
    </div>
  </>
}

export default Publications