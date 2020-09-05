
<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <title>Admin AltynAnar</title>

<link rel="stylesheet" href="css/app.css">
</head>
<body >
<div id="admin">
    
  <admin_side></admin_side>
  

  <!-- Content Wrapper. Contains page content -->
  {{-- <div class="content-wrapper"> --}}
    <!-- Content Header (Page header) -->
    {{-- <div class="content-header"> --}}
      {{-- <div class="container-fluid"> --}}
      {{-- </div><!-- /.container-fluid --> --}}
    {{-- </div> --}}
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
      {{-- <div class="container-fluid"> --}}
              <router-view></router-view>

        <!-- /.row -->
      </div><!-- /.container-fluid --> 
    {{-- </div> --}}
    <!-- /.content -->
  {{-- </div> --}}
  <!-- /.content-wrapper -->

  <!-- Control Sidebar -->
  {{-- <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
    <div class="p-3">
      <h5>Title</h5>
      <p>Sidebar content</p>
    </div>
  </aside> --}}
  <!-- /.control-sidebar -->

  <!-- Main Footer -->
 
</div>
<!-- ./wrapper -->

<!-- REQUIRED SCRIPTS -->

<!-- jQuery -->
<script src="/js/app.js"></script>
</body>
</html>
