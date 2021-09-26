import React from 'react'

export default function Button({ className, id, type, children }) {
    return (
        <button type={type} className={className} id={id}>
            {children}
        </button>
    )
}
