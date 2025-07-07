import{r as i,j as c}from"./iframe-DqwHGwZR.js";import{R as o}from"./Radio-DVttdDrg.js";const N={title:"Components/Radio (React)",component:o,parameters:{docs:{description:{component:"Watercolor 单选按钮组件，支持多种颜色/尺寸，可与 RadioGroup 配合使用。"}}},tags:["autodocs"],argTypes:{value:{description:"单选按钮值",control:"text"},label:{description:"标签文本",control:"text"},disabled:{description:"是否禁用",control:"boolean"},color:{description:"颜色主题",control:{type:"select"},options:["primary","secondary","success","error","warning","info"]},size:{description:"尺寸",control:{type:"select"},options:["sm","md","lg"]},onChange:{action:"change"}}},R=s=>{const[a,t]=i.useState(s.value);return c.jsx(o,{...s,checked:a===s.value,onChange:e=>{var p;t(e),(p=s.onChange)==null||p.call(s,e)}})},r=R.bind({});r.args={value:"option1",label:"选择此选项",color:"primary",size:"md",disabled:!1};const l=()=>{const[s,a]=i.useState("primary"),t=["primary","secondary","success","error","warning","info"];return c.jsx("div",{className:"flex flex-col gap-4",children:t.map(e=>c.jsx(o,{value:e,label:e.charAt(0).toUpperCase()+e.slice(1),color:e,checked:s===e,onChange:()=>a(e)},e))})},d=()=>{const[s,a]=i.useState("md"),t=["sm","md","lg"];return c.jsx("div",{className:"flex flex-col gap-4",children:t.map(e=>c.jsx(o,{value:e,label:`${e} 尺寸单选按钮`,size:e,checked:s===e,onChange:()=>a(e)},e))})},n=()=>{const[s,a]=i.useState("checked");return c.jsxs("div",{className:"flex flex-col gap-4",children:[c.jsx(o,{value:"unchecked",label:"未选中状态",checked:s==="unchecked",onChange:()=>a("unchecked")}),c.jsx(o,{value:"checked",label:"选中状态",checked:s==="checked",onChange:()=>a("checked")}),c.jsx(o,{value:"disabled",label:"禁用状态",disabled:!0}),c.jsx(o,{value:"disabled-checked",label:"禁用且选中状态",disabled:!0,checked:!0})]})};l.__docgenInfo={description:"",methods:[],displayName:"Colors"};d.__docgenInfo={description:"",methods:[],displayName:"Sizes"};n.__docgenInfo={description:"",methods:[],displayName:"States"};var u,m,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const [selected, setSelected] = useState(args.value);
  return <Radio {...args} checked={selected === args.value} onChange={val => {
    setSelected(val);
    args.onChange?.(val);
  }} />;
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,S,k;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState('primary');
  const colors = ['primary', 'secondary', 'success', 'error', 'warning', 'info'];
  return <div className="flex flex-col gap-4">\r
      {colors.map(c => <Radio key={c} value={c} label={c.charAt(0).toUpperCase() + c.slice(1)} color={c} checked={selected === c} onChange={() => setSelected(c)} />)}\r
    </div>;
}`,...(k=(S=l.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var v,x,b;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState('md');
  const sizes = ['sm', 'md', 'lg'];
  return <div className="flex flex-col gap-4">\r
      {sizes.map(s => <Radio key={s} value={s} label={\`\${s} 尺寸单选按钮\`} size={s} checked={selected === s} onChange={() => setSelected(s)} />)}\r
    </div>;
}`,...(b=(x=d.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,C,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState('checked');
  return <div className="flex flex-col gap-4">\r
      <Radio value="unchecked" label="未选中状态" checked={selected === 'unchecked'} onChange={() => setSelected('unchecked')} />\r
      <Radio value="checked" label="选中状态" checked={selected === 'checked'} onChange={() => setSelected('checked')} />\r
      <Radio value="disabled" label="禁用状态" disabled />\r
      <Radio value="disabled-checked" label="禁用且选中状态" disabled checked />\r
    </div>;
}`,...(y=(C=n.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const _=["Default","Colors","Sizes","States"];export{l as Colors,r as Default,d as Sizes,n as States,_ as __namedExportsOrder,N as default};
