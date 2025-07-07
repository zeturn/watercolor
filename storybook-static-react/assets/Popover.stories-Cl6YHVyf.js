import{j as e,r as P}from"./iframe-DqwHGwZR.js";import{P as s}from"./Popover-BXlmPPJC.js";import"./index-BjOamUOo.js";import"./index-7Rf8qmk0.js";const k={title:"Components/Popover (React)",component:s,parameters:{layout:"centered",docs:{description:{component:"Watercolor 弹窗组件，支持多种位置和自定义触发器。"}}},tags:["autodocs"],argTypes:{placement:{control:{type:"select"},options:["top","bottom","left","right"],description:"弹窗位置"},triggerText:{control:"text",description:"触发按钮文本"},offset:{control:{type:"number",min:0,max:50,step:1},description:"弹窗偏移距离"},open:{control:"boolean",description:"受控模式下的显示状态"},onOpenChange:{action:"openChange",description:"显示状态变化回调"}}},l={args:{placement:"bottom",triggerText:"更多信息",offset:8},render:r=>e.jsx("div",{className:"p-20 text-center",children:e.jsx(s,{...r,children:e.jsx("div",{className:"p-4 max-w-xs",children:e.jsxs("p",{className:"text-sm text-gray-700",children:["这是弹出的内容，可以包含",e.jsx("strong",{children:"富文本"}),"或其他组件。"]})})})})},a=()=>{const r=["top","bottom","left","right"];return e.jsx("div",{className:"grid grid-cols-2 gap-8 p-20",children:r.map(t=>e.jsx("div",{className:"flex justify-center",children:e.jsx(s,{placement:t,triggerText:`${t} 弹窗`,children:e.jsx("div",{className:"p-3 bg-white border rounded shadow-lg",children:e.jsxs("p",{className:"text-sm",children:["从",t,"方向弹出的内容"]})})})},t))})},n=()=>e.jsxs("div",{className:"p-20 text-center space-x-4",children:[e.jsx(s,{trigger:e.jsx("button",{className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"自定义按钮"}),placement:"bottom",children:e.jsxs("div",{className:"p-4 max-w-sm",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"自定义触发器"}),e.jsx("p",{className:"text-sm text-gray-600",children:"使用自定义按钮作为触发器"})]})}),e.jsx(s,{trigger:e.jsx("span",{className:"text-blue-500 underline cursor-pointer",children:"链接触发器"}),placement:"top",children:e.jsx("div",{className:"p-3 bg-yellow-50 border border-yellow-200 rounded",children:e.jsx("p",{className:"text-sm",children:"点击链接触发的弹窗"})})})]}),o=()=>e.jsxs("div",{className:"p-20 text-center space-x-6",children:[e.jsx(s,{triggerText:"用户信息",placement:"bottom",children:e.jsxs("div",{className:"p-4 w-64",children:[e.jsxs("div",{className:"flex items-center space-x-3 mb-3",children:[e.jsx("div",{className:"w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold",children:"A"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold",children:"张三"}),e.jsx("p",{className:"text-sm text-gray-500",children:"前端开发工程师"})]})]}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:"专注于React和Vue开发，有5年前端开发经验。"}),e.jsx("button",{className:"w-full py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600",children:"查看详情"})]})}),e.jsx(s,{triggerText:"通知列表",placement:"left",children:e.jsxs("div",{className:"w-80 max-h-60 overflow-y-auto",children:[e.jsx("div",{className:"p-3 border-b",children:e.jsx("h4",{className:"font-semibold",children:"最新通知"})}),[1,2,3,4].map(r=>e.jsxs("div",{className:"p-3 border-b hover:bg-gray-50",children:[e.jsxs("p",{className:"font-medium text-sm",children:["系统通知 ",r]}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"您有新的消息需要查看，请及时处理。"}),e.jsx("span",{className:"text-xs text-blue-500",children:"2小时前"})]},r))]})})]}),c=()=>{const[r,t]=P.useState(!1);return e.jsxs("div",{className:"p-20 text-center space-y-4",children:[e.jsxs("div",{className:"space-x-4",children:[e.jsx("button",{onClick:()=>t(!0),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"打开弹窗"}),e.jsx("button",{onClick:()=>t(!1),className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"关闭弹窗"})]}),e.jsx(s,{open:r,onOpenChange:t,triggerText:"受控弹窗",placement:"bottom",children:e.jsxs("div",{className:"p-4 max-w-xs",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"受控模式"}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:"这个弹窗的显示状态由外部控制"}),e.jsx("button",{onClick:()=>t(!1),className:"w-full py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600",children:"关闭"})]})}),e.jsxs("p",{className:"text-sm text-gray-500 mt-4",children:["当前状态: ",r?"打开":"关闭"]})]})};a.__docgenInfo={description:"",methods:[],displayName:"Placements"};n.__docgenInfo={description:"",methods:[],displayName:"CustomTrigger"};o.__docgenInfo={description:"",methods:[],displayName:"RichContent"};c.__docgenInfo={description:"",methods:[],displayName:"ControlledMode"};var m,i,d;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    placement: 'bottom',
    triggerText: '更多信息',
    offset: 8
  },
  render: args => <div className="p-20 text-center">\r
      <Popover {...args}>\r
        <div className="p-4 max-w-xs">\r
          <p className="text-sm text-gray-700">\r
            这是弹出的内容，可以包含<strong>富文本</strong>或其他组件。\r
          </p>\r
        </div>\r
      </Popover>\r
    </div>
}`,...(d=(i=l.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,x,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const placements = ['top', 'bottom', 'left', 'right'];
  return <div className="grid grid-cols-2 gap-8 p-20">\r
      {placements.map(placement => <div key={placement} className="flex justify-center">\r
          <Popover placement={placement} triggerText={\`\${placement} 弹窗\`}>\r
            <div className="p-3 bg-white border rounded shadow-lg">\r
              <p className="text-sm">从{placement}方向弹出的内容</p>\r
            </div>\r
          </Popover>\r
        </div>)}\r
    </div>;
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,b,u;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <div className="p-20 text-center space-x-4">\r
      <Popover trigger={<button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">自定义按钮</button>} placement="bottom">\r
        <div className="p-4 max-w-sm">\r
          <h3 className="font-semibold mb-2">自定义触发器</h3>\r
          <p className="text-sm text-gray-600">使用自定义按钮作为触发器</p>\r
        </div>\r
      </Popover>\r
      \r
      <Popover trigger={<span className="text-blue-500 underline cursor-pointer">链接触发器</span>} placement="top">\r
        <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">\r
          <p className="text-sm">点击链接触发的弹窗</p>\r
        </div>\r
      </Popover>\r
    </div>;
}`,...(u=(b=n.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var v,N,f;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <div className="p-20 text-center space-x-6">\r
      <Popover triggerText="用户信息" placement="bottom">\r
        <div className="p-4 w-64">\r
          <div className="flex items-center space-x-3 mb-3">\r
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">\r
              A\r
            </div>\r
            <div>\r
              <h4 className="font-semibold">张三</h4>\r
              <p className="text-sm text-gray-500">前端开发工程师</p>\r
            </div>\r
          </div>\r
          <p className="text-sm text-gray-600 mb-3">\r
            专注于React和Vue开发，有5年前端开发经验。\r
          </p>\r
          <button className="w-full py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">\r
            查看详情\r
          </button>\r
        </div>\r
      </Popover>\r
      \r
      <Popover triggerText="通知列表" placement="left">\r
        <div className="w-80 max-h-60 overflow-y-auto">\r
          <div className="p-3 border-b">\r
            <h4 className="font-semibold">最新通知</h4>\r
          </div>\r
          {[1, 2, 3, 4].map(item => <div key={item} className="p-3 border-b hover:bg-gray-50">\r
              <p className="font-medium text-sm">系统通知 {item}</p>\r
              <p className="text-xs text-gray-500 mt-1">\r
                您有新的消息需要查看，请及时处理。\r
              </p>\r
              <span className="text-xs text-blue-500">2小时前</span>\r
            </div>)}\r
        </div>\r
      </Popover>\r
    </div>;
}`,...(f=(N=o.parameters)==null?void 0:N.docs)==null?void 0:f.source}}};var j,y,w;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <div className="p-20 text-center space-y-4">\r
      <div className="space-x-4">\r
        <button onClick={() => setOpen(true)} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">\r
          打开弹窗\r
        </button>\r
        <button onClick={() => setOpen(false)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">\r
          关闭弹窗\r
        </button>\r
      </div>\r
      \r
      <Popover open={open} onOpenChange={setOpen} triggerText="受控弹窗" placement="bottom">\r
        <div className="p-4 max-w-xs">\r
          <h3 className="font-semibold mb-2">受控模式</h3>\r
          <p className="text-sm text-gray-600 mb-3">\r
            这个弹窗的显示状态由外部控制\r
          </p>\r
          <button onClick={() => setOpen(false)} className="w-full py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600">\r
            关闭\r
          </button>\r
        </div>\r
      </Popover>\r
      \r
      <p className="text-sm text-gray-500 mt-4">\r
        当前状态: {open ? '打开' : '关闭'}\r
      </p>\r
    </div>;
}`,...(w=(y=c.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const R=["Default","Placements","CustomTrigger","RichContent","ControlledMode"];export{c as ControlledMode,n as CustomTrigger,l as Default,a as Placements,o as RichContent,R as __namedExportsOrder,k as default};
