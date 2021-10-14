import React from 'react'
import { Link } from 'react-router-dom'

export default function Links() {
    return (
        <>
            {/* <div classNameName="menu-item has-sub">
                <a href="javascript:;" classNameName="menu-link">
                    <div classNameName="menu-icon">
                        <i classNameName='fa fa-th-large'></i>
                    </div>
                    <div classNameName="menu-text">Dashboard</div>
                    <div classNameName="menu-caret"></div>
                </a>
                <div classNameName="menu-submenu">
                    <div classNameName="menu-item">
                        <a href="index.html" classNameName="menu-link"><div classNameName="menu-text">Dashboard v1</div></a>
                    </div>
                    <div classNameName="menu-item">
                        <a href="index_v2.html" classNameName="menu-link"><div classNameName="menu-text">Dashboard v2</div></a>
                    </div>
                    <div classNameName="menu-item">
                        <a href="index_v3.html" classNameName="menu-link"><div classNameName="menu-text">Dashboard v3</div></a>
                    </div>
                </div>
            </div> */}
            <div className="menu-item">
                <Link to="/" className="menu-link">
                    <div className="menu-icon">
                        <i className='fa fa-th-large'></i>
                    </div>
                    <div className="menu-text">داشبورد</div>
                </Link>
            </div>
            <div className="menu-item">
                <Link to="/agency" className="menu-link">
                    <div className="menu-icon">
                        <i className='fa fa-th-large'></i>
                    </div>
                    <div className="menu-text">مدیریت درخواست ساین</div>
                </Link>
            </div>

        </>
    )
}
