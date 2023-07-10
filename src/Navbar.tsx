import React, { useState } from 'react';
import './style.scss';
import logo from './assets/logo-VT.png';

const Navbar = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    const toggleSearch = () => {
        setIsSearchActive(!isSearchActive);
    };

    const closeMenu = () => {
        setIsMenuActive(false);
    };

    return (
        <header className="header" id="header">
            <nav className="navbar container">

                <div className="brand">
                    <a href="./index.html">
                        <img src={logo} alt="Logo" className="logo" />
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span className='brand-name'>I.I.S. SUPERIORE</span>
                            <span className='brand-name' style={{ fontWeight: 'bolder' }}>VERONA-TRENTO</span>
                            <span className='brand-name'>MESSINA</span>
                        </div>
                    </a>
                </div>
                <div
                    className={`burger ${isMenuActive ? 'is-active' : ''}`}
                    id="burger"
                    onClick={toggleMenu}
                >
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                </div>
                <div className={`overlay ${isMenuActive ? 'is-active' : ''}`} onClick={closeMenu}></div>
                <div className={`menu ${isMenuActive ? 'is-active' : ''}`} id="menu">
                    <ul className="menu-inner">
                        <li className="menu-item"><a className="menu-link" href="#" onClick={closeMenu}>Home</a></li>
                        <li className="menu-item"><a className="menu-link" href="#" onClick={closeMenu}>About</a></li>
                        <li className="menu-item"><a className="menu-link" href="#" onClick={closeMenu}>Service</a></li>
                        <li className="menu-item"><a className="menu-link" href="#" onClick={closeMenu}>Project</a></li>
                        <li className="menu-item"><a className="menu-link" href="#" onClick={closeMenu}>Support</a></li>
                    </ul>
                </div>
                <span><i className="bx bx-search search-toggle" onClick={toggleSearch}></i></span>
                <div className={`search-block ${isSearchActive ? 'is-active' : ''}`}>
                    <form className="search-form">
                        <span><i className="bx bx-arrow-back search-cancel" onClick={toggleSearch}></i></span>
                        <input type="search" name="search" className="search-input" placeholder="Search here..." />
                    </form>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
