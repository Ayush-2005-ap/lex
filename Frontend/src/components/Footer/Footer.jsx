import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img className='footer-logo' src={assets.logo} alt="" />
                    <p>Journal of Social & Legal Studies</p>
                    <div className="footer-social-icons">
                        <a href="https://www.facebook.com/lexrevolution"><i class="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/lex.revolution/"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.twitter.com/lexrevolution"><i class="fab fa-x"></i></a>
                        <a href="https://www.linkedin.com/company/lex-revolution/posts/?feedView=all"><i
                            class="fab fa-linkedin"></i></a>
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2>Publisher</h2>
                    <p>Dr. Vijay Bahadur Pandey</p>
                    <h2>Printed & Managed by: </h2>
                    <p>Anagh-Forum for Sustainable Outreach </p>
                    <p>(CIN-U85300BR2023NPL061509)</p>
                    <a href="https://anagh.in/">https://anagh.in/</a>
                    {/* <p>C/o Sarawati Devi, Nuaon, Dumraon, Buxar-802111 (Bihar)</p> */}

                </div>

                <div className="footer-content-right">
                    <h2>Contact Us</h2>
                    <p> editor.lexrevolution@gmail.com</p>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>Copyright 2025 © lexrevolution.in - All Rights Reserved</p>
        </div>
    )
}

export default footer
