import React from 'react'
import ModalImage from "react-modal-image";
import ReactTooltip from 'react-tooltip';

export default function ListGalleryRendering({ smallImage, bigImage, title }) {
    return (
        <>
            <div className="main-card col-md-6 mb-2">
                <div className="col-md-12 main-image">
                    <ModalImage
                        small={smallImage}
                        large={bigImage}
                        showRotate
                        className={'image'}
                        alt={title}
                    />
                    <div className="middle">
                        <div className="text"><i className="fas fa-search-plus"></i></div>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <a href="#" className="btn btn-primary float-start" data-tip data-for='edit'>
                        <i className="fas fa-edit"></i>
                        <ReactTooltip id='edit' type='info'>
                            <span>ویرایش</span>
                        </ReactTooltip>
                    </a>
                </div>
            </div>
        </>
    )
}
