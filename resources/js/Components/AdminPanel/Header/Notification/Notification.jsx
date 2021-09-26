import React from 'react'
import NotifSub from './NotifSub'

export default function Notification() {
    return (
        <div className="navbar-item dropdown">
            <a href="#" data-bs-toggle="dropdown" className="navbar-link dropdown-toggle icon">
                <i className="fa fa-bell"></i>
                <span className="badge">5</span>
            </a>
            <div className="dropdown-menu media-list dropdown-menu-end">
                <div className="dropdown-header">NOTIFICATIONS (5)</div>
                <NotifSub />
                <div className="dropdown-footer text-center">
                    <a href="javascript:;" className="text-decoration-none">View more</a>
                </div>
            </div>
        </div>

    )
}
