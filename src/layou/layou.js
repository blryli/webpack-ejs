import layou from './layou.ejs'
import head from './head.ejs' // head模板
import header from './header.ejs' // header模板
import headera from './header/header' // header模板
import footer from './footer.ejs' // footer模板
import navs from '../pages/router' // 路由
// const topNav = require('./top-nav.ejs') // 顶部栏的模板
// const sideMenu = require('./side-menu.ejs') // 侧边栏的模板

/* 整理渲染公共部分所用到的模板变量 */

const pf = {
	pageTitle: '',
	keywords: '',
	description: '',
	currentNav: '',
	navs: navs
}

module.exports = {
	/* 处理各个页面传入而又需要在公共区域用到的参数 */
	init({
		pageTitle,
		keywords,
		description,
		currentNav
	}) {
		// 比如说页面名称，会在<title>或面包屑里用到
		pf.pageTitle = pageTitle;
		pf.keywords = keywords;
		pf.description = description;
		pf.currentNav = currentNav ? currentNav : '';
		return this
	},
	/* 整合各公共组件和页面实际内容，最后生成完整的HTML文档 */
	run(content) {
		const renderData = {
			head: head(pf),
			header: headera.run(pf),
			footer: footer(),
			// topNav: topNav(pf),
			// sideMenu: sideMenu(),
			content: content,
		}
		return layou(renderData)
	},
}
