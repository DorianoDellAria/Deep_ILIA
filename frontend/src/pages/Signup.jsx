import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as api from '../api'
import './Login.scss'

function Signup({ setAccess, setRefresh, setIsLoged, setUsername }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [localUsername, setLocalUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState(null)

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        navigate(-1, { replace: true })
    }


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
                    <div className="field">
                        <label htmlFor="profilImage">Profil Image : </label>
                        <input type="file" id="profilImage" name="profilImage" value={image} onChange={() =>  setImage(e.target.files[0])} />
                    </div>
                    <button className='button is-primary' type='submit' >Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Signup