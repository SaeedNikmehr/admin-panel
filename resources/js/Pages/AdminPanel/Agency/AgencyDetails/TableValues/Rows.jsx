import React, { useState } from 'react'
import { put } from '../../../../../services/http'

export default function Rows({ data }) {
    const [isEdit, setIsEdit] = useState(false)

    const [officeFa, setOfficeFa] = useState(data.office_name_fa || "")
    const [officeEn, setOfficeEn] = useState(data.office_name_en || "")
    const [state, setState] = useState(data.state || "")
    const [city, setCity] = useState(data.city || "")
    const [nationalId, setNationalId] = useState(data.national_id || 0)
    const [economicCode, setEconomicCode] = useState(data.economic_code || "")
    const [manager, setManager] = useState(data.manager || "")
    const [email, setEmail] = useState(data.email || "")
    const [site, setSite] = useState(data.site || "")
    const [activityPermission, setActivityPermission] = useState(data.activity_permission)
    const [yataCode, setYataCode] = useState(data.yata_code || '')
    const [foreinStak, setForeinStak] = useState(data.foreign_stak)
    const [salesAgency, setSalesAgency] = useState(data.sales_agency)
    const [reservationSystem, setReservationSystem] = useState(data.reservation_system)
    const [phone, setPhone] = useState(data.phone || 0)
    const [userId, setUserId] = useState(data.user_id || 0)
    const [verify, setVerify] = useState(data.verify || "")
    const [code, setCode] = useState(data.code || "")

    const article = {
        office_name_fa: officeFa,
        office_name_en: officeEn,
        state: state,
        city: city,
        national_id: nationalId,
        economic_code: economicCode,
        manager: manager,
        email: email,
        site: site,
        activity_permission: activityPermission,
        yata_code: yataCode,
        foreign_stak: foreinStak,
        sales_agency: salesAgency,
        reservation_system: reservationSystem,
        phone: phone,
        user_id: userId,
        // verify: verify,
        // code: code
    };

    console.log(article);

    function handlePress(event) {
        if (event.key === 'Enter') {
            put(`/signs/${data.id}`, article)
                .then(response => console.log(response));
            handleChanger()
        }
    }

    function handleChanger() {
        const change = !isEdit
        setIsEdit(change)
    }

    const listValues = [
        { title: 'نام شرکت / دفتر فارسی', setOnChange: setOfficeFa, value: officeFa },
        { title: 'نام شرکت / دفتر انگلیسی', setOnChange: setOfficeEn, value: officeEn },
        { title: 'استان', setOnChange: setState, value: state },
        { title: 'شهر', setOnChange: setCity, value: city },
        { title: 'کد ملی / شناسنامه ملی', setOnChange: setNationalId, value: nationalId },
        { title: 'کد اقتصادی', setOnChange: setEconomicCode, value: economicCode },
        { title: 'مدیر عامل', setOnChange: setManager, value: manager },
        { title: 'پست الکترونیکی', setOnChange: setEmail, value: email },
        { title: 'سایت', setOnChange: setSite, value: site },
        { title: 'مجوز فعالیت', setOnChange: setActivityPermission, value: activityPermission },
        { title: 'کد یاتا', setOnChange: setYataCode, value: yataCode },
        { title: 'استاک خارجی', setOnChange: setForeinStak, value: foreinStak },
        { title: 'نماینده فروش', setOnChange: setSalesAgency, value: salesAgency },
        { title: 'سیستم رزرواسیون', setOnChange: setReservationSystem, value: reservationSystem },
        { title: 'شماره تلفن', setOnChange: setPhone, value: phone },
        // { title: 'پیامک احراز هویت', setOnChange: setVerify, value: verify },
        // { title: 'کد تاییدیه', setOnChange: setCode, value: code },
    ]

    const listRender = listValues.map((row, index) => {
        const idx = index + 1
        return (
            <tr key={idx}>
                <td>{idx}</td>
                <td className="table-field-name col-md-5">{row.title}</td>
                <td className="table-field-value">
                    <span className="editable editable-click">
                        {isEdit ?
                            <div className="row">
                                {idx === 3 ?
                                    <div className="col-md-10">
                                        {/* <input className="form-control" onKeyPress={(event) => handlePress(event)} onChange={(event) => row.setOnChange(event.target.value)} value={row.value} /> */}
                                        <select className="form-select">
                                            <option>خراسان رضوی</option>
                                            <option>تهران</option>
                                            <option>شیراز</option>
                                        </select>
                                    </div>
                                    :
                                    (idx === 4 ?
                                        <div className="col-md-10">
                                            <select className="form-select">
                                                <option>مشهد</option>
                                                <option>تهران</option>
                                                <option>شیراز</option>
                                            </select>
                                        </div> :
                                        (idx === 8 ?
                                            <div className="col-md-10">
                                                <input type="email" className="form-control" onKeyPress={(event) => handlePress(event)} onChange={(event) => row.setOnChange(event.target.value)} value={row.value} />
                                            </div>
                                            :
                                            <div className="col-md-10">
                                                <input className="form-control" onKeyPress={(event) => handlePress(event)} onChange={(event) => row.setOnChange(event.target.value)} value={row.value} />
                                            </div>
                                        )
                                    )
                                }

                                <div className="col-md-2">
                                    <button type="submit" className="btn btn-primary btn-sm editable-submit"><i className="fa fa-check" aria-hidden="true"></i></button>
                                    <button type="button" className="btn btn-default btn-sm editable-cancel"><i className="fa fa-times" aria-hidden="true"></i></button>
                                </div>
                            </div>
                            :
                            <span onClick={handleChanger}>{row.value}</span>}
                    </span>
                </td>
            </tr>
        )
    })
    return (
        <>
            {listRender}
        </>
    )
}
