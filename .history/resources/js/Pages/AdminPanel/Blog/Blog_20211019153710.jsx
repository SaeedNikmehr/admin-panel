import React, { useEffect, useState } from 'react'
import Layout from '../../../Components/AdminPanel/Layout'
import { del, get } from '../../../services/http'
import titlePage from '../../../Components/SourceTag/TitlePage/titlePage'
import Loader from '../../../Components/AdminPanel/Loader';
import { MDBDataTableV5 } from 'mdbreact';
import ReactTooltip from 'react-tooltip';
import Swal from 'sweetalert2'
import Toast from '../../../Components/Alerts/Toast';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


export default function Blog() {
  titlePage('Blog')
  const [data, setData] = useState([])
  const [toast, setToast] = useState(false)
  const [loading, setLoading] = useState(true)

  function triggerDelete(ids) {
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
        del(`/signs/${ids}/609`)
          .then(response => {
            setData(response.data.data),
              setToast(true)
          })
      }
    })
  }
  return (
    <>
      <Layout oneStep={'Agency'} title={'مدیریت فرم های ارسال شده'}>
        {toast && <Toast type={'success'} message={'با موفقیت حذف شد'} />}
        {loading ? <Loader /> : <MDBDataTableV5 responsive responsiveSm responsiveMd responsiveLg responsiveXl entriesOptions={[5, 20, 25]} entries={20} striped pagesAmount={4} hover data={data} />}
      </Layout>
    </>
  )
}
