import React from 'react'
import TopPageDetail from '../TopPageDetail'
import ContainerMain from '../Main/Container'
import Header from '../Header/'
import SideBar from '../SideBar/'

export default function Layout({ oneStep = 'First Step', twoStep, threeStep, fourStep, title = 'Empty Page', children }) {
    return (
        <>
            <div id="app" className="app app-header-fixed app-sidebar-fixed app-with-end-sidebar">
                <Header />
                <SideBar />
                {/* Main */}
                <div id="content" className="app-content">
                    <TopPageDetail oneStep={oneStep} twoStep={twoStep} threeStep={threeStep} fourStep={fourStep} title={title} />
                    <div className="panel panel-inverse">
                        <ContainerMain>
                            {children}
                        </ContainerMain>
                    </div>
                </div>
                {/* End Main */}
            </div>
        </>
    )
}
