import React from 'react'
import './Profile.scss'

const profile = {
    Biography: "Sidi Ahmed Mahmoudi a des activités liées aux domaines de calcul haute performance (HPC), Cloud computing, Big Data, Data Science, traitement multimédia et intelligence artificielle. Il a présenté sa thèse de doctorat en 2013, portant sur l’exploitation efficace des plateformes parallèles et hétérogènes pour le traitement d’objets multimédia. Depuis la fin de sa thèse, il a travaillé sur différents projets et applications médicales (aide au diagnostic des  maladies  de  scoliose  et d’ostéoporose, suivi de mouvements cardiaques, etc.) ainsi que des applications d’analyse d’évènements de sports (ralenti, résumé et highlights, etc.). Le point commun entre ces projets est l’utilisation des techniques d’apprentissage de données (Machine Learning) pour améliorer la précision des résultats. Durant les deux dernières années, Sidi Ahmed Mahmoudi travaillé sur l’exploitation des ressources distantes (cloud) pour faire face au défi du traitement massif de données. L'ensemble de ses travaux de recherche sont publiés dans une dizaine de revues internationales, sept chapitres de livre et plus de quanrante conférences et workshops internationaux.",
    Publications: [
        {
            title: "A Machine Learning Approach to Predicting the Heart Disease Risk",
            year: "2019",
            authors: "Sidi Ahmed Mahmoudi, Yannick Le Roux, Olivier Le Roux",
            journal: "Journal of the American Statistical Association",
        },
        {
            title: "A Machine Learning Approach to Predicting the Heart Disease Risk",
            year: "2019",
            authors: "Sidi Ahmed Mahmoudi, Yannick Le Roux, Olivier Le Roux",
            journal: "Journal of the American Statistical Association",
        }
    ]
}

function Profile({ user }) {
    user = {
        name: 'John Doe',
        link: 'google.com'
    }
    return (
        <>
            <Banner name={user.name} link={user.link} />
            <ProfileElement header="Biography" description={profile.Biography} />
            <Publications  publications={profile.Publications} />
        </>
    );
}

function Banner({ name, link }) {
    const url = "./src/assets/profiles/john_doe.png";
    return (
        <div className="banner">
            <div className="banner-content">
                <div className="banner-name">{name}</div>
                <img src={url} alt="" width={261} />
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
    let desc = publications.map((publication, index) => <PublicationItem key={index} publication={publication} />)
    return (
        <ProfileElement header="Publications" description={desc} />
    );
}

function PublicationItem({ publication }) {
    return (
        <>
            <b>{publication.title}</b> in {publication.journal} ({publication.year}) {publication.authors} 
            <br />
            <br />
        </>
    );
}

export default Profile