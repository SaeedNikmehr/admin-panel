import React from 'react'

export default function NotifSub() {
    return (
        <a href="javascript:;" className="dropdown-item media">
            <div className="media-left">
                <img src="../assets/img/user/user-1.jpg" className="media-object" alt="" />
                <i className="fab fa-facebook-messenger text-blue media-object-icon"></i>
            </div>
            <div className="media-body">
                <h6 className="media-heading">John Smith</h6>
                <p>Quisque pulvinar tellus sit amet sem scelerisque tincidunt.</p>
                <div className="text-muted fs-10px">25 minutes ago</div>
            </div>
        </a>
    )
}
