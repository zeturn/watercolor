import{j as e}from"./iframe-DqwHGwZR.js";import{A as d}from"./Accordion-CLhKOshn.js";const M={title:"Components/Accordion (React)",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{items:{control:{type:"object"},description:"手风琴项目数据"},multiple:{control:"boolean",description:"是否允许同时展开多个项目"},variant:{control:{type:"select"},options:["default","bordered","filled"],description:"手风琴变体"},className:{control:"text",description:"额外的CSS类名"},style:{control:{type:"object"},description:"内联样式对象"},onToggle:{action:"toggle"}}},F=[{title:"什么是Watercolor组件库？",content:"Watercolor是一个现代化的Vue.js组件库，提供了丰富的UI组件，帮助开发者快速构建美观的用户界面。"},{title:"如何安装和使用？",content:"您可以通过npm安装：npm install watercolor-ui，然后在您的项目中导入所需的组件。所有组件都支持TypeScript，并提供了完整的类型定义。"},{title:"支持哪些浏览器？",content:"Watercolor支持所有现代浏览器，包括Chrome、Firefox、Safari和Edge的最新版本。对于旧版浏览器，我们提供了相应的polyfill。"},{title:"是否支持主题定制？",content:"是的！Watercolor提供了强大的主题系统，您可以通过CSS变量轻松定制颜色、字体、间距等样式属性，满足不同项目的设计需求。"}],s=n=>e.jsx("div",{className:"w-full max-w-2xl",children:e.jsx(d,{...n})}),r=s.bind({});r.args={items:F,multiple:!1,variant:"default"};const t=s.bind({});t.args={...r.args,multiple:!0};const a=s.bind({});a.args={...r.args,variant:"bordered"};const o=s.bind({});o.args={...r.args,variant:"filled"};const l=s.bind({});l.args={items:[{title:"基础使用",content:"这是一个简单的手风琴示例。"},{title:"高级功能",content:"支持多种样式和交互模式。"}],multiple:!1,variant:"default"};const c=s.bind({});c.args={...r.args,className:"bg-gray-50 rounded-lg p-4",style:{border:"2px solid #e5e7eb",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"}};const i=()=>{const n=[{title:"包含富文本内容",content:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{children:["这里可以包含",e.jsx("strong",{children:"粗体文本"}),"和",e.jsx("em",{children:"斜体文本"}),"。"]}),e.jsxs("ul",{className:"list-disc pl-4",children:[e.jsx("li",{children:"列表项 1"}),e.jsx("li",{children:"列表项 2"})]})]})},{title:"包含链接和按钮",content:e.jsxs("div",{className:"space-y-2",children:[e.jsx("a",{href:"#",className:"text-blue-600 hover:underline",children:"了解更多"}),e.jsx("br",{}),e.jsx("button",{className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600",children:"点击按钮"})]})}];return e.jsx("div",{className:"w-full max-w-2xl",children:e.jsx(d,{items:n})})};i.__docgenInfo={description:"",methods:[],displayName:"WithCustomContent"};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => <div className="w-full max-w-2xl">\r
    <Accordion {...args} />\r
  </div>`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,x,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`args => <div className="w-full max-w-2xl">\r
    <Accordion {...args} />\r
  </div>`,...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var v,f,h;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`args => <div className="w-full max-w-2xl">\r
    <Accordion {...args} />\r
  </div>`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var w,N,j;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`args => <div className="w-full max-w-2xl">\r
    <Accordion {...args} />\r
  </div>`,...(j=(N=o.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var y,S,C;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`args => <div className="w-full max-w-2xl">\r
    <Accordion {...args} />\r
  </div>`,...(C=(S=l.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var A,W,I;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`args => <div className="w-full max-w-2xl">\r
    <Accordion {...args} />\r
  </div>`,...(I=(W=c.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var _,T,E;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const items = [{
    title: '包含富文本内容',
    content: <div className="space-y-2">\r
          <p>\r
            这里可以包含<strong>粗体文本</strong>和<em>斜体文本</em>。\r
          </p>\r
          <ul className="list-disc pl-4">\r
            <li>列表项 1</li>\r
            <li>列表项 2</li>\r
          </ul>\r
        </div>
  }, {
    title: '包含链接和按钮',
    content: <div className="space-y-2">\r
          <a href="#" className="text-blue-600 hover:underline">\r
            了解更多\r
          </a>\r
          <br />\r
          <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">\r
            点击按钮\r
          </button>\r
        </div>
  }];
  return <div className="w-full max-w-2xl">\r
      <Accordion items={items} />\r
    </div>;
}`,...(E=(T=i.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const R=["Default","Multiple","Bordered","Filled","SimpleItems","WithCustomStyling","WithCustomContent"];export{a as Bordered,r as Default,o as Filled,t as Multiple,l as SimpleItems,i as WithCustomContent,c as WithCustomStyling,R as __namedExportsOrder,M as default};
