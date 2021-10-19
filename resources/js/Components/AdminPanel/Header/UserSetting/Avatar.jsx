import React from 'react'

export default function Avatar() {
    return (
        <a href="#" className="navbar-link dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown">
            <img src="/img/user/user-12.jpg" alt="" />
            <span>
                <span className="d-none d-md-inline">Adam Schwartz</span>
                <b className="caret"></b>
            </span>
        </a>
    )
}
