<template>
       <!-- sidebar menu area start -->
        <div class="sidebar-menu">
            <div class="sidebar-header">
                <div class="logo">
                    <a href="index.html"><img src="assets/images/icon/logoNew.png" alt="logo"></a>
                </div>
            </div>
                <div class="main-menu">
                <div class="menu-inner">
                    <nav>
                        <ul class="metismenu" id="menu">
                            <li class="active">
                                <a href="#" aria-expanded="true"><span>ຈັດການຂໍໍ້ມູນພະນັກງານ</span></a>
                                <ul class="collapse">
                                    <li><router-link to="/">ປະຫວັດພະນັກງານ</router-link></li>
                                    <li><router-link to="/employee">ເງີນເດືອນ</router-link></li>

                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0)" aria-expanded="true"><span>ຈັດການຂໍໍ້ມູນພະແນກ</span></a>
                                <ul class="collapse">
                                    <li><a href="">ຫົວຫນ້າພະແນກ</a></li>
                                    <li><a href="">ຈ່າຍເງີນເດືອນ</a></li>

                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0)" aria-expanded="true"><span>ຈັດການຂໍໍ້ມູນສາຂາ</span></a>
                                <ul class="collapse">
                                    <li><a href="">ຫົວໜ້າສາຂາ</a></li>
                                    <li><a href="">ຈ່າຍເງີນເດືອນ</a></li>

                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div> 
        </div>
        <!-- sidebar menu area end -->
</template>