import{r as i,j as o}from"./iframe-DqwHGwZR.js";import{C as c}from"./ColorPicker-B-CXq2wG.js";const u={title:"Components/ColorPicker (React)",component:c,tags:["autodocs"],argTypes:{value:{control:"color",description:"Selected color"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size of the color preview"},shape:{control:{type:"select"},options:["circle","square","rounded"],description:"Shape of the color preview"},disabled:{control:"boolean",description:"Disables the color picker"},className:{control:"text",description:"Additional CSS classes for the root element"},onChange:{action:"change"}}},p=r=>{const[s,l]=i.useState(r.value);return o.jsxs(o.Fragment,{children:[o.jsx(c,{...r,value:s,onChange:l}),o.jsxs("span",{style:{marginLeft:12},children:["当前颜色：",s]})]})},e=p.bind({});e.args={value:"#409eff",size:"md",shape:"circle",disabled:!1};var t,a,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  const [color, setColor] = useState(args.value);
  return <>\r
      <ColorPicker {...args} value={color} onChange={setColor} />\r
      <span style={{
      marginLeft: 12
    }}>当前颜色：{color}</span>\r
    </>;
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,u as default};
