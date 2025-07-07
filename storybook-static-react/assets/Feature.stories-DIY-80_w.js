import{j as r}from"./iframe-DqwHGwZR.js";import{F as o}from"./Feature-BzvHJ7t8.js";const O={title:"Components/Feature (React)",component:o,tags:["autodocs"],argTypes:{title:{control:"text"},description:{control:"text"},icon:{control:"text"},align:{control:{type:"radio"},options:["left","center"]},reverse:{control:"boolean"},bgColor:{control:"color"},ctaLabel:{control:"text"},onCtaClick:{action:"ctaClicked"},isDarkMode:{control:"boolean"}}},e=R=>r.jsx("div",{className:"p-8",children:r.jsx(o,{...R})}),a={...e,args:{title:"实时协作",description:"多人同时编辑，毫秒级同步",icon:"🚀"},render:e},n={...e,args:{...a.args,align:"center",bgColor:"#fef3c7",ctaLabel:"了解更多"},render:e},c={...e,args:{...a.args,reverse:!0},render:e},i={...e,args:{title:"图片支持",description:"除了图标，你还可以使用图片作为视觉元素。",icon:r.jsx("img",{src:"https://via.placeholder.com/100",alt:"placeholder",className:"rounded-lg"}),ctaLabel:"查看示例"},render:e},l={render:()=>r.jsxs("div",{className:"grid md:grid-cols-3 gap-8 p-8",children:[r.jsx(o,{title:"安全可靠",description:"企业级数据加密，保障您的数据安全。",icon:"🛡️",align:"center",bgColor:"#f0f9ff"}),r.jsx(o,{title:"跨平台支持",description:"支持Web、iOS、Android等多端同步。",icon:"💻",align:"center",bgColor:"#f0fdf4"}),r.jsx(o,{title:"24/7 技术支持",description:"随时为您解答任何疑问，提供专业支持。",icon:"💬",align:"center",bgColor:"#faf5ff"})]})},t=e.bind({});t.args={title:"Awesome Feature",description:"Feature description goes here.",isDarkMode:!1};const s=e.bind({});s.args={...t.args,isDarkMode:!0};var d,p,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template,
  args: {
    title: '实时协作',
    description: '多人同时编辑，毫秒级同步',
    icon: '🚀'
  },
  render: Template
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,u,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Basic.args,
    align: 'center',
    bgColor: '#fef3c7',
    ctaLabel: '了解更多'
  },
  render: Template
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var b,v,x;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Basic.args,
    reverse: true
  },
  render: Template
}`,...(x=(v=c.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var C,F,h;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Template,
  args: {
    title: '图片支持',
    description: '除了图标，你还可以使用图片作为视觉元素。',
    icon: <img src="https://via.placeholder.com/100" alt="placeholder" className="rounded-lg" />,
    ctaLabel: '查看示例'
  },
  render: Template
}`,...(h=(F=i.parameters)==null?void 0:F.docs)==null?void 0:h.source}}};var T,j,S;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="grid md:grid-cols-3 gap-8 p-8">\r
      <Feature title="安全可靠" description="企业级数据加密，保障您的数据安全。" icon="🛡️" align="center" bgColor="#f0f9ff" />\r
      <Feature title="跨平台支持" description="支持Web、iOS、Android等多端同步。" icon="💻" align="center" bgColor="#f0fdf4" />\r
      <Feature title="24/7 技术支持" description="随时为您解答任何疑问，提供专业支持。" icon="💬" align="center" bgColor="#faf5ff" />\r
    </div>
}`,...(S=(j=l.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var k,D,M;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`args => <div className='p-8'>\r
    <Feature {...args} />\r
  </div>`,...(M=(D=t.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var N,L,B;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`args => <div className='p-8'>\r
    <Feature {...args} />\r
  </div>`,...(B=(L=s.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};const _=["Basic","Center","Reversed","WithImage","MultipleFeatures","Default","DarkMode"];export{a as Basic,n as Center,s as DarkMode,t as Default,l as MultipleFeatures,c as Reversed,i as WithImage,_ as __namedExportsOrder,O as default};
