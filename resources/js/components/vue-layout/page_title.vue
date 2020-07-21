<template>
  <!-- page title area start -->
  <div class="page-title-area">
    <div class="row align-items-center">
      <div class="col-sm-6">
        <div class="breadcrumbs-area clearfix">
          <h4 class="page-title pull-left" style="font-family:Saysettha OT;">
            <h1 to="/">{{this.page_title}}</h1>
          </h4>
          <ul class="breadcrumbs pull-left">
            <li style="font-family:Saysettha OT;">
              <a href="#" style="text-decoration:none;font-family:Saysettha OT;">ໜ້າຫຼັກ</a>
            </li>
            <li>
              <span style="font-family:Saysettha OT;">
                <router to="/employee">ໜ້າລາສຸດ</router>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- page title area end -->
</template>
<script>
export default {
  props: {
    page_title: {
      type: String
    }
  }
};
</script>
