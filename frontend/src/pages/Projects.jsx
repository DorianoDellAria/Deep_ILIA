import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { getProjects } from '../api'
import johnDoe from '../assets/profiles/john_doe.png'

import './Projects.scss'


function Members({ title, members }) {
  return <div className="project-members-type">
    <h3>{title}</h3>
    <div className="project-members-list">
      {members.map(member => <img className='project-members-list-profile' key={member.id} src={member?.profile_pic || johnDoe} alt={member.username} />)}
    </div>
  </div>
}

function Project({ project }) {

  const [startDate, setStartDate] = React.useState(null)
  const [endDate, setEndDate] = React.useState(null)

  useEffect(() => {
    if (project.start_date) {
      const start = new Date(project.start_date);
      const month = start.getMonth() + 1;
      const year = start.getFullYear();
      setStartDate(`${month} / ${year}`)
    }
    if (project.end_date) {
      const end = new Date(project.end_date);
      const month = end.getMonth() + 1;
      const year = end.getFullYear();
      setEndDate(`${month} / ${year}`)
    } else {
      setEndDate('In progress')
    }
  }, [project])

  return <div className="project">
    <div className="project-header">
      <h2 className="is-primary">{project.title}</h2>
      <div className="project-header-info">
        {startDate} - {endDate}
      </div>
    </div>
    {project.image_url ? <div className="project-image">
      <img src={project.image_url} alt="project" />
    </div> : null}
    <p>
      {project.description}
    </p>
    <div className="project-members">
      <div className="project-members-left">
        {project.coordinators.length != 0 ? <Members title="Coordinators" members={project.coordinators} /> : null}
        {project.researchers.length != 0 ? <Members title="Researchers" members={project.researchers} /> : null}
        {project.collaborators.length != 0 ? <Members title="Collaborators" members={project.collaborators} /> : null}
      </div>
      {project.partner_url ? <div className="project-members-right">
        <div className="project-members-type">
          <h3>Partners</h3>
          <div className="project-members-list">
            <img src={project.partner_url} alt="image1" />
          </div>
        </div>
      </div> : null}
    </div>
  </div>
}

function Projects() {

  const { data: projects, isLoading } = useQuery('projects', getProjects)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (<>
    <h1 className="is-primary">Projects</h1>


    {projects.map(project => <Project key={project.id} project={project} />)}

  </>
  )
}

export default Projects