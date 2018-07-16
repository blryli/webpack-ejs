const main = {
	init() {
		var width = document.documentElement.clientWidth || document.body.clientWidth;
		styleChange(width);
		window.onresize = (function () { // 当浏览器大小变化时
			width = document.documentElement.clientWidth || document.body.clientWidth;
			styleChange(width);
		});

		// 手机、PC样式变化
		function styleChange(width) {
			if (width < 768) {
				document.getElementById('nav').classList.remove('el-menu--horizontal');
				document.getElementById('search-input').classList.add('el-input--small');
			} else {
				document.getElementById('nav').classList.add('el-menu--horizontal');
				document.getElementById('search-input').classList.remove('el-input--small');
			}
		}

		// 菜单
		document.getElementById('click-menu').onclick = function () {
			document.getElementById('login-menu').classList.add("is-show");
		}
		document.getElementById('click-close').onclick = function () {
			document.getElementById('login-menu').classList.remove("is-show");
		}

		// 搜索
		document.getElementById('search-btn').onclick = function () {
			document.getElementById('search').classList.toggle('search-show');
		}
	}
}
export default main;