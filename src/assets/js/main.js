const main = {
	init() {
		var width = $(window).width();
		styleChange(width);
		$(window).resize(function () { // 当浏览器大小变化时
			width = $(window).width();
			styleChange(width);
		});

		// 手机、PC样式变化
		function styleChange(width) {
			if (width < 768) {
				$('#nav').removeClass('el-menu--horizontal');
				$('#search-input').addClass('el-input--small');
			} else {
				$('#nav').addClass('el-menu--horizontal');
				$('#search-input').removeClass('el-input--small');
			}
		}

		// 菜单
		$('#click-menu').click(function () {
			$('#login-menu').addClass("is-show");
		})
		$('#click-close').click(function () {
			$('#login-menu').removeClass("is-show");
		})

		// 搜索
		$('#search-btn').click(function () {
			$('#search').toggleClass('search-show');
		})
	}
}
export default main;