import React from 'react'
import Header from './Header'
import Main from './Main'

export default function Container({children}) {
    return (
        <div className="panel panel-inverse">
            <Header />
            <Main>
                {children}
            </Main>
        </div>
    )
}
