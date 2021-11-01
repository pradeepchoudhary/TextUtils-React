import React from 'react'

export default function Footer(props) {
    const mystyle = {
        marginTop: "-0.25rem"
      };

    return (
        <>
        <div className="container">
            <footer className={`footer fixed-bottom navbar-${props.mode} bg-${props.mode}`} style={mystyle}>
                <div className="footer-copyright text-white text-center py-3">© 2021 Copyright : 
                    <a className="" href="https://myutils.com/">  myutils.com </a>
                </div>               
            </footer>
        </div>
        </>
    )
}
