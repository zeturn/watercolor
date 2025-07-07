import{r as o,j as e}from"./iframe-DqwHGwZR.js";import{r as he}from"./index-BjOamUOo.js";import{B as t}from"./Button-D3FJQjBm.js";import"./index-7Rf8qmk0.js";function xe({size:l="md",fullWidth:s=!1,fullScreen:r=!1,scroll:n="paper",position:a="center",className:i=""}={}){const c=["wc-modal"];return l&&!r&&c.push(`wc-modal--${l}`),r&&c.push("wc-modal--fullscreen"),s&&!r&&c.push("wc-modal--full-width"),n==="body"?c.push("wc-modal--scroll-body"):c.push("wc-modal--scroll-paper"),a&&a!=="center"&&c.push(`wc-modal--${a}`),i&&c.push(i),c.filter(Boolean).join(" ")}function fe({centered:l=!0,position:s="center"}={}){const r=["wc-modal-overlay"];return(l||s==="center")&&r.push("wc-modal-overlay--centered"),s&&s!=="center"&&r.push(`wc-modal-overlay--${s}`),r.join(" ")}function ve(l,s,r=0){l(!1),s&&(r>0?setTimeout(()=>{s()},r):s())}function be(l,s,r){l.key==="Escape"&&s&&r()}function ge(l){if(l){const s=l.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');s.length>0?s[0].focus():l.focus()}}function je(l){if(!l)return()=>{};const s=l.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),r=s[0],n=s[s.length-1],a=i=>{i.key==="Tab"&&(i.shiftKey?document.activeElement===r&&(i.preventDefault(),n==null||n.focus()):document.activeElement===n&&(i.preventDefault(),r==null||r.focus()))};return l.addEventListener("keydown",a),()=>{l.removeEventListener("keydown",a)}}const d=({visible:l=!1,open:s=!1,title:r="",size:n="md",maxWidth:a=null,closable:i=!0,showCloseButton:c=!0,maskClosable:G=!0,closeOnOverlay:J=!0,disableBackdropClick:Q=!1,disableEscapeKeyDown:B=!1,centered:X=!0,fullWidth:Z=!1,fullScreen:ee=!1,position:C="center",scroll:se="paper",lockScroll:y=!0,zIndex:le=1e3,showOverlay:re=!0,className:ne="",onClose:te,children:ie,header:_,footer:w,...ae})=>{const[N,M]=o.useState(l||s),v=o.useRef(null),b=o.useRef(null),g=o.useRef(null),z=l||s;o.useEffect(()=>{M(z)},[z]);const oe=xe({size:a||n,fullWidth:Z,fullScreen:ee,scroll:se,position:C,className:ne}),de=fe({centered:C==="center"||X,position:C}),k=()=>{ve(M,te)},ce=()=>{(G||J)&&!Q&&k()},S=j=>{be(j,i&&!B,k)};if(o.useEffect(()=>{if(N)return b.current=document.activeElement,setTimeout(()=>{v.current&&(ge(v.current),g.current=je(v.current))},100),document.addEventListener("keydown",S),y&&(document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",S),g.current&&(g.current(),g.current=null),b.current&&b.current.focus&&b.current.focus(),y&&(document.body.style.overflow="")}},[N,i,B,y]),!N)return null;const me=i&&c!==!1,ue=e.jsxs("div",{className:de,style:{zIndex:le},onClick:ce,"data-testid":"modal-overlay",children:[re&&e.jsx("div",{className:"wc-modal__overlay"}),e.jsxs("div",{ref:v,className:oe,onClick:j=>j.stopPropagation(),role:"dialog","aria-modal":"true","aria-labelledby":r?"modal-title":void 0,tabIndex:-1,...ae,children:[me&&e.jsx(t,{variant:"text",size:"sm",className:"wc-modal__close",onClick:k,"aria-label":"关闭",children:"×"}),(r||_)&&e.jsx("div",{className:"wc-modal__header",children:_||r&&e.jsx("h3",{id:"modal-title",className:"wc-modal__title",children:r})}),e.jsx("div",{className:"wc-modal__body",children:ie}),w&&e.jsx("div",{className:"wc-modal__footer",children:w})]})]});return he.createPortal(ue,document.body)};d.displayName="Modal";const{action:Ce}=__STORYBOOK_MODULE_ACTIONS__,we={title:"Components/Modal",component:d,parameters:{docs:{description:{component:"水彩设计系统的模态框组件，支持多种尺寸和配置。现已优化内边距，提供更好的内容展示效果。"}}},tags:["autodocs"],argTypes:{visible:{description:"模态框显示状态",control:{type:"boolean"}},title:{description:"模态框标题",control:{type:"text"}},size:{description:"模态框尺寸",control:{type:"select"},options:["sm","md","lg","xl"]},closable:{description:"是否显示关闭按钮",control:{type:"boolean"}},maskClosable:{description:"点击遮罩是否关闭",control:{type:"boolean"}},centered:{description:"是否垂直居中",control:{type:"boolean"}},onClose:{action:"close",description:"关闭时触发"}}},m=l=>{const[s,r]=o.useState(!1),n=()=>{r(!1),l.onClose()};return e.jsxs("div",{children:[e.jsx(t,{onClick:()=>r(!0),children:"打开模态框"}),e.jsxs(d,{...l,visible:s,onClose:n,children:[e.jsx("p",{children:"这是模态框的内容。现在有了合适的内边距，内容显示更加舒适。"}),e.jsx("p",{children:"您可以在右侧面板中调整模态框的各种属性来查看效果。"})]})]})};m.args={title:"模态框标题",size:"md",closable:!0,maskClosable:!0,centered:!1,onClose:Ce("close")};const u=()=>{const[l,s]=o.useState({sm:!1,md:!1,lg:!1,xl:!1}),r=a=>s(i=>({...i,[a]:!0})),n=a=>s(i=>({...i,[a]:!1}));return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"不同尺寸的模态框"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{onClick:()=>r("sm"),children:"小尺寸 (sm)"}),e.jsx(t,{onClick:()=>r("md"),children:"中等尺寸 (md)"}),e.jsx(t,{onClick:()=>r("lg"),children:"大尺寸 (lg)"}),e.jsx(t,{onClick:()=>r("xl"),children:"超大尺寸 (xl)"})]}),e.jsx(d,{visible:l.sm,onClose:()=>n("sm"),title:"小尺寸模态框",size:"sm",children:e.jsx("p",{children:"这是一个小尺寸的模态框，适合简单的确认对话或短消息。"})}),e.jsxs(d,{visible:l.md,onClose:()=>n("md"),title:"中等尺寸模态框",size:"md",children:[e.jsx("p",{children:"这是一个中等尺寸的模态框，适合大多数用例。"}),e.jsx("p",{children:"包含适量的内容和操作按钮。"})]}),e.jsxs(d,{visible:l.lg,onClose:()=>n("lg"),title:"大尺寸模态框",size:"lg",children:[e.jsx("p",{children:"这是一个大尺寸的模态框，适合展示更多内容。"}),e.jsx("p",{children:"可以包含表格、表单或其他复杂组件。"}),e.jsxs("div",{className:"mt-4 p-4 bg-gray-50 rounded",children:[e.jsx("h4",{className:"mb-2",children:"示例内容区域"}),e.jsx("p",{className:"text-sm",children:"这里可以放置任何你需要的内容。"})]})]}),e.jsxs(d,{visible:l.xl,onClose:()=>n("xl"),title:"超大尺寸模态框",size:"xl",children:[e.jsx("p",{children:"这是一个超大尺寸的模态框，适合复杂的界面和大量内容。"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-4",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded",children:[e.jsx("h4",{className:"mb-2",children:"左侧内容"}),e.jsx("p",{className:"text-sm",children:"可以展示详细信息、图表或其他内容。"})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded",children:[e.jsx("h4",{className:"mb-2",children:"右侧内容"}),e.jsx("p",{className:"text-sm",children:"支持复杂的布局和多列内容展示。"})]})]})]})]})},p=()=>{const[l,s]=o.useState(!1);return e.jsxs("div",{children:[e.jsx(t,{onClick:()=>s(!0),children:"打开确认对话框"}),e.jsxs(d,{visible:l,onClose:()=>s(!1),title:"确认操作",size:"sm",footer:e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(t,{variant:"secondary",onClick:()=>s(!1),children:"取消"}),e.jsx(t,{variant:"error",onClick:()=>s(!1),children:"确认删除"})]}),children:[e.jsx("p",{children:"您确定要删除这个项目吗？"}),e.jsx("p",{className:"text-sm text-gray-600",children:"此操作不可撤销，请谨慎考虑。"})]})]})},h=()=>{const[l,s]=o.useState(!1);return e.jsxs("div",{children:[e.jsx(t,{onClick:()=>s(!0),children:"自定义头部"}),e.jsxs(d,{visible:l,onClose:()=>s(!1),size:"md",header:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 bg-green-100 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-green-600 text-lg",children:"✓"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-green-800 m-0",children:"操作成功"}),e.jsx("p",{className:"text-sm text-gray-600 m-0",children:"您的更改已保存"})]})]}),footer:e.jsx(t,{onClick:()=>s(!1),children:"知道了"}),children:[e.jsx("p",{children:"自定义头部让您可以创建更丰富的模态框体验。"}),e.jsx("p",{children:"可以添加图标、状态指示器或其他视觉元素。"})]})]})},x=()=>{const[l,s]=o.useState(!1);return e.jsxs("div",{children:[e.jsx(t,{onClick:()=>s(!0),children:"查看内边距优化"}),e.jsx(d,{visible:l,onClose:()=>s(!1),title:"内边距优化演示",size:"md",footer:e.jsx(t,{onClick:()=>s(!1),children:"关闭"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 border border-dashed border-gray-300 rounded",children:[e.jsx("h4",{className:"text-lg font-medium mb-2",children:"优化后的内边距"}),e.jsx("p",{children:"现在模态框的内容区域有了合适的内边距（24px），让内容不会紧贴边缘。"})]}),e.jsxs("div",{className:"p-4 bg-blue-50 rounded",children:[e.jsx("h5",{className:"font-medium mb-2",children:"改进内容："}),e.jsxs("ul",{className:"text-sm space-y-1 list-disc list-inside",children:[e.jsx("li",{children:"body区域增加了24px的全方向内边距"}),e.jsx("li",{children:"优化了header和footer的内边距分布"}),e.jsx("li",{children:"改善了各部分之间的间距协调"}),e.jsx("li",{children:"增加了最小高度，避免内容过少时的布局问题"})]})]}),e.jsx("div",{className:"p-4 bg-gray-50 rounded",children:e.jsx("p",{className:"text-sm text-gray-700",children:"这些改进让模态框的内容展示更加美观和舒适，符合现代界面设计标准。"})})]})})]})},f=()=>{const[l,s]=o.useState(!1);return e.jsxs("div",{children:[e.jsx(t,{onClick:()=>s(!0),children:"可滚动内容"}),e.jsx(d,{visible:l,onClose:()=>s(!1),title:"长内容模态框",size:"lg",footer:e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(t,{variant:"secondary",onClick:()=>s(!1),children:"取消"}),e.jsx(t,{onClick:()=>s(!1),children:"确认"})]}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{children:e.jsx("strong",{children:"这是一个包含大量内容的模态框，用于测试滚动和内边距。"})}),Array.from({length:10},(r,n)=>e.jsxs("div",{className:"p-4 border rounded",children:[e.jsxs("h4",{children:["内容块 ",n+1]}),e.jsxs("p",{children:["这是第",n+1,"个内容块。模态框会自动处理过长的内容，当内容超过90%的视口高度时会出现滚动条。内边距确保内容不会贴边显示。"]})]},n)),e.jsx("div",{className:"p-4 bg-yellow-50 border border-yellow-200 rounded",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"注意："}),"即使内容很长，内边距依然保持一致，确保良好的阅读体验。"]})})]})})]})};m.__docgenInfo={description:"",methods:[],displayName:"Primary"};u.__docgenInfo={description:"",methods:[],displayName:"Sizes"};p.__docgenInfo={description:"",methods:[],displayName:"WithFooter"};h.__docgenInfo={description:"",methods:[],displayName:"CustomHeader"};x.__docgenInfo={description:"",methods:[],displayName:"PaddingDemo"};f.__docgenInfo={description:"",methods:[],displayName:"ScrollableContent"};var V,O,D;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(false);
  const handleClose = () => {
    setVisible(false);
    args.onClose();
  };
  return <div>\r
        <Button onClick={() => setVisible(true)}>打开模态框</Button>\r
        <Modal {...args} visible={visible} onClose={handleClose}>\r
          <p>这是模态框的内容。现在有了合适的内边距，内容显示更加舒适。</p>\r
          <p>您可以在右侧面板中调整模态框的各种属性来查看效果。</p>\r
        </Modal>\r
      </div>;
}`,...(D=(O=m.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var E,I,P;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const [modals, setModals] = useState({
    sm: false,
    md: false,
    lg: false,
    xl: false
  });
  const handleOpen = size => setModals(prev => ({
    ...prev,
    [size]: true
  }));
  const handleClose = size => setModals(prev => ({
    ...prev,
    [size]: false
  }));
  return <div className="space-y-4">\r
            <h3 className="text-lg font-semibold mb-4">不同尺寸的模态框</h3>\r
            <div className="flex gap-4">\r
                <Button onClick={() => handleOpen('sm')}>小尺寸 (sm)</Button>\r
                <Button onClick={() => handleOpen('md')}>中等尺寸 (md)</Button>\r
                <Button onClick={() => handleOpen('lg')}>大尺寸 (lg)</Button>\r
                <Button onClick={() => handleOpen('xl')}>超大尺寸 (xl)</Button>\r
            </div>\r
            \r
            <Modal visible={modals.sm} onClose={() => handleClose('sm')} title="小尺寸模态框" size="sm">\r
                <p>这是一个小尺寸的模态框，适合简单的确认对话或短消息。</p>\r
            </Modal>\r
            \r
            <Modal visible={modals.md} onClose={() => handleClose('md')} title="中等尺寸模态框" size="md">\r
                <p>这是一个中等尺寸的模态框，适合大多数用例。</p>\r
                <p>包含适量的内容和操作按钮。</p>\r
            </Modal>\r
            \r
            <Modal visible={modals.lg} onClose={() => handleClose('lg')} title="大尺寸模态框" size="lg">\r
                <p>这是一个大尺寸的模态框，适合展示更多内容。</p>\r
                <p>可以包含表格、表单或其他复杂组件。</p>\r
                <div className="mt-4 p-4 bg-gray-50 rounded">\r
                    <h4 className="mb-2">示例内容区域</h4>\r
                    <p className="text-sm">这里可以放置任何你需要的内容。</p>\r
                </div>\r
            </Modal>\r
            \r
            <Modal visible={modals.xl} onClose={() => handleClose('xl')} title="超大尺寸模态框" size="xl">\r
                <p>这是一个超大尺寸的模态框，适合复杂的界面和大量内容。</p>\r
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">\r
                    <div className="p-4 bg-blue-50 rounded">\r
                        <h4 className="mb-2">左侧内容</h4>\r
                        <p className="text-sm">可以展示详细信息、图表或其他内容。</p>\r
                    </div>\r
                    <div className="p-4 bg-green-50 rounded">\r
                        <h4 className="mb-2">右侧内容</h4>\r
                        <p className="text-sm">支持复杂的布局和多列内容展示。</p>\r
                    </div>\r
                </div>\r
            </Modal>\r
        </div>;
}`,...(P=(I=u.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var T,A,R;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const [visible, setVisible] = useState(false);
  return <div>\r
            <Button onClick={() => setVisible(true)}>打开确认对话框</Button>\r
            <Modal visible={visible} onClose={() => setVisible(false)} title="确认操作" size="sm" footer={<div className="flex justify-end gap-2">\r
                        <Button variant="secondary" onClick={() => setVisible(false)}>取消</Button>\r
                        <Button variant="error" onClick={() => setVisible(false)}>确认删除</Button>\r
                    </div>}>\r
                <p>您确定要删除这个项目吗？</p>\r
                <p className="text-sm text-gray-600">此操作不可撤销，请谨慎考虑。</p>\r
            </Modal>\r
        </div>;
}`,...(R=(A=p.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var L,F,K;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const [visible, setVisible] = useState(false);
  return <div>\r
            <Button onClick={() => setVisible(true)}>自定义头部</Button>\r
            <Modal visible={visible} onClose={() => setVisible(false)} size="md" header={<div className="flex items-center gap-3">\r
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">\r
                            <span className="text-green-600 text-lg">✓</span>\r
                        </div>\r
                        <div>\r
                            <h3 className="text-lg font-semibold text-green-800 m-0">操作成功</h3>\r
                            <p className="text-sm text-gray-600 m-0">您的更改已保存</p>\r
                        </div>\r
                    </div>} footer={<Button onClick={() => setVisible(false)}>知道了</Button>}>\r
                <p>自定义头部让您可以创建更丰富的模态框体验。</p>\r
                <p>可以添加图标、状态指示器或其他视觉元素。</p>\r
            </Modal>\r
        </div>;
}`,...(K=(F=h.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var $,H,W;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const [visible, setVisible] = useState(false);
  return <div>\r
            <Button onClick={() => setVisible(true)}>查看内边距优化</Button>\r
            <Modal visible={visible} onClose={() => setVisible(false)} title="内边距优化演示" size="md" footer={<Button onClick={() => setVisible(false)}>关闭</Button>}>\r
                <div className="space-y-4">\r
                    <div className="p-4 border border-dashed border-gray-300 rounded">\r
                        <h4 className="text-lg font-medium mb-2">优化后的内边距</h4>\r
                        <p>现在模态框的内容区域有了合适的内边距（24px），让内容不会紧贴边缘。</p>\r
                    </div>\r
                    \r
                    <div className="p-4 bg-blue-50 rounded">\r
                        <h5 className="font-medium mb-2">改进内容：</h5>\r
                        <ul className="text-sm space-y-1 list-disc list-inside">\r
                            <li>body区域增加了24px的全方向内边距</li>\r
                            <li>优化了header和footer的内边距分布</li>\r
                            <li>改善了各部分之间的间距协调</li>\r
                            <li>增加了最小高度，避免内容过少时的布局问题</li>\r
                        </ul>\r
                    </div>\r
                    \r
                    <div className="p-4 bg-gray-50 rounded">\r
                        <p className="text-sm text-gray-700">\r
                            这些改进让模态框的内容展示更加美观和舒适，符合现代界面设计标准。\r
                        </p>\r
                    </div>\r
                </div>\r
            </Modal>\r
        </div>;
}`,...(W=(H=x.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var q,U,Y;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const [visible, setVisible] = useState(false);
  return <div>\r
            <Button onClick={() => setVisible(true)}>可滚动内容</Button>\r
            <Modal visible={visible} onClose={() => setVisible(false)} title="长内容模态框" size="lg" footer={<div className="flex justify-end gap-2">\r
                        <Button variant="secondary" onClick={() => setVisible(false)}>取消</Button>\r
                        <Button onClick={() => setVisible(false)}>确认</Button>\r
                    </div>}>\r
                <div className="space-y-4">\r
                    <p><strong>这是一个包含大量内容的模态框，用于测试滚动和内边距。</strong></p>\r
                    \r
                    {Array.from({
          length: 10
        }, (_, i) => <div key={i} className="p-4 border rounded">\r
                            <h4>内容块 {i + 1}</h4>\r
                            <p>这是第{i + 1}个内容块。模态框会自动处理过长的内容，当内容超过90%的视口高度时会出现滚动条。内边距确保内容不会贴边显示。</p>\r
                        </div>)}\r
                    \r
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">\r
                        <p className="text-sm">\r
                            <strong>注意：</strong>即使内容很长，内边距依然保持一致，确保良好的阅读体验。\r
                        </p>\r
                    </div>\r
                </div>\r
            </Modal>\r
        </div>;
}`,...(Y=(U=f.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};const Me=["Primary","Sizes","WithFooter","CustomHeader","PaddingDemo","ScrollableContent"];export{h as CustomHeader,x as PaddingDemo,m as Primary,f as ScrollableContent,u as Sizes,p as WithFooter,Me as __namedExportsOrder,we as default};
