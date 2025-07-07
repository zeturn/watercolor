import{r as d,j as e}from"./iframe-DqwHGwZR.js";import{T as m}from"./Tabs-DhcWMdtE.js";const B={title:"Components/Tabs (React)",component:m,parameters:{layout:"centered",docs:{description:{component:"Watercolor 标签页组件，支持多种样式变体和交互功能。"}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","pills","underline"],description:"标签页样式"},activeIndex:{control:{type:"number"},description:"当前激活的标签页索引"},tabs:{control:{type:"object"},description:"标签页数组"},onChange:{action:"tab-changed",description:"标签页切换时触发"}}},g={args:{variant:"default"},render:t=>{const[i,s]=d.useState(0),a=[{title:"主页",key:"home"},{title:"关于",key:"about"},{title:"服务",key:"services"},{title:"联系",key:"contact"}];return e.jsx("div",{className:"w-96 p-6",children:e.jsx(m,{tabs:a,activeIndex:i,variant:t.variant,onChange:(r,n)=>{var l;s(r),(l=t.onChange)==null||l.call(t,r,n)},children:({activeIndex:r})=>e.jsxs("div",{className:"p-6 bg-neutral-50 dark:bg-neutral-800 rounded-xl mt-4",children:[r===0&&e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"主页内容"}),e.jsx("p",{className:"text-neutral-600 dark:text-neutral-400",children:"欢迎来到我们的网站主页"})]}),r===1&&e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"关于我们"}),e.jsx("p",{className:"text-neutral-600 dark:text-neutral-400",children:"了解我们公司的历史和使命"})]}),r===2&&e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"我们的服务"}),e.jsx("p",{className:"text-neutral-600 dark:text-neutral-400",children:"查看我们提供的各种服务"})]}),r===3&&e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"联系我们"}),e.jsx("p",{className:"text-neutral-600 dark:text-neutral-400",children:"获取联系方式和地址信息"})]})]})})})}},b=()=>{const[t,i]=d.useState(0),[s,a]=d.useState(1),[r,n]=d.useState(2),l=[{title:"选项1",key:"tab1"},{title:"选项2",key:"tab2"},{title:"选项3",key:"tab3"}];return e.jsxs("div",{className:"space-y-8 w-96 p-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"默认样式"}),e.jsx(m,{tabs:l,activeIndex:t,variant:"default",onChange:i,children:({activeIndex:c})=>e.jsx("div",{className:"p-4 bg-neutral-50 rounded-xl mt-4",children:e.jsxs("p",{children:["默认样式内容 ",c+1]})})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"药丸样式"}),e.jsx(m,{tabs:l,activeIndex:s,variant:"pills",onChange:a,children:({activeIndex:c})=>e.jsx("div",{className:"p-4 bg-neutral-50 rounded-xl mt-4",children:e.jsxs("p",{children:["药丸样式内容 ",c+1]})})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"下划线样式"}),e.jsx(m,{tabs:l,activeIndex:r,variant:"underline",onChange:n,children:({activeIndex:c})=>e.jsx("div",{className:"p-4 bg-neutral-50 rounded-xl mt-4",children:e.jsxs("p",{children:["下划线样式内容 ",c+1]})})})]})]})},x=()=>{const[t,i]=d.useState(0),s=[{title:"可用",key:"enabled"},{title:"禁用",key:"disabled",disabled:!0},{title:"可用2",key:"enabled2"},{title:"禁用2",key:"disabled2",disabled:!0}];return e.jsxs("div",{className:"w-96 p-6",children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"禁用状态"}),e.jsx(m,{tabs:s,activeIndex:t,variant:"default",onChange:i,children:({activeIndex:a})=>e.jsxs("div",{className:"p-6 bg-neutral-50 dark:bg-neutral-800 rounded-xl mt-4",children:[e.jsxs("p",{children:["当前激活标签页: ",a+1]}),e.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:['标签页 "',s[a].title,'" 处于激活状态']})]})})]})},p=()=>{const[t,i]=d.useState([{title:"标签 1",key:"tab1",content:"这是第一个标签的内容"},{title:"标签 2",key:"tab2",content:"这是第二个标签的内容"}]),[s,a]=d.useState(0),[r,n]=d.useState(3),l=()=>{const o={title:`标签 ${r}`,key:`tab${r}`,content:`这是第${r}个标签的内容`};i([...t,o]),n(r+1),a(t.length)},c=o=>{if(t.length<=1)return;const N=t.filter((j,Q)=>Q!==o);i(N),s>=o&&a(Math.max(0,s-1))};return e.jsxs("div",{className:"w-96 p-6",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"动态标签页"}),e.jsx("button",{className:"px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700",onClick:l,children:"+ 添加标签"})]}),e.jsx(m,{tabs:t,activeIndex:s,variant:"default",onChange:a,children:({activeIndex:o})=>{var N,j;return e.jsxs("div",{className:"p-4 bg-neutral-50 rounded-xl mt-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h4",{className:"font-medium",children:(N=t[o])==null?void 0:N.title}),t.length>1&&e.jsx("button",{className:"px-2 py-1 bg-red-100 text-red-600 rounded text-xs hover:bg-red-200",onClick:()=>c(o),children:"删除"})]}),e.jsx("p",{className:"text-sm text-gray-600",children:(j=t[o])==null?void 0:j.content})]})}})]})},u=()=>{const[t,i]=d.useState(0),[s,a]=d.useState(0),r=[{title:"产品",key:"products"},{title:"服务",key:"services"},{title:"支持",key:"support"}],n=[{title:"Web应用",key:"web"},{title:"移动应用",key:"mobile"},{title:"API服务",key:"api"}];return e.jsxs("div",{className:"w-[600px] p-6",children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"嵌套内容标签页"}),e.jsx(m,{tabs:r,activeIndex:t,variant:"underline",onChange:i,children:({activeIndex:l})=>e.jsxs("div",{className:"mt-6",children:[l===0&&e.jsxs("div",{children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"我们的产品"}),e.jsx(m,{tabs:n,activeIndex:s,variant:"pills",onChange:a,children:({activeIndex:c})=>e.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg mt-4",children:[c===0&&e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium mb-2",children:"Web应用开发"}),e.jsx("p",{className:"text-sm text-gray-600",children:"提供现代化、响应式的Web应用开发服务，使用最新的前端技术栈。"})]}),c===1&&e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium mb-2",children:"移动应用开发"}),e.jsx("p",{className:"text-sm text-gray-600",children:"跨平台移动应用开发，支持iOS和Android平台。"})]}),c===2&&e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium mb-2",children:"API服务"}),e.jsx("p",{className:"text-sm text-gray-600",children:"RESTful API和GraphQL服务开发，提供可靠的后端支持。"})]})]})})]}),l===1&&e.jsxs("div",{className:"p-4 bg-green-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-2",children:"专业服务"}),e.jsxs("ul",{className:"text-sm text-gray-600 space-y-1",children:[e.jsx("li",{children:"• 技术咨询"}),e.jsx("li",{children:"• 架构设计"}),e.jsx("li",{children:"• 代码审查"}),e.jsx("li",{children:"• 性能优化"})]})]}),l===2&&e.jsxs("div",{className:"p-4 bg-yellow-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-2",children:"技术支持"}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:"我们提供全面的技术支持服务："}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium",children:"在线支持"}),e.jsx("p",{className:"text-gray-600",children:"24/7在线客服"})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium",children:"文档资源"}),e.jsx("p",{className:"text-gray-600",children:"详细的技术文档"})]})]})]})]})})]})},h=()=>{const[t,i]=d.useState(0),s=[{title:"🏠 首页",key:"home"},{title:"👤 用户",key:"users"},{title:"📊 分析",key:"analytics"},{title:"⚙️ 设置",key:"settings"}];return e.jsxs("div",{className:"w-96 p-6",children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"带图标的标签页"}),e.jsx(m,{tabs:s,activeIndex:t,variant:"pills",onChange:i,children:({activeIndex:a})=>e.jsxs("div",{className:"p-4 bg-neutral-50 rounded-xl mt-4",children:[a===0&&e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"仪表板"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"p-3 bg-blue-100 rounded",children:[e.jsx("div",{className:"text-2xl font-bold text-blue-600",children:"1,234"}),e.jsx("div",{className:"text-blue-600",children:"总用户数"})]}),e.jsxs("div",{className:"p-3 bg-green-100 rounded",children:[e.jsx("div",{className:"text-2xl font-bold text-green-600",children:"89%"}),e.jsx("div",{className:"text-green-600",children:"系统正常运行"})]})]})]}),a===1&&e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"用户管理"}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"flex items-center gap-2 p-2 bg-white rounded",children:[e.jsx("span",{children:"👤"}),e.jsx("span",{children:"张三 - 管理员"})]}),e.jsxs("div",{className:"flex items-center gap-2 p-2 bg-white rounded",children:[e.jsx("span",{children:"👤"}),e.jsx("span",{children:"李四 - 用户"})]})]})]}),a===2&&e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"数据分析"}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"页面访问量"}),e.jsx("span",{className:"font-medium",children:"12,345"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"用户活跃度"}),e.jsx("span",{className:"font-medium",children:"78%"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"转化率"}),e.jsx("span",{className:"font-medium",children:"3.2%"})]})]})]}),a===3&&e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"系统设置"}),e.jsxs("div",{className:"space-y-3 text-sm",children:[e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",defaultChecked:!0}),e.jsx("span",{children:"启用通知"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox"}),e.jsx("span",{children:"自动备份"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",defaultChecked:!0}),e.jsx("span",{children:"安全模式"})]})]})]})]})})]})},v=()=>{const[t,i]=d.useState(1),s=[{title:"步骤 1",key:"step1"},{title:"步骤 2",key:"step2"},{title:"步骤 3",key:"step3"},{title:"完成",key:"complete"}],a=()=>{t<s.length-1&&i(t+1)},r=()=>{t>0&&i(t-1)};return e.jsxs("div",{className:"w-[500px] p-6",children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"受控标签页 - 向导流程"}),e.jsx(m,{tabs:s,activeIndex:t,variant:"default",onChange:i,children:({activeIndex:n})=>e.jsxs("div",{className:"mt-6",children:[e.jsxs("div",{className:"p-6 bg-neutral-50 rounded-xl min-h-[200px]",children:[n===0&&e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"基本信息"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("input",{type:"text",placeholder:"姓名",className:"w-full px-3 py-2 border rounded"}),e.jsx("input",{type:"email",placeholder:"邮箱",className:"w-full px-3 py-2 border rounded"})]})]}),n===1&&e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"联系方式"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("input",{type:"tel",placeholder:"电话号码",className:"w-full px-3 py-2 border rounded"}),e.jsx("textarea",{placeholder:"地址",className:"w-full px-3 py-2 border rounded",rows:"3"})]})]}),n===2&&e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"偏好设置"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox"}),e.jsx("span",{children:"接收邮件通知"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox"}),e.jsx("span",{children:"接收短信通知"})]}),e.jsxs("select",{className:"w-full px-3 py-2 border rounded",children:[e.jsx("option",{children:"选择语言"}),e.jsx("option",{children:"中文"}),e.jsx("option",{children:"English"})]})]})]}),n===3&&e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-4xl mb-4",children:"🎉"}),e.jsx("h4",{className:"font-medium mb-2",children:"注册完成！"}),e.jsx("p",{className:"text-gray-600",children:"您的账户已成功创建，欢迎使用我们的服务。"})]})]}),e.jsxs("div",{className:"flex justify-between mt-6",children:[e.jsx("button",{className:`px-4 py-2 rounded ${t===0?"bg-gray-200 text-gray-400 cursor-not-allowed":"bg-gray-600 text-white hover:bg-gray-700"}`,onClick:r,disabled:t===0,children:"上一步"}),e.jsxs("span",{className:"flex items-center text-sm text-gray-600",children:[t+1," / ",s.length]}),e.jsx("button",{className:`px-4 py-2 rounded ${t===s.length-1?"bg-green-600 text-white hover:bg-green-700":"bg-blue-600 text-white hover:bg-blue-700"}`,onClick:t===s.length-1?()=>alert("完成注册！"):a,children:t===s.length-1?"完成":"下一步"})]})]})})]})};b.__docgenInfo={description:"",methods:[],displayName:"Variants"};x.__docgenInfo={description:"",methods:[],displayName:"WithDisabled"};p.__docgenInfo={description:"",methods:[],displayName:"DynamicTabs"};u.__docgenInfo={description:"",methods:[],displayName:"NestedContent"};h.__docgenInfo={description:"",methods:[],displayName:"TabsWithIcons"};v.__docgenInfo={description:"",methods:[],displayName:"ControlledTabs"};var y,f,T;g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  },
  render: args => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [{
      title: '主页',
      key: 'home'
    }, {
      title: '关于',
      key: 'about'
    }, {
      title: '服务',
      key: 'services'
    }, {
      title: '联系',
      key: 'contact'
    }];
    return <div className="w-96 p-6">\r
        <Tabs tabs={tabs} activeIndex={activeTab} variant={args.variant} onChange={(index, tab) => {
        setActiveTab(index);
        args.onChange?.(index, tab);
      }}>\r
          {({
          activeIndex
        }) => <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-xl mt-4">\r
              {activeIndex === 0 && <div>\r
                  <h3 className="text-lg font-semibold mb-2">主页内容</h3>\r
                  <p className="text-neutral-600 dark:text-neutral-400">欢迎来到我们的网站主页</p>\r
                </div>}\r
              {activeIndex === 1 && <div>\r
                  <h3 className="text-lg font-semibold mb-2">关于我们</h3>\r
                  <p className="text-neutral-600 dark:text-neutral-400">了解我们公司的历史和使命</p>\r
                </div>}\r
              {activeIndex === 2 && <div>\r
                  <h3 className="text-lg font-semibold mb-2">我们的服务</h3>\r
                  <p className="text-neutral-600 dark:text-neutral-400">查看我们提供的各种服务</p>\r
                </div>}\r
              {activeIndex === 3 && <div>\r
                  <h3 className="text-lg font-semibold mb-2">联系我们</h3>\r
                  <p className="text-neutral-600 dark:text-neutral-400">获取联系方式和地址信息</p>\r
                </div>}\r
            </div>}\r
        </Tabs>\r
      </div>;
  }
}`,...(T=(f=g.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var k,w,I;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [activeTab1, setActiveTab1] = useState(0);
  const [activeTab2, setActiveTab2] = useState(1);
  const [activeTab3, setActiveTab3] = useState(2);
  const tabs = [{
    title: '选项1',
    key: 'tab1'
  }, {
    title: '选项2',
    key: 'tab2'
  }, {
    title: '选项3',
    key: 'tab3'
  }];
  return <div className="space-y-8 w-96 p-6">\r
      <div>\r
        <h3 className="text-lg font-medium mb-4">默认样式</h3>\r
        <Tabs tabs={tabs} activeIndex={activeTab1} variant="default" onChange={setActiveTab1}>\r
          {({
          activeIndex
        }) => <div className="p-4 bg-neutral-50 rounded-xl mt-4">\r
              <p>默认样式内容 {activeIndex + 1}</p>\r
            </div>}\r
        </Tabs>\r
      </div>\r
      \r
      <div>\r
        <h3 className="text-lg font-medium mb-4">药丸样式</h3>\r
        <Tabs tabs={tabs} activeIndex={activeTab2} variant="pills" onChange={setActiveTab2}>\r
          {({
          activeIndex
        }) => <div className="p-4 bg-neutral-50 rounded-xl mt-4">\r
              <p>药丸样式内容 {activeIndex + 1}</p>\r
            </div>}\r
        </Tabs>\r
      </div>\r
      \r
      <div>\r
        <h3 className="text-lg font-medium mb-4">下划线样式</h3>\r
        <Tabs tabs={tabs} activeIndex={activeTab3} variant="underline" onChange={setActiveTab3}>\r
          {({
          activeIndex
        }) => <div className="p-4 bg-neutral-50 rounded-xl mt-4">\r
              <p>下划线样式内容 {activeIndex + 1}</p>\r
            </div>}\r
        </Tabs>\r
      </div>\r
    </div>;
}`,...(I=(w=b.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var C,S,A;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [{
    title: '可用',
    key: 'enabled'
  }, {
    title: '禁用',
    key: 'disabled',
    disabled: true
  }, {
    title: '可用2',
    key: 'enabled2'
  }, {
    title: '禁用2',
    key: 'disabled2',
    disabled: true
  }];
  return <div className="w-96 p-6">\r
      <h3 className="text-lg font-medium mb-4">禁用状态</h3>\r
      <Tabs tabs={tabs} activeIndex={activeTab} variant="default" onChange={setActiveTab}>\r
        {({
        activeIndex
      }) => <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-xl mt-4">\r
            <p>当前激活标签页: {activeIndex + 1}</p>\r
            <p className="text-sm text-gray-600 mt-2">\r
              标签页 "{tabs[activeIndex].title}" 处于激活状态\r
            </p>\r
          </div>}\r
      </Tabs>\r
    </div>;
}`,...(A=(S=x.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var _,W,$;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const [tabs, setTabs] = useState([{
    title: '标签 1',
    key: 'tab1',
    content: '这是第一个标签的内容'
  }, {
    title: '标签 2',
    key: 'tab2',
    content: '这是第二个标签的内容'
  }]);
  const [activeTab, setActiveTab] = useState(0);
  const [tabCounter, setTabCounter] = useState(3);
  const addTab = () => {
    const newTab = {
      title: \`标签 \${tabCounter}\`,
      key: \`tab\${tabCounter}\`,
      content: \`这是第\${tabCounter}个标签的内容\`
    };
    setTabs([...tabs, newTab]);
    setTabCounter(tabCounter + 1);
    setActiveTab(tabs.length); // 激活新添加的标签
  };
  const removeTab = indexToRemove => {
    if (tabs.length <= 1) return; // 至少保留一个标签

    const newTabs = tabs.filter((_, index) => index !== indexToRemove);
    setTabs(newTabs);

    // 调整激活标签索引
    if (activeTab >= indexToRemove) {
      setActiveTab(Math.max(0, activeTab - 1));
    }
  };
  return <div className="w-96 p-6">\r
      <div className="mb-4">\r
        <h3 className="text-lg font-medium mb-2">动态标签页</h3>\r
        <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700" onClick={addTab}>\r
          + 添加标签\r
        </button>\r
      </div>\r
      \r
      <Tabs tabs={tabs} activeIndex={activeTab} variant="default" onChange={setActiveTab}>\r
        {({
        activeIndex
      }) => <div className="p-4 bg-neutral-50 rounded-xl mt-4">\r
            <div className="flex items-center justify-between mb-3">\r
              <h4 className="font-medium">{tabs[activeIndex]?.title}</h4>\r
              {tabs.length > 1 && <button className="px-2 py-1 bg-red-100 text-red-600 rounded text-xs hover:bg-red-200" onClick={() => removeTab(activeIndex)}>\r
                  删除\r
                </button>}\r
            </div>\r
            <p className="text-sm text-gray-600">\r
              {tabs[activeIndex]?.content}\r
            </p>\r
          </div>}\r
      </Tabs>\r
    </div>;
}`,...($=(W=p.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var D,E,P;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const [activeTab, setActiveTab] = useState(0);
  const [subTab, setSubTab] = useState(0);
  const mainTabs = [{
    title: '产品',
    key: 'products'
  }, {
    title: '服务',
    key: 'services'
  }, {
    title: '支持',
    key: 'support'
  }];
  const productSubTabs = [{
    title: 'Web应用',
    key: 'web'
  }, {
    title: '移动应用',
    key: 'mobile'
  }, {
    title: 'API服务',
    key: 'api'
  }];
  return <div className="w-[600px] p-6">\r
      <h3 className="text-lg font-medium mb-4">嵌套内容标签页</h3>\r
      <Tabs tabs={mainTabs} activeIndex={activeTab} variant="underline" onChange={setActiveTab}>\r
        {({
        activeIndex
      }) => <div className="mt-6">\r
            {activeIndex === 0 && <div>\r
                <h4 className="text-lg font-semibold mb-4">我们的产品</h4>\r
                <Tabs tabs={productSubTabs} activeIndex={subTab} variant="pills" onChange={setSubTab}>\r
                  {({
              activeIndex: subIndex
            }) => <div className="p-4 bg-blue-50 rounded-lg mt-4">\r
                      {subIndex === 0 && <div>\r
                          <h5 className="font-medium mb-2">Web应用开发</h5>\r
                          <p className="text-sm text-gray-600">\r
                            提供现代化、响应式的Web应用开发服务，使用最新的前端技术栈。\r
                          </p>\r
                        </div>}\r
                      {subIndex === 1 && <div>\r
                          <h5 className="font-medium mb-2">移动应用开发</h5>\r
                          <p className="text-sm text-gray-600">\r
                            跨平台移动应用开发，支持iOS和Android平台。\r
                          </p>\r
                        </div>}\r
                      {subIndex === 2 && <div>\r
                          <h5 className="font-medium mb-2">API服务</h5>\r
                          <p className="text-sm text-gray-600">\r
                            RESTful API和GraphQL服务开发，提供可靠的后端支持。\r
                          </p>\r
                        </div>}\r
                    </div>}\r
                </Tabs>\r
              </div>}\r
            {activeIndex === 1 && <div className="p-4 bg-green-50 rounded-lg">\r
                <h4 className="font-medium mb-2">专业服务</h4>\r
                <ul className="text-sm text-gray-600 space-y-1">\r
                  <li>• 技术咨询</li>\r
                  <li>• 架构设计</li>\r
                  <li>• 代码审查</li>\r
                  <li>• 性能优化</li>\r
                </ul>\r
              </div>}\r
            {activeIndex === 2 && <div className="p-4 bg-yellow-50 rounded-lg">\r
                <h4 className="font-medium mb-2">技术支持</h4>\r
                <p className="text-sm text-gray-600 mb-3">\r
                  我们提供全面的技术支持服务：\r
                </p>\r
                <div className="grid grid-cols-2 gap-4 text-sm">\r
                  <div>\r
                    <h5 className="font-medium">在线支持</h5>\r
                    <p className="text-gray-600">24/7在线客服</p>\r
                  </div>\r
                  <div>\r
                    <h5 className="font-medium">文档资源</h5>\r
                    <p className="text-gray-600">详细的技术文档</p>\r
                  </div>\r
                </div>\r
              </div>}\r
          </div>}\r
      </Tabs>\r
    </div>;
}`,...(P=(E=u.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var R,O,V;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [{
    title: '🏠 首页',
    key: 'home'
  }, {
    title: '👤 用户',
    key: 'users'
  }, {
    title: '📊 分析',
    key: 'analytics'
  }, {
    title: '⚙️ 设置',
    key: 'settings'
  }];
  return <div className="w-96 p-6">\r
      <h3 className="text-lg font-medium mb-4">带图标的标签页</h3>\r
      <Tabs tabs={tabs} activeIndex={activeTab} variant="pills" onChange={setActiveTab}>\r
        {({
        activeIndex
      }) => <div className="p-4 bg-neutral-50 rounded-xl mt-4">\r
            {activeIndex === 0 && <div>\r
                <h4 className="font-medium mb-2">仪表板</h4>\r
                <div className="grid grid-cols-2 gap-4 text-sm">\r
                  <div className="p-3 bg-blue-100 rounded">\r
                    <div className="text-2xl font-bold text-blue-600">1,234</div>\r
                    <div className="text-blue-600">总用户数</div>\r
                  </div>\r
                  <div className="p-3 bg-green-100 rounded">\r
                    <div className="text-2xl font-bold text-green-600">89%</div>\r
                    <div className="text-green-600">系统正常运行</div>\r
                  </div>\r
                </div>\r
              </div>}\r
            {activeIndex === 1 && <div>\r
                <h4 className="font-medium mb-2">用户管理</h4>\r
                <div className="space-y-2 text-sm">\r
                  <div className="flex items-center gap-2 p-2 bg-white rounded">\r
                    <span>👤</span>\r
                    <span>张三 - 管理员</span>\r
                  </div>\r
                  <div className="flex items-center gap-2 p-2 bg-white rounded">\r
                    <span>👤</span>\r
                    <span>李四 - 用户</span>\r
                  </div>\r
                </div>\r
              </div>}\r
            {activeIndex === 2 && <div>\r
                <h4 className="font-medium mb-2">数据分析</h4>\r
                <div className="space-y-2 text-sm">\r
                  <div className="flex justify-between">\r
                    <span>页面访问量</span>\r
                    <span className="font-medium">12,345</span>\r
                  </div>\r
                  <div className="flex justify-between">\r
                    <span>用户活跃度</span>\r
                    <span className="font-medium">78%</span>\r
                  </div>\r
                  <div className="flex justify-between">\r
                    <span>转化率</span>\r
                    <span className="font-medium">3.2%</span>\r
                  </div>\r
                </div>\r
              </div>}\r
            {activeIndex === 3 && <div>\r
                <h4 className="font-medium mb-2">系统设置</h4>\r
                <div className="space-y-3 text-sm">\r
                  <label className="flex items-center gap-2">\r
                    <input type="checkbox" defaultChecked />\r
                    <span>启用通知</span>\r
                  </label>\r
                  <label className="flex items-center gap-2">\r
                    <input type="checkbox" />\r
                    <span>自动备份</span>\r
                  </label>\r
                  <label className="flex items-center gap-2">\r
                    <input type="checkbox" defaultChecked />\r
                    <span>安全模式</span>\r
                  </label>\r
                </div>\r
              </div>}\r
          </div>}\r
      </Tabs>\r
    </div>;
}`,...(V=(O=h.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var G,L,M;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  const [currentTab, setCurrentTab] = useState(1); // 从第二个标签开始
  const tabs = [{
    title: '步骤 1',
    key: 'step1'
  }, {
    title: '步骤 2',
    key: 'step2'
  }, {
    title: '步骤 3',
    key: 'step3'
  }, {
    title: '完成',
    key: 'complete'
  }];
  const nextStep = () => {
    if (currentTab < tabs.length - 1) {
      setCurrentTab(currentTab + 1);
    }
  };
  const prevStep = () => {
    if (currentTab > 0) {
      setCurrentTab(currentTab - 1);
    }
  };
  return <div className="w-[500px] p-6">\r
      <h3 className="text-lg font-medium mb-4">受控标签页 - 向导流程</h3>\r
      <Tabs tabs={tabs} activeIndex={currentTab} variant="default" onChange={setCurrentTab} // 允许点击切换，但主要通过按钮控制
    >\r
        {({
        activeIndex
      }) => <div className="mt-6">\r
            <div className="p-6 bg-neutral-50 rounded-xl min-h-[200px]">\r
              {activeIndex === 0 && <div>\r
                  <h4 className="font-medium mb-3">基本信息</h4>\r
                  <div className="space-y-3">\r
                    <input type="text" placeholder="姓名" className="w-full px-3 py-2 border rounded" />\r
                    <input type="email" placeholder="邮箱" className="w-full px-3 py-2 border rounded" />\r
                  </div>\r
                </div>}\r
              {activeIndex === 1 && <div>\r
                  <h4 className="font-medium mb-3">联系方式</h4>\r
                  <div className="space-y-3">\r
                    <input type="tel" placeholder="电话号码" className="w-full px-3 py-2 border rounded" />\r
                    <textarea placeholder="地址" className="w-full px-3 py-2 border rounded" rows="3" />\r
                  </div>\r
                </div>}\r
              {activeIndex === 2 && <div>\r
                  <h4 className="font-medium mb-3">偏好设置</h4>\r
                  <div className="space-y-3">\r
                    <label className="flex items-center gap-2">\r
                      <input type="checkbox" />\r
                      <span>接收邮件通知</span>\r
                    </label>\r
                    <label className="flex items-center gap-2">\r
                      <input type="checkbox" />\r
                      <span>接收短信通知</span>\r
                    </label>\r
                    <select className="w-full px-3 py-2 border rounded">\r
                      <option>选择语言</option>\r
                      <option>中文</option>\r
                      <option>English</option>\r
                    </select>\r
                  </div>\r
                </div>}\r
              {activeIndex === 3 && <div className="text-center">\r
                  <div className="text-4xl mb-4">🎉</div>\r
                  <h4 className="font-medium mb-2">注册完成！</h4>\r
                  <p className="text-gray-600">\r
                    您的账户已成功创建，欢迎使用我们的服务。\r
                  </p>\r
                </div>}\r
            </div>\r
            \r
            <div className="flex justify-between mt-6">\r
              <button className={\`px-4 py-2 rounded \${currentTab === 0 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-600 text-white hover:bg-gray-700'}\`} onClick={prevStep} disabled={currentTab === 0}>\r
                上一步\r
              </button>\r
              \r
              <span className="flex items-center text-sm text-gray-600">\r
                {currentTab + 1} / {tabs.length}\r
              </span>\r
              \r
              <button className={\`px-4 py-2 rounded \${currentTab === tabs.length - 1 ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-blue-600 text-white hover:bg-blue-700'}\`} onClick={currentTab === tabs.length - 1 ? () => alert('完成注册！') : nextStep}>\r
                {currentTab === tabs.length - 1 ? '完成' : '下一步'}\r
              </button>\r
            </div>\r
          </div>}\r
      </Tabs>\r
    </div>;
}`,...(M=(L=v.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const F=["Default","Variants","WithDisabled","DynamicTabs","NestedContent","TabsWithIcons","ControlledTabs"];export{v as ControlledTabs,g as Default,p as DynamicTabs,u as NestedContent,h as TabsWithIcons,b as Variants,x as WithDisabled,F as __namedExportsOrder,B as default};
