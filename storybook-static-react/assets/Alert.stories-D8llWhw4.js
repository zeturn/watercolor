import{j as r}from"./iframe-DqwHGwZR.js";import{A as t}from"./Alert-irfGZQ0w.js";const q={title:"Components/Alert (React)",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["success","info","warning","error"],description:"警告类型"},title:{control:"text",description:"警告标题"},children:{control:"text",description:"警告消息"},closable:{control:"boolean",description:"是否可关闭"},showIcon:{control:"boolean",description:"是否显示图标"},variant:{control:{type:"select"},options:["filled","outlined","standard"],description:"警告变体"},onClose:{action:"close"}}},s={args:{type:"success",title:"操作成功",children:"您的操作已成功完成！数据已保存到系统中。",closable:!0,showIcon:!0,variant:"standard"},render:e=>r.jsx("div",{style:{width:"100%",maxWidth:"32rem"},children:r.jsx(t,{type:e.type,title:e.title,closable:e.closable,showIcon:e.showIcon,variant:e.variant,onClose:e.onClose,children:e.children})})},l={args:{type:"info",title:"系统通知",children:"系统将在今晚11点进行维护升级，预计持续2小时。",closable:!0,showIcon:!0,variant:"standard"},render:e=>r.jsx("div",{style:{width:"100%",maxWidth:"32rem"},children:r.jsx(t,{type:e.type,title:e.title,closable:e.closable,showIcon:e.showIcon,variant:e.variant,onClose:e.onClose,children:e.children})})},o={args:{type:"warning",title:"重要提醒",children:"您的账户余额不足，请及时充值以确保服务正常使用。",closable:!0,showIcon:!0,variant:"standard"},render:e=>r.jsx("div",{style:{width:"100%",maxWidth:"32rem"},children:r.jsx(t,{type:e.type,title:e.title,closable:e.closable,showIcon:e.showIcon,variant:e.variant,onClose:e.onClose,children:e.children})})},i={args:{type:"error",title:"操作失败",children:"网络连接异常，请检查网络设置后重试。",closable:!0,showIcon:!0,variant:"standard"},render:e=>r.jsx("div",{style:{width:"100%",maxWidth:"32rem"},children:r.jsx(t,{type:e.type,title:e.title,closable:e.closable,showIcon:e.showIcon,variant:e.variant,onClose:e.onClose,children:e.children})})},a={args:{type:"info",title:"",children:"这是一个没有标题的简单警告信息。",closable:!1,showIcon:!0,variant:"standard"},render:e=>r.jsx("div",{style:{width:"100%",maxWidth:"32rem"},children:r.jsx(t,{type:e.type,title:e.title,closable:e.closable,showIcon:e.showIcon,variant:e.variant,onClose:e.onClose,children:e.children})})},d={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"100%",maxWidth:"32rem",marginBottom:"40px"},children:[r.jsx(t,{type:"info",title:"填充样式",variant:"filled",children:"这是填充样式的警告信息。"}),r.jsx(t,{type:"info",title:"边框样式",variant:"outlined",children:"这是边框样式的警告信息。"}),r.jsx(t,{type:"info",title:"标准样式",variant:"standard",children:"这是标准样式的警告信息。"})]})},n=()=>r.jsx("div",{style:{width:"100%",display:"flex",justifyContent:"center",margin:"1rem 0"},children:r.jsx("div",{style:{height:"2px",width:"8rem",backgroundColor:"var(--wc-border-default)",borderRadius:"9999px"}})}),c={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"100%",maxWidth:"32rem",marginBottom:"1.5rem",padding:"1rem",borderRadius:"8px"},children:[r.jsx(t,{type:"success",title:"成功",closable:!0,children:"操作执行成功！"}),r.jsx(t,{type:"info",title:"信息",closable:!0,children:"这是一条信息提醒。"}),r.jsx(t,{type:"warning",title:"警告",closable:!0,children:"请注意这个重要提醒。"}),r.jsx(t,{type:"error",title:"错误",closable:!0,children:"发生了一个错误，请重试。"})]})},p={render:()=>r.jsx("div",{style:{width:"100%",maxWidth:"32rem",marginBottom:"1.5rem",padding:"1rem",borderRadius:"8px"},children:r.jsx(t,{type:"info",title:"自定义内容",closable:!0,children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[r.jsx("p",{children:"您可以在这里添加自定义内容："}),r.jsxs("ul",{style:{listStyleType:"disc",paddingLeft:"1rem"},children:[r.jsx("li",{children:"支持 HTML 标签"}),r.jsxs("li",{children:["可以添加",r.jsx("strong",{children:"粗体"}),"和",r.jsx("em",{children:"斜体"})]}),r.jsxs("li",{children:["支持",r.jsx("a",{href:"#",style:{color:"var(--wc-text-brand)",textDecoration:"underline"},children:"链接"})]})]})]})})})};n.__docgenInfo={description:"",methods:[],displayName:"Divider"};var h,m,u;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: 'success',
    title: '操作成功',
    children: '您的操作已成功完成！数据已保存到系统中。',
    closable: true,
    showIcon: true,
    variant: 'standard'
  },
  render: args => <div style={{
    width: '100%',
    maxWidth: '32rem'
  }}>\r
      <Alert type={args.type} title={args.title} closable={args.closable} showIcon={args.showIcon} variant={args.variant} onClose={args.onClose}>\r
        {args.children}\r
      </Alert>\r
    </div>
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var y,x,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: 'info',
    title: '系统通知',
    children: '系统将在今晚11点进行维护升级，预计持续2小时。',
    closable: true,
    showIcon: true,
    variant: 'standard'
  },
  render: args => <div style={{
    width: '100%',
    maxWidth: '32rem'
  }}>\r
      <Alert type={args.type} title={args.title} closable={args.closable} showIcon={args.showIcon} variant={args.variant} onClose={args.onClose}>\r
        {args.children}\r
      </Alert>\r
    </div>
}`,...(v=(x=l.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var g,w,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    title: '重要提醒',
    children: '您的账户余额不足，请及时充值以确保服务正常使用。',
    closable: true,
    showIcon: true,
    variant: 'standard'
  },
  render: args => <div style={{
    width: '100%',
    maxWidth: '32rem'
  }}>\r
      <Alert type={args.type} title={args.title} closable={args.closable} showIcon={args.showIcon} variant={args.variant} onClose={args.onClose}>\r
        {args.children}\r
      </Alert>\r
    </div>
}`,...(b=(w=o.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var f,j,I;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: 'error',
    title: '操作失败',
    children: '网络连接异常，请检查网络设置后重试。',
    closable: true,
    showIcon: true,
    variant: 'standard'
  },
  render: args => <div style={{
    width: '100%',
    maxWidth: '32rem'
  }}>\r
      <Alert type={args.type} title={args.title} closable={args.closable} showIcon={args.showIcon} variant={args.variant} onClose={args.onClose}>\r
        {args.children}\r
      </Alert>\r
    </div>
}`,...(I=(j=i.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var A,C,W;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    type: 'info',
    title: '',
    children: '这是一个没有标题的简单警告信息。',
    closable: false,
    showIcon: true,
    variant: 'standard'
  },
  render: args => <div style={{
    width: '100%',
    maxWidth: '32rem'
  }}>\r
      <Alert type={args.type} title={args.title} closable={args.closable} showIcon={args.showIcon} variant={args.variant} onClose={args.onClose}>\r
        {args.children}\r
      </Alert>\r
    </div>
}`,...(W=(C=a.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var S,D,T;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%',
    maxWidth: '32rem',
    marginBottom: '40px'
  }}>\r
      <Alert type="info" title="填充样式" variant="filled">\r
        这是填充样式的警告信息。\r
      </Alert>\r
      <Alert type="info" title="边框样式" variant="outlined">\r
        这是边框样式的警告信息。\r
      </Alert>\r
      <Alert type="info" title="标准样式" variant="standard">\r
        这是标准样式的警告信息。\r
      </Alert>\r
    </div>
}`,...(T=(D=d.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var R,B,_;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`() => <div style={{
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  margin: '1rem 0'
}}>\r
    <div style={{
    height: '2px',
    width: '8rem',
    backgroundColor: 'var(--wc-border-default)',
    borderRadius: '9999px'
  }} />\r
  </div>`,...(_=(B=n.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var E,L,k;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '100%',
    maxWidth: '32rem',
    marginBottom: '1.5rem',
    padding: '1rem',
    borderRadius: '8px'
  }}>\r
      <Alert type="success" title="成功" closable={true}>\r
        操作执行成功！\r
      </Alert>\r
      <Alert type="info" title="信息" closable={true}>\r
        这是一条信息提醒。\r
      </Alert>\r
      <Alert type="warning" title="警告" closable={true}>\r
        请注意这个重要提醒。\r
      </Alert>\r
      <Alert type="error" title="错误" closable={true}>\r
        发生了一个错误，请重试。\r
      </Alert>\r
    </div>
}`,...(k=(L=c.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var H,M,V;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '100%',
    maxWidth: '32rem',
    marginBottom: '1.5rem',
    padding: '1rem',
    borderRadius: '8px'
  }}>\r
      <Alert type="info" title="自定义内容" closable={true}>\r
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}>\r
          <p>您可以在这里添加自定义内容：</p>\r
          <ul style={{
          listStyleType: 'disc',
          paddingLeft: '1rem'
        }}>\r
            <li>支持 HTML 标签</li>\r
            <li>可以添加<strong>粗体</strong>和<em>斜体</em></li>\r
            <li>支持<a href="#" style={{
              color: 'var(--wc-text-brand)',
              textDecoration: 'underline'
            }}>链接</a></li>\r
          </ul>\r
        </div>\r
      </Alert>\r
    </div>
}`,...(V=(M=p.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};const z=["Success","Info","Warning","Error","WithoutTitle","Variants","Divider","AllTypes","WithCustomContent"];export{c as AllTypes,n as Divider,i as Error,l as Info,s as Success,d as Variants,o as Warning,p as WithCustomContent,a as WithoutTitle,z as __namedExportsOrder,q as default};
