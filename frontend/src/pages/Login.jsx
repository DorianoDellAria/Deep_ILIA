import { useState } from 'react'
import './Login.scss'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (<div className='login'>
        <h2>Log In</h2>
        <form>
            <div className="flex-form">


                <div className='field'>
                    <label for="username">Username : </label>
                    <input type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
                </div>
                <div className='field'>
                    <label for="password">Password : </label>
                    <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                </div>
                <button className='button is-primary'>Log In</button>
            </div>
        </form>
    </div>
    )
}

export default Login