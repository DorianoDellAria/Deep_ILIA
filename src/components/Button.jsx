import React from 'react'


function getStyle(variant) {
    switch (variant) {

        case "secondary":
            return {
                position: "absolute",

                left: "0px",
                top: "0px",
                background: "#4D4D4D",
                borderRadius: "58px",
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '18px',
                lineHeight: '21px',
                color: '#FFFFFF',
                padding: "7px 21px",
                border: "0",
            }
        case "primary":
        default:
            return {
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
                border: "0",
            }

    }
}


function Button({ children, onClick, variant }) {
    let style = getStyle(variant)

    return (
        <button style={style} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button