import React from 'react'
import './Team.scss'
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getGroup } from '../api'


// //To delete 
// const professor = [
//     {
//         username: 'Sidi',
//         summary: 'Professor in Computer Science and Engineering',
//         profile_pic: "./src/assets/profiles/image3.png",
//     }
// ];
// // todelete
// const students = [
//     {
//         username: 'John Doe',
//         summary: 'Student in Computer Science and Engineering',
//         profile_pic: "./src/assets/profiles/image4.png",
//     },
//     {
//         username: 'John Doe',
//         summary: 'Student in Computer Science and Engineering',
//         profile_pic: "./src/assets/profiles/image5.png",
//     },
//     {
//         username: 'John Doe',
//         summary: 'Student in Computer Science and Engineering',
//         profile_pic: "./src/assets/profiles/image6.png",
//     }
// ];

const colors = {
    primary: '#BD0E3A',
    secondary: '#00366D',
}


function Team() {

    const { data: professor, isLoading: l1 } = useQuery('professor', () => getGroup('Professor'));
    const { data: students, isLoading: l2 } = useQuery('phd_student', () => getGroup('PhD_Student'));

    if (l1 || l2) {
        return <div>Loading...</div>
    }

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
                {member.profile_pic ? <img src={member.profile_pic} alt="profileImage" /> : <img src="./src/assets/profiles/john_doe.png" alt="profileImage" height='124' width='124' />}
            </div>
            <div className="team-member-info">
                <Link to={"/profile/" + member.username}>
                    <h4>
                        {member.username}
                    </h4>
                </Link>
                <p>
                    {member.summary}
                </p>
                <p>
                    réseau IMAGE
                </p>
            </div>
        </div>
    );
}

export default Team