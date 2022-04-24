import React from 'react'
import './Profile.scss'

function Profile({ user }) {
    user = {
        name: 'John Doe',
        link: 'google.com'
    }
    return (
        <>
            <Banner name={user.name} link={user.link} />
            <div className='profile'>
                <div className="profile-header">
                    <h3>
                        Biography
                    </h3>
                </div>

                <div className="profile-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut expedita deserunt esse in porro optio culpa ipsam sint? Tempore ut iste cum placeat amet fuga. Eum velit est ex itaque.
                    Dolores exercitationem esse quasi ex officia laudantium corporis iusto repellat ipsam magni iste aliquid eum quas asperiores corrupti saepe soluta, provident, sit beatae modi temporibus labore. Soluta excepturi labore totam.
                    Tempore repudiandae, debitis beatae sit suscipit eius facilis asperiores, quo rem fugiat blanditiis, repellat laborum vero vel. Dignissimos, vero praesentium. Eaque provident obcaecati nisi odio, incidunt dicta minus officiis. Rerum?
                    Libero cum deserunt totam dolore unde, mollitia doloremque repellat sequi ipsum autem accusantium error similique sunt, aliquam ratione consequatur veniam eligendi, dignissimos consequuntur maiores ullam. Provident, dolorum animi. Facilis, incidunt!
                    Veritatis quasi corporis, nisi nesciunt accusamus totam illo dignissimos expedita ipsum recusandae vero quo non impedit deserunt ratione dolorem! Excepturi perferendis fugit esse dolor corrupti earum tempora, repudiandae a vel?
                    Repellat eaque rerum, cum iste voluptatibus, asperiores debitis facilis tenetur minus exercitationem nostrum velit aspernatur in? Nam, numquam vel expedita accusamus sed sint, reprehenderit distinctio eos corrupti deleniti facere modi.
                </div>
            </div>
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

export default Profile