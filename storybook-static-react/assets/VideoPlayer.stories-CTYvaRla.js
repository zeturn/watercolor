import{j as o}from"./iframe-DqwHGwZR.js";import{V as a}from"./VideoPlayer-CexcJVF5.js";const x={title:"Components/VideoPlayer (React)",component:a,parameters:{layout:"centered",docs:{description:{component:"Watercolor 视频播放器组件，支持多种视频格式和播放控制。"}}},tags:["autodocs"],argTypes:{src:{control:"text",description:"视频源地址"},autoplay:{control:"boolean",description:"是否自动播放"},loop:{control:"boolean",description:"是否循环播放"}}},i="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",s={args:{src:i,autoplay:!1,loop:!1},render:d=>o.jsx("div",{className:"p-8 max-w-2xl",children:o.jsx(a,{...d})})},e=()=>o.jsxs("div",{className:"p-8 space-y-6",children:[o.jsx("h3",{className:"text-lg font-semibold",children:"自定义控制"}),o.jsx(a,{src:i,autoplay:!1,loop:!0})]});e.__docgenInfo={description:"",methods:[],displayName:"WithControls"};var r,t,l;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    src: sample,
    autoplay: false,
    loop: false
  },
  render: args => <div className="p-8 max-w-2xl">\r
      <VideoPlayer {...args} />\r
    </div>
}`,...(l=(t=s.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var n,c,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => <div className="p-8 space-y-6">\r
    <h3 className="text-lg font-semibold">自定义控制</h3>\r
    <VideoPlayer src={sample} autoplay={false} loop={true} />\r
  </div>`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const f=["Default","WithControls"];export{s as Default,e as WithControls,f as __namedExportsOrder,x as default};
