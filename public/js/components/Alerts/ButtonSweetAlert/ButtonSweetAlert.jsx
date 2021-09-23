import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

export default function ButtonSweetAlert({ className, children, type }) {
    const [alert, setAlert] = useState(true);
    function questionAlert() {
        if (type === 'done') {
            Swal.fire({
                title: 'Good job!',
                text: 'You clicked the button.',
                icon: 'success',
                confirmButtonText: 'باشه'
            });
        }
        else if (type === 'error') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }
        else if (type === 'delete') {
            Swal.fire({
                title: 'آیا مطمئا هستید؟',
                text: "",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'بله',
                cancelButtonText: 'خیر'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'حذف شد!',
                        confirmButtonText: 'باشه',
                        icon: 'success',
                    })
                }
            })
        }
    }
    return (
        <button onClick={questionAlert} className={className}>{children}</button>
    )
}