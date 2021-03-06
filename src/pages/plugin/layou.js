import content from './index.ejs'
import layout from '../../layou/layou'

const pageTitle = '插件_报关软件_报关管理软件-慧通关';
const keywords = '云报关SaaS通关管理协调系统,海运舱单平台';
const description = '平台推出了通关业务操作、作业风险预警、个性化CRM、员工KPI考核、财务管理、ASN预约、AEO认证管家、外贸实务培训与咨询等一系列的产品及服务。旨在为外贸企业提供互联网通关领域内便利、安全和智能的管理工具和解决方案。';
const currentNav = '插件';

module.exports = layout.init({
    pageTitle,
    keywords,
    description,
    currentNav
}).run(content({}))