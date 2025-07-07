import{r as c,j as e}from"./iframe-DqwHGwZR.js";import{r as z}from"./index-BjOamUOo.js";import"./index-7Rf8qmk0.js";const p=({open:n=!1,onClose:t=()=>{},placement:s="right",width:l=400,children:a,header:i,footer:r})=>(c.useEffect(()=>{if(!n)return;const o=d=>{d.key==="Escape"&&t()};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[n,t]),typeof document>"u"?null:z.createPortal(n?e.jsxs("div",{className:"slideover-wrapper",role:"dialog","aria-modal":"true",children:[e.jsx("div",{className:"slideover-overlay",onClick:t}),e.jsxs("div",{className:`slideover-panel slideover-${s}`,style:{width:typeof l=="number"?`${l}px`:l},children:[i&&e.jsx("header",{className:"slideover-header",children:i}),e.jsx("div",{className:"slideover-body",children:a}),r&&e.jsx("footer",{className:"slideover-footer",children:r}),e.jsx("button",{className:"slideover-close",onClick:t,"aria-label":"关闭",children:"✕"})]}),e.jsx("style",{children:`
          .slideover-wrapper{position:fixed;inset:0;z-index:3000;display:flex;}
          .slideover-overlay{flex:1 1 auto;background:rgba(0,0,0,0.4);backdrop-filter:blur(2px);} 
          .slideover-panel{position:relative;background:var(--wc-neutral-0);max-height:100vh;overflow-y:auto;display:flex;flex-direction:column;}
          .slideover-left{order:0;} .slideover-right{order:1;}
          .slideover-close{position:absolute;top:8px;right:8px;background:none;border:none;font-size:1.25rem;cursor:pointer;}
          .slideover-header,.slideover-footer{padding:16px;border-bottom:1px solid var(--wc-neutral-200);} 
          .slideover-footer{border-top:1px solid var(--wc-neutral-200);border-bottom:none;}
          .slideover-body{padding:16px;flex:1 1 auto;}
          .slideover-enter{opacity:0;transform:translateX(${s==="right"?"100%":"-100%"});}
        `})]}):null,document.body)),W={title:"Components/SlideOver (React)",component:p,parameters:{layout:"centered",docs:{description:{component:"Watercolor 侧边滑出面板组件，支持左右两侧滑出，可自定义宽度。"}}},tags:["autodocs"],argTypes:{open:{description:"是否显示",control:{type:"boolean"}},placement:{description:"滑出位置",control:{type:"select"},options:["left","right"]},width:{description:"面板宽度",control:{type:"text"}},onClose:{action:"close",description:"关闭时触发"}}},g={args:{placement:"right",width:"400px"},render:n=>{const[t,s]=c.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx("button",{className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",onClick:()=>s(!0),children:"打开面板"}),e.jsx(p,{...n,open:t,onClose:()=>{var l;s(!1),(l=n.onClose)==null||l.call(n)},children:e.jsxs("div",{className:"h-full flex flex-col",children:[e.jsx("div",{className:"flex-shrink-0 px-6 py-4 border-b",children:e.jsx("h3",{className:"text-lg font-semibold",children:"侧边栏标题"})}),e.jsx("div",{className:"flex-1 px-6 py-4",children:e.jsx("p",{className:"text-sm text-gray-700 mb-4",children:"这里可以放任何内容，例如表单、信息等。"})}),e.jsx("div",{className:"flex-shrink-0 px-6 py-4 border-t",children:e.jsx("button",{className:"px-4 py-2 bg-gray-200 rounded hover:bg-gray-300",onClick:()=>s(!1),children:"关闭"})})]})})]})}},m=()=>{const[n,t]=c.useState({left:!1,right:!1}),s=a=>{t(i=>({...i,[a]:!0}))},l=a=>{t(i=>({...i,[a]:!1}))};return e.jsxs("div",{className:"p-8 text-center",children:[e.jsx("h3",{className:"text-lg font-semibold mb-6",children:"不同滑出位置"}),e.jsxs("div",{className:"flex justify-center gap-4 mb-8",children:[e.jsx("button",{className:"px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700",onClick:()=>s("left"),children:"从左侧滑出"}),e.jsx("button",{className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",onClick:()=>s("right"),children:"从右侧滑出"})]}),e.jsx(p,{open:n.left,placement:"left",width:"350px",onClose:()=>l("left"),children:e.jsxs("div",{className:"h-full flex flex-col bg-purple-50",children:[e.jsx("div",{className:"flex-shrink-0 px-6 py-4 border-b bg-purple-600 text-white",children:e.jsx("h3",{className:"text-lg font-semibold",children:"左侧导航"})}),e.jsx("div",{className:"flex-1 px-6 py-4",children:e.jsxs("nav",{className:"space-y-2",children:[e.jsx("a",{href:"#",className:"block px-3 py-2 text-purple-700 hover:bg-purple-100 rounded",children:"首页"}),e.jsx("a",{href:"#",className:"block px-3 py-2 text-purple-700 hover:bg-purple-100 rounded",children:"产品"}),e.jsx("a",{href:"#",className:"block px-3 py-2 text-purple-700 hover:bg-purple-100 rounded",children:"服务"}),e.jsx("a",{href:"#",className:"block px-3 py-2 text-purple-700 hover:bg-purple-100 rounded",children:"关于我们"}),e.jsx("a",{href:"#",className:"block px-3 py-2 text-purple-700 hover:bg-purple-100 rounded",children:"联系我们"})]})})]})}),e.jsx(p,{open:n.right,placement:"right",width:"400px",onClose:()=>l("right"),children:e.jsxs("div",{className:"h-full flex flex-col",children:[e.jsx("div",{className:"flex-shrink-0 px-6 py-4 border-b",children:e.jsx("h3",{className:"text-lg font-semibold",children:"设置面板"})}),e.jsxs("div",{className:"flex-1 px-6 py-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"主题"}),e.jsxs("select",{className:"w-full px-3 py-2 border rounded",children:[e.jsx("option",{children:"浅色主题"}),e.jsx("option",{children:"深色主题"}),e.jsx("option",{children:"自动"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"语言"}),e.jsxs("select",{className:"w-full px-3 py-2 border rounded",children:[e.jsx("option",{children:"中文"}),e.jsx("option",{children:"English"}),e.jsx("option",{children:"日本語"})]})]}),e.jsx("div",{children:e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",className:"mr-2"}),e.jsx("span",{className:"text-sm",children:"接收通知"})]})})]}),e.jsx("div",{className:"flex-shrink-0 px-6 py-4 border-t",children:e.jsx("button",{className:"w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700",onClick:()=>l("right"),children:"保存设置"})})]})})]})},x=()=>{const[n,t]=c.useState(null),s=[{label:"窄面板 (280px)",width:"280px"},{label:"标准面板 (400px)",width:"400px"},{label:"宽面板 (500px)",width:"500px"},{label:"超宽面板 (600px)",width:"600px"}];return e.jsxs("div",{className:"p-8",children:[e.jsx("h3",{className:"text-lg font-semibold mb-6",children:"不同宽度"}),e.jsx("div",{className:"grid grid-cols-2 gap-4 max-w-lg",children:s.map(({label:l,width:a},i)=>e.jsx("button",{className:"px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded text-sm font-medium",onClick:()=>t(i),children:l},i))}),s.map(({label:l,width:a},i)=>e.jsx(p,{open:n===i,placement:"right",width:a,onClose:()=>t(null),children:e.jsxs("div",{className:"h-full flex flex-col",children:[e.jsxs("div",{className:"flex-shrink-0 px-6 py-4 border-b",children:[e.jsx("h3",{className:"text-lg font-semibold",children:l}),e.jsxs("p",{className:"text-sm text-gray-600",children:["宽度: ",a]})]}),e.jsx("div",{className:"flex-1 px-6 py-4",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"h-4 bg-gray-200 rounded"}),e.jsx("div",{className:"h-4 bg-gray-200 rounded w-3/4"}),e.jsx("div",{className:"h-4 bg-gray-200 rounded w-1/2"}),e.jsx("div",{className:"mt-6 p-4 bg-blue-50 rounded",children:e.jsxs("p",{className:"text-sm text-blue-800",children:["这是一个 ",a," 宽度的面板示例。 您可以在这里放置任何内容。"]})})]})}),e.jsx("div",{className:"flex-shrink-0 px-6 py-4 border-t",children:e.jsx("button",{className:"px-4 py-2 bg-gray-200 rounded hover:bg-gray-300",onClick:()=>t(null),children:"关闭"})})]})},i))]})},u=()=>{const[n,t]=c.useState(!1),[s,l]=c.useState({title:"",description:"",category:"",priority:"medium",assignee:"",dueDate:"",tags:""}),a=(r,o)=>{l(d=>({...d,[r]:o}))},i=r=>{r.preventDefault(),alert(`表单数据：
`+JSON.stringify(s,null,2)),t(!1),l({title:"",description:"",category:"",priority:"medium",assignee:"",dueDate:"",tags:""})};return e.jsxs("div",{className:"p-8",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"创建任务表单"}),e.jsx("button",{className:"px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700",onClick:()=>t(!0),children:"+ 新建任务"}),e.jsx(p,{open:n,placement:"right",width:"450px",onClose:()=>t(!1),children:e.jsxs("form",{onSubmit:i,className:"h-full flex flex-col",children:[e.jsxs("div",{className:"flex-shrink-0 px-6 py-4 border-b",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"创建新任务"}),e.jsx("p",{className:"text-sm text-gray-600",children:"填写下方信息来创建一个新任务"})]}),e.jsx("div",{className:"flex-1 px-6 py-4 overflow-y-auto",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"任务标题 *"}),e.jsx("input",{type:"text",required:!0,className:"w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"输入任务标题",value:s.title,onChange:r=>a("title",r.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"描述"}),e.jsx("textarea",{rows:4,className:"w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"任务详细描述...",value:s.description,onChange:r=>a("description",r.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"分类"}),e.jsxs("select",{className:"w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500",value:s.category,onChange:r=>a("category",r.target.value),children:[e.jsx("option",{value:"",children:"选择分类"}),e.jsx("option",{value:"feature",children:"新功能"}),e.jsx("option",{value:"bug",children:"Bug修复"}),e.jsx("option",{value:"improvement",children:"优化改进"}),e.jsx("option",{value:"documentation",children:"文档"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"优先级"}),e.jsx("div",{className:"flex gap-2",children:["low","medium","high","urgent"].map(r=>e.jsxs("label",{className:"flex items-center",children:[e.jsx("input",{type:"radio",name:"priority",value:r,checked:s.priority===r,onChange:o=>a("priority",o.target.value),className:"mr-1"}),e.jsx("span",{className:"text-sm capitalize",children:r})]},r))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"负责人"}),e.jsx("input",{type:"text",className:"w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"指派给...",value:s.assignee,onChange:r=>a("assignee",r.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"截止日期"}),e.jsx("input",{type:"date",className:"w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500",value:s.dueDate,onChange:r=>a("dueDate",r.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"标签"}),e.jsx("input",{type:"text",className:"w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"用逗号分隔多个标签",value:s.tags,onChange:r=>a("tags",r.target.value)})]})]})}),e.jsx("div",{className:"flex-shrink-0 px-6 py-4 border-t",children:e.jsxs("div",{className:"flex gap-3",children:[e.jsx("button",{type:"submit",className:"flex-1 py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700",children:"创建任务"}),e.jsx("button",{type:"button",className:"px-4 py-2 bg-gray-200 rounded hover:bg-gray-300",onClick:()=>t(!1),children:"取消"})]})})]})})]})},h=()=>{const[n,t]=c.useState(!1),s={name:"张三",email:"zhangsan@example.com",role:"前端开发工程师",department:"技术部",avatar:"👤",joinDate:"2023-01-15",phone:"+86 138 0013 8000",address:"北京市朝阳区"};return e.jsxs("div",{className:"p-8",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"用户资料"}),e.jsx("button",{className:"px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700",onClick:()=>t(!0),children:"查看用户资料"}),e.jsx(p,{open:n,placement:"right",width:"420px",onClose:()=>t(!1),children:e.jsxs("div",{className:"h-full flex flex-col",children:[e.jsx("div",{className:"flex-shrink-0 px-6 py-4 border-b",children:e.jsx("h3",{className:"text-lg font-semibold",children:"用户资料"})}),e.jsxs("div",{className:"flex-1 px-6 py-6 overflow-y-auto",children:[e.jsxs("div",{className:"text-center mb-6",children:[e.jsx("div",{className:"w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-3xl mx-auto mb-4",children:s.avatar}),e.jsx("h4",{className:"text-xl font-semibold",children:s.name}),e.jsx("p",{className:"text-gray-600",children:s.role})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-gray-50 p-4 rounded",children:[e.jsx("h5",{className:"font-medium mb-3",children:"联系信息"}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"邮箱:"}),e.jsx("span",{children:s.email})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"电话:"}),e.jsx("span",{children:s.phone})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"地址:"}),e.jsx("span",{children:s.address})]})]})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded",children:[e.jsx("h5",{className:"font-medium mb-3",children:"工作信息"}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"部门:"}),e.jsx("span",{children:s.department})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"职位:"}),e.jsx("span",{children:s.role})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-600",children:"入职日期:"}),e.jsx("span",{children:s.joinDate})]})]})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded",children:[e.jsx("h5",{className:"font-medium mb-3",children:"快速操作"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("button",{className:"w-full py-2 text-left px-3 text-sm hover:bg-gray-100 rounded",children:"📧 发送邮件"}),e.jsx("button",{className:"w-full py-2 text-left px-3 text-sm hover:bg-gray-100 rounded",children:"💬 发起聊天"}),e.jsx("button",{className:"w-full py-2 text-left px-3 text-sm hover:bg-gray-100 rounded",children:"📋 查看任务"}),e.jsx("button",{className:"w-full py-2 text-left px-3 text-sm hover:bg-gray-100 rounded",children:"⚙️ 编辑资料"})]})]})]})]}),e.jsx("div",{className:"flex-shrink-0 px-6 py-4 border-t",children:e.jsx("button",{className:"w-full py-2 px-4 bg-gray-200 rounded hover:bg-gray-300",onClick:()=>t(!1),children:"关闭"})})]})})]})},b=()=>{const[n,t]=c.useState(!1),[s,l]=c.useState([{id:1,name:"iPhone 15 Pro",price:7999,quantity:1,image:"📱"},{id:2,name:"AirPods Pro",price:1999,quantity:2,image:"🎧"},{id:3,name:"MacBook Air",price:8999,quantity:1,image:"💻"}]),a=(r,o)=>{o<=0?l(s.filter(d=>d.id!==r)):l(s.map(d=>d.id===r?{...d,quantity:o}:d))},i=s.reduce((r,o)=>r+o.price*o.quantity,0);return e.jsxs("div",{className:"p-8",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"购物车示例"}),e.jsxs("button",{className:"px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 relative",onClick:()=>t(!0),children:["🛒 购物车 (",s.length,")",s.length>0&&e.jsx("span",{className:"absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center",children:s.reduce((r,o)=>r+o.quantity,0)})]}),e.jsx(p,{open:n,placement:"right",width:"450px",onClose:()=>t(!1),children:e.jsxs("div",{className:"h-full flex flex-col",children:[e.jsxs("div",{className:"flex-shrink-0 px-6 py-4 border-b",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"购物车"}),e.jsxs("p",{className:"text-sm text-gray-600",children:[s.length," 件商品"]})]}),e.jsx("div",{className:"flex-1 px-6 py-4 overflow-y-auto",children:s.length===0?e.jsxs("div",{className:"text-center py-8",children:[e.jsx("div",{className:"text-4xl mb-4",children:"🛒"}),e.jsx("p",{className:"text-gray-500",children:"购物车为空"})]}):e.jsx("div",{className:"space-y-4",children:s.map(r=>e.jsxs("div",{className:"flex items-center space-x-3 p-3 border rounded",children:[e.jsx("div",{className:"text-2xl",children:r.image}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"font-medium",children:r.name}),e.jsxs("p",{className:"text-sm text-gray-600",children:["¥",r.price.toLocaleString()]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("button",{className:"w-8 h-8 flex items-center justify-center bg-gray-100 rounded",onClick:()=>a(r.id,r.quantity-1),children:"-"}),e.jsx("span",{className:"w-8 text-center",children:r.quantity}),e.jsx("button",{className:"w-8 h-8 flex items-center justify-center bg-gray-100 rounded",onClick:()=>a(r.id,r.quantity+1),children:"+"})]}),e.jsx("button",{className:"text-red-500 hover:text-red-700",onClick:()=>a(r.id,0),children:"×"})]},r.id))})}),s.length>0&&e.jsxs("div",{className:"flex-shrink-0 px-6 py-4 border-t",children:[e.jsx("div",{className:"mb-4",children:e.jsxs("div",{className:"flex justify-between text-lg font-semibold",children:[e.jsx("span",{children:"总计:"}),e.jsxs("span",{children:["¥",i.toLocaleString()]})]})}),e.jsx("button",{className:"w-full py-3 px-4 bg-orange-600 text-white rounded hover:bg-orange-700 font-medium",onClick:()=>alert("跳转到结算页面"),children:"去结算"})]})]})})]})};m.__docgenInfo={description:"",methods:[],displayName:"Placements"};x.__docgenInfo={description:"",methods:[],displayName:"Widths"};u.__docgenInfo={description:"",methods:[],displayName:"FormExample"};h.__docgenInfo={description:"",methods:[],displayName:"UserProfile"};b.__docgenInfo={description:"",methods:[],displayName:"ShoppingCart"};var v,f,y;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    placement: 'right',
    width: '400px'
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return <div className="p-8">\r
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={() => setOpen(true)}>\r
          打开面板\r
        </button>\r
        <SlideOver {...args} open={open} onClose={() => {
        setOpen(false);
        args.onClose?.();
      }}>\r
          <div className="h-full flex flex-col">\r
            <div className="flex-shrink-0 px-6 py-4 border-b">\r
              <h3 className="text-lg font-semibold">侧边栏标题</h3>\r
            </div>\r
            \r
            <div className="flex-1 px-6 py-4">\r
              <p className="text-sm text-gray-700 mb-4">\r
                这里可以放任何内容，例如表单、信息等。\r
              </p>\r
            </div>\r
            \r
            <div className="flex-shrink-0 px-6 py-4 border-t">\r
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300" onClick={() => setOpen(false)}>\r
                关闭\r
              </button>\r
            </div>\r
          </div>\r
        </SlideOver>\r
      </div>;
  }
}`,...(y=(f=g.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var N,j,w;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const [panels, setPanels] = useState({
    left: false,
    right: false
  });
  const openPanel = placement => {
    setPanels(prev => ({
      ...prev,
      [placement]: true
    }));
  };
  const closePanel = placement => {
    setPanels(prev => ({
      ...prev,
      [placement]: false
    }));
  };
  return <div className="p-8 text-center">\r
      <h3 className="text-lg font-semibold mb-6">不同滑出位置</h3>\r
      \r
      <div className="flex justify-center gap-4 mb-8">\r
        <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700" onClick={() => openPanel('left')}>\r
          从左侧滑出\r
        </button>\r
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={() => openPanel('right')}>\r
          从右侧滑出\r
        </button>\r
      </div>\r
\r
      {/* 左侧面板 */}\r
      <SlideOver open={panels.left} placement="left" width="350px" onClose={() => closePanel('left')}>\r
        <div className="h-full flex flex-col bg-purple-50">\r
          <div className="flex-shrink-0 px-6 py-4 border-b bg-purple-600 text-white">\r
            <h3 className="text-lg font-semibold">左侧导航</h3>\r
          </div>\r
          \r
          <div className="flex-1 px-6 py-4">\r
            <nav className="space-y-2">\r
              <a href="#" className="block px-3 py-2 text-purple-700 hover:bg-purple-100 rounded">首页</a>\r
              <a href="#" className="block px-3 py-2 text-purple-700 hover:bg-purple-100 rounded">产品</a>\r
              <a href="#" className="block px-3 py-2 text-purple-700 hover:bg-purple-100 rounded">服务</a>\r
              <a href="#" className="block px-3 py-2 text-purple-700 hover:bg-purple-100 rounded">关于我们</a>\r
              <a href="#" className="block px-3 py-2 text-purple-700 hover:bg-purple-100 rounded">联系我们</a>\r
            </nav>\r
          </div>\r
        </div>\r
      </SlideOver>\r
\r
      {/* 右侧面板 */}\r
      <SlideOver open={panels.right} placement="right" width="400px" onClose={() => closePanel('right')}>\r
        <div className="h-full flex flex-col">\r
          <div className="flex-shrink-0 px-6 py-4 border-b">\r
            <h3 className="text-lg font-semibold">设置面板</h3>\r
          </div>\r
          \r
          <div className="flex-1 px-6 py-4 space-y-4">\r
            <div>\r
              <label className="block text-sm font-medium mb-2">主题</label>\r
              <select className="w-full px-3 py-2 border rounded">\r
                <option>浅色主题</option>\r
                <option>深色主题</option>\r
                <option>自动</option>\r
              </select>\r
            </div>\r
            \r
            <div>\r
              <label className="block text-sm font-medium mb-2">语言</label>\r
              <select className="w-full px-3 py-2 border rounded">\r
                <option>中文</option>\r
                <option>English</option>\r
                <option>日本語</option>\r
              </select>\r
            </div>\r
            \r
            <div>\r
              <label className="flex items-center">\r
                <input type="checkbox" className="mr-2" />\r
                <span className="text-sm">接收通知</span>\r
              </label>\r
            </div>\r
          </div>\r
          \r
          <div className="flex-shrink-0 px-6 py-4 border-t">\r
            <button className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={() => closePanel('right')}>\r
              保存设置\r
            </button>\r
          </div>\r
        </div>\r
      </SlideOver>\r
    </div>;
}`,...(w=(j=m.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var k,C,S;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [activePanel, setActivePanel] = useState(null);
  const widths = [{
    label: '窄面板 (280px)',
    width: '280px'
  }, {
    label: '标准面板 (400px)',
    width: '400px'
  }, {
    label: '宽面板 (500px)',
    width: '500px'
  }, {
    label: '超宽面板 (600px)',
    width: '600px'
  }];
  return <div className="p-8">\r
      <h3 className="text-lg font-semibold mb-6">不同宽度</h3>\r
      \r
      <div className="grid grid-cols-2 gap-4 max-w-lg">\r
        {widths.map(({
        label,
        width
      }, index) => <button key={index} className="px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded text-sm font-medium" onClick={() => setActivePanel(index)}>\r
            {label}\r
          </button>)}\r
      </div>\r
\r
      {widths.map(({
      label,
      width
    }, index) => <SlideOver key={index} open={activePanel === index} placement="right" width={width} onClose={() => setActivePanel(null)}>\r
          <div className="h-full flex flex-col">\r
            <div className="flex-shrink-0 px-6 py-4 border-b">\r
              <h3 className="text-lg font-semibold">{label}</h3>\r
              <p className="text-sm text-gray-600">宽度: {width}</p>\r
            </div>\r
            \r
            <div className="flex-1 px-6 py-4">\r
              <div className="space-y-4">\r
                <div className="h-4 bg-gray-200 rounded"></div>\r
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>\r
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>\r
                \r
                <div className="mt-6 p-4 bg-blue-50 rounded">\r
                  <p className="text-sm text-blue-800">\r
                    这是一个 {width} 宽度的面板示例。\r
                    您可以在这里放置任何内容。\r
                  </p>\r
                </div>\r
              </div>\r
            </div>\r
            \r
            <div className="flex-shrink-0 px-6 py-4 border-t">\r
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300" onClick={() => setActivePanel(null)}>\r
                关闭\r
              </button>\r
            </div>\r
          </div>\r
        </SlideOver>)}\r
    </div>;
}`,...(S=(C=x.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var O,P,D;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    priority: 'medium',
    assignee: '',
    dueDate: '',
    tags: ''
  });
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    alert('表单数据：\\n' + JSON.stringify(formData, null, 2));
    setOpen(false);
    // 重置表单
    setFormData({
      title: '',
      description: '',
      category: '',
      priority: 'medium',
      assignee: '',
      dueDate: '',
      tags: ''
    });
  };
  return <div className="p-8">\r
      <h3 className="text-lg font-semibold mb-4">创建任务表单</h3>\r
      <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700" onClick={() => setOpen(true)}>\r
        + 新建任务\r
      </button>\r
\r
      <SlideOver open={open} placement="right" width="450px" onClose={() => setOpen(false)}>\r
        <form onSubmit={handleSubmit} className="h-full flex flex-col">\r
          <div className="flex-shrink-0 px-6 py-4 border-b">\r
            <h3 className="text-lg font-semibold">创建新任务</h3>\r
            <p className="text-sm text-gray-600">填写下方信息来创建一个新任务</p>\r
          </div>\r
          \r
          <div className="flex-1 px-6 py-4 overflow-y-auto">\r
            <div className="space-y-4">\r
              <div>\r
                <label className="block text-sm font-medium mb-2">任务标题 *</label>\r
                <input type="text" required className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="输入任务标题" value={formData.title} onChange={e => handleInputChange('title', e.target.value)} />\r
              </div>\r
\r
              <div>\r
                <label className="block text-sm font-medium mb-2">描述</label>\r
                <textarea rows={4} className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="任务详细描述..." value={formData.description} onChange={e => handleInputChange('description', e.target.value)} />\r
              </div>\r
\r
              <div>\r
                <label className="block text-sm font-medium mb-2">分类</label>\r
                <select className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500" value={formData.category} onChange={e => handleInputChange('category', e.target.value)}>\r
                  <option value="">选择分类</option>\r
                  <option value="feature">新功能</option>\r
                  <option value="bug">Bug修复</option>\r
                  <option value="improvement">优化改进</option>\r
                  <option value="documentation">文档</option>\r
                </select>\r
              </div>\r
\r
              <div>\r
                <label className="block text-sm font-medium mb-2">优先级</label>\r
                <div className="flex gap-2">\r
                  {['low', 'medium', 'high', 'urgent'].map(priority => <label key={priority} className="flex items-center">\r
                      <input type="radio" name="priority" value={priority} checked={formData.priority === priority} onChange={e => handleInputChange('priority', e.target.value)} className="mr-1" />\r
                      <span className="text-sm capitalize">{priority}</span>\r
                    </label>)}\r
                </div>\r
              </div>\r
\r
              <div>\r
                <label className="block text-sm font-medium mb-2">负责人</label>\r
                <input type="text" className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="指派给..." value={formData.assignee} onChange={e => handleInputChange('assignee', e.target.value)} />\r
              </div>\r
\r
              <div>\r
                <label className="block text-sm font-medium mb-2">截止日期</label>\r
                <input type="date" className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500" value={formData.dueDate} onChange={e => handleInputChange('dueDate', e.target.value)} />\r
              </div>\r
\r
              <div>\r
                <label className="block text-sm font-medium mb-2">标签</label>\r
                <input type="text" className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="用逗号分隔多个标签" value={formData.tags} onChange={e => handleInputChange('tags', e.target.value)} />\r
              </div>\r
            </div>\r
          </div>\r
          \r
          <div className="flex-shrink-0 px-6 py-4 border-t">\r
            <div className="flex gap-3">\r
              <button type="submit" className="flex-1 py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700">\r
                创建任务\r
              </button>\r
              <button type="button" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300" onClick={() => setOpen(false)}>\r
                取消\r
              </button>\r
            </div>\r
          </div>\r
        </form>\r
      </SlideOver>\r
    </div>;
}`,...(D=(P=u.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var q,I,E;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  const user = {
    name: '张三',
    email: 'zhangsan@example.com',
    role: '前端开发工程师',
    department: '技术部',
    avatar: '👤',
    joinDate: '2023-01-15',
    phone: '+86 138 0013 8000',
    address: '北京市朝阳区'
  };
  return <div className="p-8">\r
      <h3 className="text-lg font-semibold mb-4">用户资料</h3>\r
      <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700" onClick={() => setOpen(true)}>\r
        查看用户资料\r
      </button>\r
\r
      <SlideOver open={open} placement="right" width="420px" onClose={() => setOpen(false)}>\r
        <div className="h-full flex flex-col">\r
          <div className="flex-shrink-0 px-6 py-4 border-b">\r
            <h3 className="text-lg font-semibold">用户资料</h3>\r
          </div>\r
          \r
          <div className="flex-1 px-6 py-6 overflow-y-auto">\r
            {/* 头像和基本信息 */}\r
            <div className="text-center mb-6">\r
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">\r
                {user.avatar}\r
              </div>\r
              <h4 className="text-xl font-semibold">{user.name}</h4>\r
              <p className="text-gray-600">{user.role}</p>\r
            </div>\r
\r
            {/* 详细信息 */}\r
            <div className="space-y-4">\r
              <div className="bg-gray-50 p-4 rounded">\r
                <h5 className="font-medium mb-3">联系信息</h5>\r
                <div className="space-y-2 text-sm">\r
                  <div className="flex justify-between">\r
                    <span className="text-gray-600">邮箱:</span>\r
                    <span>{user.email}</span>\r
                  </div>\r
                  <div className="flex justify-between">\r
                    <span className="text-gray-600">电话:</span>\r
                    <span>{user.phone}</span>\r
                  </div>\r
                  <div className="flex justify-between">\r
                    <span className="text-gray-600">地址:</span>\r
                    <span>{user.address}</span>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <div className="bg-gray-50 p-4 rounded">\r
                <h5 className="font-medium mb-3">工作信息</h5>\r
                <div className="space-y-2 text-sm">\r
                  <div className="flex justify-between">\r
                    <span className="text-gray-600">部门:</span>\r
                    <span>{user.department}</span>\r
                  </div>\r
                  <div className="flex justify-between">\r
                    <span className="text-gray-600">职位:</span>\r
                    <span>{user.role}</span>\r
                  </div>\r
                  <div className="flex justify-between">\r
                    <span className="text-gray-600">入职日期:</span>\r
                    <span>{user.joinDate}</span>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <div className="bg-gray-50 p-4 rounded">\r
                <h5 className="font-medium mb-3">快速操作</h5>\r
                <div className="space-y-2">\r
                  <button className="w-full py-2 text-left px-3 text-sm hover:bg-gray-100 rounded">\r
                    📧 发送邮件\r
                  </button>\r
                  <button className="w-full py-2 text-left px-3 text-sm hover:bg-gray-100 rounded">\r
                    💬 发起聊天\r
                  </button>\r
                  <button className="w-full py-2 text-left px-3 text-sm hover:bg-gray-100 rounded">\r
                    📋 查看任务\r
                  </button>\r
                  <button className="w-full py-2 text-left px-3 text-sm hover:bg-gray-100 rounded">\r
                    ⚙️ 编辑资料\r
                  </button>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          \r
          <div className="flex-shrink-0 px-6 py-4 border-t">\r
            <button className="w-full py-2 px-4 bg-gray-200 rounded hover:bg-gray-300" onClick={() => setOpen(false)}>\r
              关闭\r
            </button>\r
          </div>\r
        </div>\r
      </SlideOver>\r
    </div>;
}`,...(E=(I=h.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var _,A,F;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([{
    id: 1,
    name: 'iPhone 15 Pro',
    price: 7999,
    quantity: 1,
    image: '📱'
  }, {
    id: 2,
    name: 'AirPods Pro',
    price: 1999,
    quantity: 2,
    image: '🎧'
  }, {
    id: 3,
    name: 'MacBook Air',
    price: 8999,
    quantity: 1,
    image: '💻'
  }]);
  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      setItems(items.filter(item => item.id !== id));
    } else {
      setItems(items.map(item => item.id === id ? {
        ...item,
        quantity
      } : item));
    }
  };
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return <div className="p-8">\r
      <h3 className="text-lg font-semibold mb-4">购物车示例</h3>\r
      <button className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 relative" onClick={() => setOpen(true)}>\r
        🛒 购物车 ({items.length})\r
        {items.length > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">\r
            {items.reduce((sum, item) => sum + item.quantity, 0)}\r
          </span>}\r
      </button>\r
\r
      <SlideOver open={open} placement="right" width="450px" onClose={() => setOpen(false)}>\r
        <div className="h-full flex flex-col">\r
          <div className="flex-shrink-0 px-6 py-4 border-b">\r
            <h3 className="text-lg font-semibold">购物车</h3>\r
            <p className="text-sm text-gray-600">{items.length} 件商品</p>\r
          </div>\r
          \r
          <div className="flex-1 px-6 py-4 overflow-y-auto">\r
            {items.length === 0 ? <div className="text-center py-8">\r
                <div className="text-4xl mb-4">🛒</div>\r
                <p className="text-gray-500">购物车为空</p>\r
              </div> : <div className="space-y-4">\r
                {items.map(item => <div key={item.id} className="flex items-center space-x-3 p-3 border rounded">\r
                    <div className="text-2xl">{item.image}</div>\r
                    <div className="flex-1">\r
                      <h4 className="font-medium">{item.name}</h4>\r
                      <p className="text-sm text-gray-600">¥{item.price.toLocaleString()}</p>\r
                    </div>\r
                    <div className="flex items-center space-x-2">\r
                      <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded" onClick={() => updateQuantity(item.id, item.quantity - 1)}>\r
                        -\r
                      </button>\r
                      <span className="w-8 text-center">{item.quantity}</span>\r
                      <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded" onClick={() => updateQuantity(item.id, item.quantity + 1)}>\r
                        +\r
                      </button>\r
                    </div>\r
                    <button className="text-red-500 hover:text-red-700" onClick={() => updateQuantity(item.id, 0)}>\r
                      ×\r
                    </button>\r
                  </div>)}\r
              </div>}\r
          </div>\r
          \r
          {items.length > 0 && <div className="flex-shrink-0 px-6 py-4 border-t">\r
              <div className="mb-4">\r
                <div className="flex justify-between text-lg font-semibold">\r
                  <span>总计:</span>\r
                  <span>¥{total.toLocaleString()}</span>\r
                </div>\r
              </div>\r
              <button className="w-full py-3 px-4 bg-orange-600 text-white rounded hover:bg-orange-700 font-medium" onClick={() => alert('跳转到结算页面')}>\r
                去结算\r
              </button>\r
            </div>}\r
        </div>\r
      </SlideOver>\r
    </div>;
}`,...(F=(A=b.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const U=["Basic","Placements","Widths","FormExample","UserProfile","ShoppingCart"];export{g as Basic,u as FormExample,m as Placements,b as ShoppingCart,h as UserProfile,x as Widths,U as __namedExportsOrder,W as default};
