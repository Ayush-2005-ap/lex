import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { assets } from '../../assets/assets'

const Header = () => {
    return (
        <>

            <div className='navbar'>
                <img className='logo' src={assets.logo} alt="" />
                <ul className='navbar-menu'>
                    {/* <a href="#home">Home</a> */}
                    <li><a href="/">Home</a></li>
                    <li><a href="/archives">Archives</a></li>
                    <li><a href="/editorial-board">Editorial Board</a></li>
                    <li><a href="/submission-guidelines">Submission Guidelines</a></li>
                    <li><a href="/indexing">Indexing</a></li>
                </ul>

            </div >

            <hr />

            <div className="header">
                <div className="header-contents">
                    <h2>Journal of Social
                        <br></br> & Legal Studies</h2>
                    <p>Lex Revolution is an international, peer-reviewed, quarterly research journal focusing on social and legal studies. It invites original, unpublished research papers, articles, short comments, and book reviews from students, scholars, teachers, and professionals in the fields of law, human rights, and social sciences.</p>
                </div>
            </div>

        </>
    )
}

export default Header
