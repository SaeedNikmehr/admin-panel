import React from 'react'
import Logo from './Logo'
import Notification from './Notification'
import Search from './Search'
import UserSetting from './UserSetting/UserSetting'

export default function Header() {
    return (
        <div id="header" className="app-header">
            <Logo />
            <div className="navbar-nav">
                <Search />
                <Notification />
                <UserSetting />
            </div>
        </div>
    )
}
