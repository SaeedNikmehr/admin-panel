import React from 'react'

export default function Logo() {
    return (
        <div className="navbar-header">
            <a href="index.html" className="navbar-brand">
                <span className="navbar-logo d-none"></span>
                <img src="./img/logo/sepehran-logo-small.png" />
            </a>
            <button type="button" className="navbar-mobile-toggler" data-toggle="app-sidebar-mobile">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
        </div>
    )
}
