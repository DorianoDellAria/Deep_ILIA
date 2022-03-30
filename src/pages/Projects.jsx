import React from 'react'

import './Projects.scss'

function Projects() {
  return (<>
    <h1 className="is-primary">Projects</h1>


      <div className="project">
        <div className="project-header">
          <h2 className="is-primary">Customs Fraud Detection AI System </h2>
          <div className="project-header-info">
            01 / 2020 - In Progress
          </div>
        </div>
        <p>
          bekijken van de layout van een pagina, afgeleid wordt door de tekstuele inhoud. Het belangrijke punt van het gebruik van Lorem Ipsum is dat het uit een min of meer normale verdeling van letters bestaat, in tegenstelling tot "Hier uw tekst, hier uw tekst" wat het tot min of meer leesbaar nederlands maakt. Veel desktop publishing pakketten en web pagina editors gebruiken tegenwoordig Lorem Ipsum als hun standaard model tekst, en een zoekopdracht naar "lorem ipsum" ontsluit veel websites die nog in aanbouw zijn. Verscheidene versies hebben zich ontwikkeld in de loop van de jaren, soms per ongeluk soms expres (ingevoegde humor en dergelijke).
        </p>
        <div className="project-members">
          <div className="project-members-left">
            <div className="project-members-type">
              <h3>Coordinators</h3>
              <div className="project-members-list">
                <img src="./src/assets/profiles/image3.png" alt="image1" />
                <img src="./src/assets/profiles/image2.png" alt="image1" />
              </div>
            </div>
            <div className="project-members-type">
              <h3>Researchers</h3>
              <div className="project-members-list">
                <img src="./src/assets/profiles/image1.png" alt="image1" />
                <img src="./src/assets/profiles/image4.png" alt="image1" />
              </div>
            </div>
          </div>
          <div className="project-members-right">
            <div className="project-members-type">
              <h3>Partners</h3>
              <div className="project-members-list">
                <img src="./src/assets/part1.svg" alt="image1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project">
        <div className="project-header">
          <h2 className="is-primary">Construction Workers Protection AI System</h2>
          <div className="project-header-info">
            01 / 2020 - In Progress
          </div>
        </div>
        <div className="project-image">
          <img src="./src/assets/projectillust.png" alt="project"  />
        </div>
        <p>
          bekijken van de layout van een pagina, afgeleid wordt door de tekstuele inhoud. Het belangrijke punt van het gebruik van Lorem Ipsum is dat het uit een min of meer normale verdeling van letters bestaat, in tegenstelling tot "Hier uw tekst, hier uw tekst" wat het tot min of meer leesbaar nederlands maakt. Veel desktop publishing pakketten en web pagina editors gebruiken tegenwoordig Lorem Ipsum als hun standaard model tekst, en een zoekopdracht naar "lorem ipsum" ontsluit veel websites die nog in aanbouw zijn. Verscheidene versies hebben zich ontwikkeld in de loop van de jaren, soms per ongeluk soms expres (ingevoegde humor en dergelijke).
        </p>
        <div className="project-members">
          <div className="project-members-left">
            <div className="project-members-type">
              <h3>Coordinators</h3>
              <div className="project-members-list">
                <img src="./src/assets/profiles/image3.png" alt="image1" />
                <img src="./src/assets/profiles/image5.png" alt="image1" />
              </div>
            </div>
            <div className="project-members-type">
              <h3>Researchers</h3>
              <div className="project-members-list">
                <img src="./src/assets/profiles/image6.png" alt="image1" />
              </div>
            </div>
            <div className="project-members-type">
              <h3>Collaborators</h3>
              <div className="project-members-list">
                <img src="./src/assets/profiles/image7.png" alt="image1" />
                <img src="./src/assets/profiles/image4.png" alt="image1" />
              </div>
            </div>
          </div>
          <div className="project-members-right">
            <div className="project-members-type">
              <h3>Partners</h3>
              <div className="project-members-list">
                <img src="./src/assets/part2.svg" alt="image1" />
              </div>
            </div>
          </div>
        </div>
      </div>

  </>
  )
}

export default Projects