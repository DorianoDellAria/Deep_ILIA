import React from 'react'

let styleButton = {
    position: "absolute",

    left: "0px",
    top: "0px",
    background: "#BD0E3A",
    borderRadius: "58px",
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '18px',
    lineHeight: '21px',
    color: '#FFFFFF',
    padding: "7px 21px",
}


function Button({ children, onClick, variant }) {
    switch (variant) {
        case "secondary":
            styleButton.background = "#4D4D4D"
        
    }

    return (
        <button style={styleButton} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button