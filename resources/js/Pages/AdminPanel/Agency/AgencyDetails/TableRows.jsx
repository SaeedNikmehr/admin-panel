import React from 'react'

export default function TableRows({ data }) {
    return (
        <>
            <tr>
                <td className="table-field-name col-md-5">نام شرکت / دفتر فارسی</td>
                <td className="table-field-value">
                    <span className="editable editable-click">
                        {data.office_name_fa}
                    </span>
                </td>
            </tr>
            <tr>
                <td className="table-field-name">نام شرکت / دفتر انگلیسی</td>
                <td className="table-field-value">
                    <span className="editable editable-click">
                        {data.office_name_en}
                    </span>
                </td>
            </tr>
            <tr>
                <td className="table-field-name">استان</td>
                <td className="table-field-value">
                    <span className="editable editable-click">
                        {data.state}
                    </span>
                </td>
            </tr>
            <tr>
                <td className="table-field-name">شهر</td>
                <td className="table-field-value">
                    <span className="editable editable-click">
                        {data.city}
                    </span>
                </td>
            </tr>
            <tr>
                <td className="table-field-name">کد ملی / شناسنامه ملی</td>
                <td className="table-field-value">
                    <span className="editable editable-click">
                        {data.national_id}
                    </span>
                </td>
            </tr>
            <tr>
                <td className="table-field-name">کد اقتصادی</td>
                <td className="table-field-value">
                    <span className="editable editable-click">
                        {data.economic_code}
                    </span>
                </td>
            </tr>
            <tr>
                <td className="table-field-name">مدیر عامل</td>
                <td className="table-field-value">
                    <span className="editable editable-click">
                        {data.manager}
                    </span>
                </td>
            </tr>
            <tr>
                <td className="table-field-name">پست الکترونیکی</td>
                <td className="table-field-value">
                    <span className="editable editable-click">
                        {data.email}
                    </span>
                </td>
            </tr>
            <tr>
                <td className="table-field-name">مجوز فعالیت</td>
                <td className="table-field-value">
                    <span className="editable editable-click">
                        {data.activity_permission}
                    </span>
                </td>
            </tr>
            <tr>
                <td className="table-field-name">کد یاتا</td>
                <td className="table-field-value">
                    <span className="editable editable-click">
                        {data.yata_code}
                    </span>
                </td>
            </tr>
            <tr>
                <td className="table-field-name">استاک خارجی</td>
                <td className="table-field-value">
                    <span className="editable editable-click">
                        {data.foreign_stak}
                    </span>
                </td>
            </tr>
            <tr>
                <td className="table-field-name">نماینده فروش</td>
                <td className="table-field-value">
                    <span className="editable editable-click">
                        {data.sales_agency}
                    </span>
                </td>
            </tr>
            <tr>
                <td className="table-field-name">سیستم رزرواسیون</td>
                <td className="table-field-value">
                    <span className="editable editable-click">
                        {data.reservation_system}
                    </span>
                </td>
            </tr>
            <tr>
                <td className="table-field-name">شماره تلفن</td>
                <td className="table-field-value">
                    <span className="editable editable-click">
                        {data.phone}
                    </span>
                </td>
            </tr>
            <tr>
                <td className="table-field-name">پیامک احراز هویت</td>
                <td className="table-field-value">
                    <span className="editable editable-click">
                        {data.verify}
                    </span>
                </td>
            </tr>
            <tr>
                <td className="table-field-name">کد تاییدیه</td>
                <td className="table-field-value">
                    <span className="editable editable-click">
                        {data.code}
                    </span>
                </td>
            </tr>
        </>
    )
}
