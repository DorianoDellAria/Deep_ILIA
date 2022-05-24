import { useState } from 'react'
import * as api from '../api'
import './Login.scss'

function Login({ setAccess, setRefresh, setIsLoged, setUsername }) {
    const [localUsername, setLocalUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { access, refresh } = await api.getToken(localUsername, password)
        setAccess(access)
        setRefresh(refresh)
        setUsername(localUsername)
        setIsLoged(true)
    }


    return (
        <div className='login'>
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex-form">
                    <div className='field'>
                        <label htmlFor="username">Username : </label>
                        <input type="text" id="username" name="username" value={localUsername} onChange={e => setLocalUsername(e.target.value)} placeholder="Username" />
                    </div>
                    <div className='field'>
                        <label htmlFor="password">Password : </label>
                        <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                    </div>
                    <button className='button is-primary' type='submit' >Log In</button>
                </div>
            </form>
        </div>
    )
}

export default Login