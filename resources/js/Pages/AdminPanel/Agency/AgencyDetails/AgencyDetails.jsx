import React, { useEffect, useState } from 'react'
import Layout from '../../../../Components/AdminPanel/Layout'
import titlePage from '../../../../Components/SourceTag/TitlePage/titlePage'
import { getDetail } from './getDetail'
import { imageList } from './imageList'
import Loader from '../../../../Components/AdminPanel/Loader/';
import TableRows from './TableRows'
import {
    BrowserRouter as Router,
    useParams
} from "react-router-dom";

export default function AgencyDetails() {
    const [getGallery, setGetGallery] = useState(imageList())
    titlePage('Agency-Detail')
    let { id } = useParams();
    const [data, setData] = useState();
    const [loading, setloading] = useState(true)
    useEffect(() => {
        getDetail(id)
            .then(response => {
                setData(response.data.data),
                    setloading(false)
            })
    }, [id])

    return (
        <>
            <Layout oneStep={'Agency'} twoStep={'Agency Detail'} title={!loading ? data.office_name_fa : 'نام شرکت:'} widthSize={'col-md-12 col-sm-6'}>
                {loading ? <Loader /> :
                    <>
                        <div className="row main-agency-details">
                            <div className="col-md-6 float-end">
                                <table className="table table-bordered table-border">
                                    <thead>
                                        <tr>
                                            <th>نام فیلد</th>
                                            <th>مقدار فیلد</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <TableRows data={data} />
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-md-6 mx-auto float-start">
                                <div className="row">
                                    {getGallery}
                                </div>
                            </div>
                        </div>
                    </>
                }
            </Layout>
        </>
    )
}
