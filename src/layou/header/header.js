import header from './header.ejs' // header模板
import nav from './nav.ejs' // nav模板

module.exports = {
	/* header组件实际内容，最后生成完整的HTML文档 */
	run(pf) {
		const renderData = {
			nav: nav(pf)
		}
		return header(renderData)
	},
}