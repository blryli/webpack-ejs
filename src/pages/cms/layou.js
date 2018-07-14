import content from './index.ejs'
import layout from '../../layou/layou'

const pageTitle = '云报关管理系统CMS_国际贸易单一窗口申报对接服务商_进出口通关申报系统-慧通关';
const keywords = '云报关管理系统,国际贸易单一窗口申报对接服务商,进出口通关申报系统';
const description = '深圳市慧通关网络科技有限公司是中国首家在SAAS领域推出外贸CMS产品的互联网公司。公司主要推出四大系统分别是：云报关管理系统CMS、仓储管理系统WMS、运输调度系统TMS、AEO认证管家。';
const currentNav = ['产品', '关务操作管理系统CMS'];

module.exports = layout.init({
    pageTitle,
    keywords,
    description,
    currentNav
}).run(content({}))