import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from 'react-query'
import * as api from '../api'
import './Login.scss'

function Signup({ setAccess, setRefresh, setIsLoged, setUsername }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [localUsername, setLocalUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [email, setEmail] = useState('')
    const [summary, setSummary] = useState('')
    const [biography, setBiography] = useState('')
    const [orbiUrl, setOrbiUrl] = useState('')
    const [image, setImage] = useState(null)
    const [github, setGithub] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [site, setSite] = useState('')
    const [canFetch, setCanFetch] = useState(false)
    let navigate = useNavigate()

    const { mutate, } = useMutation((newUser) => api.register(newUser), {
        onSuccess: () => {
            setCanFetch(true)
        },
        onError: ({ response }) => {
            setCanFetch(false)
            const { data } = response
            window.alert(JSON.stringify(data, null, 2))
        }
    })

    const { mutate: imageMutate } = useMutation(({ token, image }) => api.updateImage(token, image))


    useQuery('access', () => api.getToken(localUsername, password), {
        enabled: canFetch,
        onSuccess: ({ access, refresh }) => {
            setCanFetch(false)
            setAccess(access)
            setRefresh(refresh)
            setUsername(localUsername)
            setIsLoged(true)
            imageMutate({ token: access, image: image })
            navigate(-1, { replace: true })
        }
    })




    const handleSubmit = async (e) => {
        e.preventDefault()


        if (password !== passwordConfirm) {
            alert('Passwords do not match')
            return
        }

        mutate({
            first_name: firstName,
            last_name: lastName,
            username: localUsername,
            password: password,
            email: email,
            summary: summary,
            biography: biography,
            orbi_url: orbiUrl,
            github: github,
            linkedin: linkedin,
            site: site
        })
        // setAccess(access)
        // setRefresh(refresh)
        // setUsername(localUsername)
        // setIsLoged(true)
        // navigate(-1, { replace: true })
    }

    // if (isSuccess) {

    // }


    return (
        <div className='login'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex-form">
                    <div className="field">
                        <label htmlFor="firstName">First Name : </label>
                        <input type="text" id="firstName" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" />
                    </div>
                    <div className="field">
                        <label htmlFor="lastName">Last Name : </label>
                        <input type="text" id="lastName" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" />
                    </div>
                    <div className='field'>
                        <label htmlFor="username">Username : </label>
                        <input type="text" id="username" name="username" value={localUsername} onChange={e => setLocalUsername(e.target.value)} placeholder="Username" />
                    </div>
                    <div className='field'>
                        <label htmlFor="password">Password : </label>
                        <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                    </div>
                    <div className='field'>
                        <label htmlFor="passwordConfirm">Confirm Password : </label>
                        <input type="password" id="passwordConfirm" name="passwordConfirm" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} placeholder="Confirm Password" />
                    </div>
                    <div className='field'>
                        <label htmlFor="email">Email : </label>
                        <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                    </div>
                    <div className='field'>
                        <label htmlFor="summary">Summary : </label>
                        <input type="text" id="summary" name="summary" value={summary} onChange={e => setSummary(e.target.value)} placeholder="Summary" />
                    </div>
                    <div className='field'>
                        <label htmlFor="biography">Biography : </label>
                        <textarea id="biography" name="biography" value={biography} onChange={e => setBiography(e.target.value)} placeholder="Biography" />
                    </div>
                    <div className='field'>
                        <label htmlFor="orbiUrl">Orbi URL : </label>
                        <input type="text" id="orbiUrl" name="orbiUrl" value={orbiUrl} onChange={e => setOrbiUrl(e.target.value)} placeholder="Orbi URL" />
                    </div>
                    <div className="field">
                        <label htmlFor="profilImage">Profil Image : </label>
                        <input type="file" id="profilImage" name="profilImage" onChange={(e) => setImage(e.target.files[0])} accept="image/*" />
                    </div>
                    <div className="field">
                        <label htmlFor="github">Github : </label>
                        <input type="text" id="github" name="github" value={github} onChange={e => setGithub(e.target.value)} placeholder="Github" />
                    </div>
                    <div className="field">
                        <label htmlFor="linkedin">Linkedin : </label>
                        <input type="text" id="linkedin" name="linkedin" value={linkedin} onChange={e => setLinkedin(e.target.value)} placeholder="Linkedin" />
                    </div>
                    <div className="field">
                        <label htmlFor="site">Site : </label>
                        <input type="text" id="site" name="site" value={site} onChange={e => setSite(e.target.value)} placeholder="Site" />
                    </div>
                    <button className='button is-primary' type='submit'>Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Signup