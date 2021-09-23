import React from 'react'
import LeftDetail from './LeftDetail'
import RightDetail from './RightDetail'

export default function TopPageDetail({ oneStep='First Step', twoStep, threeStep, fourStep, title='Empty Page' }) {
    return (
        <>
            <LeftDetail oneStep={oneStep} twoStep={twoStep} threeStep={threeStep} fourStep={fourStep} />
            <RightDetail title={title} />
        </>
    )
}
