import React from 'react'

export default function Header() {
    return (
        <div className="panel-heading">
            <h4 className="panel-title">Installation Settings</h4>
            <div className="panel-heading-btn">
                <a href="javascript:;" className="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i className="fa fa-expand"></i></a>
                <a href="javascript:;" className="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i className="fa fa-redo"></i></a>
                <a href="javascript:;" className="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i className="fa fa-minus"></i></a>
                <a href="javascript:;" className="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i className="fa fa-times"></i></a>
            </div>
        </div>
    )
}
