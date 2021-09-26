import React from 'react'

export default function Form({ className, id, action, method, children }) {
    return (
        <form action={action} method={method} className={className} id={id}>
            {children}
        </form>
    )
}
