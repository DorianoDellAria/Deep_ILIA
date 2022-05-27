import React from 'react'
import logoDeep2 from '../assets/logo-deep-2.svg'
import footerFace from '../assets/footer-face.svg'
import footerPosition from '../assets/footer-position.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'
import map from '../assets/map.svg'
import "./Footer.scss"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-content-left">
                        <div className="footer-logo">
                            <img src={logoDeep2} />
                        </div>

                        <div className="contacts">
                            <div className="contact">
                                <div className="constact-img">
                                    <img src={footerFace} />
                                </div>
                                <div className="contact-text">
                                    Prof. Sidi Ahmed MAHMOUDI
                                </div>
                            </div>
                            <div className="contact">
                                <div className="constact-img">
                                    <img src={footerPosition} />
                                </div>
                                <p className="contact-text">
                                    Rue de Houdain 9 <br /> 7000 Mons <br /> Belgique
                                </p>
                            </div>
                        </div>

                        <div className="footer-social">
                            <div className="footer-social-item">
                                <img src={facebook} />
                            </div>
                            <div className="footer-social-item">
                                <img src={twitter} />
                            </div>
                            <div className="footer-social-item">
                                <img src={youtube} />
                            </div>
                        </div>

                    </div>
                    <div className="footer-content-center">
                        <img className='map' src={map} alt="" />
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