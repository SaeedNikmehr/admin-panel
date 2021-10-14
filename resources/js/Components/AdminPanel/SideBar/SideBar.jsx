import React from 'react'
import Links from './Links/'
import ThemePanel from '../ThemePanel'

export default function SideBar() {
    return (
        <>
            <div id="sidebar" className="app-sidebar">
                <div className="app-sidebar-content" data-scrollbar="true" data-height="100%">
                    <div className="menu">
                        <div className="menu-profile">
                            <a href="javascript:;" className="menu-profile-link" data-toggle="app-sidebar-profile" data-target="#appSidebarProfileMenu">
                                <div className="menu-profile-cover with-shadow"></div>
                                <div className="menu-profile-image">
                                    <img src="./img/user/user-12.jpg" alt="" />
                                </div>
                                <div className="menu-profile-info">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            Sean Ngu
                                        </div>
                                        <div className="menu-caret ms-auto"></div>
                                    </div>
                                    <small>Front end developer</small>
                                </div>
                            </a>
                        </div>
                        <div id="appSidebarProfileMenu" className="collapse">
                            <div className="menu-item pt-5px">
                                <a href="javascript:;" className="menu-link">
                                    <div className="menu-icon"><i className="fa fa-cog"></i></div>
                                    <div className="menu-text">Settings</div>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a href="javascript:;" className="menu-link">
                                    <div className="menu-icon"><i className="fa fa-pencil-alt"></i></div>
                                    <div className="menu-text"> Send Feedback</div>
                                </a>
                            </div>
                            <div className="menu-item pb-5px">
                                <a href="javascript:;" className="menu-link">
                                    <div className="menu-icon"><i className="fa fa-question-circle"></i></div>
                                    <div className="menu-text"> Helps</div>
                                </a>
                            </div>
                            <div className="menu-divider m-0"></div>
                        </div>
                        <div className="menu-header">Navigation</div>
                        <Links />
                    </div>
                </div>
            </div>
            <div className="app-sidebar-bg"></div>
            <div className="app-sidebar-mobile-backdrop"><a href="#" data-dismiss="app-sidebar-mobile" className="stretched-link"></a></div>
            <ThemePanel />
        </>
    )
}
