import React from 'react'

export default function Footer() {
    let footerStyle = {
        position: "absolute",
        bottom: "0%",
        width: "100%",
        border: "0.5px solid aqua"
    }

    return (        
        <footer className="text-center bg-dark text-light py-3" style={footerStyle}>
            <p className="text-center">
            Copyright &copy; Arghya Sarkar 2021
            </p>
        </footer>
    )
}
