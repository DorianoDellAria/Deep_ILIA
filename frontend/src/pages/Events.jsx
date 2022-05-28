import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { getEvents } from '../api'

import './Projects.scss'

function Event({ event }) {

  const [date, setDate] = React.useState(null)

  useEffect(() => {
    if (event.date) {
      const start = new Date(event.date);
      const month = start.getMonth() + 1;
      const year = start.getFullYear();
      setDate(`${month} / ${year}`)
    }
  }, [event])

  return <div className="project">
    <div className="project-header">
      <h2 className="is-primary">{event.title}</h2>
      <div className="project-header-info">
        {date}
      </div>
    </div>
    {event.image_url ? <div className="project-image">
      <img src={event.image_url} alt="project" />
    </div> : null}
    <p>
      {event.description}
    </p>
  </div>
}

function Events() {

  const { data: events, isLoading } = useQuery('events', getEvents)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (<>
    <h1 className="is-primary">Events</h1>


    {events.map(event => <Event key={event.id} event={event} />)}

  </>
  )
}

export default Events