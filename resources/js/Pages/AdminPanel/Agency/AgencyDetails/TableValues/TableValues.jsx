import React from 'react'
import Rows from './Rows'

export default function TableValues({ data }) {
    return (
        <div className="col-md-6 float-end">
            <table className="table table-bordered table-border">
                <thead>
                    <tr>
                        <th>نام فیلد</th>
                        <th>مقدار فیلد</th>
                    </tr>
                </thead>
                <tbody>
                    <Rows data={data} />
                </tbody>
            </table>
        </div>
    )
}
