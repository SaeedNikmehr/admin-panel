import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export default function Logo() {
    return (
        <div className="navbar-header">
            <Link to="/" className="navbar-brand">
                <span className="navbar-logo d-none"></span>
                <img src="/img/logo/default-logo.png" />
            </Link>
            <button type="button" className="navbar-mobile-toggler" data-toggle="app-sidebar-mobile">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
        </div>
    )
}
