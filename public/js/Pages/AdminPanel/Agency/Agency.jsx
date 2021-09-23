import React from 'react'
import Layout from '../../../Components/AdminPanel/Layout'
import Button from '../../../Components/SourceTag/Form/Button'

export default function Agency() {
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
                            <Button className={'btn btn-danger text-center mx-1'}>
                                <i class="ion ion-ios-trash"></i>
                            </Button>
                            <Button className={'btn btn-info text-center mx-1'}>
                                <i class="ion ion-ios-brush"></i>
                            </Button>
                            <Button className={'btn btn-success text-center mx-1'}>
                                <i class="ion ion-ios-folder-open"></i>
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Layout>
    )
}
