import content from './index.ejs'
import layout from '../../layou/layou'

const pageTitle = 'AEO认证管家_海关AEO认证评估_AEO认证系统-慧通关';
const keywords = 'AEO认证管家,海关AEO认证评估,AEO认证系统';
const description = '深圳市慧通关网络科技有限公司是中国首家在SAAS领域推出外贸CMS产品的互联网公司。公司主要推出四大系统分别是：云报关管理系统CMS、仓储管理系统WMS、运输调度系统TMS、AEO认证管家。';
const currentNav = ['产品', 'AEO认证管家'];

module.exports = layout.init({
    pageTitle,
    keywords,
    description,
    currentNav
}).run(content({}))