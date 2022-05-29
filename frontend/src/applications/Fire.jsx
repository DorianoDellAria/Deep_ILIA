import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import CredentialContext from '../CredentialContext'
import { useContext } from 'react'
import { fireDetection } from '../api'
import { useQuery } from 'react-query'
import '../pages/Login.scss'
import './Fire.scss'

function Fire() {
    const location = useLocation()
    const { application_host } = location.state
    const { isLoged } = useContext(CredentialContext)
    let navigate = useNavigate()

    useEffect(() => {
        if (!isLoged) {
            navigate('/login', { replace: true })
        }
    }, [isLoged, navigate])



    const [file, setFile] = useState(null)
    const [send, setSend] = useState(false)
    const [result, setResult] = useState("")
    const [gradCam, setGradCam] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault()
        setSend(true)
    }

    const { isError, isLoading, isSuccess } = useQuery('fire', () => fireDetection(file), {
        enabled: send,
        onSuccess: (data) => {
            // console.log(data);
            setSend(false)
            setResult(data.result)
            setGradCam(data.grad_cam)
        },
        onError: (err) => {
            setSend(false)
        },
    })

    return (
        <>
            <h1 className='is-primary'>Fire Detection</h1>
            <form onSubmit={handleSubmit}>
                <div className='field'>
                    <label className='label'>Upload Image</label>
                    <input className='input' type='file' onChange={(e) => setFile(e.target.files[0])} />
                </div>
                <button className='button is-primary' type='submit'>Submit</button>
            </form>
            <div className="results">
                <h3>Results</h3>
                {isLoading && <p>Loading...</p>}
                {isError && <p>Error :(</p>}
                {isSuccess &&
                    <div className="results-image">
                        <img src={`${application_host}${result}`} alt="result" />
                        <img src={`${application_host}${gradCam}`} alt="grad_cam" />
                    </div>
                }
            </div>
        </>
    )
}

export default Fire