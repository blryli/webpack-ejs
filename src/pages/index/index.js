import Swiper from 'swiper'
import main from '../../assets/js/main'

import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/dist/css/swiper.min.css'
import '../../assets/scss/reset.scss'
import '../../assets/scss/layou.scss'
import '../../assets/scss/header-footer.scss'
import './index.scss'

var mySwiper = new Swiper('#banner-swiper', {
    autoplay: true, //可选选项，自动滑动
    loop: true,
    // 分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    // 前进后退按钮
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // }
})

main.init();