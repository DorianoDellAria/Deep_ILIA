import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import CredentialContext from '../CredentialContext'
import { useContext } from 'react'
import { applicationResults, getApplicationFeedback, sendFeedback } from '../api'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import '../pages/Login.scss'
import './Fire.scss'

function Fire() {
    const location = useLocation()
    const { application_host, id } = location.state
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

    const { isError, isLoading, isSuccess } = useQuery('fire', () => applicationResults(file, application_host), {
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

    const { isError: isFeedbackError, isLoading: isFeedbackLoading, isSuccess: isFeedbackSuccess, data: feedbacks } = useQuery('feedback', () => getApplicationFeedback(id))

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
            <div className="feedback">
                <h3>Feedbacks</h3>
                <AddFeedback />
                {isFeedbackLoading && <p>Loading...</p>}
                {isFeedbackError && <p>Error :(</p>}
                {isFeedbackSuccess &&
                    feedbacks.map((item, index) => <Feedback key={index} {...item} />)
                }
            </div>
        </>
    )
}

function AddFeedback() {
    const { access } = useContext(CredentialContext)

    const client = useQueryClient()

    const [feedback, setFeedback] = useState("")

    const { id } = useLocation().state

    const { mutate } = useMutation(({ token, id, feedback}) => sendFeedback(token, id, feedback), {
        onSuccess: (data) => {
            setFeedback("")
            client.invalidateQueries('feedback')
        },
        onError: (err) => {
            console.log(err)
        },
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        mutate({ token: access, id: id, feedback: feedback })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="feedback-add">
                    <textarea value={feedback} onChange={e => setFeedback(e.target.value)} />
                    <button className='button is-primary' type='submit'>Submit</button>
                </div>
            </form>
        </>
    )
}

function Feedback({ user_id, feedback }) {
    return (
        <div className="feedback-item">
            {user_id.profile_pic && <img src={user_id.profile_pic} alt="profile_pic" />}

            <div className="feedback-content">
                <h4>{user_id.first_name} {user_id.last_name}</h4>
                <p>{feedback}</p>
            </div>
        </div>
    )
}



export default Fire