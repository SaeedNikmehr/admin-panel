import React, { useEffect, useState } from 'react'
import Layout from '../../../Components/AdminPanel/Layout'
import { del, get } from '../../../services/http'
import titlePage from '../../../Components/SourceTag/TitlePage/titlePage'
import Loader from '../../../Components/AdminPanel/Loader';
import { MDBDataTableV5 } from 'mdbreact';
import ReactTooltip from 'react-tooltip';
import Swal from 'sweetalert2'
import Toast from '../../../Components/Alerts/Toast';
import { handleError } from '../../../helpers/generalHelper';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";


export default function Agency() {
    titlePage( 'Agency' )
    const [ data, setData ] = useState( [] )
    const [ toast, setToast ] = useState( false )
    const [ loading, setLoading ] = useState( true )
    const [ test, setTest ] = useState( '' )

    useEffect( () => {
        get( '/signs' )
            .then( ( response ) => response.data.data )
            .then( ( res ) => {
                const data = {
                    columns: [
                        {
                            label: 'ردیف',
                            field: 'column1',
                            width: 100,
                        },
                        {
                            label: 'نام شرکت',
                            field: 'column2',
                            width: 150,
                            attributes: {
                                'aria-controls': 'DataTable',
                                'aria-label': 'Name',
                            },
                        },
                        {
                            label: 'مدیر عامل',
                            field: 'column3',
                            width: 270,
                        },
                        {
                            label: 'شماره تلفن',
                            field: 'column4',
                            width: 200,
                        },
                        {
                            label: 'استان / شهر',
                            field: 'column5',
                            sort: 'asc',
                            width: 100,
                        },
                        {
                            label: 'نوع درخواست',
                            field: 'column6',
                            sort: 'disabled',
                            width: 150,
                        },
                        {
                            label: 'وضعیت',
                            field: 'column7',
                            sort: 'disabled',
                            width: 100,
                        },
                        {
                            label: 'عملیات',
                            field: 'column8',
                            sort: 'disabled',
                            width: 100,
                        },
                    ],
                    rows: res.map( ( apiData, index ) => (
                        {
                            key: apiData.id,
                            column1: index + 1,
                            column2: apiData.office_name_fa,
                            column3: apiData.manager,
                            column4: apiData.phone,
                            column5: apiData.state + ' / ' + apiData.city,
                            column6: apiData.type,
                            column7: apiData.request_status === 'accept' ? <span
                                className={ 'text-success' }>تایید شده</span> : ( apiData.request_status === 'reject' ?
                                <span className={ 'text-danger' }>رد شده</span> :
                                <span className={ 'text-grey' }>نامشخص</span> ),
                            column8: [
                                <a className='btn btn-danger text-center mx-1'
                                   onClick={ ( e ) => triggerDelete( apiData.id ) } data-tip data-for='delete'><i
                                    className="ion ion-ios-trash"></i></a>,
                                <Link to={ `/agency-details/${ apiData.id }` }
                                      className={ 'btn btn-success text-center mx-1' } data-tip data-for='info'><i
                                    className="ion ion-ios-folder-open"></i></Link>,


                                <ReactTooltip id='delete' type='error'>
                                    <span>حذف</span>
                                </ReactTooltip>,
                                <ReactTooltip id='info' type='success'>
                                    <span>نمایش اطلاعات</span>
                                </ReactTooltip>
                            ]
                        }
                    ) ),
                };
                setData( data );
                setLoading( false );
            } );
    }, [ data.length ] );


    function triggerDelete( ids ) {
        Swal.fire( {
            title: 'آیا مطمئا هستید؟',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'بله',
            cancelButtonText: 'خیر'
        } ).then( ( result ) => {
            if ( result.isConfirmed ) {
                del( `/signs/${ ids }/609` )
                    .then( response => {
                        let { status, msg, text1 } = handleError( response )
                        setData( response.data.data );
                        setTest( text1 )
                        status === 'success' ? setToast( true ) : setToast( false );
                    } )
            }
        } )
    }

    return (
        <>
            <Layout oneStep={ 'Agency' } title={ 'مدیریت فرم های ارسال شده' }>
                { test }
                { loading ? <Loader/> : <MDBDataTableV5 responsive responsiveSm responsiveMd responsiveLg responsiveXl
                                                        entriesOptions={ [ 5, 20, 25 ] } entries={ 20 } striped
                                                        pagesAmount={ 4 } hover data={ data }/> }
            </Layout>
        </>
    )
}
