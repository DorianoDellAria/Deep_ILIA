import React from 'react'
import Carousel from 'nuka-carousel'
import { useQuery } from 'react-query'
import './Main.scss'
import { getEvents, getNews } from '../api'
import { Link } from 'react-router-dom'

function MainPage() {

  const { data: events, isLoading: l1 } = useQuery('events', getEvents)
  const { data: news, isLoading: l2 } = useQuery('news', getNews)

  if (l1 || l2) {
    return <div>Loading...</div>
  }

  return (<>
    <h1 className="is-primary">Welcome</h1>

    <div className='carousell'>
      <Carousel wrapAround={true} autoplay={true} >
        {events.map(event => <Link to="/events"><img key={event.id} src={event.image_url} alt="project" /></Link>)}
        {news.map(news => <Link to="/news"><img key={news.id} src={news.image_url} alt="project" /></Link>)}
      </Carousel>
    </div>

  </>
  )
}

export default MainPage