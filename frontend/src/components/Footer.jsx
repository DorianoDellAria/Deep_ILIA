import React from 'react'
import "./Footer.scss"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-content-left">
                        <div className="footer-logo">
                            <img src="/src/assets/logo-deep-2.svg" />
                        </div>

                        <div className="contacts">
                            <div className="contact">
                                <div className="constact-img">
                                    <img src="/src/assets/footer-face.svg" />
                                </div>
                                <div className="contact-text">
                                    Prof. Sidi Ahmed MAHMOUDI
                                </div>
                            </div>
                            <div className="contact">
                                <div className="constact-img">
                                    <img src="/src/assets/footer-position.svg" />
                                </div>
                                <p className="contact-text">
                                    Rue de Houdain 9 <br /> 7000 Mons <br /> Belgique
                                </p>
                            </div>
                        </div>

                        <div className="footer-social">
                            <div className="footer-social-item">
                                <img src="/src/assets/facebook.svg" />
                            </div>
                            <div className="footer-social-item">
                                <img src="/src/assets/twitter.svg" />
                            </div>
                            <div className="footer-social-item">
                                <img src="/src/assets/youtube.svg" />
                            </div>
                        </div>

                    </div>
                    <div className="footer-content-center">
                        <img className='map' src="/src/assets/map.svg" alt="" />
                    </div>
                    <div className="footer-content-right">
                        <h3>RESSOURCES</h3>
                        <Link to="/projects">
                            <div className="recource">
                                Projects
                            </div>
                        </Link>
                        <Link to="/publications">
                            <div className="recource">
                                Publications
                            </div>
                        </Link>
                        <Link to="#">
                            <div className="recource">
                                Application
                            </div>
                        </Link>
                        <Link to="#">
                            <div className="recource">
                                Events
                            </div>
                        </Link>
                        <Link to="#">
                            <div className="recource">
                                News
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer