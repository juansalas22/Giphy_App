import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                App para Heru
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/gif"
                    >
                        Gifs
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/history"
                    >
                        History
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
