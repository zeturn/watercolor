import{j as t}from"./iframe-DqwHGwZR.js";import{B as e}from"./Button-D3FJQjBm.js";const C={title:"Components/Button (React)",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","filled","success","warning","error","purple","orange","cyan","pink"],description:"按钮变体"},buttonStyle:{control:{type:"select"},options:["default","outlined","filled"],description:"按钮样式模式"},size:{control:{type:"select"},options:["sm","md","lg"],description:"按钮大小"},disabled:{control:"boolean",description:"是否禁用"},onClick:{action:"clicked"}}},d=I=>t.jsx(e,{...I,children:"按钮"}),r=d.bind({});r.args={variant:"primary",size:"md",disabled:!1};const n=d.bind({});n.args={...r.args,variant:"secondary"};const a=d.bind({});a.args={...r.args,variant:"filled"};const s=()=>t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(e,{size:"sm",children:"小按钮"}),t.jsx(e,{size:"md",children:"中等按钮"}),t.jsx(e,{size:"lg",children:"大按钮"})]}),i=()=>t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(e,{variant:"primary",children:"主要按钮"}),t.jsx(e,{variant:"secondary",children:"次要按钮"}),t.jsx(e,{variant:"filled",children:"填充按钮"})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(e,{variant:"success",children:"成功按钮"}),t.jsx(e,{variant:"warning",children:"警告按钮"}),t.jsx(e,{variant:"error",children:"错误按钮"})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(e,{variant:"purple",children:"紫色按钮"}),t.jsx(e,{variant:"orange",children:"橙色按钮"}),t.jsx(e,{variant:"cyan",children:"青色按钮"}),t.jsx(e,{variant:"pink",children:"粉色按钮"})]})]}),o=()=>t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(e,{variant:"primary",disabled:!0,children:"禁用主要"}),t.jsx(e,{variant:"secondary",disabled:!0,children:"禁用次要"}),t.jsx(e,{variant:"filled",disabled:!0,children:"禁用填充"})]}),l=()=>t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"mb-3 text-lg font-semibold",children:"默认样式 (Default)"}),t.jsx("p",{className:"mb-3 text-sm text-gray-600",children:"只有彩色的字，没有背景，hover时才有浅色的背景，没有边框"}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(e,{variant:"primary",buttonStyle:"default",children:"主要按钮"}),t.jsx(e,{variant:"success",buttonStyle:"default",children:"成功按钮"}),t.jsx(e,{variant:"warning",buttonStyle:"default",children:"警告按钮"}),t.jsx(e,{variant:"error",buttonStyle:"default",children:"错误按钮"}),t.jsx(e,{variant:"purple",buttonStyle:"default",children:"紫色按钮"})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"mb-3 text-lg font-semibold",children:"边框样式 (Outlined)"}),t.jsx("p",{className:"mb-3 text-sm text-gray-600",children:"只有彩色的字，没有背景，hover时才有浅色的背景，有边框"}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(e,{variant:"primary",buttonStyle:"outlined",children:"主要按钮"}),t.jsx(e,{variant:"success",buttonStyle:"outlined",children:"成功按钮"}),t.jsx(e,{variant:"warning",buttonStyle:"outlined",children:"警告按钮"}),t.jsx(e,{variant:"error",buttonStyle:"outlined",children:"错误按钮"}),t.jsx(e,{variant:"purple",buttonStyle:"outlined",children:"紫色按钮"})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"mb-3 text-lg font-semibold",children:"填充样式 (Filled)"}),t.jsx("p",{className:"mb-3 text-sm text-gray-600",children:"只有白色的字，彩色填充背景，hover时有更深色的背景"}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(e,{variant:"primary",buttonStyle:"filled",children:"主要按钮"}),t.jsx(e,{variant:"success",buttonStyle:"filled",children:"成功按钮"}),t.jsx(e,{variant:"warning",buttonStyle:"filled",children:"警告按钮"}),t.jsx(e,{variant:"error",buttonStyle:"filled",children:"错误按钮"}),t.jsx(e,{variant:"purple",buttonStyle:"filled",children:"紫色按钮"})]})]})]});s.__docgenInfo={description:"",methods:[],displayName:"Sizes"};i.__docgenInfo={description:"",methods:[],displayName:"Variants"};o.__docgenInfo={description:"",methods:[],displayName:"Disabled"};l.__docgenInfo={description:"",methods:[],displayName:"ButtonStyles"};var c,u,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"args => <Button {...args}>按钮</Button>",...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,v,x;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Button {...args}>按钮</Button>",...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var y,B,h;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:"args => <Button {...args}>按钮</Button>",...(h=(B=a.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};var g,b,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`() => <div className="flex items-center gap-4">\r
    <Button size="sm">小按钮</Button>\r
    <Button size="md">中等按钮</Button>\r
    <Button size="lg">大按钮</Button>\r
  </div>`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var j,S,N;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`() => <div className="space-y-4">\r
    <div className="flex items-center gap-4">\r
      <Button variant="primary">主要按钮</Button>\r
      <Button variant="secondary">次要按钮</Button>\r
      <Button variant="filled">填充按钮</Button>\r
    </div>\r
    <div className="flex items-center gap-4">\r
      <Button variant="success">成功按钮</Button>\r
      <Button variant="warning">警告按钮</Button>\r
      <Button variant="error">错误按钮</Button>\r
    </div>\r
    <div className="flex items-center gap-4">\r
      <Button variant="purple">紫色按钮</Button>\r
      <Button variant="orange">橙色按钮</Button>\r
      <Button variant="cyan">青色按钮</Button>\r
      <Button variant="pink">粉色按钮</Button>\r
    </div>\r
  </div>`,...(N=(S=i.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var z,_,w;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`() => <div className="flex items-center gap-4">\r
    <Button variant="primary" disabled>\r
      禁用主要\r
    </Button>\r
    <Button variant="secondary" disabled>\r
      禁用次要\r
    </Button>\r
    <Button variant="filled" disabled>\r
      禁用填充\r
    </Button>\r
  </div>`,...(w=(_=o.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var k,D,F;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`() => <div className="space-y-6">\r
    <div>\r
      <h3 className="mb-3 text-lg font-semibold">默认样式 (Default)</h3>\r
      <p className="mb-3 text-sm text-gray-600">只有彩色的字，没有背景，hover时才有浅色的背景，没有边框</p>\r
      <div className="flex items-center gap-4">\r
        <Button variant="primary" buttonStyle="default">\r
          主要按钮\r
        </Button>\r
        <Button variant="success" buttonStyle="default">\r
          成功按钮\r
        </Button>\r
        <Button variant="warning" buttonStyle="default">\r
          警告按钮\r
        </Button>\r
        <Button variant="error" buttonStyle="default">\r
          错误按钮\r
        </Button>\r
        <Button variant="purple" buttonStyle="default">\r
          紫色按钮\r
        </Button>\r
      </div>\r
    </div>\r
\r
    <div>\r
      <h3 className="mb-3 text-lg font-semibold">边框样式 (Outlined)</h3>\r
      <p className="mb-3 text-sm text-gray-600">只有彩色的字，没有背景，hover时才有浅色的背景，有边框</p>\r
      <div className="flex items-center gap-4">\r
        <Button variant="primary" buttonStyle="outlined">\r
          主要按钮\r
        </Button>\r
        <Button variant="success" buttonStyle="outlined">\r
          成功按钮\r
        </Button>\r
        <Button variant="warning" buttonStyle="outlined">\r
          警告按钮\r
        </Button>\r
        <Button variant="error" buttonStyle="outlined">\r
          错误按钮\r
        </Button>\r
        <Button variant="purple" buttonStyle="outlined">\r
          紫色按钮\r
        </Button>\r
      </div>\r
    </div>\r
\r
    <div>\r
      <h3 className="mb-3 text-lg font-semibold">填充样式 (Filled)</h3>\r
      <p className="mb-3 text-sm text-gray-600">只有白色的字，彩色填充背景，hover时有更深色的背景</p>\r
      <div className="flex items-center gap-4">\r
        <Button variant="primary" buttonStyle="filled">\r
          主要按钮\r
        </Button>\r
        <Button variant="success" buttonStyle="filled">\r
          成功按钮\r
        </Button>\r
        <Button variant="warning" buttonStyle="filled">\r
          警告按钮\r
        </Button>\r
        <Button variant="error" buttonStyle="filled">\r
          错误按钮\r
        </Button>\r
        <Button variant="purple" buttonStyle="filled">\r
          紫色按钮\r
        </Button>\r
      </div>\r
    </div>\r
  </div>`,...(F=(D=l.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const E=["Primary","Secondary","Filled","Sizes","Variants","Disabled","ButtonStyles"];export{l as ButtonStyles,o as Disabled,a as Filled,r as Primary,n as Secondary,s as Sizes,i as Variants,E as __namedExportsOrder,C as default};
