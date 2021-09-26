<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Panel</title>
    <!-- Styles -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"/>
    <link href="{{ asset('assets/css/default/vendor.min.css') }}" rel="stylesheet"/>
    <link href="{{ asset('assets/css/default/app.min.css') }}" rel="stylesheet"/>
    <link href="{{ asset('assets/css/style.css') }}" rel="stylesheet"/>
    <link href="{{ asset('assets/css/default/table/dataTables.bootstrap4.min.css') }}" rel="stylesheet"/>
    <link href="{{ asset('assets/css/default/table/responsive.bootstrap4.min.css') }}" rel="stylesheet"/>
    <link href="{{ asset('assets/plugins/ionicons/css/ionicons.min.css') }}" rel="stylesheet"/>
    <link href="{{ asset('mix/css/mix.css') }}" rel="stylesheet"/>
</head>
<body>
<div id="app"></div>
<!-- Scripts -->
<script src="{{ asset('mix/js/mix.js') }}"></script>
<script src="{{ asset('assets/js/vendor.min.js') }}" type="13f396a5937c4d79640f697b-text/javascript"></script>
<script src="{{ asset('assets/js/app.min.js') }}" type="13f396a5937c4d79640f697b-text/javascript"></script>
<script src="{{ asset('assets/js/default.min.js') }}" type="13f396a5937c4d79640f697b-text/javascript"></script>
<script src="{{ asset('assets/js/table/jquery.dataTables.min.js') }}"
        type="13f396a5937c4d79640f697b-text/javascript"></script>
<script src="{{ asset('assets/js/table/dataTables.bootstrap4.min.js') }}"
        type="13f396a5937c4d79640f697b-text/javascript"></script>
<script src="{{ asset('assets/js/table/dataTables.responsive.min.js') }}"
        type="13f396a5937c4d79640f697b-text/javascript"></script>
<script src="{{ asset('assets/js/table/responsive.bootstrap4.min.js') }}"
        type="13f396a5937c4d79640f697b-text/javascript"></script>
<script src="{{ asset('assets/js/table/table-manage-responsive.demo.js') }}"
        type="13f396a5937c4d79640f697b-text/javascript"></script>
<script src="{{ asset('assets/js/highlight.min.js') }}" type="13f396a5937c4d79640f697b-text/javascript"></script>
<script src="{{ asset('assets/js/render.highlight.js') }}" type="13f396a5937c4d79640f697b-text/javascript"></script>
<script type="13f396a5937c4d79640f697b-text/javascript">
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-53034621-1', 'auto');
		ga('send', 'pageview');

</script>
<script src="{{ asset('assets/js/rocket-loader.min.js') }}" data-cf-settings="13f396a5937c4d79640f697b-|49"
        defer=""></script>
<!-- <script defer src="{{ asset('assets/js/beacon.min.js') }}"
    data-cf-beacon='{"rayId":"69321bff6c8f4dd0","version":"2021.8.1","r":1,"token":"4db8c6ef997743fda032d4f73cfeff63","si":10}'></script> -->
</body>
</html>
