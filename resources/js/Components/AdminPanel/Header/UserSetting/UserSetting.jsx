import React from 'react'
import Avatar from './Avatar'
import UserLinsSub from './UserLinsSub'

export default function UserSetting() {
    return (
        <div className="navbar-item navbar-user dropdown">
            <Avatar />
            <div className="dropdown-menu dropdown-menu-end me-1">
                <UserLinsSub />
                <div className="dropdown-divider"></div>
                <a href="javascript:;" className="dropdown-item">Log Out</a>
            </div>
        </div>
    )
}
