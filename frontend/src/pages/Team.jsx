import React from 'react'
import './Team.scss'
import { Link } from 'react-router-dom';


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
        name: 'John Doe',
        description: 'Student in Computer Science and Engineering',
        image: "./src/assets/profiles/image4.png",
    },
    {
        name: 'John Doe',
        description: 'Student in Computer Science and Engineering',
        image: "./src/assets/profiles/image5.png",
    },
    {
        name: 'John Doe',
        description: 'Student in Computer Science and Engineering',
        image: "./src/assets/profiles/image6.png",
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
            <div className="team-header">
                <h3 style={style}>{sectionName}</h3>
            </div>
            <div className="team-list">
                {
                    members.map((member, index) => <TeamMember key={index} member={member} />)
                }
            </div>

        </div>
    );
}

function TeamMember({ member }) {
    // TODO : add icons
    return (
        <div className="team-member">
            <div className="team-image">
                <img src={member.image} alt="profileImage" />
            </div>
            <div className="team-member-info">
                <Link to="/profile" >
                    <h4>
                        {member.name}
                    </h4>
                </Link>
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