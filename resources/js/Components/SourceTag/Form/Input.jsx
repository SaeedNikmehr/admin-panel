import React from 'react'

export default function Input({ type, ref, className, id, placeholder, name, value }) {
    return (
        <input type={type} ref={ref} className={className} placeholder={placeholder} id={id} name={name} value={value} />
    )
}
