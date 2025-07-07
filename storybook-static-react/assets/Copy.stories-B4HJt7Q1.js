import{j as e}from"./iframe-DqwHGwZR.js";import{C as s}from"./Copy-CV2oM6TD.js";const W={title:"Components/Copy (React)",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{text:{control:"text",description:"要复制的文本"},variant:{control:{type:"select"},options:["default","outlined","filled","minimal"],description:"组件变体"},size:{control:{type:"select"},options:["sm","md","lg"],description:"组件大小"},showLabel:{control:"boolean",description:"是否显示标签"},showTooltip:{control:"boolean",description:"是否显示提示信息"},copyLabel:{control:"text",description:"复制按钮标签"},copiedLabel:{control:"text",description:"复制成功标签"},tooltipSuccess:{control:"text",description:"成功提示信息"},tooltipError:{control:"text",description:"错误提示信息"},resetDelay:{control:{type:"number"},description:"重置延迟时间(毫秒)"},onCopy:{action:"copy"},onError:{action:"error"}}},t={args:{text:"npm install watercolor-ui",variant:"default",size:"md",showLabel:!0,showTooltip:!0,copyLabel:"复制",copiedLabel:"已复制",tooltipSuccess:"复制成功!",tooltipError:"复制失败",resetDelay:2e3},render:r=>e.jsx("div",{className:"w-full max-w-md",children:e.jsx(s,{...r})})},o={args:{text:'import { Copy } from "watercolor-ui"\\n\\n<Copy text="Hello World" />',variant:"outlined",size:"md",showLabel:!0,showTooltip:!0,copyLabel:"复制代码",copiedLabel:"已复制",tooltipSuccess:"代码已复制到剪贴板!",tooltipError:"复制失败",resetDelay:2e3},render:r=>e.jsx("div",{className:"w-full max-w-lg",children:e.jsxs("div",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm",children:[e.jsx("pre",{className:"whitespace-pre-wrap",children:r.text}),e.jsx("div",{className:"flex justify-end mt-2",children:e.jsx(s,{...r})})]})})},a={args:{text:"https://watercolor-ui.vercel.app/docs/components/copy",variant:"filled",size:"md",showLabel:!0,showTooltip:!0,copyLabel:"复制链接",copiedLabel:"已复制",tooltipSuccess:"链接已复制!",tooltipError:"复制失败",resetDelay:2e3},render:r=>e.jsx("div",{className:"w-full max-w-lg",children:e.jsx(s,{...r})})},l={args:{text:"2A3F-7B9C-1D5E-8F6A",variant:"minimal",size:"sm",showLabel:!1,showTooltip:!0,copyLabel:"复制",copiedLabel:"已复制",tooltipSuccess:"激活码已复制!",tooltipError:"复制失败",resetDelay:1500},render:r=>e.jsx("div",{className:"w-full max-w-md",children:e.jsx("div",{className:"border rounded-lg p-4 bg-gray-50",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-mono text-gray-700",children:r.text}),e.jsx(s,{...r})]})})})},i={render:()=>e.jsxs("div",{className:"space-y-6 w-96",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"默认样式"}),e.jsx(s,{text:"npm install watercolor-ui"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"边框样式"}),e.jsx(s,{text:"npm install watercolor-ui",variant:"outlined"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"填充样式"}),e.jsx(s,{text:"npm install watercolor-ui",variant:"filled"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"简约样式"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"简约版"}),e.jsx(s,{text:"简约版",variant:"minimal",showLabel:!1})]})]})]})},n={render:()=>e.jsxs("div",{className:"space-y-6 w-96",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"小尺寸 (sm)"}),e.jsx(s,{text:"https://example.com/small",size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"中等尺寸 (md)"}),e.jsx(s,{text:"https://example.com/medium",size:"md"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"大尺寸 (lg)"}),e.jsx(s,{text:"https://example.com/large",size:"lg"})]})]})},c={render:()=>e.jsx("div",{className:"w-96",children:e.jsx(s,{text:"自定义图标",copyIcon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",children:e.jsx("path",{d:"M10.024 2.533a.5.5 0 01.5.5v10a.5.5 0 01-.5.5h-8a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h8zM2.524 1H10.5a1.5 1.5 0 011.5 1.5v11a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 011 13.5v-11A1.5 1.5 0 012.5 1h.024z"})}),copiedIcon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",children:e.jsx("path",{d:"M11.354 4.646a.5.5 0 010 .708l-5 5a.5.5 0 01-.708 0l-2.5-2.5a.5.5 0 11.708-.708L5.5 9.293l4.646-4.647a.5.5 0 01.708 0z"})})})})},d={render:()=>e.jsx("div",{className:"w-96",children:e.jsx(s,{text:"自定义内容",children:(r,_)=>e.jsxs("button",{onClick:_,className:"w-full text-left p-4 bg-purple-100 text-purple-800 rounded-lg hover:bg-purple-200 transition-all",children:[e.jsx("p",{className:"font-bold",children:"点击这里复制"}),e.jsx("p",{className:"text-sm opacity-80",children:r?"太棒了，已经复制好了！":'将 "自定义内容" 复制到剪贴板'})]})})})},m={render:()=>e.jsx("div",{className:"w-96",children:e.jsx(s,{text:"这是一段非常非常长的文本，它可能会超出容器的宽度，我们需要测试一下它在UI上的显示效果是否正常，是否会正确地换行或者截断。",variant:"filled"})})};var p,x,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: 'npm install watercolor-ui',
    variant: 'default',
    size: 'md',
    showLabel: true,
    showTooltip: true,
    copyLabel: '复制',
    copiedLabel: '已复制',
    tooltipSuccess: '复制成功!',
    tooltipError: '复制失败',
    resetDelay: 2000
  },
  render: args => <div className="w-full max-w-md">\r
      <Copy {...args} />\r
    </div>
}`,...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var u,v,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: 'import { Copy } from "watercolor-ui"\\\\n\\\\n<Copy text="Hello World" />',
    variant: 'outlined',
    size: 'md',
    showLabel: true,
    showTooltip: true,
    copyLabel: '复制代码',
    copiedLabel: '已复制',
    tooltipSuccess: '代码已复制到剪贴板!',
    tooltipError: '复制失败',
    resetDelay: 2000
  },
  render: args => <div className="w-full max-w-lg">\r
      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">\r
        <pre className="whitespace-pre-wrap">{args.text}</pre>\r
        <div className="flex justify-end mt-2">\r
          <Copy {...args} />\r
        </div>\r
      </div>\r
    </div>
}`,...(g=(v=o.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var w,b,y;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    text: 'https://watercolor-ui.vercel.app/docs/components/copy',
    variant: 'filled',
    size: 'md',
    showLabel: true,
    showTooltip: true,
    copyLabel: '复制链接',
    copiedLabel: '已复制',
    tooltipSuccess: '链接已复制!',
    tooltipError: '复制失败',
    resetDelay: 2000
  },
  render: args => <div className="w-full max-w-lg">\r
      <Copy {...args} />\r
    </div>
}`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,j,N;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    text: '2A3F-7B9C-1D5E-8F6A',
    variant: 'minimal',
    size: 'sm',
    showLabel: false,
    showTooltip: true,
    copyLabel: '复制',
    copiedLabel: '已复制',
    tooltipSuccess: '激活码已复制!',
    tooltipError: '复制失败',
    resetDelay: 1500
  },
  render: args => <div className="w-full max-w-md">\r
      <div className="border rounded-lg p-4 bg-gray-50">\r
        <div className="flex justify-between items-center">\r
          <span className="font-mono text-gray-700">{args.text}</span>\r
          <Copy {...args} />\r
        </div>\r
      </div>\r
    </div>
}`,...(N=(j=l.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var C,L,z;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-96">\r
      <div>\r
        <h3 className="text-lg font-semibold mb-3">默认样式</h3>\r
        <Copy text="npm install watercolor-ui" />\r
      </div>\r
      <div>\r
        <h3 className="text-lg font-semibold mb-3">边框样式</h3>\r
        <Copy text="npm install watercolor-ui" variant="outlined" />\r
      </div>\r
      <div>\r
        <h3 className="text-lg font-semibold mb-3">填充样式</h3>\r
        <Copy text="npm install watercolor-ui" variant="filled" />\r
      </div>\r
      <div>\r
        <h3 className="text-lg font-semibold mb-3">简约样式</h3>\r
        <div className="flex items-center gap-2">\r
          <span>简约版</span>\r
          <Copy text="简约版" variant="minimal" showLabel={false} />\r
        </div>\r
      </div>\r
    </div>
}`,...(z=(L=i.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var S,E,D;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-96">\r
      <div>\r
        <h3 className="text-sm font-semibold mb-2">小尺寸 (sm)</h3>\r
        <Copy text="https://example.com/small" size="sm" />\r
      </div>\r
      <div>\r
        <h3 className="text-sm font-semibold mb-2">中等尺寸 (md)</h3>\r
        <Copy text="https://example.com/medium" size="md" />\r
      </div>\r
      <div>\r
        <h3 className="text-sm font-semibold mb-2">大尺寸 (lg)</h3>\r
        <Copy text="https://example.com/large" size="lg" />\r
      </div>\r
    </div>
}`,...(D=(E=n.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var T,A,I;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="w-96">\r
      <Copy text="自定义图标" copyIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.024 2.533a.5.5 0 01.5.5v10a.5.5 0 01-.5.5h-8a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h8zM2.524 1H10.5a1.5 1.5 0 011.5 1.5v11a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 011 13.5v-11A1.5 1.5 0 012.5 1h.024z" /></svg>} copiedIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M11.354 4.646a.5.5 0 010 .708l-5 5a.5.5 0 01-.708 0l-2.5-2.5a.5.5 0 11.708-.708L5.5 9.293l4.646-4.647a.5.5 0 01.708 0z" /></svg>} />\r
    </div>
}`,...(I=(A=c.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var M,B,F;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="w-96">\r
      <Copy text="自定义内容">\r
        {(isCopied, copy) => <button onClick={copy} className="w-full text-left p-4 bg-purple-100 text-purple-800 rounded-lg hover:bg-purple-200 transition-all">\r
            <p className="font-bold">点击这里复制</p>\r
            <p className="text-sm opacity-80">\r
              {isCopied ? '太棒了，已经复制好了！' : '将 "自定义内容" 复制到剪贴板'}\r
            </p>\r
          </button>}\r
      </Copy>\r
    </div>
}`,...(F=(B=d.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var H,R,U;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="w-96">\r
      <Copy text="这是一段非常非常长的文本，它可能会超出容器的宽度，我们需要测试一下它在UI上的显示效果是否正常，是否会正确地换行或者截断。" variant="filled" />\r
    </div>
}`,...(U=(R=m.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};const O=["Default","CodeSnippet","URL","Minimal","Variants","Sizes","CustomIcons","CustomContent","LongText"];export{o as CodeSnippet,d as CustomContent,c as CustomIcons,t as Default,m as LongText,l as Minimal,n as Sizes,a as URL,i as Variants,O as __namedExportsOrder,W as default};
