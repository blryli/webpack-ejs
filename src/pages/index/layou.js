import content from './index.ejs'
import layout from '../../layou/layou'

const pageTitle = '关务软件_云报关管理系统_智能通关云平台-慧通关';
const keywords = '关务软件,报关单导入平台,海运舱单平台,公路舱单申报系统,智能通关云平台,报关管理系统,通关管理系统,一站式通关管理平台,云报关SaaS通关管理协调系统,AEO认证系统,云报关物料管理及通关协作系统,云报关预约交仓系统,云报关监管两仓管理系统,云报关';
const description = '深圳市慧通关网络科技是中国首家在SAAS领域推出外贸CMS产品的互联网公司。公司秉承开放、共赢、务实的经营理念吸引了很多卓越的互联网技术专家和外贸领域的行业精英，为进出口贸易项下的物流及通关提供高效、智能、安全、规范、智通化系统与专业的顾问咨询服务。';
const currentNav = '首页';
const partnerNum = 18; //合作伙伴数量

module.exports = layout.init({
    pageTitle,
    keywords,
    description,
    currentNav
}).run(content({
    partnerNum
}))