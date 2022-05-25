import React from 'react'

export default function Publication({ citation, link }) {

    const [title, setTitle] = React.useState('')
    const [authors, setAuthors] = React.useState('')

    React.useEffect(() => {
        const [authors, title] = citation.split(').', 2)
        setTitle(title)
        setAuthors(authors + ').')
    }, [])

    return <div className="publication">
        <span className="publication-title">{title}</span>
        {" " + authors} <br />
        <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
    </div>
}