import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item pr-3 pt-3 pb-3">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item pr-3 pt-3 pb-3">
                    <Link to="/create">Create</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav