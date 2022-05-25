import React from 'react'
import './Publications.scss'
import { useQuery } from 'react-query'
import { getPublications } from '../api'
import Publication from '../components/Publication'

function Publications() {

  const { data: publications, isLoading } = useQuery('publications', getPublications)

  return <>
    <h1 className="is-primary">Publications</h1>
    <div className="publications">
      <div className="publications-header">
        <h3>Publications</h3>
      </div>
      <div className="publications-elements">
        {isLoading ? "loading..." : publications?.map((publication) => <Publication key={publication.id} link={publication.link} citation={publication.citation}></Publication>)}
      </div>
    </div>
  </>
}

export default Publications