import{j as r}from"./iframe-DqwHGwZR.js";import{C as e}from"./Card-DHhwJH9g.js";const k={title:"Components/Card (React)",component:e,parameters:{layout:"centered",docs:{description:{component:"Card is a versatile container presenting content and actions on a single subject."}}},tags:["autodocs"],argTypes:{title:{control:"text",description:"Card title"},variant:{control:{type:"select"},options:["filled","outlined","minimal","elevated"],description:"Card variant style"},color:{control:{type:"select"},options:["default","primary","success","warning","error","info"],description:"Color theme"},size:{control:{type:"select"},options:["small","medium","large"],description:"Card size"},interactive:{control:"boolean",description:"Enable hover interaction"},noBorder:{control:"boolean",description:"Remove border"}}},c={args:{title:"Card Title",variant:"filled",color:"default",size:"medium",interactive:!0,noBorder:!0},render:a=>r.jsx("div",{className:"wc-w-96",children:r.jsx(e,{title:a.title,variant:a.variant,color:a.color,size:a.size,interactive:a.interactive,noBorder:a.noBorder,children:r.jsx("p",{className:"wc-opacity-80",children:"A clean and modern card component with no border or shadow by default. Light gray background darkens on hover with a subtle lift."})})})},s={render:()=>r.jsxs("div",{className:"wc-grid wc-grid-cols-1 wc-md-grid-cols-2 wc-gap-6 wc-max-w-4xl",children:[r.jsx(e,{title:"默认色（灰色）",color:"default",children:r.jsx("p",{className:"wc-opacity-80",children:"这是默认的浅灰色卡片，简洁清爽的无边框设计。"})}),r.jsx(e,{title:"主题色（蓝色）",color:"primary",children:r.jsx("p",{className:"wc-opacity-80",children:"使用主题蓝色的卡片，适合重要信息展示。"})}),r.jsx(e,{title:"成功色（绿色）",color:"success",children:r.jsx("p",{className:"wc-opacity-80",children:"成功状态的绿色卡片，适合显示成功信息。"})}),r.jsx(e,{title:"警告色（橙色）",color:"warning",children:r.jsx("p",{className:"wc-opacity-80",children:"警告状态的橙色卡片，用于提醒用户注意。"})}),r.jsx(e,{title:"错误色（红色）",color:"error",children:r.jsx("p",{className:"wc-opacity-80",children:"错误状态的红色卡片，用于显示错误信息。"})}),r.jsx(e,{title:"信息色（青色）",color:"info",children:r.jsx("p",{className:"wc-opacity-80",children:"信息提示的青色卡片，用于一般信息展示。"})})]})},i={render:()=>r.jsxs("div",{className:"wc-space-y-6 wc-max-w-2xl",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"wc-text-lg wc-font-semibold wc-mb-3",children:"填充样式（默认）"}),r.jsx(e,{title:"填充样式卡片",variant:"filled",children:r.jsx("p",{className:"wc-opacity-80",children:"这是默认的填充样式，浅灰色背景，无边框无阴影。"})})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"wc-text-lg wc-font-semibold wc-mb-3",children:"边框样式"}),r.jsx(e,{title:"边框样式卡片",variant:"outlined",children:r.jsx("p",{className:"wc-opacity-80",children:"透明背景，带有较粗的边框，hover时显示浅色背景。"})})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"wc-text-lg wc-font-semibold wc-mb-3",children:"简约样式"}),r.jsx(e,{title:"简约样式卡片",variant:"minimal",children:r.jsx("p",{className:"wc-opacity-80",children:"最简洁的样式，无边框，透明背景，内边距较小。"})})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"wc-text-lg wc-font-semibold wc-mb-3",children:"立体样式"}),r.jsx(e,{title:"立体样式卡片",variant:"elevated",children:r.jsx("p",{className:"wc-opacity-80",children:"带有阴影效果的立体样式，这是唯一有阴影的变体。"})})]})]})},n={render:()=>r.jsxs("div",{className:"wc-space-y-6 wc-max-w-2xl",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"wc-text-lg wc-font-semibold wc-mb-3",children:"小尺寸"}),r.jsx(e,{title:"小卡片",size:"small",children:r.jsx("p",{className:"wc-opacity-80",children:"内边距较小的紧凑卡片。"})})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"wc-text-lg wc-font-semibold wc-mb-3",children:"中等尺寸（默认）"}),r.jsx(e,{title:"中等卡片",size:"medium",children:r.jsx("p",{className:"wc-opacity-80",children:"标准尺寸的卡片，平衡美观与空间利用。"})})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"wc-text-lg wc-font-semibold wc-mb-3",children:"大尺寸"}),r.jsx(e,{title:"大卡片",size:"large",children:r.jsx("p",{className:"wc-opacity-80",children:"内边距较大的宽松卡片，适合重要内容展示。"})})]})]})},t={render:()=>r.jsxs("div",{className:"wc-grid wc-grid-cols-1 wc-md-grid-cols-2 wc-gap-6 wc-max-w-4xl",children:[r.jsx(e,{title:"可交互卡片",interactive:!0,children:r.jsx("p",{className:"wc-opacity-80",children:"启用了交互效果，鼠标悬停时会有动画效果。"})}),r.jsx(e,{title:"静态卡片",interactive:!1,children:r.jsx("p",{className:"wc-opacity-80",children:"禁用了交互效果，鼠标悬停时无变化。"})})]})},l={render:()=>r.jsx("div",{className:"wc-max-w-md",children:r.jsx(e,{children:r.jsx("p",{className:"wc-opacity-80",children:"这是一个没有标题的卡片，只包含内容部分。"})})})};var o,d,m;c.parameters={...c.parameters,docs:{...(o=c.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    variant: 'filled',
    color: 'default',
    size: 'medium',
    interactive: true,
    noBorder: true
  },
  render: args => <div className="wc-w-96">\r
      <Card title={args.title} variant={args.variant} color={args.color} size={args.size} interactive={args.interactive} noBorder={args.noBorder}>\r
        <p className="wc-opacity-80">\r
          A clean and modern card component with no border or shadow by default. Light gray background darkens on hover with a subtle lift.\r
        </p>\r
      </Card>\r
    </div>
}`,...(m=(d=c.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,w,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="wc-grid wc-grid-cols-1 wc-md-grid-cols-2 wc-gap-6 wc-max-w-4xl">\r
      <Card title="默认色（灰色）" color="default">\r
        <p className="wc-opacity-80">\r
          这是默认的浅灰色卡片，简洁清爽的无边框设计。\r
        </p>\r
      </Card>\r
      \r
      <Card title="主题色（蓝色）" color="primary">\r
        <p className="wc-opacity-80">\r
          使用主题蓝色的卡片，适合重要信息展示。\r
        </p>\r
      </Card>\r
      \r
      <Card title="成功色（绿色）" color="success">\r
        <p className="wc-opacity-80">\r
          成功状态的绿色卡片，适合显示成功信息。\r
        </p>\r
      </Card>\r
      \r
      <Card title="警告色（橙色）" color="warning">\r
        <p className="wc-opacity-80">\r
          警告状态的橙色卡片，用于提醒用户注意。\r
        </p>\r
      </Card>\r
      \r
      <Card title="错误色（红色）" color="error">\r
        <p className="wc-opacity-80">\r
          错误状态的红色卡片，用于显示错误信息。\r
        </p>\r
      </Card>\r
      \r
      <Card title="信息色（青色）" color="info">\r
        <p className="wc-opacity-80">\r
          信息提示的青色卡片，用于一般信息展示。\r
        </p>\r
      </Card>\r
    </div>
}`,...(h=(w=s.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var x,v,N;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="wc-space-y-6 wc-max-w-2xl">\r
      <div>\r
        <h3 className="wc-text-lg wc-font-semibold wc-mb-3">填充样式（默认）</h3>\r
        <Card title="填充样式卡片" variant="filled">\r
          <p className="wc-opacity-80">\r
            这是默认的填充样式，浅灰色背景，无边框无阴影。\r
          </p>\r
        </Card>\r
      </div>\r
      \r
      <div>\r
        <h3 className="wc-text-lg wc-font-semibold wc-mb-3">边框样式</h3>\r
        <Card title="边框样式卡片" variant="outlined">\r
          <p className="wc-opacity-80">\r
            透明背景，带有较粗的边框，hover时显示浅色背景。\r
          </p>\r
        </Card>\r
      </div>\r
      \r
      <div>\r
        <h3 className="wc-text-lg wc-font-semibold wc-mb-3">简约样式</h3>\r
        <Card title="简约样式卡片" variant="minimal">\r
          <p className="wc-opacity-80">\r
            最简洁的样式，无边框，透明背景，内边距较小。\r
          </p>\r
        </Card>\r
      </div>\r
      \r
      <div>\r
        <h3 className="wc-text-lg wc-font-semibold wc-mb-3">立体样式</h3>\r
        <Card title="立体样式卡片" variant="elevated">\r
          <p className="wc-opacity-80">\r
            带有阴影效果的立体样式，这是唯一有阴影的变体。\r
          </p>\r
        </Card>\r
      </div>\r
    </div>
}`,...(N=(v=i.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var j,g,u;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="wc-space-y-6 wc-max-w-2xl">\r
      <div>\r
        <h3 className="wc-text-lg wc-font-semibold wc-mb-3">小尺寸</h3>\r
        <Card title="小卡片" size="small">\r
          <p className="wc-opacity-80">内边距较小的紧凑卡片。</p>\r
        </Card>\r
      </div>\r
      \r
      <div>\r
        <h3 className="wc-text-lg wc-font-semibold wc-mb-3">中等尺寸（默认）</h3>\r
        <Card title="中等卡片" size="medium">\r
          <p className="wc-opacity-80">标准尺寸的卡片，平衡美观与空间利用。</p>\r
        </Card>\r
      </div>\r
      \r
      <div>\r
        <h3 className="wc-text-lg wc-font-semibold wc-mb-3">大尺寸</h3>\r
        <Card title="大卡片" size="large">\r
          <p className="wc-opacity-80">内边距较大的宽松卡片，适合重要内容展示。</p>\r
        </Card>\r
      </div>\r
    </div>
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var y,C,b;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="wc-grid wc-grid-cols-1 wc-md-grid-cols-2 wc-gap-6 wc-max-w-4xl">\r
      <Card title="可交互卡片" interactive={true}>\r
        <p className="wc-opacity-80">\r
          启用了交互效果，鼠标悬停时会有动画效果。\r
        </p>\r
      </Card>\r
      \r
      <Card title="静态卡片" interactive={false}>\r
        <p className="wc-opacity-80">\r
          禁用了交互效果，鼠标悬停时无变化。\r
        </p>\r
      </Card>\r
    </div>
}`,...(b=(C=t.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var f,z,S;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="wc-max-w-md">\r
      <Card>\r
        <p className="wc-opacity-80">\r
          这是一个没有标题的卡片，只包含内容部分。\r
        </p>\r
      </Card>\r
    </div>
}`,...(S=(z=l.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};const E=["Default","Colors","Variants","Sizes","Interactive","WithoutTitle"];export{s as Colors,c as Default,t as Interactive,n as Sizes,i as Variants,l as WithoutTitle,E as __namedExportsOrder,k as default};
