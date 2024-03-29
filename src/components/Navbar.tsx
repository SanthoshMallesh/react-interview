import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to='/' >Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Topics
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li className="nav-item">
                                <Link className="dropdown-item" to="/counter">Counter App</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="dropdown-item" to="/searchtable">Search Data In Table Featch App</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="dropdown-item" to="/searchtableaxios">Search Data In Table Axios App</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="dropdown-item" to="/searchtablefetch">Search Data In Table Fetch App</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="dropdown-item" to="/getDataONClick">Get Data On Click</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="dropdown-item" to="/selectBoxOnApi">Select Box On Api</Link>
                            </li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;