import React from 'react'

const styleButton = {
    position: "absolute",
    width: "110px",
    height: "37px",
    left: "0px",
    top: "0px",
    background: "#BD0E3A",
    borderRadius: "58px"
}

const styleText = {
    position: 'absolute',
    width: '61px',
    height: '21px',
    left: '21px',
    top: '7px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '18px',
    lineHeight: '21px',
    color: '#FFFFFF',
}

function Button({ children, onClick }) {
    return (
        <button style={styleButton} onClick={onClick}>
            <div style={styleText}>
                {children}
            </div>
        </button>
    )
}

export default Button