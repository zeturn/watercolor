import{j as e}from"./iframe-DqwHGwZR.js";import{P as s}from"./PricingTable-BAZ_fm4c.js";const _={title:"Components/PricingTable (React)",component:s,parameters:{layout:"centered",docs:{description:{component:"Watercolor 价格表格组件，支持多列布局和特殊标记。"}}},tags:["autodocs"],argTypes:{plans:{description:"价格方案数组",control:"object"},columns:{control:{type:"number",min:1,max:6,step:1},description:"列数"},className:{control:"text",description:"自定义CSS类名"}}},j=[{name:"基础版",price:"¥0/月",features:["1个项目","社区支持","基础功能"],button:"免费开始"},{name:"专业版",price:"¥99/月",features:["无限项目","优先支持","高级功能","API访问"],popular:!0,button:"立即购买"},{name:"企业版",price:"联系我们",features:["定制方案","专属顾问","企业级安全","私有部署"],button:"联系销售"}],o={args:{plans:j,columns:3},render:a=>e.jsx("div",{className:"p-8 max-w-4xl",children:e.jsx(s,{...a})})},r=()=>{const a=[{name:"个人版",price:"¥29/月",features:["单用户许可","基础模板库","社区支持","标准导出格式"],button:"选择个人版"},{name:"团队版",price:"¥199/月",features:["最多10个用户","完整模板库","团队协作功能","优先技术支持","高级导出格式"],popular:!0,button:"选择团队版"},{name:"企业版",price:"¥999/月",features:["无限用户","自定义模板","高级管理功能","专属客户经理","私有云部署","SSO集成"],button:"联系销售"}];return e.jsxs("div",{className:"p-8 max-w-5xl",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4",children:"选择适合您的计划"}),e.jsx("p",{className:"text-gray-600",children:"灵活的定价方案，满足不同规模团队的需求"})]}),e.jsx(s,{plans:a,columns:3})]})},t=()=>{const a=[{name:"共享主机",price:"¥19/月",features:["10GB 存储空间","100GB 流量","1个网站","免费SSL证书","99.9%正常运行时间"],button:"立即购买"},{name:"VPS主机",price:"¥89/月",features:["50GB SSD存储","不限流量","5个网站","免费备份","专用IP地址","24/7技术支持"],popular:!0,button:"推荐选择"},{name:"云服务器",price:"¥299/月",features:["200GB SSD存储","不限流量","无限网站","自动备份","负载均衡","专属技术顾问"],button:"联系我们"},{name:"企业定制",price:"定制报价",features:["自定义配置","专属服务器","高级安全防护","多地域部署","7x24专家支持","SLA保障"],button:"获取报价"}];return e.jsxs("div",{className:"p-8 max-w-6xl",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4",children:"主机托管服务"}),e.jsx("p",{className:"text-gray-600",children:"从个人网站到企业应用，我们都有合适的解决方案"})]}),e.jsx(s,{plans:a,columns:4})]})},n=()=>{const a=[{name:"学生版",price:"免费",features:["所有核心功能","5个项目","社区论坛支持","基础教程资源"],button:"学生认证"},{name:"教师版",price:"¥199/年",features:["课堂管理功能","无限项目","作业评分系统","教学资源库","优先技术支持"],popular:!0,button:"申请试用"},{name:"学校版",price:"¥2999/年",features:["校园级授权","管理员控制台","批量用户管理","数据分析报告","定制化培训","专属客服"],button:"联系我们"}];return e.jsxs("div",{className:"p-8 max-w-4xl",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4",children:"教育优惠计划"}),e.jsx("p",{className:"text-gray-600",children:"为教育机构和学生提供特别优惠的定价方案"}),e.jsx("div",{className:"mt-4 inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm",children:"🎓 教育用户专享优惠"})]}),e.jsx(s,{plans:a,columns:3})]})},c=()=>{const a=[{name:"基础",price:"¥39",features:["核心功能","邮件支持"],button:"选择"},{name:"标准",price:"¥79",features:["所有功能","电话支持"],popular:!0,button:"选择"}];return e.jsxs("div",{className:"p-8 max-w-2xl",children:[e.jsxs("div",{className:"text-center mb-6",children:[e.jsx("h2",{className:"text-2xl font-bold mb-2",children:"简洁版价格表"}),e.jsx("p",{className:"text-gray-600",children:"适合空间有限的页面布局"})]}),e.jsx(s,{plans:a,columns:2})]})};r.__docgenInfo={description:"",methods:[],displayName:"SoftwarePricing"};t.__docgenInfo={description:"",methods:[],displayName:"HostingPricing"};n.__docgenInfo={description:"",methods:[],displayName:"EducationPricing"};c.__docgenInfo={description:"",methods:[],displayName:"CompactLayout"};var i,l,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    plans: basicPlans,
    columns: 3
  },
  render: args => <div className="p-8 max-w-4xl">\r
      <PricingTable {...args} />\r
    </div>
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,u,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const softwarePlans = [{
    name: '个人版',
    price: '¥29/月',
    features: ['单用户许可', '基础模板库', '社区支持', '标准导出格式'],
    button: '选择个人版'
  }, {
    name: '团队版',
    price: '¥199/月',
    features: ['最多10个用户', '完整模板库', '团队协作功能', '优先技术支持', '高级导出格式'],
    popular: true,
    button: '选择团队版'
  }, {
    name: '企业版',
    price: '¥999/月',
    features: ['无限用户', '自定义模板', '高级管理功能', '专属客户经理', '私有云部署', 'SSO集成'],
    button: '联系销售'
  }];
  return <div className="p-8 max-w-5xl">\r
      <div className="text-center mb-8">\r
        <h2 className="text-3xl font-bold mb-4">选择适合您的计划</h2>\r
        <p className="text-gray-600">灵活的定价方案，满足不同规模团队的需求</p>\r
      </div>\r
      <PricingTable plans={softwarePlans} columns={3} />\r
    </div>;
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var x,b,g;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const hostingPlans = [{
    name: '共享主机',
    price: '¥19/月',
    features: ['10GB 存储空间', '100GB 流量', '1个网站', '免费SSL证书', '99.9%正常运行时间'],
    button: '立即购买'
  }, {
    name: 'VPS主机',
    price: '¥89/月',
    features: ['50GB SSD存储', '不限流量', '5个网站', '免费备份', '专用IP地址', '24/7技术支持'],
    popular: true,
    button: '推荐选择'
  }, {
    name: '云服务器',
    price: '¥299/月',
    features: ['200GB SSD存储', '不限流量', '无限网站', '自动备份', '负载均衡', '专属技术顾问'],
    button: '联系我们'
  }, {
    name: '企业定制',
    price: '定制报价',
    features: ['自定义配置', '专属服务器', '高级安全防护', '多地域部署', '7x24专家支持', 'SLA保障'],
    button: '获取报价'
  }];
  return <div className="p-8 max-w-6xl">\r
      <div className="text-center mb-8">\r
        <h2 className="text-3xl font-bold mb-4">主机托管服务</h2>\r
        <p className="text-gray-600">从个人网站到企业应用，我们都有合适的解决方案</p>\r
      </div>\r
      <PricingTable plans={hostingPlans} columns={4} />\r
    </div>;
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,N,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const educationPlans = [{
    name: '学生版',
    price: '免费',
    features: ['所有核心功能', '5个项目', '社区论坛支持', '基础教程资源'],
    button: '学生认证'
  }, {
    name: '教师版',
    price: '¥199/年',
    features: ['课堂管理功能', '无限项目', '作业评分系统', '教学资源库', '优先技术支持'],
    popular: true,
    button: '申请试用'
  }, {
    name: '学校版',
    price: '¥2999/年',
    features: ['校园级授权', '管理员控制台', '批量用户管理', '数据分析报告', '定制化培训', '专属客服'],
    button: '联系我们'
  }];
  return <div className="p-8 max-w-4xl">\r
      <div className="text-center mb-8">\r
        <h2 className="text-3xl font-bold mb-4">教育优惠计划</h2>\r
        <p className="text-gray-600">为教育机构和学生提供特别优惠的定价方案</p>\r
        <div className="mt-4 inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm">\r
          🎓 教育用户专享优惠\r
        </div>\r
      </div>\r
      <PricingTable plans={educationPlans} columns={3} />\r
    </div>;
}`,...(h=(N=n.parameters)==null?void 0:N.docs)==null?void 0:h.source}}};var P,v,S;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const compactPlans = [{
    name: '基础',
    price: '¥39',
    features: ['核心功能', '邮件支持'],
    button: '选择'
  }, {
    name: '标准',
    price: '¥79',
    features: ['所有功能', '电话支持'],
    popular: true,
    button: '选择'
  }];
  return <div className="p-8 max-w-2xl">\r
      <div className="text-center mb-6">\r
        <h2 className="text-2xl font-bold mb-2">简洁版价格表</h2>\r
        <p className="text-gray-600">适合空间有限的页面布局</p>\r
      </div>\r
      <PricingTable plans={compactPlans} columns={2} />\r
    </div>;
}`,...(S=(v=c.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const B=["Basic","SoftwarePricing","HostingPricing","EducationPricing","CompactLayout"];export{o as Basic,c as CompactLayout,n as EducationPricing,t as HostingPricing,r as SoftwarePricing,B as __namedExportsOrder,_ as default};
