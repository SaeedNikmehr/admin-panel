import React, { useState } from 'react'
import ListGalleryRendering from './ListGalleryRendering'
export function imageList() {
    const [gallery, setGallery] = useState([
        {
            small: 'http://website.safar.lan/sezavar/FILES/NewSepehranLocal3/www//uploads/agency/f01be6e76fb642b5f76e0e742ae0dd6e.jpg',
            big: 'http://website.safar.lan/sezavar/FILES/NewSepehranLocal3/www//uploads/agency/f01be6e76fb642b5f76e0e742ae0dd6e.jpg',
            title: 'فرم اطلاعات جامع نماینده فروش'
        },
        {
            small: 'http://website.safar.lan/sezavar/FILES/NewSepehranLocal3/www//uploads/agency/f01be6e76fb642b5f76e0e742ae0dd6e.jpg',
            big: 'http://website.safar.lan/sezavar/FILES/NewSepehranLocal3/www//uploads/agency/f01be6e76fb642b5f76e0e742ae0dd6e.jpg',
            title: 'مجوز بند الف'
        },
        {
            small: 'http://website.safar.lan/sezavar/FILES/NewSepehranLocal3/www//uploads/agency/f01be6e76fb642b5f76e0e742ae0dd6e.jpg',
            big: 'http://website.safar.lan/sezavar/FILES/NewSepehranLocal3/www//uploads/agency/f01be6e76fb642b5f76e0e742ae0dd6e.jpg  ',
            title: 'آگهی ثبت روزنامه رسمی و اساس نامه'
        },
        {
            small: 'http://website.safar.lan/sezavar/FILES/NewSepehranLocal3/www//uploads/agency/f0ced5ebde8155fae0114f26ed9ec2b9.jpg',
            big: 'http://website.safar.lan/sezavar/FILES/NewSepehranLocal3/www//uploads/agency/f0ced5ebde8155fae0114f26ed9ec2b9.jpg',
            title: 'شناسنامه و کارت ملی مدیر عامل و مدیر فنی بند الف'
        },
        {
            small: 'http://website.safar.lan/sezavar/FILES/NewSepehranLocal3/www//uploads/agency/f0ced5ebde8155fae0114f26ed9ec2b9.jpg',
            big: 'http://website.safar.lan/sezavar/FILES/NewSepehranLocal3/www//uploads/agency/f0ced5ebde8155fae0114f26ed9ec2b9.jpg',
            title: 'فرم ثبت نام در نظام مالیات بر ارزش افزوده'
        },
        {
            small: 'http://website.safar.lan/sezavar/FILES/NewSepehranLocal3/www//uploads/agency/f0ced5ebde8155fae0114f26ed9ec2b9.jpg',
            big: 'http://website.safar.lan/sezavar/FILES/NewSepehranLocal3/www//uploads/agency/f0ced5ebde8155fae0114f26ed9ec2b9.jpg',
            title: 'تصویر صفحه اول بیمه پرسنل'
        },
        {
            small: 'http://website.safar.lan/sezavar/FILES/NewSepehranLocal3/www//uploads/agency/14bd02adc1ace145ea41913ffaa52a42.jpg',
            big: 'http://website.safar.lan/sezavar/FILES/NewSepehranLocal3/www//uploads/agency/14bd02adc1ace145ea41913ffaa52a42.jpg',
            title: 'تابلو و نمای ورودی شرکت'
        }
    ])
    const listData = gallery.map((data, index) => {
        return <ListGalleryRendering
            key={index}
            smallImage={data.small}
            bigImage={data.big}
            title={data.title}
        />
    })
    return listData
}