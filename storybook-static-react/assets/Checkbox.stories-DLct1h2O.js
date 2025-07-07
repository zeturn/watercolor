import{r as m,j as s}from"./iframe-DqwHGwZR.js";import{C as c}from"./Checkbox-7AD96CMh.js";/* empty css              */const w={title:"Components/Checkbox (React)",component:c,parameters:{docs:{description:{component:"Watercolor 复选框组件，支持受控/多选/不确定等功能。"}}},tags:["autodocs"],argTypes:{checked:{description:"当前是否选中",control:{type:"boolean"}},indeterminate:{description:"是否为不确定状态",control:"boolean"},label:{description:"标签文本",control:"text"},disabled:{description:"是否禁用",control:"boolean"},color:{description:"颜色主题",control:{type:"select"},options:["primary","secondary","success","error","warning","info"]},size:{description:"尺寸",control:{type:"select"},options:["sm","md","lg"]},onChange:{action:"change"}}},z=t=>{const[r,o]=m.useState(!1);return s.jsxs("div",{className:"space-y-4",children:[s.jsx(c,{...t,checked:r,onChange:e=>{var a;o(e.target.checked),(a=t.onChange)==null||a.call(t,e)}}),s.jsxs("p",{className:"text-sm text-gray-500",children:["当前状态: ",r?"已选中":"未选中"]})]})},n=z.bind({});n.args={label:"我同意条款和条件",color:"primary",size:"md",disabled:!1};const l=()=>{const[t,r]=m.useState({primary:!0,secondary:!0,success:!0,error:!0,warning:!0,info:!0}),o=e=>a=>r(p=>({...p,[e]:a.target.checked}));return s.jsxs("div",{className:"space-y-4",children:[s.jsx("h3",{className:"text-lg font-semibold mb-4",children:"颜色主题"}),["primary","secondary","success","error","warning","info"].map(e=>s.jsx(c,{checked:t[e],onChange:o(e),label:e.charAt(0).toUpperCase()+e.slice(1),color:e},e))]})},i=()=>{const[t,r]=m.useState({sm:!0,md:!0,lg:!0}),o=e=>a=>r(p=>({...p,[e]:a.target.checked}));return s.jsxs("div",{className:"space-y-4",children:[s.jsx("h3",{className:"text-lg font-semibold mb-4",children:"尺寸对比"}),["sm","md","lg"].map(e=>s.jsx(c,{checked:t[e],onChange:o(e),label:`${e} 尺寸复选框`,size:e},e))]})},d=()=>{const[t,r]=m.useState(!1),[o,e]=m.useState(!0);return s.jsxs("div",{className:"space-y-4",children:[s.jsx("h3",{className:"text-lg font-semibold mb-4",children:"各种状态"}),s.jsx(c,{checked:t,onChange:a=>r(a.target.checked),label:"正常"}),s.jsx(c,{checked:!0,disabled:!0,label:"禁用"}),s.jsx(c,{indeterminate:o,onChange:()=>e(!1),label:"不确定"})]})};l.__docgenInfo={description:"",methods:[],displayName:"Colors"};i.__docgenInfo={description:"",methods:[],displayName:"Sizes"};d.__docgenInfo={description:"",methods:[],displayName:"States"};var h,g,u;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  return <div className="space-y-4">\r
      <Checkbox {...args} checked={checked} onChange={e => {
      setChecked(e.target.checked);
      args.onChange?.(e);
    }} />\r
      <p className="text-sm text-gray-500">当前状态: {checked ? '已选中' : '未选中'}</p>\r
    </div>;
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var b,k,x;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [state, setState] = useState({
    primary: true,
    secondary: true,
    success: true,
    error: true,
    warning: true,
    info: true
  });
  const toggle = key => e => setState(s => ({
    ...s,
    [key]: e.target.checked
  }));
  return <div className="space-y-4">\r
      <h3 className="text-lg font-semibold mb-4">颜色主题</h3>\r
      {['primary', 'secondary', 'success', 'error', 'warning', 'info'].map(clr => <Checkbox key={clr} checked={state[clr]} onChange={toggle(clr)} label={clr.charAt(0).toUpperCase() + clr.slice(1)} color={clr} />)}\r
    </div>;
}`,...(x=(k=l.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var y,C,S;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [sizes, setSizes] = useState({
    sm: true,
    md: true,
    lg: true
  });
  const toggle = key => e => setSizes(s => ({
    ...s,
    [key]: e.target.checked
  }));
  return <div className="space-y-4">\r
      <h3 className="text-lg font-semibold mb-4">尺寸对比</h3>\r
      {['sm', 'md', 'lg'].map(sz => <Checkbox key={sz} checked={sizes[sz]} onChange={toggle(sz)} label={\`\${sz} 尺寸复选框\`} size={sz} />)}\r
    </div>;
}`,...(S=(C=i.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var f,N,j;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [normal, setNormal] = useState(false);
  const [indeterminate, setIndeterminate] = useState(true);
  return <div className="space-y-4">\r
      <h3 className="text-lg font-semibold mb-4">各种状态</h3>\r
      <Checkbox checked={normal} onChange={e => setNormal(e.target.checked)} label="正常" />\r
      <Checkbox checked disabled label="禁用" />\r
      <Checkbox indeterminate={indeterminate} onChange={() => setIndeterminate(false)} label="不确定" />\r
    </div>;
}`,...(j=(N=d.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};const E=["Primary","Colors","Sizes","States"];export{l as Colors,n as Primary,i as Sizes,d as States,E as __namedExportsOrder,w as default};
