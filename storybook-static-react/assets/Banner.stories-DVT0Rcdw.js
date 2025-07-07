import{j as s}from"./iframe-DqwHGwZR.js";import{B as t}from"./Banner-DgqSm50c.js";const E={title:"Components/Banner (React)",component:t,parameters:{layout:"fullscreen",docs:{description:{component:"A Banner displays important messages and allows users to take actions or dismiss them."}}},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["success","info","warning","error"],description:"横幅类型"},position:{control:{type:"select"},options:["top","bottom"],description:"横幅位置"},title:{control:"text",description:"横幅标题"},message:{control:"text",description:"横幅消息"},closable:{control:"boolean",description:"是否可关闭"},showIcon:{control:"boolean",description:"是否显示图标"},showDefaultAction:{control:"boolean",description:"是否显示默认行动按钮"},actionText:{control:"text",description:"行动按钮文字"},sticky:{control:"boolean",description:"是否固定定位"},zIndex:{control:{type:"number"},description:"z-index层级"},onClose:{action:"close"},onAction:{action:"action"}}},o={args:{type:"success",position:"top",title:"系统升级完成",message:"我们的系统已成功升级到最新版本，新功能现已可用！",closable:!0,showIcon:!0,showDefaultAction:!0,actionText:"了解更多",sticky:!1,zIndex:1e3},render:e=>s.jsxs("div",{className:"min-h-screen bg-gray-100",children:[s.jsx(t,{type:e.type,position:e.position,title:e.title,message:e.message,closable:e.closable,showIcon:e.showIcon,showDefaultAction:e.showDefaultAction,actionText:e.actionText,sticky:e.sticky,zIndex:e.zIndex,onClose:e.onClose,onAction:e.onAction}),s.jsxs("div",{className:"p-8",children:[s.jsx("h1",{className:"text-2xl font-bold mb-4",children:"页面内容"}),s.jsx("p",{className:"text-gray-600",children:"这里是页面的主要内容。横幅会显示在页面顶部。"})]})]})},n={args:{type:"warning",position:"bottom",title:"Cookie政策",message:"我们使用Cookie来改善您的体验。继续使用本网站即表示您同意我们的Cookie政策。",closable:!0,showIcon:!0,showDefaultAction:!0,actionText:"接受",sticky:!1,zIndex:1e3},render:e=>s.jsxs("div",{className:"min-h-screen bg-gray-100",children:[s.jsxs("div",{className:"p-8",children:[s.jsx("h1",{className:"text-2xl font-bold mb-4",children:"页面内容"}),s.jsx("p",{className:"text-gray-600",children:"这里是页面的主要内容。横幅会显示在页面底部。"})]}),s.jsx(t,{type:e.type,position:e.position,title:e.title,message:e.message,closable:e.closable,showIcon:e.showIcon,showDefaultAction:e.showDefaultAction,actionText:e.actionText,sticky:e.sticky,zIndex:e.zIndex,onClose:e.onClose,onAction:e.onAction})]})},a={args:{type:"info",position:"top",title:"新功能发布",message:"我们很高兴地宣布推出新的数据分析功能，帮助您更好地了解业务趋势。",closable:!0,showIcon:!0,showDefaultAction:!0,actionText:"立即体验",sticky:!1,zIndex:1e3},render:e=>s.jsxs("div",{className:"min-h-screen bg-gray-100",children:[s.jsx(t,{type:e.type,position:e.position,title:e.title,message:e.message,closable:e.closable,showIcon:e.showIcon,showDefaultAction:e.showDefaultAction,actionText:e.actionText,sticky:e.sticky,zIndex:e.zIndex,onClose:e.onClose,onAction:e.onAction}),s.jsxs("div",{className:"p-8",children:[s.jsx("h1",{className:"text-2xl font-bold mb-4",children:"页面内容"}),s.jsx("p",{className:"text-gray-600",children:"这里是页面的主要内容。"})]})]})},i={args:{type:"error",position:"top",title:"服务异常",message:"部分服务可能暂时不可用，我们正在努力修复问题。",closable:!0,showIcon:!0,showDefaultAction:!1,actionText:"重试",sticky:!1,zIndex:1e3},render:e=>s.jsxs("div",{className:"min-h-screen bg-gray-100",children:[s.jsx(t,{type:e.type,position:e.position,title:e.title,message:e.message,closable:e.closable,showIcon:e.showIcon,showDefaultAction:e.showDefaultAction,actionText:e.actionText,sticky:e.sticky,zIndex:e.zIndex,onClose:e.onClose,onAction:e.onAction}),s.jsxs("div",{className:"p-8",children:[s.jsx("h1",{className:"text-2xl font-bold mb-4",children:"页面内容"}),s.jsx("p",{className:"text-gray-600",children:"这里是页面的主要内容。"})]})]})},c={args:{type:"warning",position:"top",title:"重要通知",message:"系统将在明天凌晨进行维护，请提前保存您的工作。",closable:!0,showIcon:!0,showDefaultAction:!0,actionText:"查看详情",sticky:!0,zIndex:1e3},render:e=>s.jsxs("div",{className:"min-h-screen bg-gray-100",children:[s.jsx(t,{type:e.type,position:e.position,title:e.title,message:e.message,closable:e.closable,showIcon:e.showIcon,showDefaultAction:e.showDefaultAction,actionText:e.actionText,sticky:e.sticky,zIndex:e.zIndex,onClose:e.onClose,onAction:e.onAction}),s.jsxs("div",{className:"p-8 pt-20",children:[s.jsx("h1",{className:"text-2xl font-bold mb-4",children:"页面内容"}),s.jsx("p",{className:"text-gray-600 mb-4",children:"这个横幅是固定定位的，会始终显示在页面顶部。"}),s.jsx("div",{className:"h-screen bg-gradient-to-b from-blue-100 to-green-100 rounded-lg flex items-center justify-center",children:s.jsx("p",{className:"text-lg text-gray-700",children:"滚动页面测试固定定位效果"})})]})]})},r={render:()=>s.jsxs("div",{className:"min-h-screen bg-gray-100",children:[s.jsxs(t,{type:"info",position:"top",title:"更新提醒",message:"发现新版本，是否立即更新？",closable:!0,showIcon:!0,showDefaultAction:!1,children:[s.jsx("button",{className:"px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 text-white rounded-lg text-sm hover:bg-opacity-30 transition-all mr-2",children:"稍后提醒"}),s.jsx("button",{className:"px-4 py-2 bg-white text-blue-600 rounded-lg text-sm font-medium hover:bg-gray-100 transition-all",children:"立即更新"})]}),s.jsxs("div",{className:"p-8",children:[s.jsx("h1",{className:"text-2xl font-bold mb-4",children:"自定义操作按钮"}),s.jsx("p",{className:"text-gray-600",children:"这个横幅包含自定义的操作按钮。"})]})]})},l={args:{type:"success",position:"top",title:"",message:"操作成功完成！",closable:!1,showIcon:!1,showDefaultAction:!1,sticky:!1,zIndex:1e3},render:e=>s.jsxs("div",{className:"min-h-screen bg-gray-100",children:[s.jsx(t,{type:e.type,position:e.position,title:e.title,message:e.message,closable:e.closable,showIcon:e.showIcon,showDefaultAction:e.showDefaultAction,sticky:e.sticky,zIndex:e.zIndex}),s.jsxs("div",{className:"p-8",children:[s.jsx("h1",{className:"text-2xl font-bold mb-4",children:"简洁横幅"}),s.jsx("p",{className:"text-gray-600",children:"这是一个最简洁的横幅示例。"})]})]})};var d,p,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: 'success',
    position: 'top',
    title: '系统升级完成',
    message: '我们的系统已成功升级到最新版本，新功能现已可用！',
    closable: true,
    showIcon: true,
    showDefaultAction: true,
    actionText: '了解更多',
    sticky: false,
    zIndex: 1000
  },
  render: args => <div className="min-h-screen bg-gray-100">\r
      <Banner type={args.type} position={args.position} title={args.title} message={args.message} closable={args.closable} showIcon={args.showIcon} showDefaultAction={args.showDefaultAction} actionText={args.actionText} sticky={args.sticky} zIndex={args.zIndex} onClose={args.onClose} onAction={args.onAction} />\r
      <div className="p-8">\r
        <h1 className="text-2xl font-bold mb-4">页面内容</h1>\r
        <p className="text-gray-600">这里是页面的主要内容。横幅会显示在页面顶部。</p>\r
      </div>\r
    </div>
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var x,h,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    position: 'bottom',
    title: 'Cookie政策',
    message: '我们使用Cookie来改善您的体验。继续使用本网站即表示您同意我们的Cookie政策。',
    closable: true,
    showIcon: true,
    showDefaultAction: true,
    actionText: '接受',
    sticky: false,
    zIndex: 1000
  },
  render: args => <div className="min-h-screen bg-gray-100">\r
      <div className="p-8">\r
        <h1 className="text-2xl font-bold mb-4">页面内容</h1>\r
        <p className="text-gray-600">这里是页面的主要内容。横幅会显示在页面底部。</p>\r
      </div>\r
      <Banner type={args.type} position={args.position} title={args.title} message={args.message} closable={args.closable} showIcon={args.showIcon} showDefaultAction={args.showDefaultAction} actionText={args.actionText} sticky={args.sticky} zIndex={args.zIndex} onClose={args.onClose} onAction={args.onAction} />\r
    </div>
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,y,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    type: 'info',
    position: 'top',
    title: '新功能发布',
    message: '我们很高兴地宣布推出新的数据分析功能，帮助您更好地了解业务趋势。',
    closable: true,
    showIcon: true,
    showDefaultAction: true,
    actionText: '立即体验',
    sticky: false,
    zIndex: 1000
  },
  render: args => <div className="min-h-screen bg-gray-100">\r
      <Banner type={args.type} position={args.position} title={args.title} message={args.message} closable={args.closable} showIcon={args.showIcon} showDefaultAction={args.showDefaultAction} actionText={args.actionText} sticky={args.sticky} zIndex={args.zIndex} onClose={args.onClose} onAction={args.onAction} />\r
      <div className="p-8">\r
        <h1 className="text-2xl font-bold mb-4">页面内容</h1>\r
        <p className="text-gray-600">这里是页面的主要内容。</p>\r
      </div>\r
    </div>
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,w,I;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: 'error',
    position: 'top',
    title: '服务异常',
    message: '部分服务可能暂时不可用，我们正在努力修复问题。',
    closable: true,
    showIcon: true,
    showDefaultAction: false,
    actionText: '重试',
    sticky: false,
    zIndex: 1000
  },
  render: args => <div className="min-h-screen bg-gray-100">\r
      <Banner type={args.type} position={args.position} title={args.title} message={args.message} closable={args.closable} showIcon={args.showIcon} showDefaultAction={args.showDefaultAction} actionText={args.actionText} sticky={args.sticky} zIndex={args.zIndex} onClose={args.onClose} onAction={args.onAction} />\r
      <div className="p-8">\r
        <h1 className="text-2xl font-bold mb-4">页面内容</h1>\r
        <p className="text-gray-600">这里是页面的主要内容。</p>\r
      </div>\r
    </div>
}`,...(I=(w=i.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var N,A,v;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    position: 'top',
    title: '重要通知',
    message: '系统将在明天凌晨进行维护，请提前保存您的工作。',
    closable: true,
    showIcon: true,
    showDefaultAction: true,
    actionText: '查看详情',
    sticky: true,
    zIndex: 1000
  },
  render: args => <div className="min-h-screen bg-gray-100">\r
      <Banner type={args.type} position={args.position} title={args.title} message={args.message} closable={args.closable} showIcon={args.showIcon} showDefaultAction={args.showDefaultAction} actionText={args.actionText} sticky={args.sticky} zIndex={args.zIndex} onClose={args.onClose} onAction={args.onAction} />\r
      <div className="p-8 pt-20">\r
        <h1 className="text-2xl font-bold mb-4">页面内容</h1>\r
        <p className="text-gray-600 mb-4">这个横幅是固定定位的，会始终显示在页面顶部。</p>\r
        <div className="h-screen bg-gradient-to-b from-blue-100 to-green-100 rounded-lg flex items-center justify-center">\r
          <p className="text-lg text-gray-700">滚动页面测试固定定位效果</p>\r
        </div>\r
      </div>\r
    </div>
}`,...(v=(A=c.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var k,j,D;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="min-h-screen bg-gray-100">\r
      <Banner type="info" position="top" title="更新提醒" message="发现新版本，是否立即更新？" closable={true} showIcon={true} showDefaultAction={false}>\r
        <button className="px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 text-white rounded-lg text-sm hover:bg-opacity-30 transition-all mr-2">\r
          稍后提醒\r
        </button>\r
        <button className="px-4 py-2 bg-white text-blue-600 rounded-lg text-sm font-medium hover:bg-gray-100 transition-all">\r
          立即更新\r
        </button>\r
      </Banner>\r
      <div className="p-8">\r
        <h1 className="text-2xl font-bold mb-4">自定义操作按钮</h1>\r
        <p className="text-gray-600">这个横幅包含自定义的操作按钮。</p>\r
      </div>\r
    </div>
}`,...(D=(j=r.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var z,T,C;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    type: 'success',
    position: 'top',
    title: '',
    message: '操作成功完成！',
    closable: false,
    showIcon: false,
    showDefaultAction: false,
    sticky: false,
    zIndex: 1000
  },
  render: args => <div className="min-h-screen bg-gray-100">\r
      <Banner type={args.type} position={args.position} title={args.title} message={args.message} closable={args.closable} showIcon={args.showIcon} showDefaultAction={args.showDefaultAction} sticky={args.sticky} zIndex={args.zIndex} />\r
      <div className="p-8">\r
        <h1 className="text-2xl font-bold mb-4">简洁横幅</h1>\r
        <p className="text-gray-600">这是一个最简洁的横幅示例。</p>\r
      </div>\r
    </div>
}`,...(C=(T=l.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const W=["TopSuccess","BottomWarning","InfoBanner","ErrorBanner","StickyBanner","WithCustomActions","MinimalBanner"];export{n as BottomWarning,i as ErrorBanner,a as InfoBanner,l as MinimalBanner,c as StickyBanner,o as TopSuccess,r as WithCustomActions,W as __namedExportsOrder,E as default};
