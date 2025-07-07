import{r as s,j as e}from"./iframe-DqwHGwZR.js";import{I as l}from"./Input-6KFaJsd_.js";/* empty css              */const{action:W}=__STORYBOOK_MODULE_ACTIONS__,L={title:"Components/Input (React)",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["text","email","password","number","tel","url"],description:"输入框类型"},size:{control:{type:"select"},options:["sm","md","lg"],description:"输入框大小"},disabled:{control:"boolean",description:"是否禁用"},readonly:{control:"boolean",description:"是否只读"},required:{control:"boolean",description:"是否必填"},label:{control:"text",description:"标签文本"},placeholder:{control:"text",description:"占位符文本"},helpText:{control:"text",description:"帮助文本"},error:{control:"text",description:"错误信息"},value:{control:"text",description:"输入框的值（受控"},onChange:{action:"changed",description:"值变化事件"}}},w=a=>{const[t,r]=s.useState(a.value||""),m=u=>{r(u.target.value),a.onChange(u)};return e.jsxs("div",{style:{width:"100%",maxWidth:"600px",margin:"0 auto",padding:"16px"},children:[e.jsx(l,{...a,value:t,onChange:m}),e.jsxs("p",{className:"mt-2 text-sm text-neutral-500",children:["当前值: ",t]})]})},n=w.bind({});n.args={label:"用户名",placeholder:"请输入用户名",size:"md",type:"text",disabled:!1,readonly:!1,required:!1,helpText:"",error:"",onChange:W("changed")};const i={render:()=>{const[a,t]=s.useState("");return e.jsx("div",{style:{width:"100%",maxWidth:"600px",margin:"0 auto",padding:"16px"},children:e.jsx(l,{value:a,onChange:r=>t(r.target.value),label:"电子邮箱",type:"email",placeholder:"请输入邮箱地址",helpText:"我们将向此邮箱发送确认信息",required:!0})})}},d={render:()=>{const[a,t]=s.useState("invalid-email");return e.jsx("div",{className:"w-80",children:e.jsx(l,{value:a,onChange:r=>t(r.target.value),label:"电子邮箱",type:"email",placeholder:"请输入邮箱地址",error:"请输入有效的邮箱地址",required:!0})})}},c={render:()=>{const[a,t]=s.useState(""),[r,m]=s.useState(""),[u,T]=s.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(l,{value:a,onChange:o=>t(o.target.value),label:"小尺寸",size:"sm",placeholder:"小尺寸输入框"}),e.jsx(l,{value:r,onChange:o=>m(o.target.value),label:"中等尺寸",size:"md",placeholder:"中等尺寸输入框"}),e.jsx(l,{value:u,onChange:o=>T(o.target.value),label:"大尺寸",size:"lg",placeholder:"大尺寸输入框"})]})}},p={render:()=>{const[a,t]=s.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(l,{value:a,onChange:r=>t(r.target.value),label:"正常状态",placeholder:"可正常输入"}),e.jsx(l,{value:"禁用状态",label:"禁用状态",disabled:!0}),e.jsx(l,{value:"只读状态",label:"只读状态",readonly:!0})]})}};var g,h,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  const handleChange = e => {
    setValue(e.target.value);
    args.onChange(e);
  };
  return <div style={{
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '16px'
  }}>\r
      <Input {...args} value={value} onChange={handleChange} />\r
      <p className="mt-2 text-sm text-neutral-500">当前值: {value}</p>\r
    </div>;
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var x,V,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div style={{
      width: '100%',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '16px'
    }}>\r
        <Input value={value} onChange={e => setValue(e.target.value)} label="电子邮箱" type="email" placeholder="请输入邮箱地址" helpText="我们将向此邮箱发送确认信息" required />\r
      </div>;
  }
}`,...(b=(V=i.parameters)==null?void 0:V.docs)==null?void 0:b.source}}};var S,y,C;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('invalid-email');
    return <div className="w-80">\r
        <Input value={value} onChange={e => setValue(e.target.value)} label="电子邮箱" type="email" placeholder="请输入邮箱地址" error="请输入有效的邮箱地址" required />\r
      </div>;
  }
}`,...(C=(y=d.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var j,f,I;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [smallValue, setSmallValue] = useState('');
    const [mediumValue, setMediumValue] = useState('');
    const [largeValue, setLargeValue] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>\r
        <Input value={smallValue} onChange={e => setSmallValue(e.target.value)} label="小尺寸" size="sm" placeholder="小尺寸输入框" />\r
        <Input value={mediumValue} onChange={e => setMediumValue(e.target.value)} label="中等尺寸" size="md" placeholder="中等尺寸输入框" />\r
        <Input value={largeValue} onChange={e => setLargeValue(e.target.value)} label="大尺寸" size="lg" placeholder="大尺寸输入框" />\r
      </div>;
  }
}`,...(I=(f=c.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var z,_,N;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [normalValue, setNormalValue] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>\r
        <Input value={normalValue} onChange={e => setNormalValue(e.target.value)} label="正常状态" placeholder="可正常输入" />\r
        <Input value="禁用状态" label="禁用状态" disabled />\r
        <Input value="只读状态" label="只读状态" readonly />\r
      </div>;
  }
}`,...(N=(_=p.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const O=["Default","WithLabel","WithError","Sizes","States"];export{n as Default,c as Sizes,p as States,d as WithError,i as WithLabel,O as __namedExportsOrder,L as default};
