import React from 'react'

export default function LeftDetail({ oneStep, twoStep, threeStep, fourStep }) {
    return (
        <ol className="breadcrumb float-xl-start">
            <li className="breadcrumb-item">Home</li>
            {oneStep && <li className="breadcrumb-item">{oneStep}</li>}
            {twoStep && <li className="breadcrumb-item">{twoStep}</li>}
            {threeStep && <li className="breadcrumb-item">{threeStep}</li>}
            {fourStep && <li className="breadcrumb-item">{fourStep}</li>}
        </ol>
    )
}
