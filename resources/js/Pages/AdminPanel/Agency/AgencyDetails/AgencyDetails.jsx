import React, { useEffect, useState } from 'react'
import Layout from '../../../../Components/AdminPanel/Layout'
import titlePage from '../../../../Components/SourceTag/TitlePage/titlePage'
import { getDetail } from './getDetail'
import Loader from '../../../../Components/AdminPanel/Loader/';
import TableValues from './TableValues/TableValues'
import ImageValues from './ImageValues/ImageValues'
import { ToastContainer, toast } from 'react-toastify';
import {
    BrowserRouter as Router,
    useParams
} from "react-router-dom";


export default function AgencyDetails() {
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
                            <TableValues data={data} />
                            <ImageValues />
                        </div>
                    </>
                }
            </Layout>
        </>
    )
}
