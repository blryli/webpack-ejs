import content from './index.ejs'
import layout from '../../layou/layou'

const pageTitle = '运输调度系统TMS_TMS运输调度管理系统_陆运海运舱单申报系统-慧通关';
const keywords = '物流软件开发商,TMS运输调度管理系统,陆运海运舱单申报系统';
const description = '深圳市慧通关网络科技有限公司是中国首家在SAAS领域推出外贸CMS产品的互联网公司。公司主要推出四大系统分别是：云报关管理系统CMS、仓储管理系统WMS、运输调度系统TMS、AEO认证管家。';
const currentNav = ['产品', '运输调度系统TMS'];

module.exports = layout.init({
    pageTitle,
    keywords,
    description,
    currentNav
}).run(content({}))