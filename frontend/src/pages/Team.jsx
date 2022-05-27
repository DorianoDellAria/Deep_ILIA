import React from 'react'
import './Team.scss'
import johnDoe from '../assets/profiles/john_doe.png'
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getGroup } from '../api'
import { Linkedin, Github, Web } from '../components/icons';


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
    let social_networks = {}
    member.social_networks.map((link) => {
        if (link.type === 'linkedin') {
            social_networks.linkedin = link.link
        }
        if (link.type === 'github') {
            social_networks.github = link.link
        }
        if (link.type === 'site') {
            social_networks.site = link.link
        }
    })
    return (
        <div className="team-member">
            <div className={prof ? "team-image-prof" : "team-image-student"}>
                {member.profile_pic ? <img src={member.profile_pic} alt="profileImage" height='151' width='151' /> : <img src={johnDoe} alt="profileImage" height='151' width='151' />}
            </div>
            <div className="team-member-info">
                <Link to={"/profile/" + member.username}>
                    <h4>
                        {member.first_name + " " + member.last_name}
                    </h4>
                </Link>
                <p>
                    {member.summary}
                </p>
                <p>
                    {social_networks.github && <a href={social_networks.github} target="_blank" style={{ margin: '0 5px' }}>
                        <Github color="#000" width='30' height='30' />
                    </a>}
                    {social_networks.linkedin && <a href={social_networks.linkedin} target="_blank" style={{ margin: '0 5px' }}>
                        <Linkedin color="#000" width='30' height='30' />
                    </a>}
                    {social_networks.site && <a href={social_networks.site} target="_blank" style={{ margin: '0 5px' }}>
                        <Web color="#000" width='30' height='30' />
                    </a>}
                </p>
            </div>
        </div>
    );
}

export default Team