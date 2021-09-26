import React, { useEffect } from 'react'
import Layout from '../../../Components/AdminPanel/Layout'
import RowTable from './RowTable';
import { get } from '../../../services/http'

export default function Agency() {

    useEffect(() => {
        get('/posts')
            .then(response => console.log(response))
    }, [])

    return (
        <Layout oneStep={'Agency'} title={'مدیریت فرم های ارسال شده'}>
            <table id="data-table-responsive" className="table table-striped table-bordered align-middle dirRtl" dir="rtl">
                <thead>
                    <tr>
                        <th width="1%"></th>
                        {/* <th width="1%" data-orderable="false"></th> */}
                        <th className="text-nowrap">نام شرکت</th>
                        <th className="text-nowrap">مدیر عامل</th>
                        <th className="text-nowrap">شماره تلفن</th>
                        <th className="text-nowrap">استان / شهرستان</th>
                        <th className="text-nowrap">نوع درخواست</th>
                        <th className="text-nowrap">وضعیت درخواست</th>
                        <th className="text-nowrap">عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    <RowTable />
                </tbody>
            </table>
        </Layout>
    )
}
