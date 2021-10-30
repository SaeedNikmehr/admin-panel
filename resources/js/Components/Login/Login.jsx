import React, { useState, useEffect, useRef } from 'react'
import Button from '../SourceTag/Form/Button'
import Form from '../SourceTag/Form/Form'
import Input from '../SourceTag/Form/Input'
export default function Login() {
    const refInput = useRef();
    useEffect(() => {
        refInput.current.focus();
    }, []);
    return (
        <div>
            <div id="page-container" className="">
                <div className="login login-with-news-feed">
                    <div className="news-feed">
                        <div className="news-image" style={{ backgroundImage: 'url(../assets/img/login-bg/back-sepehran.jpg)' }}></div>
                        <div className="news-caption">
                            <h4 className="caption-title text-danger"><b>Sepehran Airlines</b></h4>
                            <p>
                                Admin Panel
                            </p>
                        </div>
                    </div>
                    <div className="right-content">
                        <div className="main-logo">
                            <img src="../assets/img/logo/sepehran-logo.png" className="logo" />
                        </div>
                        <div className="login-header text-right">
                            <div className="brand">
                                {/* <span className="logo"><i className="ion-ios-cloud"></i></span> */}
                                {/* <span className="logo"></span>  */}
                                Login
                                <small>پنل ادمین </small>
                            </div>
                            <div className="icon">
                                <i className="fa fa-sign-in-alt"></i>
                            </div>
                        </div>
                        <div className="login-content">
                            <Form action={"index.html"} method={"GET"} className={"margin-bottom-0"}>
                                <div className="form-group m-b-15">
                                    <input type="text" name='username' className="form-control form-control-lg text-center" ref={refInput} placeholder="Username" />
                                </div>
                                <div className="form-group m-b-15">
                                    <Input type={"password"} className={"form-control form-control-lg text-center"} placeholder={"Password"} />
                                </div>
                                <div className="login-buttons">
                                    <Button className={'btn btn-sepehran btn-block btn-lg'}>Login</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}