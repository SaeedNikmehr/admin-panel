import React from 'react'

export default function ThemePanel() {
    return (
        <div className="theme-panel">
            <a href="javascript:;" data-toggle="theme-panel-expand" className="theme-collapse-btn"><i className="fa fa-cog"></i></a>
            <div className="theme-panel-content" data-scrollbar="true" data-height="100%">
                <h5>App Settings</h5>

                <div className="theme-list">
                    <div className="theme-list-item"><a href="javascript:;" className="theme-list-link bg-red" data-theme="red" data-theme-file="../assets/css/default/theme/red.min.css" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Red">&nbsp;</a></div>
                    <div className="theme-list-item"><a href="javascript:;" className="theme-list-link bg-pink" data-theme="pink" data-theme-file="../assets/css/default/theme/pink.min.css" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Pink">&nbsp;</a></div>
                    <div className="theme-list-item"><a href="javascript:;" className="theme-list-link bg-orange" data-theme="orange" data-theme-file="../assets/css/default/theme/orange.min.css" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Orange">&nbsp;</a></div>
                    <div className="theme-list-item"><a href="javascript:;" className="theme-list-link bg-yellow" data-theme="yellow" data-theme-file="../assets/css/default/theme/yellow.min.css" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Yellow">&nbsp;</a></div>
                    <div className="theme-list-item"><a href="javascript:;" className="theme-list-link bg-lime" data-theme="lime" data-theme-file="../assets/css/default/theme/lime.min.css" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Lime">&nbsp;</a></div>
                    <div className="theme-list-item"><a href="javascript:;" className="theme-list-link bg-green" data-theme="green" data-theme-file="../assets/css/default/theme/green.min.css" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Green">&nbsp;</a></div>
                    <div className="theme-list-item active"><a href="javascript:;" className="theme-list-link bg-teal" data-theme="default" data-theme-file="" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Default">&nbsp;</a></div>
                    <div className="theme-list-item"><a href="javascript:;" className="theme-list-link bg-cyan" data-theme="cyan" data-theme-file="../assets/css/default/theme/cyan.min.css" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Cyan">&nbsp;</a></div>
                    <div className="theme-list-item"><a href="javascript:;" className="theme-list-link bg-blue" data-theme="blue" data-theme-file="../assets/css/default/theme/blue.min.css" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Blue">&nbsp;</a></div>
                    <div className="theme-list-item"><a href="javascript:;" className="theme-list-link bg-purple" data-theme="purple" data-theme-file="../assets/css/default/theme/purple.min.css" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Purple">&nbsp;</a></div>
                    <div className="theme-list-item"><a href="javascript:;" className="theme-list-link bg-indigo" data-theme="indigo" data-theme-file="../assets/css/default/theme/indigo.min.css" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Indigo">&nbsp;</a></div>
                    <div className="theme-list-item"><a href="javascript:;" className="theme-list-link bg-black" data-theme="black" data-theme-file="../assets/css/default/theme/black.min.css" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Black">&nbsp;</a></div>
                </div>

                <div className="theme-panel-divider"></div>

                <div className="row mt-10px align-items-center">
                    <div className="col-8 control-label text-inverse fw-bold">Header Fixed</div>
                    <div className="col-4 d-flex">
                        <div className="form-check form-switch ms-auto mb-0">
                            <input type="checkbox" className="form-check-input" name="app-header-fixed" id="appHeaderFixed" value="1" defaultChecked />
                            <label className="form-check-label" for="appHeaderFixed">&nbsp;</label>
                        </div>
                    </div>
                </div>
                <div className="row mt-10px align-items-center">
                    <div className="col-8 control-label text-inverse fw-bold">Header Inverse</div>
                    <div className="col-4 d-flex">
                        <div className="form-check form-switch ms-auto mb-0">
                            <input type="checkbox" className="form-check-input" name="app-header-inverse" id="appHeaderInverse" value="1" />
                            <label className="form-check-label" for="appHeaderInverse">&nbsp;</label>
                        </div>
                    </div>
                </div>
                <div className="row mt-10px align-items-center">
                    <div className="col-8 control-label text-inverse fw-bold">Sidebar Fixed</div>
                    <div className="col-4 d-flex">
                        <div className="form-check form-switch ms-auto mb-0">
                            <input type="checkbox" className="form-check-input" name="app-sidebar-fixed" id="appSidebarFixed" value="1" defaultChecked />
                            <label className="form-check-label" for="appSidebarFixed">&nbsp;</label>
                        </div>
                    </div>
                </div>
                <div className="row mt-10px align-items-center">
                    <div className="col-8 control-label text-inverse fw-bold">Sidebar Grid</div>
                    <div className="col-4 d-flex">
                        <div className="form-check form-switch ms-auto mb-0">
                            <input type="checkbox" className="form-check-input" name="app-sidebar-grid" id="appSidebarGrid" value="1" />
                            <label className="form-check-label" for="appSidebarGrid">&nbsp;</label>
                        </div>
                    </div>
                </div>
                <div className="row mt-10px align-items-center">
                    <div className="col-md-8 control-label text-inverse fw-bold">Gradient Enabled</div>
                    <div className="col-md-4 d-flex">
                        <div className="form-check form-switch ms-auto mb-0">
                            <input type="checkbox" className="form-check-input" name="app-gradient-enabled" id="appGradientEnabled" value="1" />
                            <label className="form-check-label" for="appGradientEnabled">&nbsp;</label>
                        </div>
                    </div>
                </div>

                <div className="theme-panel-divider"></div>
                <h5>Admin Design (5)</h5>

                <div className="theme-version">
                    <div className="theme-version-item">
                        {/* <a href="../html/index_v2.html" className="theme-version-link active">
<span style="background-image: url(../assets/img/theme/default.jpg);" className="theme-version-cover"></span>
</a>
</div>
<div className="theme-version-item">
<a href="../transparent/index_v2.html" className="theme-version-link">
<span style="background-image: url(../assets/img/theme/transparent.jpg);" className="theme-version-cover"></span>
</a>
</div>
<div className="theme-version-item">
<a href="../apple/index_v2.html" className="theme-version-link">
<span style="background-image: url(../assets/img/theme/apple.jpg);" className="theme-version-cover"></span>
</a>
</div>
<div className="theme-version-item">
<a href="../material/index_v2.html" className="theme-version-link">
<span style="background-image: url(../assets/img/theme/material.jpg);" className="theme-version-cover"></span>
</a>
</div>
<div className="theme-version-item">
<a href="../facebook/index_v2.html" className="theme-version-link">
<span style="background-image: url(../assets/img/theme/facebook.jpg);" className="theme-version-cover"></span>
</a>
</div>
<div className="theme-version-item">
<a href="../google/index_v2.html" className="theme-version-link">
<span style="background-image: url(../assets/img/theme/google.jpg);" className="theme-version-cover"></span>
</a> */}
                    </div>
                </div>

                <div className="theme-panel-divider"></div>
                <h5>Language Version (7)</h5>

                <div className="theme-version">
                    <div className="theme-version-item">
                        {/* <a href="../html/index.html" className="theme-version-link active">
<span style="background-image: url(../assets/img/version/html.jpg);" className="theme-version-cover"></span>
</a>
</div>
<div className="theme-version-item">
<a href="../ajax/index.html" className="theme-version-link">
<span style="background-image: url(../assets/img/version/ajax.jpg);" className="theme-version-cover"></span>
</a>
</div>
<div className="theme-version-item">
<a href="../angularjs/index.html" className="theme-version-link">
<span style="background-image: url(../assets/img/version/angular1x.jpg);" className="theme-version-cover"></span>
</a>
</div>
<div className="theme-version-item">
<a href="../angularjs11/index.html" className="theme-version-link">
<span style="background-image: url(../assets/img/version/angular10x.jpg);" className="theme-version-cover"></span>
</a>
</div>
<div className="theme-version-item">
<a href="javascript:alert('Laravel Version only available in downloaded version.');" className="theme-version-link">
<span style="background-image: url(../assets/img/version/laravel.jpg);" className="theme-version-cover"></span>
</a>
</div>
<div className="theme-version-item">
<a href="../vuejs/index.html" className="theme-version-link">
<span style="background-image: url(../assets/img/version/vuejs.jpg);" className="theme-version-cover"></span>
</a>
</div>
<div className="theme-version-item">
<a href="../reactjs/index.html" className="theme-version-link">
<span style="background-image: url(../assets/img/version/reactjs.jpg);" className="theme-version-cover"></span>
</a>
</div>
<div className="theme-version-item">
<a href="javascript:alert('.NET Core 5.0 MVC Version only available in downloaded version.');" className="theme-version-link">
<span style="background-image: url(../assets/img/version/dotnet.jpg);" className="theme-version-cover"></span>
</a> */}
                    </div>
                </div>

                <div className="theme-panel-divider"></div>
                <h5>Frontend Design (5)</h5>

                <div className="theme-version">
                    <div className="theme-version-item">
                        {/* <a href="../../frontend/one-page-parallax/index.html" target="_blank" className="theme-version-link">
<span style="background-image: url(../assets/img/theme/one-page-parallax.jpg);" className="theme-version-cover"></span>
</a>
</div>
<div className="theme-version-item">
<a href="../../frontend/e-commerce/index.html" target="_blank" className="theme-version-link">
<span style="background-image: url(../assets/img/theme/e-commerce.jpg);" className="theme-version-cover"></span>
</a>
</div>
<div className="theme-version-item">
<a href="../../frontend/blog/index.html" target="_blank" className="theme-version-link">
<span style="background-image: url(../assets/img/theme/blog.jpg);" className="theme-version-cover"></span>
</a>
</div>
<div className="theme-version-item">
<a href="../../frontend/forum/index.html" target="_blank" className="theme-version-link">
<span style="background-image: url(../assets/img/theme/forum.jpg);" className="theme-version-cover"></span>
</a>
</div>
<div className="theme-version-item">
<a href="../../frontend/corporate/index.html" target="_blank" className="theme-version-link">
<span style="background-image: url(../assets/img/theme/corporate.jpg);" className="theme-version-cover"></span>
</a> */}
                    </div>
                </div>

                <div className="theme-panel-divider"></div>
                <a href="https://seantheme.com/color-admin/documentation/" className="btn btn-inverse d-block w-100 rounded-pill mb-10px" target="_blank"><b>Documentation</b></a>
                <a href="javascript:;" className="btn btn-default d-block w-100 rounded-pill" data-toggle="reset-local-storage"><b>Reset Local Storage</b></a>
            </div>
        </div>

    )
}
