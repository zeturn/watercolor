import{j as r}from"./iframe-DqwHGwZR.js";import{B as a}from"./Badge-BV14SdVR.js";const f={title:"Components/Badge (React)",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","success","warning","error","purple","orange","cyan","pink"],description:"徽章变体"},size:{control:{type:"select"},options:["sm","md","lg"],description:"徽章尺寸"},dot:{control:"boolean",description:"是否为圆点模式"},children:{control:"text",description:"徽章文本"}}},n={args:{variant:"primary",size:"md",dot:!1,children:"徽章文本"},render:e=>r.jsx(a,{variant:e.variant,size:e.size,dot:e.dot,children:e.dot?"":e.children})},s={render:()=>r.jsxs("div",{className:"flex flex-wrap gap-3",children:[r.jsx(a,{variant:"primary",children:"主要"}),r.jsx(a,{variant:"secondary",children:"次要"}),r.jsx(a,{variant:"success",children:"成功"}),r.jsx(a,{variant:"warning",children:"警告"}),r.jsx(a,{variant:"error",children:"错误"}),r.jsx(a,{variant:"purple",children:"紫色"}),r.jsx(a,{variant:"orange",children:"橙色"}),r.jsx(a,{variant:"cyan",children:"青色"}),r.jsx(a,{variant:"pink",children:"粉色"})]})},t={render:()=>r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx(a,{size:"sm",variant:"primary",children:"小徽章"}),r.jsx(a,{size:"md",variant:"primary",children:"中徽章"}),r.jsx(a,{size:"lg",variant:"primary",children:"大徽章"})]})},i={render:()=>r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx(a,{dot:!0,variant:"primary"}),r.jsx(a,{dot:!0,variant:"success"}),r.jsx(a,{dot:!0,variant:"warning"}),r.jsx(a,{dot:!0,variant:"error"}),r.jsx(a,{dot:!0,variant:"purple"}),r.jsx(a,{dot:!0,variant:"orange"})]})};var d,o,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    dot: false,
    children: '徽章文本'
  },
  render: args => <Badge variant={args.variant} size={args.size} dot={args.dot}>\r
      {args.dot ? '' : args.children}\r
    </Badge>
}`,...(c=(o=n.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var p,g,l;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3">\r
      <Badge variant="primary">主要</Badge>\r
      <Badge variant="secondary">次要</Badge>\r
      <Badge variant="success">成功</Badge>\r
      <Badge variant="warning">警告</Badge>\r
      <Badge variant="error">错误</Badge>\r
      <Badge variant="purple">紫色</Badge>\r
      <Badge variant="orange">橙色</Badge>\r
      <Badge variant="cyan">青色</Badge>\r
      <Badge variant="pink">粉色</Badge>\r
    </div>
}`,...(l=(g=s.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var m,v,B;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">\r
      <Badge size="sm" variant="primary">小徽章</Badge>\r
      <Badge size="md" variant="primary">中徽章</Badge>\r
      <Badge size="lg" variant="primary">大徽章</Badge>\r
    </div>
}`,...(B=(v=t.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var x,u,j;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">\r
      <Badge dot variant="primary" />\r
      <Badge dot variant="success" />\r
      <Badge dot variant="warning" />\r
      <Badge dot variant="error" />\r
      <Badge dot variant="purple" />\r
      <Badge dot variant="orange" />\r
    </div>
}`,...(j=(u=i.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};const z=["Default","Variants","Sizes","Dots"];export{n as Default,i as Dots,t as Sizes,s as Variants,z as __namedExportsOrder,f as default};
