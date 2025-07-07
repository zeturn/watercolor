import{j as a}from"./iframe-DqwHGwZR.js";import{B as s}from"./Breadcrumb-KvlrsN58.js";const E={title:"Components/Breadcrumb (React)",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{items:{control:{type:"object"},description:"面包屑项目数据"},separator:{control:"text",description:"分隔符"},maxItems:{control:{type:"number"},description:"最大显示项目数"},showHome:{control:"boolean",description:"是否显示首页链接"},homeIcon:{control:"text",description:"首页图标"},variant:{control:{type:"select"},options:["default","underlined","contained"],description:"面包屑变体"},onItemClick:{action:"click"}}},r=[{label:"首页",href:"/"},{label:"产品",href:"/products"},{label:"电子设备",href:"/products/electronics"},{label:"智能手机",href:"/products/electronics/phones"},{label:"iPhone 15",href:"/products/electronics/phones/iphone-15"}],o={args:{items:r,separator:"/",maxItems:0,showHome:!1,homeIcon:"🏠",variant:"default"},render:e=>a.jsx("div",{className:"w-full max-w-2xl",children:a.jsx(s,{items:e.items,separator:e.separator,maxItems:e.maxItems,showHome:e.showHome,homeIcon:e.homeIcon,variant:e.variant,onItemClick:e.onItemClick})})},t={args:{items:r.slice(1),separator:"/",maxItems:0,showHome:!0,homeIcon:"🏠",variant:"default"},render:e=>a.jsx("div",{className:"w-full max-w-2xl",children:a.jsx(s,{items:e.items,separator:e.separator,maxItems:e.maxItems,showHome:e.showHome,homeIcon:e.homeIcon,variant:e.variant,onItemClick:e.onItemClick})})},m={args:{items:r,separator:"/",maxItems:3,showHome:!1,homeIcon:"🏠",variant:"default"},render:e=>a.jsx("div",{className:"w-full max-w-2xl",children:a.jsx(s,{items:e.items,separator:e.separator,maxItems:e.maxItems,showHome:e.showHome,homeIcon:e.homeIcon,variant:e.variant,onItemClick:e.onItemClick})})},n={args:{items:r,separator:"/",maxItems:0,showHome:!1,homeIcon:"🏠",variant:"underlined"},render:e=>a.jsx("div",{className:"w-full max-w-2xl",children:a.jsx(s,{items:e.items,separator:e.separator,maxItems:e.maxItems,showHome:e.showHome,homeIcon:e.homeIcon,variant:e.variant,onItemClick:e.onItemClick})})},i={args:{items:r,separator:"/",maxItems:0,showHome:!1,homeIcon:"🏠",variant:"contained"},render:e=>a.jsx("div",{className:"w-full max-w-2xl",children:a.jsx(s,{items:e.items,separator:e.separator,maxItems:e.maxItems,showHome:e.showHome,homeIcon:e.homeIcon,variant:e.variant,onItemClick:e.onItemClick})})},c={args:{items:r,separator:"→",maxItems:0,showHome:!1,homeIcon:"🏠",variant:"default"},render:e=>a.jsx("div",{className:"w-full max-w-2xl",children:a.jsx(s,{items:e.items,separator:e.separator,maxItems:e.maxItems,showHome:e.showHome,homeIcon:e.homeIcon,variant:e.variant,onItemClick:e.onItemClick})})},l={render:()=>a.jsxs("div",{className:"space-y-6 max-w-2xl",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3",children:"默认样式"}),a.jsx(s,{items:r,variant:"default"})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3",children:"下划线样式"}),a.jsx(s,{items:r,variant:"underlined"})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3",children:"包含样式"}),a.jsx(s,{items:r,variant:"contained"})]})]})};var d,I,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    separator: '/',
    maxItems: 0,
    showHome: false,
    homeIcon: '🏠',
    variant: 'default'
  },
  render: args => <div className="w-full max-w-2xl">\r
      <Breadcrumb items={args.items} separator={args.separator} maxItems={args.maxItems} showHome={args.showHome} homeIcon={args.homeIcon} variant={args.variant} onItemClick={args.onItemClick} />\r
    </div>
}`,...(h=(I=o.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};var x,p,u;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items: defaultItems.slice(1),
    separator: '/',
    maxItems: 0,
    showHome: true,
    homeIcon: '🏠',
    variant: 'default'
  },
  render: args => <div className="w-full max-w-2xl">\r
      <Breadcrumb items={args.items} separator={args.separator} maxItems={args.maxItems} showHome={args.showHome} homeIcon={args.homeIcon} variant={args.variant} onItemClick={args.onItemClick} />\r
    </div>
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var v,w,f;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    separator: '/',
    maxItems: 3,
    showHome: false,
    homeIcon: '🏠',
    variant: 'default'
  },
  render: args => <div className="w-full max-w-2xl">\r
      <Breadcrumb items={args.items} separator={args.separator} maxItems={args.maxItems} showHome={args.showHome} homeIcon={args.homeIcon} variant={args.variant} onItemClick={args.onItemClick} />\r
    </div>
}`,...(f=(w=m.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var g,H,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    separator: '/',
    maxItems: 0,
    showHome: false,
    homeIcon: '🏠',
    variant: 'underlined'
  },
  render: args => <div className="w-full max-w-2xl">\r
      <Breadcrumb items={args.items} separator={args.separator} maxItems={args.maxItems} showHome={args.showHome} homeIcon={args.homeIcon} variant={args.variant} onItemClick={args.onItemClick} />\r
    </div>
}`,...(b=(H=n.parameters)==null?void 0:H.docs)==null?void 0:b.source}}};var C,k,j;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    separator: '/',
    maxItems: 0,
    showHome: false,
    homeIcon: '🏠',
    variant: 'contained'
  },
  render: args => <div className="w-full max-w-2xl">\r
      <Breadcrumb items={args.items} separator={args.separator} maxItems={args.maxItems} showHome={args.showHome} homeIcon={args.homeIcon} variant={args.variant} onItemClick={args.onItemClick} />\r
    </div>
}`,...(j=(k=i.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var N,B,S;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    separator: '→',
    maxItems: 0,
    showHome: false,
    homeIcon: '🏠',
    variant: 'default'
  },
  render: args => <div className="w-full max-w-2xl">\r
      <Breadcrumb items={args.items} separator={args.separator} maxItems={args.maxItems} showHome={args.showHome} homeIcon={args.homeIcon} variant={args.variant} onItemClick={args.onItemClick} />\r
    </div>
}`,...(S=(B=c.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var y,W,_;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 max-w-2xl">\r
      <div>\r
        <h3 className="text-lg font-semibold mb-3">默认样式</h3>\r
        <Breadcrumb items={defaultItems} variant="default" />\r
      </div>\r
      \r
      <div>\r
        <h3 className="text-lg font-semibold mb-3">下划线样式</h3>\r
        <Breadcrumb items={defaultItems} variant="underlined" />\r
      </div>\r
      \r
      <div>\r
        <h3 className="text-lg font-semibold mb-3">包含样式</h3>\r
        <Breadcrumb items={defaultItems} variant="contained" />\r
      </div>\r
    </div>
}`,...(_=(W=l.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const M=["Default","WithHome","WithMaxItems","Underlined","Contained","CustomSeparator","AllVariants"];export{l as AllVariants,i as Contained,c as CustomSeparator,o as Default,n as Underlined,t as WithHome,m as WithMaxItems,M as __namedExportsOrder,E as default};
