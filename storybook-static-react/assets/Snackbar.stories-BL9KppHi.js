import{r as d,j as e}from"./iframe-DqwHGwZR.js";import{r as ge}from"./index-BjOamUOo.js";import"./index-7Rf8qmk0.js";const pe={success:"✓",info:"ℹ",warning:"⚠",error:"✕"};function u({open:s=!1,message:o="",title:i="",severity:a="info",variant:n="filled",autoHideDuration:t=6e3,anchorOrigin:r={vertical:"bottom",horizontal:"left"},action:l="",closable:c=!0,showIcon:k=!0,showProgress:S=!1,onClose:se=()=>{},onAction:oe=()=>{},children:g}){const[j,C]=d.useState(s),[ae,I]=d.useState(100);d.useEffect(()=>{C(s),s&&I(100)},[s]),d.useEffect(()=>{if(!j||t<=0)return;const p=Date.now(),H=setTimeout(()=>{O()},t);if(S){const P=setInterval(()=>{const me=Date.now()-p,_=Math.max(0,100-me/t*100);I(_),_<=0&&clearInterval(P)},50);return()=>{clearTimeout(H),clearInterval(P)}}return()=>clearTimeout(H)},[j,t,S]);const O=()=>{C(!1),se()},ie=()=>{oe()};if(!j)return null;const m=["fixed z-50 w-full max-w-sm bg-white dark:bg-neutral-800 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 p-4 transition-all duration-300 ease-in-out"],{vertical:ne,horizontal:D}=r;if(m.push(ne==="top"?"top-4":"bottom-4"),D==="left"?m.push("left-4"):D==="right"?m.push("right-4"):m.push("left-1/2 transform -translate-x-1/2"),n==="filled"){const p={success:"bg-success-500 border-success-500",info:"bg-primary-500 border-primary-500",warning:"bg-warning-500 border-warning-500",error:"bg-error-500 border-error-500"};m.push(p[a])}else if(n==="outlined"){const p={success:"border-success-500 text-success-600 dark:text-success-400 border-l-4",info:"border-primary-500 text-primary-600 dark:text-primary-400 border-l-4",warning:"border-warning-500 text-warning-600 dark:text-warning-400 border-l-4",error:"border-error-500 text-error-600 dark:text-error-400 border-l-4"};m.push(p[a])}else m.push("text-neutral-900 dark:text-neutral-100");const le=n==="filled"?"hover:bg-white hover:bg-opacity-20 focus:ring-white text-sm font-medium px-3 py-1 rounded-md transition-colors":{success:"text-success-600 dark:text-success-400 hover:bg-success-50 dark:hover:bg-success-900/20",info:"text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20",warning:"text-warning-600 dark:text-warning-400 hover:bg-warning-50 dark:hover:bg-warning-900/20",error:"text-error-600 dark:text-error-400 hover:bg-error-50 dark:hover:bg-error-900/20"}[a]+" text-sm font-medium px-3 py-1 rounded-md transition-colors",ce=n==="filled"?"inline-flex rounded-md p-1 hover:bg-white hover:bg-opacity-20 transition-colors":"inline-flex rounded-md p-1 text-neutral-400 hover:text-neutral-500 transition-colors",de=n==="filled"?"text-gray":{success:"text-success-500",info:"text-primary-500",warning:"text-warning-500",error:"text-error-500"}[a],ue=e.jsxs("div",{className:m.join(" "),role:"alert","aria-live":"assertive","aria-atomic":"true",children:[e.jsxs("div",{className:"flex items-start gap-3 w-full",children:[k&&e.jsx("div",{className:`flex-shrink-0 w-5 h-5 flex items-center justify-center font-bold text-lg ${de}`,children:pe[a]}),e.jsxs("div",{className:"flex-1 min-w-0",children:[i&&e.jsx("div",{className:"font-semibold text-sm mb-1 leading-tight",children:i}),g||e.jsx("div",{className:"text-sm",children:o})]}),(l||(g==null?void 0:g.action))&&e.jsx("div",{className:"flex-shrink-0",children:(g==null?void 0:g.action)||e.jsx("button",{className:le,onClick:ie,type:"button",children:l})}),c&&e.jsx("div",{className:"flex-shrink-0",children:e.jsx("button",{className:ce,onClick:O,"aria-label":"关闭",type:"button",children:e.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})})]}),S&&t>0&&e.jsx("div",{className:"mt-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1",children:e.jsx("div",{className:`h-1 rounded-full transition-all duration-100 ${n==="filled"?"bg-white bg-opacity-30":{success:"bg-success-500",info:"bg-primary-500",warning:"bg-warning-500",error:"bg-error-500"}[a]}`,style:{width:`${ae}%`}})})]});return ge.createPortal(ue,document.body)}const xe={title:"Components/Snackbar (React)",component:u,parameters:{layout:"centered",docs:{description:{component:"增强版 Snackbar 组件，整合了 Toast 的功能，支持标题、图标、进度条、多种位置等。"}}},tags:["autodocs"],argTypes:{open:{description:"是否显示",control:{type:"boolean"}},message:{description:"消息内容",control:{type:"text"}},title:{description:"标题",control:{type:"text"}},severity:{description:"严重程度",control:{type:"select"},options:["success","info","warning","error"]},variant:{description:"变体样式",control:{type:"select"},options:["filled","outlined","standard"]},autoHideDuration:{description:"自动隐藏时间(ms)",control:{type:"number"}},closable:{description:"是否可关闭",control:{type:"boolean"}},showIcon:{description:"显示图标",control:{type:"boolean"}},showProgress:{description:"显示进度条",control:{type:"boolean"}},anchorOrigin:{description:"位置配置",control:{type:"object"}},onClose:{action:"close",description:"关闭时触发"}}},N={args:{message:"这是一条提示信息",severity:"info",variant:"filled",autoHideDuration:3e3,closable:!0,showIcon:!0,showProgress:!1},render:s=>{const[o,i]=d.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx("button",{className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",onClick:()=>i(!0),children:"显示 Snackbar"}),e.jsx(u,{...s,open:o,onClose:()=>{var a;i(!1),(a=s.onClose)==null||a.call(s)}})]})}},b=()=>{const[s,o]=d.useState({success:!1,info:!1,warning:!1,error:!1}),i=t=>{o(r=>({...r,[t]:!0}))},a=t=>{o(r=>({...r,[t]:!1}))},n=[{type:"success",label:"成功",message:"操作成功完成",color:"bg-green-600"},{type:"info",label:"信息",message:"这是一条信息提示",color:"bg-blue-600"},{type:"warning",label:"警告",message:"请注意这个警告",color:"bg-yellow-600"},{type:"error",label:"错误",message:"发生了一个错误",color:"bg-red-600"}];return e.jsxs("div",{className:"p-8",children:[e.jsx("div",{className:"flex gap-3 flex-wrap",children:n.map(({type:t,label:r,color:l})=>e.jsx("button",{className:`px-4 py-2 text-white rounded hover:opacity-90 ${l}`,onClick:()=>i(t),children:r},t))}),n.map(({type:t,message:r})=>e.jsx(u,{open:s[t],message:r,severity:t,onClose:()=>a(t)},t))]})},h=()=>{const[s,o]=d.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx("button",{className:"px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700",onClick:()=>o(!0),children:"显示带标题的通知"}),e.jsx(u,{open:s,title:"重要通知",message:"您的账户设置已成功更新，新的配置将在下次登录时生效。",severity:"success",variant:"filled",autoHideDuration:5e3,showIcon:!0,onClose:()=>o(!1)})]})},v=()=>{const[s,o]=d.useState({filled:!1,outlined:!1,standard:!1}),i=t=>{o(r=>({...r,[t]:!0}))},a=t=>{o(r=>({...r,[t]:!1}))},n=[{type:"filled",label:"Filled",title:"Filled 样式",message:"这是填充样式的 Snackbar",severity:"info"},{type:"outlined",label:"Outlined",title:"Outlined 样式",message:"这是轮廓样式的 Snackbar，带有彩色边框",severity:"warning"},{type:"standard",label:"Standard",title:"Standard 样式",message:"这是标准样式的 Snackbar",severity:"success"}];return e.jsxs("div",{className:"p-8",children:[e.jsx("div",{className:"flex gap-3 flex-wrap",children:n.map(({type:t,label:r})=>e.jsx("button",{className:`px-4 py-2 rounded border-2 ${t==="filled"?"bg-blue-600 text-white border-blue-600":t==="outlined"?"border-blue-600 text-blue-600 hover:bg-blue-50":"border-gray-300 text-gray-700 hover:bg-gray-50"}`,onClick:()=>i(t),children:r},t))}),n.map(({type:t,title:r,message:l,severity:c})=>e.jsx(u,{open:s[t],title:r,message:l,severity:c,variant:t,onClose:()=>a(t)},t))]})},f=()=>{const[s,o]=d.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx("button",{className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",onClick:()=>o(!0),children:"显示进度条通知"}),e.jsx(u,{open:s,title:"文件上传中",message:"正在上传文件，请稍候...",severity:"info",variant:"filled",autoHideDuration:8e3,showIcon:!0,showProgress:!0,onClose:()=>o(!1)})]})},x=()=>{const[s,o]=d.useState(null),i=[{key:"top-left",label:"左上",anchorOrigin:{vertical:"top",horizontal:"left"}},{key:"top-center",label:"顶部中央",anchorOrigin:{vertical:"top",horizontal:"center"}},{key:"top-right",label:"右上",anchorOrigin:{vertical:"top",horizontal:"right"}},{key:"bottom-left",label:"左下",anchorOrigin:{vertical:"bottom",horizontal:"left"}},{key:"bottom-center",label:"底部中央",anchorOrigin:{vertical:"bottom",horizontal:"center"}},{key:"bottom-right",label:"右下",anchorOrigin:{vertical:"bottom",horizontal:"right"}}];return e.jsxs("div",{className:"p-8",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"不同位置"}),e.jsx("div",{className:"grid grid-cols-3 gap-3 max-w-md",children:i.map(({key:a,label:n,anchorOrigin:t})=>e.jsx("button",{className:"px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded text-sm",onClick:()=>o(a),children:n},a))}),i.map(({key:a,label:n,anchorOrigin:t})=>e.jsx(u,{open:s===a,message:`这是来自${n}的消息`,severity:"info",anchorOrigin:t,autoHideDuration:3e3,onClose:()=>o(null)},a))]})},y=()=>{const[s,o]=d.useState(null),i=r=>{o(r)},a=()=>{o(null)},n=()=>{alert("执行了操作！"),a()},t=[{title:"成功操作",button:"保存成功",config:{title:"保存成功",message:"您的更改已成功保存到服务器",severity:"success",variant:"filled",showIcon:!0,autoHideDuration:4e3}},{title:"警告信息",button:"存储空间不足",config:{title:"存储空间警告",message:"您的存储空间即将用完，请及时清理或升级",severity:"warning",variant:"outlined",showIcon:!0,autoHideDuration:6e3}},{title:"网络错误",button:"连接失败",config:{title:"网络连接失败",message:"无法连接到服务器，请检查您的网络连接",severity:"error",variant:"filled",showIcon:!0,showProgress:!1,autoHideDuration:0}},{title:"长时间操作",button:"数据同步",config:{title:"正在同步数据",message:"数据同步可能需要几分钟时间，请耐心等待",severity:"info",variant:"standard",showIcon:!0,showProgress:!0,autoHideDuration:1e4}}];return e.jsxs("div",{className:"p-8 max-w-2xl",children:[e.jsx("h3",{className:"text-lg font-semibold mb-6",children:"综合功能演示"}),e.jsx("div",{className:"grid grid-cols-2 gap-4",children:t.map(({title:r,button:l,config:c},k)=>e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-2",children:r}),e.jsxs("p",{className:"text-sm text-gray-600 mb-3",children:[c.severity==="success"&&"✅ 操作成功完成",c.severity==="warning"&&"⚠️ 需要用户注意",c.severity==="error"&&"❌ 发生错误需要处理",c.severity==="info"&&"ℹ️ 提供有用信息"]}),e.jsx("button",{className:`w-full py-2 px-4 rounded text-white ${c.severity==="success"?"bg-green-600 hover:bg-green-700":c.severity==="warning"?"bg-yellow-600 hover:bg-yellow-700":c.severity==="error"?"bg-red-600 hover:bg-red-700":"bg-blue-600 hover:bg-blue-700"}`,onClick:()=>i(c),children:l})]},k))}),s&&e.jsx(u,{open:!0,...s,onClose:a,action:s.severity==="error"?e.jsx("button",{className:"ml-2 px-3 py-1 bg-white text-red-600 rounded text-sm hover:bg-red-50",onClick:n,children:"重试"}):null}),e.jsxs("div",{className:"mt-8 p-4 bg-gray-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-2",children:"使用说明"}),e.jsxs("ul",{className:"text-sm text-gray-600 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"成功操作:"})," 确认型通知，4秒后自动消失"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"警告信息:"})," 轮廓样式，6秒后自动消失"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"网络错误:"})," 不会自动消失，需要手动关闭"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"长时间操作:"})," 带进度条，10秒后自动消失"]})]})]})]})},w=()=>{const[s,o]=d.useState([]),i=t=>{const r=Date.now();o(l=>[...l,{...t,id:r}]),t.autoHideDuration>0&&setTimeout(()=>{a(r)},t.autoHideDuration)},a=t=>{o(r=>r.filter(l=>l.id!==t))},n=[{title:"📧 邮件发送",action:()=>i({title:"邮件发送成功",message:"您的邮件已成功发送给 3 位收件人",severity:"success",autoHideDuration:4e3,showIcon:!0})},{title:"💾 自动保存",action:()=>i({message:"草稿已自动保存",severity:"info",variant:"standard",autoHideDuration:2e3,showIcon:!1})},{title:"🔒 登录过期",action:()=>i({title:"会话已过期",message:"您的登录会话已过期，请重新登录",severity:"warning",variant:"outlined",autoHideDuration:0,showIcon:!0})},{title:"📁 文件上传",action:()=>i({title:"正在上传文件",message:"文件上传中，请勿关闭页面...",severity:"info",showProgress:!0,autoHideDuration:6e3,showIcon:!0})},{title:"❌ 网络错误",action:()=>i({title:"操作失败",message:"网络连接超时，请稍后重试",severity:"error",autoHideDuration:0,showIcon:!0})}];return e.jsxs("div",{className:"p-8 max-w-4xl",children:[e.jsx("h3",{className:"text-lg font-semibold mb-6",children:"实际应用场景"}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h4",{className:"font-medium mb-3",children:"触发不同类型的通知："}),e.jsx("div",{className:"flex flex-wrap gap-3",children:n.map(({title:t,action:r},l)=>e.jsx("button",{className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm",onClick:r,children:t},l))})]}),e.jsx("div",{className:"mb-6",children:e.jsx("button",{className:"px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm",onClick:()=>o([]),children:"清空所有通知"})}),e.jsx("div",{className:"space-y-4",children:s.map(t=>e.jsx(u,{open:!0,...t,onClose:()=>a(t.id)},t.id))}),s.length===0&&e.jsx("div",{className:"text-center py-8 text-gray-500",children:"没有活跃的通知"})]})};b.__docgenInfo={description:"",methods:[],displayName:"Severities"};h.__docgenInfo={description:"",methods:[],displayName:"WithTitle"};v.__docgenInfo={description:"",methods:[],displayName:"Variants"};f.__docgenInfo={description:"",methods:[],displayName:"WithProgress"};x.__docgenInfo={description:"",methods:[],displayName:"Positions"};y.__docgenInfo={description:"",methods:[],displayName:"Comprehensive"};w.__docgenInfo={description:"",methods:[],displayName:"RealWorldExamples"};var z,T,$;N.parameters={...N.parameters,docs:{...(z=N.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    message: '这是一条提示信息',
    severity: 'info',
    variant: 'filled',
    autoHideDuration: 3000,
    closable: true,
    showIcon: true,
    showProgress: false
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return <div className="p-8">\r
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={() => setOpen(true)}>\r
          显示 Snackbar\r
        </button>\r
        <Snackbar {...args} open={open} onClose={() => {
        setOpen(false);
        args.onClose?.();
      }} />\r
      </div>;
  }
}`,...($=(T=N.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var E,W,A;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const [snackbars, setSnackbars] = useState({
    success: false,
    info: false,
    warning: false,
    error: false
  });
  const showSnackbar = type => {
    setSnackbars(prev => ({
      ...prev,
      [type]: true
    }));
  };
  const closeSnackbar = type => {
    setSnackbars(prev => ({
      ...prev,
      [type]: false
    }));
  };
  const severityConfig = [{
    type: 'success',
    label: '成功',
    message: '操作成功完成',
    color: 'bg-green-600'
  }, {
    type: 'info',
    label: '信息',
    message: '这是一条信息提示',
    color: 'bg-blue-600'
  }, {
    type: 'warning',
    label: '警告',
    message: '请注意这个警告',
    color: 'bg-yellow-600'
  }, {
    type: 'error',
    label: '错误',
    message: '发生了一个错误',
    color: 'bg-red-600'
  }];
  return <div className="p-8">\r
      <div className="flex gap-3 flex-wrap">\r
        {severityConfig.map(({
        type,
        label,
        color
      }) => <button key={type} className={\`px-4 py-2 text-white rounded hover:opacity-90 \${color}\`} onClick={() => showSnackbar(type)}>\r
            {label}\r
          </button>)}\r
      </div>\r
      \r
      {severityConfig.map(({
      type,
      message
    }) => <Snackbar key={type} open={snackbars[type]} message={message} severity={type} onClose={() => closeSnackbar(type)} />)}\r
    </div>;
}`,...(A=(W=b.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var R,M,F;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <div className="p-8">\r
      <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700" onClick={() => setOpen(true)}>\r
        显示带标题的通知\r
      </button>\r
      <Snackbar open={open} title="重要通知" message="您的账户设置已成功更新，新的配置将在下次登录时生效。" severity="success" variant="filled" autoHideDuration={5000} showIcon={true} onClose={() => setOpen(false)} />\r
    </div>;
}`,...(F=(M=h.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var V,L,B;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const [snackbars, setSnackbars] = useState({
    filled: false,
    outlined: false,
    standard: false
  });
  const showSnackbar = variant => {
    setSnackbars(prev => ({
      ...prev,
      [variant]: true
    }));
  };
  const closeSnackbar = variant => {
    setSnackbars(prev => ({
      ...prev,
      [variant]: false
    }));
  };
  const variants = [{
    type: 'filled',
    label: 'Filled',
    title: 'Filled 样式',
    message: '这是填充样式的 Snackbar',
    severity: 'info'
  }, {
    type: 'outlined',
    label: 'Outlined',
    title: 'Outlined 样式',
    message: '这是轮廓样式的 Snackbar，带有彩色边框',
    severity: 'warning'
  }, {
    type: 'standard',
    label: 'Standard',
    title: 'Standard 样式',
    message: '这是标准样式的 Snackbar',
    severity: 'success'
  }];
  return <div className="p-8">\r
      <div className="flex gap-3 flex-wrap">\r
        {variants.map(({
        type,
        label
      }) => <button key={type} className={\`px-4 py-2 rounded border-2 \${type === 'filled' ? 'bg-blue-600 text-white border-blue-600' : type === 'outlined' ? 'border-blue-600 text-blue-600 hover:bg-blue-50' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}\`} onClick={() => showSnackbar(type)}>\r
            {label}\r
          </button>)}\r
      </div>\r
      \r
      {variants.map(({
      type,
      title,
      message,
      severity
    }) => <Snackbar key={type} open={snackbars[type]} title={title} message={message} severity={severity} variant={type} onClose={() => closeSnackbar(type)} />)}\r
    </div>;
}`,...(B=(L=v.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var q,G,J;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <div className="p-8">\r
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={() => setOpen(true)}>\r
        显示进度条通知\r
      </button>\r
      <Snackbar open={open} title="文件上传中" message="正在上传文件，请稍候..." severity="info" variant="filled" autoHideDuration={8000} showIcon={true} showProgress={true} onClose={() => setOpen(false)} />\r
    </div>;
}`,...(J=(G=f.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const [activePosition, setActivePosition] = useState(null);
  const positions = [{
    key: 'top-left',
    label: '左上',
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'left'
    }
  }, {
    key: 'top-center',
    label: '顶部中央',
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center'
    }
  }, {
    key: 'top-right',
    label: '右上',
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    }
  }, {
    key: 'bottom-left',
    label: '左下',
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    }
  }, {
    key: 'bottom-center',
    label: '底部中央',
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    }
  }, {
    key: 'bottom-right',
    label: '右下',
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    }
  }];
  return <div className="p-8">\r
      <h3 className="text-lg font-semibold mb-4">不同位置</h3>\r
      <div className="grid grid-cols-3 gap-3 max-w-md">\r
        {positions.map(({
        key,
        label,
        anchorOrigin
      }) => <button key={key} className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded text-sm" onClick={() => setActivePosition(key)}>\r
            {label}\r
          </button>)}\r
      </div>\r
      \r
      {positions.map(({
      key,
      label,
      anchorOrigin
    }) => <Snackbar key={key} open={activePosition === key} message={\`这是来自\${label}的消息\`} severity="info" anchorOrigin={anchorOrigin} autoHideDuration={3000} onClose={() => setActivePosition(null)} />)}\r
    </div>;
}`,...(U=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  const [notification, setNotification] = useState(null);
  const showNotification = config => {
    setNotification(config);
  };
  const closeNotification = () => {
    setNotification(null);
  };
  const handleAction = () => {
    alert('执行了操作！');
    closeNotification();
  };
  const examples = [{
    title: '成功操作',
    button: '保存成功',
    config: {
      title: '保存成功',
      message: '您的更改已成功保存到服务器',
      severity: 'success',
      variant: 'filled',
      showIcon: true,
      autoHideDuration: 4000
    }
  }, {
    title: '警告信息',
    button: '存储空间不足',
    config: {
      title: '存储空间警告',
      message: '您的存储空间即将用完，请及时清理或升级',
      severity: 'warning',
      variant: 'outlined',
      showIcon: true,
      autoHideDuration: 6000
    }
  }, {
    title: '网络错误',
    button: '连接失败',
    config: {
      title: '网络连接失败',
      message: '无法连接到服务器，请检查您的网络连接',
      severity: 'error',
      variant: 'filled',
      showIcon: true,
      showProgress: false,
      autoHideDuration: 0 // 不自动关闭
    }
  }, {
    title: '长时间操作',
    button: '数据同步',
    config: {
      title: '正在同步数据',
      message: '数据同步可能需要几分钟时间，请耐心等待',
      severity: 'info',
      variant: 'standard',
      showIcon: true,
      showProgress: true,
      autoHideDuration: 10000
    }
  }];
  return <div className="p-8 max-w-2xl">\r
      <h3 className="text-lg font-semibold mb-6">综合功能演示</h3>\r
      \r
      <div className="grid grid-cols-2 gap-4">\r
        {examples.map(({
        title,
        button,
        config
      }, index) => <div key={index} className="p-4 border rounded-lg">\r
            <h4 className="font-medium mb-2">{title}</h4>\r
            <p className="text-sm text-gray-600 mb-3">\r
              {config.severity === 'success' && '✅ 操作成功完成'}\r
              {config.severity === 'warning' && '⚠️ 需要用户注意'}\r
              {config.severity === 'error' && '❌ 发生错误需要处理'}\r
              {config.severity === 'info' && 'ℹ️ 提供有用信息'}\r
            </p>\r
            <button className={\`w-full py-2 px-4 rounded text-white \${config.severity === 'success' ? 'bg-green-600 hover:bg-green-700' : config.severity === 'warning' ? 'bg-yellow-600 hover:bg-yellow-700' : config.severity === 'error' ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'}\`} onClick={() => showNotification(config)}>\r
              {button}\r
            </button>\r
          </div>)}\r
      </div>\r
\r
      {notification && <Snackbar open={true} {...notification} onClose={closeNotification} action={notification.severity === 'error' ? <button className="ml-2 px-3 py-1 bg-white text-red-600 rounded text-sm hover:bg-red-50" onClick={handleAction}>\r
                重试\r
              </button> : null} />}\r
\r
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">\r
        <h4 className="font-medium mb-2">使用说明</h4>\r
        <ul className="text-sm text-gray-600 space-y-1">\r
          <li>• <strong>成功操作:</strong> 确认型通知，4秒后自动消失</li>\r
          <li>• <strong>警告信息:</strong> 轮廓样式，6秒后自动消失</li>\r
          <li>• <strong>网络错误:</strong> 不会自动消失，需要手动关闭</li>\r
          <li>• <strong>长时间操作:</strong> 带进度条，10秒后自动消失</li>\r
        </ul>\r
      </div>\r
    </div>;
}`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,re;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  const [notifications, setNotifications] = useState([]);
  const addNotification = config => {
    const id = Date.now();
    setNotifications(prev => [...prev, {
      ...config,
      id
    }]);
    if (config.autoHideDuration > 0) {
      setTimeout(() => {
        removeNotification(id);
      }, config.autoHideDuration);
    }
  };
  const removeNotification = id => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };
  const scenarios = [{
    title: '📧 邮件发送',
    action: () => addNotification({
      title: '邮件发送成功',
      message: '您的邮件已成功发送给 3 位收件人',
      severity: 'success',
      autoHideDuration: 4000,
      showIcon: true
    })
  }, {
    title: '💾 自动保存',
    action: () => addNotification({
      message: '草稿已自动保存',
      severity: 'info',
      variant: 'standard',
      autoHideDuration: 2000,
      showIcon: false
    })
  }, {
    title: '🔒 登录过期',
    action: () => addNotification({
      title: '会话已过期',
      message: '您的登录会话已过期，请重新登录',
      severity: 'warning',
      variant: 'outlined',
      autoHideDuration: 0,
      showIcon: true
    })
  }, {
    title: '📁 文件上传',
    action: () => addNotification({
      title: '正在上传文件',
      message: '文件上传中，请勿关闭页面...',
      severity: 'info',
      showProgress: true,
      autoHideDuration: 6000,
      showIcon: true
    })
  }, {
    title: '❌ 网络错误',
    action: () => addNotification({
      title: '操作失败',
      message: '网络连接超时，请稍后重试',
      severity: 'error',
      autoHideDuration: 0,
      showIcon: true
    })
  }];
  return <div className="p-8 max-w-4xl">\r
      <h3 className="text-lg font-semibold mb-6">实际应用场景</h3>\r
      \r
      <div className="mb-6">\r
        <h4 className="font-medium mb-3">触发不同类型的通知：</h4>\r
        <div className="flex flex-wrap gap-3">\r
          {scenarios.map(({
          title,
          action
        }, index) => <button key={index} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm" onClick={action}>\r
              {title}\r
            </button>)}\r
        </div>\r
      </div>\r
\r
      <div className="mb-6">\r
        <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm" onClick={() => setNotifications([])}>\r
          清空所有通知\r
        </button>\r
      </div>\r
\r
      {/* 显示当前活跃的通知 */}\r
      <div className="space-y-4">\r
        {notifications.map(notification => <Snackbar key={notification.id} open={true} {...notification} onClose={() => removeNotification(notification.id)} />)}\r
      </div>\r
\r
      {notifications.length === 0 && <div className="text-center py-8 text-gray-500">\r
          没有活跃的通知\r
        </div>}\r
    </div>;
}`,...(re=(te=w.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const ye=["Default","Severities","WithTitle","Variants","WithProgress","Positions","Comprehensive","RealWorldExamples"];export{y as Comprehensive,N as Default,x as Positions,w as RealWorldExamples,b as Severities,v as Variants,f as WithProgress,h as WithTitle,ye as __namedExportsOrder,xe as default};
