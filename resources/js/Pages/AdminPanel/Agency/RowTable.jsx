import React from 'react'
import ReactTooltip from 'react-tooltip';

export default function RowTable() {
    return (
        <tr className="odd gradeX">
            <td width="1%" className="fw-bold text-inverse">1</td>
            {/* <td width="1%"><img src="../assets/img/user/user-1.jpg" className="rounded h-30px my-n1 mx-n1" /></td> */}
            <td>Trident</td>
            <td>Internet Explorer 4.0</td>
            <td>Win 95+</td>
            <td>4</td>
            <td>X</td>
            <td>X</td>
            <td width="10%">
                <a className='btn btn-danger text-center mx-1' data-tip data-for='delete'>
                    <i className="ion ion-ios-trash"></i>
                </a>
                <a className={'btn btn-info text-center mx-1'} data-tip data-for='edite'>
                    <i className="ion ion-ios-brush"></i>
                </a>
                <a className={'btn btn-success text-center mx-1'} data-tip data-for='info'>
                    <i className="ion ion-ios-folder-open"></i>
                </a>
                <ReactTooltip id='delete' type='error'>
                    <span>حذف</span>
                </ReactTooltip>
                <ReactTooltip id='edite' type='info'>
                    <span>ویرایش</span>
                </ReactTooltip>
                <ReactTooltip id='info' type='success'>
                    <span>نمایش همه اطلاعات</span>
                </ReactTooltip>
            </td>
        </tr>
    )
}
