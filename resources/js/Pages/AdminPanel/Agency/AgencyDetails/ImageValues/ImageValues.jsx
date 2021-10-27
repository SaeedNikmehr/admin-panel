import React, { useState } from 'react'
import { imageList } from './imageList'

export default function ImageValues() {
    const [getGallery, setGetGallery] = useState(imageList())
    return (
        <div className="col-md-6 mx-auto float-start">
            <div className="row">
                {getGallery}
            </div>
        </div>
    )
}
