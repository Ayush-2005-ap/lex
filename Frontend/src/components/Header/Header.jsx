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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/archives">Archives</Link></li>
                    <li><Link to="/editorial-board">Editorial Board</Link></li>
                    <li><Link to="/submission-guidelines">Submission Guidelines</Link></li>
                    <li><Link to="/indexing">Indexing</Link></li>
                </ul>
            </div >

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
