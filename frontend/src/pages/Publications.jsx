import React from 'react'
import './Publications.scss'
import { useInfiniteQuery } from 'react-query'
import { getPublications } from '../api'
import Publication from '../components/Publication'

function Publications() {

  const { data: publications, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery('publications', getPublications, {
    getNextPageParam: (lastPage) => lastPage.next,
  })
  console.log(publications);
  return <>
    <h1 className="is-primary">Publications</h1>
    <div className="publications">
      <div className="publications-header">
        <h3>Publications</h3>
      </div>
      <div className="publications-elements">
        {isLoading ? "loading..." : publications?.pages?.map(p => p?.results?.map((publication) => <Publication key={publication.id} link={publication.link} citation={publication.citation}></Publication>))}
      </div>
    </div>
    {hasNextPage && <button className="button is-primary" onClick={fetchNextPage}>Load more</button>}
  </>
}

export default Publications