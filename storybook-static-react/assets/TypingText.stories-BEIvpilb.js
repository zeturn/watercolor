import{j as e,r as o}from"./iframe-DqwHGwZR.js";import{T as s}from"./TypingText-BmDVp-ap.js";const K={title:"Components/TypingText (React)",component:s,parameters:{layout:"centered",docs:{description:{component:"Watercolor 打字机效果组件，模拟逐字输入的动画效果。"}}},tags:["autodocs"],argTypes:{text:{control:"text",description:"要显示的文本内容"},speed:{control:{type:"number",min:50,max:500,step:10},description:"打字速度（毫秒）"},loop:{control:"boolean",description:"是否循环播放"},erase:{control:"boolean",description:"是否启用擦除效果"},showCursor:{control:"boolean",description:"是否显示光标"}}},u={args:{text:"Watercolor UI 打字机效果",speed:120,loop:!0,erase:!0,showCursor:!0},render:r=>e.jsx("div",{className:"p-8 text-xl font-mono",children:e.jsx(s,{...r})})},l=()=>e.jsxs("div",{className:"p-8 space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"不同速度"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-2 text-gray-600",children:"慢速 (200ms)"}),e.jsx("div",{className:"text-lg font-mono",children:e.jsx(s,{text:"这是慢速打字效果演示",speed:200,showCursor:!0})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-2 text-gray-600",children:"正常 (120ms)"}),e.jsx("div",{className:"text-lg font-mono",children:e.jsx(s,{text:"这是正常速度打字效果演示",speed:120,showCursor:!0})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-2 text-gray-600",children:"快速 (80ms)"}),e.jsx("div",{className:"text-lg font-mono",children:e.jsx(s,{text:"这是快速打字效果演示",speed:80,showCursor:!0})})]})]})]}),d=()=>e.jsxs("div",{className:"p-8 space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"单次播放"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-2 text-gray-600",children:"仅输入，不擦除"}),e.jsx("div",{className:"text-lg font-mono",children:e.jsx(s,{text:"这段文字只会输入一次，不会擦除",speed:100,loop:!1,erase:!1,showCursor:!0})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-2 text-gray-600",children:"输入后擦除，然后停止"}),e.jsx("div",{className:"text-lg font-mono",children:e.jsx(s,{text:"这段文字会输入然后擦除，但不会循环",speed:100,loop:!1,erase:!0,showCursor:!0})})]})]})]}),i=()=>{const r=["欢迎使用 Watercolor UI","现代化的组件库","支持 React 和 Vue","让开发更简单"];return e.jsxs("div",{className:"p-8 space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"多行文本效果"}),e.jsx("div",{className:"space-y-3",children:r.map((n,t)=>e.jsx("div",{className:"text-lg font-mono",style:{animationDelay:`${t*2}s`},children:e.jsx(s,{text:n,speed:120,loop:!1,erase:!1,showCursor:t===r.length-1})},t))})]})},m=()=>e.jsxs("div",{className:"p-8 space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"不同样式"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-2 text-gray-600",children:"标题样式"}),e.jsx("div",{className:"text-3xl font-bold text-blue-600",children:e.jsx(s,{text:"欢迎来到未来",speed:150,showCursor:!0})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-2 text-gray-600",children:"代码样式"}),e.jsx("div",{className:"bg-gray-900 text-green-400 p-4 rounded font-mono text-sm",children:e.jsx(s,{text:"const message = 'Hello, World!';",speed:80,showCursor:!0,loop:!1,erase:!1})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-2 text-gray-600",children:"引用样式"}),e.jsx("div",{className:"border-l-4 border-blue-500 pl-4 italic text-gray-600",children:e.jsx(s,{text:"设计不仅仅是它看起来如何，而是它如何工作。",speed:100,showCursor:!0})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-2 text-gray-600",children:"彩色文字"}),e.jsx("div",{className:"text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",children:e.jsx(s,{text:"渐变色彩文字效果",speed:120,showCursor:!0})})]})]})]}),c=()=>{const[r,n]=o.useState("Watercolor UI 打字机效果"),[t,q]=o.useState(120),[h,z]=o.useState(!0),[g,B]=o.useState(!0),[v,F]=o.useState(!0);return e.jsxs("div",{className:"p-8 max-w-2xl",children:[e.jsx("h3",{className:"text-lg font-semibold mb-6",children:"交互式演示"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"文本内容："}),e.jsx("textarea",{value:r,onChange:a=>n(a.target.value),className:"w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500",rows:"3",placeholder:"输入要显示的文本"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium mb-2",children:["速度：",t,"ms"]}),e.jsx("input",{type:"range",min:"50",max:"300",value:t,onChange:a=>q(Number(a.target.value)),className:"w-full"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",checked:h,onChange:a=>z(a.target.checked)}),e.jsx("span",{className:"text-sm",children:"显示光标"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",checked:g,onChange:a=>B(a.target.checked)}),e.jsx("span",{className:"text-sm",children:"循环播放"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",checked:v,onChange:a=>F(a.target.checked)}),e.jsx("span",{className:"text-sm",children:"擦除效果"})]})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"预览效果："}),e.jsx("div",{className:"min-h-24 p-4 border rounded bg-gray-50 text-lg font-mono",children:e.jsx(s,{text:r,speed:t,showCursor:h,loop:g,erase:v},`${r}-${t}-${h}-${g}-${v}`)})]})]})]})},x=()=>e.jsxs("div",{className:"p-8 space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"加载状态效果"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"border rounded-lg p-6 bg-blue-50",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm",children:e.jsx("span",{children:"🚀"})}),e.jsx("div",{className:"font-medium",children:"系统启动中"})]}),e.jsx("div",{className:"font-mono text-sm text-blue-700",children:e.jsx(s,{text:"正在初始化组件...",speed:80,loop:!1,erase:!1,showCursor:!0})})]}),e.jsxs("div",{className:"border rounded-lg p-6 bg-green-50",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm",children:e.jsx("span",{children:"✓"})}),e.jsx("div",{className:"font-medium",children:"任务完成"})]}),e.jsx("div",{className:"font-mono text-sm text-green-700",children:e.jsx(s,{text:"所有测试通过，部署成功！",speed:100,loop:!1,erase:!1,showCursor:!1})})]}),e.jsxs("div",{className:"border rounded-lg p-6 bg-purple-50",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm",children:e.jsx("span",{children:"💻"})}),e.jsx("div",{className:"font-medium",children:"AI 助手"})]}),e.jsx("div",{className:"font-mono text-sm text-purple-700",children:e.jsx(s,{text:"我是您的AI助手，请问有什么可以帮助您的吗？",speed:60,loop:!1,erase:!1,showCursor:!0})})]})]})]}),p=()=>{const r=["$ npm install watercolor-ui","$ npm run dev","Server running on http://localhost:3000","Ready for development! 🎉"];return e.jsxs("div",{className:"p-8",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"命令行效果"}),e.jsx("div",{className:"bg-black text-green-400 p-6 rounded-lg font-mono text-sm",children:r.map((n,t)=>e.jsx("div",{className:"mb-2",style:{animationDelay:`${t*3}s`},children:e.jsx(s,{text:n,speed:n.startsWith("$")?100:80,loop:!1,erase:!1,showCursor:t===r.length-1})},t))})]})};l.__docgenInfo={description:"",methods:[],displayName:"Speeds"};d.__docgenInfo={description:"",methods:[],displayName:"WithoutLoop"};i.__docgenInfo={description:"",methods:[],displayName:"MultipleTexts"};m.__docgenInfo={description:"",methods:[],displayName:"DifferentStyles"};c.__docgenInfo={description:"",methods:[],displayName:"Interactive"};x.__docgenInfo={description:"",methods:[],displayName:"LoadingStates"};p.__docgenInfo={description:"",methods:[],displayName:"CommandLine"};var f,N,b;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    text: 'Watercolor UI 打字机效果',
    speed: 120,
    loop: true,
    erase: true,
    showCursor: true
  },
  render: args => <div className="p-8 text-xl font-mono">\r
      <TypingText {...args} />\r
    </div>
}`,...(b=(N=u.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var j,y,w;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`() => <div className="p-8 space-y-6">\r
    <h3 className="text-lg font-semibold mb-4">不同速度</h3>\r
    <div className="space-y-4">\r
      <div>\r
        <h4 className="text-sm font-medium mb-2 text-gray-600">慢速 (200ms)</h4>\r
        <div className="text-lg font-mono">\r
          <TypingText text="这是慢速打字效果演示" speed={200} showCursor={true} />\r
        </div>\r
      </div>\r
      <div>\r
        <h4 className="text-sm font-medium mb-2 text-gray-600">正常 (120ms)</h4>\r
        <div className="text-lg font-mono">\r
          <TypingText text="这是正常速度打字效果演示" speed={120} showCursor={true} />\r
        </div>\r
      </div>\r
      <div>\r
        <h4 className="text-sm font-medium mb-2 text-gray-600">快速 (80ms)</h4>\r
        <div className="text-lg font-mono">\r
          <TypingText text="这是快速打字效果演示" speed={80} showCursor={true} />\r
        </div>\r
      </div>\r
    </div>\r
  </div>`,...(w=(y=l.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var C,T,S;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`() => <div className="p-8 space-y-6">\r
    <h3 className="text-lg font-semibold mb-4">单次播放</h3>\r
    <div className="space-y-4">\r
      <div>\r
        <h4 className="text-sm font-medium mb-2 text-gray-600">仅输入，不擦除</h4>\r
        <div className="text-lg font-mono">\r
          <TypingText text="这段文字只会输入一次，不会擦除" speed={100} loop={false} erase={false} showCursor={true} />\r
        </div>\r
      </div>\r
      <div>\r
        <h4 className="text-sm font-medium mb-2 text-gray-600">输入后擦除，然后停止</h4>\r
        <div className="text-lg font-mono">\r
          <TypingText text="这段文字会输入然后擦除，但不会循环" speed={100} loop={false} erase={true} showCursor={true} />\r
        </div>\r
      </div>\r
    </div>\r
  </div>`,...(S=(T=d.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var k,I,$;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const texts = ["欢迎使用 Watercolor UI", "现代化的组件库", "支持 React 和 Vue", "让开发更简单"];
  return <div className="p-8 space-y-6">\r
      <h3 className="text-lg font-semibold mb-4">多行文本效果</h3>\r
      <div className="space-y-3">\r
        {texts.map((text, index) => <div key={index} className="text-lg font-mono" style={{
        animationDelay: \`\${index * 2}s\`
      }}>\r
            <TypingText text={text} speed={120} loop={false} erase={false} showCursor={index === texts.length - 1} />\r
          </div>)}\r
      </div>\r
    </div>;
}`,...($=(I=i.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var _,W,L;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`() => <div className="p-8 space-y-6">\r
    <h3 className="text-lg font-semibold mb-4">不同样式</h3>\r
    <div className="space-y-6">\r
      <div>\r
        <h4 className="text-sm font-medium mb-2 text-gray-600">标题样式</h4>\r
        <div className="text-3xl font-bold text-blue-600">\r
          <TypingText text="欢迎来到未来" speed={150} showCursor={true} />\r
        </div>\r
      </div>\r
      \r
      <div>\r
        <h4 className="text-sm font-medium mb-2 text-gray-600">代码样式</h4>\r
        <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">\r
          <TypingText text="const message = 'Hello, World!';" speed={80} showCursor={true} loop={false} erase={false} />\r
        </div>\r
      </div>\r
      \r
      <div>\r
        <h4 className="text-sm font-medium mb-2 text-gray-600">引用样式</h4>\r
        <div className="border-l-4 border-blue-500 pl-4 italic text-gray-600">\r
          <TypingText text="设计不仅仅是它看起来如何，而是它如何工作。" speed={100} showCursor={true} />\r
        </div>\r
      </div>\r
      \r
      <div>\r
        <h4 className="text-sm font-medium mb-2 text-gray-600">彩色文字</h4>\r
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">\r
          <TypingText text="渐变色彩文字效果" speed={120} showCursor={true} />\r
        </div>\r
      </div>\r
    </div>\r
  </div>`,...(L=(W=m.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var D,E,R;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const [text, setText] = useState('Watercolor UI 打字机效果');
  const [speed, setSpeed] = useState(120);
  const [showCursor, setShowCursor] = useState(true);
  const [loop, setLoop] = useState(true);
  const [erase, setErase] = useState(true);
  return <div className="p-8 max-w-2xl">\r
      <h3 className="text-lg font-semibold mb-6">交互式演示</h3>\r
      \r
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">\r
        <div className="space-y-4">\r
          <div>\r
            <label className="block text-sm font-medium mb-2">文本内容：</label>\r
            <textarea value={text} onChange={e => setText(e.target.value)} className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500" rows="3" placeholder="输入要显示的文本" />\r
          </div>\r
          \r
          <div>\r
            <label className="block text-sm font-medium mb-2">\r
              速度：{speed}ms\r
            </label>\r
            <input type="range" min="50" max="300" value={speed} onChange={e => setSpeed(Number(e.target.value))} className="w-full" />\r
          </div>\r
          \r
          <div className="space-y-2">\r
            <label className="flex items-center gap-2">\r
              <input type="checkbox" checked={showCursor} onChange={e => setShowCursor(e.target.checked)} />\r
              <span className="text-sm">显示光标</span>\r
            </label>\r
            \r
            <label className="flex items-center gap-2">\r
              <input type="checkbox" checked={loop} onChange={e => setLoop(e.target.checked)} />\r
              <span className="text-sm">循环播放</span>\r
            </label>\r
            \r
            <label className="flex items-center gap-2">\r
              <input type="checkbox" checked={erase} onChange={e => setErase(e.target.checked)} />\r
              <span className="text-sm">擦除效果</span>\r
            </label>\r
          </div>\r
        </div>\r
        \r
        <div>\r
          <label className="block text-sm font-medium mb-2">预览效果：</label>\r
          <div className="min-h-24 p-4 border rounded bg-gray-50 text-lg font-mono">\r
            <TypingText key={\`\${text}-\${speed}-\${showCursor}-\${loop}-\${erase}\`} text={text} speed={speed} showCursor={showCursor} loop={loop} erase={erase} />\r
          </div>\r
        </div>\r
      </div>\r
    </div>;
}`,...(R=(E=c.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var U,A,M;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`() => <div className="p-8 space-y-6">\r
    <h3 className="text-lg font-semibold mb-4">加载状态效果</h3>\r
    <div className="space-y-6">\r
      <div className="border rounded-lg p-6 bg-blue-50">\r
        <div className="flex items-center gap-3 mb-4">\r
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">\r
            <span>🚀</span>\r
          </div>\r
          <div className="font-medium">系统启动中</div>\r
        </div>\r
        <div className="font-mono text-sm text-blue-700">\r
          <TypingText text="正在初始化组件..." speed={80} loop={false} erase={false} showCursor={true} />\r
        </div>\r
      </div>\r
      \r
      <div className="border rounded-lg p-6 bg-green-50">\r
        <div className="flex items-center gap-3 mb-4">\r
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">\r
            <span>✓</span>\r
          </div>\r
          <div className="font-medium">任务完成</div>\r
        </div>\r
        <div className="font-mono text-sm text-green-700">\r
          <TypingText text="所有测试通过，部署成功！" speed={100} loop={false} erase={false} showCursor={false} />\r
        </div>\r
      </div>\r
      \r
      <div className="border rounded-lg p-6 bg-purple-50">\r
        <div className="flex items-center gap-3 mb-4">\r
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm">\r
            <span>💻</span>\r
          </div>\r
          <div className="font-medium">AI 助手</div>\r
        </div>\r
        <div className="font-mono text-sm text-purple-700">\r
          <TypingText text="我是您的AI助手，请问有什么可以帮助您的吗？" speed={60} loop={false} erase={false} showCursor={true} />\r
        </div>\r
      </div>\r
    </div>\r
  </div>`,...(M=(A=x.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var H,V,O;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const commands = ["$ npm install watercolor-ui", "$ npm run dev", "Server running on http://localhost:3000", "Ready for development! 🎉"];
  return <div className="p-8">\r
      <h3 className="text-lg font-semibold mb-4">命令行效果</h3>\r
      <div className="bg-black text-green-400 p-6 rounded-lg font-mono text-sm">\r
        {commands.map((command, index) => <div key={index} className="mb-2" style={{
        animationDelay: \`\${index * 3}s\`
      }}>\r
            <TypingText text={command} speed={command.startsWith('$') ? 100 : 80} loop={false} erase={false} showCursor={index === commands.length - 1} />\r
          </div>)}\r
      </div>\r
    </div>;
}`,...(O=(V=p.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};const P=["Default","Speeds","WithoutLoop","MultipleTexts","DifferentStyles","Interactive","LoadingStates","CommandLine"];export{p as CommandLine,u as Default,m as DifferentStyles,c as Interactive,x as LoadingStates,i as MultipleTexts,l as Speeds,d as WithoutLoop,P as __namedExportsOrder,K as default};
