import{j as s}from"./iframe-DqwHGwZR.js";const I=["default","success","error","warning","info","pending","processing","cancelled"],O=["auto","pulse","spin","bounce","blink","shake","breathe","ripple","glow"],N={default:{text:"默认",color:"#9ca3af",darkColor:"#6b7280"},success:{text:"成功",color:"#10b981",darkColor:"#059669"},error:{text:"失败",color:"#ef4444",darkColor:"#dc2626"},warning:{text:"警告",color:"#f59e0b",darkColor:"#d97706"},info:{text:"信息",color:"#3b82f6",darkColor:"#2563eb"},pending:{text:"等待中",color:"#8b5cf6",darkColor:"#7c3aed"},processing:{text:"进行中",color:"#06b6d4",darkColor:"#0891b2"},cancelled:{text:"已取消",color:"#64748b",darkColor:"#475569"}};function F(t){return I.includes(t)}function G(t){return F(t)?t:"default"}function H({status:t,size:a,showText:r,animated:g,animationType:h="auto",className:i}){const c=G(t),n=["wc-status",`wc-status--${c}`,`wc-status--${a}`];if(r&&n.push("wc-status--with-text"),g){const l=K(c,h);n.push("wc-status--animated",`wc-status--${l}`)}return i&&n.push(i),n.filter(Boolean).join(" ")}function J(t){var a;return((a=N[t])==null?void 0:a.text)||N.default.text}function K(t,a="auto"){return a!=="auto"&&O.includes(a)?a:{processing:"spin",pending:"pulse",success:"bounce",error:"shake",warning:"blink",info:"ripple",cancelled:"breathe",default:"glow"}[t]||"pulse"}const e=({status:t="default",size:a="md",showText:r=!1,animated:g=!1,animationType:h="auto",className:i="",...c})=>{const n=H({status:t,size:a,showText:r,animated:g,animationType:h,className:i}),l=J(t);return s.jsx("span",{className:n,title:l,...c,children:r&&s.jsx("span",{className:"wc-status__text",children:l})})};e.displayName="Status";e.__docgenInfo={description:"",methods:[],displayName:"Status",props:{status:{defaultValue:{value:"'default'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},showText:{defaultValue:{value:"false",computed:!1},required:!1},animated:{defaultValue:{value:"false",computed:!1},required:!1},animationType:{defaultValue:{value:"'auto'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const M={title:"Components/Status (React)",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:{type:"select"},options:["default","success","error","warning","info","pending","processing","cancelled"],description:"状态类型"},size:{control:{type:"select"},options:["sm","md","lg"],description:"状态指示器尺寸"},showText:{control:"boolean",description:"是否显示状态文本"},animated:{control:"boolean",description:"是否启用动画效果"},animationType:{control:{type:"select"},options:["auto","pulse","spin","bounce","blink","shake","breathe","ripple","glow"],description:"动画类型（auto表示根据状态自动选择）"}}},d={args:{status:"default",size:"md",showText:!1,animated:!1,animationType:"auto"}},m={render:()=>s.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(e,{status:"default"}),s.jsx("span",{className:"text-sm",children:"默认"})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(e,{status:"success"}),s.jsx("span",{className:"text-sm",children:"成功"})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(e,{status:"error"}),s.jsx("span",{className:"text-sm",children:"失败"})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(e,{status:"warning"}),s.jsx("span",{className:"text-sm",children:"警告"})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(e,{status:"info"}),s.jsx("span",{className:"text-sm",children:"信息"})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(e,{status:"pending"}),s.jsx("span",{className:"text-sm",children:"等待中"})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(e,{status:"processing"}),s.jsx("span",{className:"text-sm",children:"进行中"})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(e,{status:"cancelled"}),s.jsx("span",{className:"text-sm",children:"已取消"})]})]})},u={render:()=>s.jsxs("div",{className:"flex flex-col gap-3",children:[s.jsx(e,{status:"success",showText:!0}),s.jsx(e,{status:"error",showText:!0}),s.jsx(e,{status:"warning",showText:!0}),s.jsx(e,{status:"info",showText:!0}),s.jsx(e,{status:"pending",showText:!0}),s.jsx(e,{status:"processing",showText:!0}),s.jsx(e,{status:"cancelled",showText:!0})]})},x={render:()=>s.jsxs("div",{className:"flex flex-col gap-4",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("span",{className:"w-12 text-sm",children:"小:"}),s.jsx(e,{size:"sm",status:"success"}),s.jsx(e,{size:"sm",status:"error"}),s.jsx(e,{size:"sm",status:"warning"}),s.jsx(e,{size:"sm",status:"info"})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("span",{className:"w-12 text-sm",children:"中:"}),s.jsx(e,{size:"md",status:"success"}),s.jsx(e,{size:"md",status:"error"}),s.jsx(e,{size:"md",status:"warning"}),s.jsx(e,{size:"md",status:"info"})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("span",{className:"w-12 text-sm",children:"大:"}),s.jsx(e,{size:"lg",status:"success"}),s.jsx(e,{size:"lg",status:"error"}),s.jsx(e,{size:"lg",status:"warning"}),s.jsx(e,{size:"lg",status:"info"})]})]})},o={render:()=>s.jsxs("div",{className:"flex flex-col gap-4",children:[s.jsx("h4",{className:"text-md font-semibold mb-2",children:"自动动画（根据状态类型）"}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx(e,{status:"success",animated:!0,showText:!0}),s.jsx("span",{className:"text-sm text-gray-600",children:"成功 - 跳动"})]}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx(e,{status:"error",animated:!0,showText:!0}),s.jsx("span",{className:"text-sm text-gray-600",children:"错误 - 震动"})]}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx(e,{status:"warning",animated:!0,showText:!0}),s.jsx("span",{className:"text-sm text-gray-600",children:"警告 - 闪烁"})]}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx(e,{status:"info",animated:!0,showText:!0}),s.jsx("span",{className:"text-sm text-gray-600",children:"信息 - 扩散"})]}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx(e,{status:"pending",animated:!0,showText:!0}),s.jsx("span",{className:"text-sm text-gray-600",children:"等待中 - 脉冲"})]}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx(e,{status:"processing",animated:!0,showText:!0}),s.jsx("span",{className:"text-sm text-gray-600",children:"进行中 - 旋转"})]}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx(e,{status:"cancelled",animated:!0,showText:!0}),s.jsx("span",{className:"text-sm text-gray-600",children:"已取消 - 呼吸"})]}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx(e,{status:"default",animated:!0,showText:!0}),s.jsx("span",{className:"text-sm text-gray-600",children:"默认 - 发光"})]})]})]})},p={render:()=>s.jsxs("div",{className:"flex flex-col gap-4",children:[s.jsx("h4",{className:"text-md font-semibold mb-2",children:"自定义动画类型"}),s.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[s.jsxs("div",{className:"flex flex-col items-center gap-2",children:[s.jsx(e,{status:"success",animated:!0,animationType:"pulse"}),s.jsx("span",{className:"text-sm",children:"脉冲动画"})]}),s.jsxs("div",{className:"flex flex-col items-center gap-2",children:[s.jsx(e,{status:"success",animated:!0,animationType:"spin"}),s.jsx("span",{className:"text-sm",children:"旋转动画"})]}),s.jsxs("div",{className:"flex flex-col items-center gap-2",children:[s.jsx(e,{status:"success",animated:!0,animationType:"bounce"}),s.jsx("span",{className:"text-sm",children:"跳动动画"})]}),s.jsxs("div",{className:"flex flex-col items-center gap-2",children:[s.jsx(e,{status:"success",animated:!0,animationType:"blink"}),s.jsx("span",{className:"text-sm",children:"闪烁动画"})]}),s.jsxs("div",{className:"flex flex-col items-center gap-2",children:[s.jsx(e,{status:"success",animated:!0,animationType:"shake"}),s.jsx("span",{className:"text-sm",children:"震动动画"})]}),s.jsxs("div",{className:"flex flex-col items-center gap-2",children:[s.jsx(e,{status:"success",animated:!0,animationType:"breathe"}),s.jsx("span",{className:"text-sm",children:"呼吸动画"})]}),s.jsxs("div",{className:"flex flex-col items-center gap-2",children:[s.jsx(e,{status:"success",animated:!0,animationType:"ripple"}),s.jsx("span",{className:"text-sm",children:"扩散动画"})]}),s.jsxs("div",{className:"flex flex-col items-center gap-2",children:[s.jsx(e,{status:"success",animated:!0,animationType:"glow"}),s.jsx("span",{className:"text-sm",children:"发光动画"})]})]})]})},f={render:()=>s.jsxs("div",{className:"space-y-4",children:[s.jsx("h3",{className:"text-lg font-semibold mb-4",children:"实际应用场景"}),s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"flex items-center justify-between p-3 border rounded-lg",children:[s.jsx("span",{children:"用户注册"}),s.jsx(e,{status:"success",showText:!0})]}),s.jsxs("div",{className:"flex items-center justify-between p-3 border rounded-lg",children:[s.jsx("span",{children:"邮件验证"}),s.jsx(e,{status:"pending",animated:!0,showText:!0})]}),s.jsxs("div",{className:"flex items-center justify-between p-3 border rounded-lg",children:[s.jsx("span",{children:"文件上传"}),s.jsx(e,{status:"processing",animated:!0,showText:!0})]}),s.jsxs("div",{className:"flex items-center justify-between p-3 border rounded-lg",children:[s.jsx("span",{children:"支付处理"}),s.jsx(e,{status:"error",showText:!0})]}),s.jsxs("div",{className:"flex items-center justify-between p-3 border rounded-lg",children:[s.jsx("span",{children:"订单状态"}),s.jsx(e,{status:"cancelled",showText:!0})]}),s.jsxs("div",{className:"flex items-center justify-between p-3 border rounded-lg",children:[s.jsx("span",{children:"系统警告"}),s.jsx(e,{status:"warning",showText:!0})]})]})]})};var j,v,w;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    status: 'default',
    size: 'md',
    showText: false,
    animated: false,
    animationType: 'auto'
  }
}`,...(w=(v=d.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var S,T,b;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4 items-center">\r
      <div className="flex items-center gap-2">\r
        <Status status="default" />\r
        <span className="text-sm">默认</span>\r
      </div>\r
      <div className="flex items-center gap-2">\r
        <Status status="success" />\r
        <span className="text-sm">成功</span>\r
      </div>\r
      <div className="flex items-center gap-2">\r
        <Status status="error" />\r
        <span className="text-sm">失败</span>\r
      </div>\r
      <div className="flex items-center gap-2">\r
        <Status status="warning" />\r
        <span className="text-sm">警告</span>\r
      </div>\r
      <div className="flex items-center gap-2">\r
        <Status status="info" />\r
        <span className="text-sm">信息</span>\r
      </div>\r
      <div className="flex items-center gap-2">\r
        <Status status="pending" />\r
        <span className="text-sm">等待中</span>\r
      </div>\r
      <div className="flex items-center gap-2">\r
        <Status status="processing" />\r
        <span className="text-sm">进行中</span>\r
      </div>\r
      <div className="flex items-center gap-2">\r
        <Status status="cancelled" />\r
        <span className="text-sm">已取消</span>\r
      </div>\r
    </div>
}`,...(b=(T=m.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var y,z,k;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">\r
      <Status status="success" showText />\r
      <Status status="error" showText />\r
      <Status status="warning" showText />\r
      <Status status="info" showText />\r
      <Status status="pending" showText />\r
      <Status status="processing" showText />\r
      <Status status="cancelled" showText />\r
    </div>
}`,...(k=(z=u.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var C,A,V;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">\r
      <div className="flex items-center gap-4">\r
        <span className="w-12 text-sm">小:</span>\r
        <Status size="sm" status="success" />\r
        <Status size="sm" status="error" />\r
        <Status size="sm" status="warning" />\r
        <Status size="sm" status="info" />\r
      </div>\r
      <div className="flex items-center gap-4">\r
        <span className="w-12 text-sm">中:</span>\r
        <Status size="md" status="success" />\r
        <Status size="md" status="error" />\r
        <Status size="md" status="warning" />\r
        <Status size="md" status="info" />\r
      </div>\r
      <div className="flex items-center gap-4">\r
        <span className="w-12 text-sm">大:</span>\r
        <Status size="lg" status="success" />\r
        <Status size="lg" status="error" />\r
        <Status size="lg" status="warning" />\r
        <Status size="lg" status="info" />\r
      </div>\r
    </div>
}`,...(V=(A=x.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var _,q,$;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">\r
      <h4 className="text-md font-semibold mb-2">自动动画（根据状态类型）</h4>\r
      <div className="grid grid-cols-2 gap-4">\r
        <div className="flex items-center gap-3">\r
          <Status status="success" animated showText />\r
          <span className="text-sm text-gray-600">成功 - 跳动</span>\r
        </div>\r
        <div className="flex items-center gap-3">\r
          <Status status="error" animated showText />\r
          <span className="text-sm text-gray-600">错误 - 震动</span>\r
        </div>\r
        <div className="flex items-center gap-3">\r
          <Status status="warning" animated showText />\r
          <span className="text-sm text-gray-600">警告 - 闪烁</span>\r
        </div>\r
        <div className="flex items-center gap-3">\r
          <Status status="info" animated showText />\r
          <span className="text-sm text-gray-600">信息 - 扩散</span>\r
        </div>\r
        <div className="flex items-center gap-3">\r
          <Status status="pending" animated showText />\r
          <span className="text-sm text-gray-600">等待中 - 脉冲</span>\r
        </div>\r
        <div className="flex items-center gap-3">\r
          <Status status="processing" animated showText />\r
          <span className="text-sm text-gray-600">进行中 - 旋转</span>\r
        </div>\r
        <div className="flex items-center gap-3">\r
          <Status status="cancelled" animated showText />\r
          <span className="text-sm text-gray-600">已取消 - 呼吸</span>\r
        </div>\r
        <div className="flex items-center gap-3">\r
          <Status status="default" animated showText />\r
          <span className="text-sm text-gray-600">默认 - 发光</span>\r
        </div>\r
      </div>\r
    </div>
}`,...($=(q=o.parameters)==null?void 0:q.docs)==null?void 0:$.source}}};var D,E,R;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">\r
      <h4 className="text-md font-semibold mb-2">自定义动画类型</h4>\r
      <div className="grid grid-cols-3 gap-4">\r
        <div className="flex flex-col items-center gap-2">\r
          <Status status="success" animated animationType="pulse" />\r
          <span className="text-sm">脉冲动画</span>\r
        </div>\r
        <div className="flex flex-col items-center gap-2">\r
          <Status status="success" animated animationType="spin" />\r
          <span className="text-sm">旋转动画</span>\r
        </div>\r
        <div className="flex flex-col items-center gap-2">\r
          <Status status="success" animated animationType="bounce" />\r
          <span className="text-sm">跳动动画</span>\r
        </div>\r
        <div className="flex flex-col items-center gap-2">\r
          <Status status="success" animated animationType="blink" />\r
          <span className="text-sm">闪烁动画</span>\r
        </div>\r
        <div className="flex flex-col items-center gap-2">\r
          <Status status="success" animated animationType="shake" />\r
          <span className="text-sm">震动动画</span>\r
        </div>\r
        <div className="flex flex-col items-center gap-2">\r
          <Status status="success" animated animationType="breathe" />\r
          <span className="text-sm">呼吸动画</span>\r
        </div>\r
        <div className="flex flex-col items-center gap-2">\r
          <Status status="success" animated animationType="ripple" />\r
          <span className="text-sm">扩散动画</span>\r
        </div>\r
        <div className="flex flex-col items-center gap-2">\r
          <Status status="success" animated animationType="glow" />\r
          <span className="text-sm">发光动画</span>\r
        </div>\r
      </div>\r
    </div>
}`,...(R=(E=p.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var U,W,B;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <h3 className="text-lg font-semibold mb-4">实际应用场景</h3>\r
      \r
      <div className="space-y-3">\r
        <div className="flex items-center justify-between p-3 border rounded-lg">\r
          <span>用户注册</span>\r
          <Status status="success" showText />\r
        </div>\r
        \r
        <div className="flex items-center justify-between p-3 border rounded-lg">\r
          <span>邮件验证</span>\r
          <Status status="pending" animated showText />\r
        </div>\r
        \r
        <div className="flex items-center justify-between p-3 border rounded-lg">\r
          <span>文件上传</span>\r
          <Status status="processing" animated showText />\r
        </div>\r
        \r
        <div className="flex items-center justify-between p-3 border rounded-lg">\r
          <span>支付处理</span>\r
          <Status status="error" showText />\r
        </div>\r
        \r
        <div className="flex items-center justify-between p-3 border rounded-lg">\r
          <span>订单状态</span>\r
          <Status status="cancelled" showText />\r
        </div>\r
        \r
        <div className="flex items-center justify-between p-3 border rounded-lg">\r
          <span>系统警告</span>\r
          <Status status="warning" showText />\r
        </div>\r
      </div>\r
    </div>
}`,...(B=(W=f.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};const P=["Default","AllStatuses","WithText","Sizes","Animated","CustomAnimations","UseCase"];export{m as AllStatuses,o as Animated,p as CustomAnimations,d as Default,x as Sizes,f as UseCase,u as WithText,P as __namedExportsOrder,M as default};
