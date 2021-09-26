import React, { useEffect } from 'react'

export default function TitlePage(titlePage) {
    useEffect(() => {
        document.title = titlePage
    }, [])
}
