import React from 'react'

export default function Search() {
    return (
        <div className="navbar-item navbar-form">
            <form action="" method="POST" name="search">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter keyword" />
                    <button type="submit" className="btn btn-search"><i className="fa fa-search"></i></button>
                </div>
            </form>
        </div>
    )
}
