import{j as r}from"./iframe-DqwHGwZR.js";import{W as n}from"./Watermark-NIqVAgNq.js";const d={title:"Components/Watermark (React)",component:n,parameters:{layout:"centered",docs:{description:{component:"Watercolor 水印组件，为内容添加防伪水印效果。"}}},tags:["autodocs"],argTypes:{content:{control:"text",description:"水印文本内容"},fontSize:{control:"number",description:"字体大小"},fontColor:{control:"color",description:"字体颜色"},rotate:{control:{type:"number",min:-90,max:90,step:5},description:"旋转角度"},fullscreen:{control:"boolean",description:"是否全屏覆盖"}}},e={args:{content:"Watermark",fontSize:18,rotate:-30,fontColor:"rgba(0,0,0,.15)",fullscreen:!0},render:s=>r.jsx("div",{className:"p-8",children:r.jsx(n,{...s,children:r.jsxs("div",{style:{height:"200px",background:"#fafafa",padding:"20px"},children:[r.jsx("h3",{children:"示例内容"}),r.jsx("p",{children:"这里是被水印保护的内容区域。"})]})})})};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    content: 'Watermark',
    fontSize: 18,
    rotate: -30,
    fontColor: 'rgba(0,0,0,.15)',
    fullscreen: true
  },
  render: args => <div className="p-8">\r
      <Watermark {...args}>\r
        <div style={{
        height: '200px',
        background: '#fafafa',
        padding: '20px'
      }}>\r
          <h3>示例内容</h3>\r
          <p>这里是被水印保护的内容区域。</p>\r
        </div>\r
      </Watermark>\r
    </div>
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,d as default};
