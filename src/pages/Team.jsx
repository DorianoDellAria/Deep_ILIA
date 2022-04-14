import React from 'react'
import './Team.scss'


//To delete 
const professor = [
    {
        name: 'Prof. Sidi Ahmed Mahmoudi',
        description: 'Professor in Computer Science and Engineering',
        image: "./src/assets/profiles/image3.png",
    }
];
// todelete
const students = [
    {
        name: 'Aurélie Cools',
        description: 'Student in Computer Science and Engineering',
        image: "./src/assets/profiles/image4.png",
    },
    {
        name: 'Jean-Sébastien Lérat',
        description: 'Student in Computer Science and Engineering',
        image: "./src/assets/profiles/image5.png",
    }
];

const colors = {
    primary: '#BD0E3A',
    secondary: '#00366D',
}


function Team() {
    return (
        <>
            <h1 className='is-primary'>Team</h1>
            <div className="team">
                <TeamSection sectionName="Professor" members={professor} color={colors.primary} />
                <TeamSection sectionName="PhD Students" members={students} color={colors.secondary} />
            </div>
        </>
    );
}

function TeamSection({ sectionName, members, color }) {
    const style = {
        color: color,
        borderRight: `6px solid ${color}`,
    };
    return (
        <div className="team-section">
            <div className="team-header is-one-quarter">
                <h3 style={style}>{sectionName}</h3>
            </div>
            <div className="team-list is-three-quarter">
                {
                    members.map((member, index) => <TeamMember key={index} member={member} />)
                }
            </div>

        </div>
    );
}

function TeamMember({ member }) {
    return (
        <div className="team-member">
            <div className="team-image">
                <img src={member.image} alt="profileImage" />
            </div>
            <div className="team-member-info">
                <h4>
                    {member.name}
                </h4>
                <p>
                    {member.description}
                </p>
                <p>
                    réseau IMAGE
                </p>
            </div>
        </div>
    );
}

export default Team