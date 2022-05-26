import React from 'react'
import './Team.scss'
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getGroup } from '../api'


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
                <TeamSection sectionName="Professor" members={professor} color={colors.primary} prof />
                <TeamSection sectionName="PhD Students" members={students} color={colors.secondary} />
            </div>
        </>
    );
}

function TeamSection({ sectionName, members, color, prof }) {
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
                    members.map((member, index) => <TeamMember key={index} member={member} prof={prof} />)
                }
            </div>

        </div>
    );
}

function TeamMember({ member, prof }) {
    // TODO : add icons
    return (
        <div className="team-member">
            <div className={prof ? "team-image-prof" : "team-image-student"}>
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