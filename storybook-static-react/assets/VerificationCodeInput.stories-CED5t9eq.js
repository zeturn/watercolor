import{r as v,j as d}from"./iframe-DqwHGwZR.js";/* empty css              */const m=({length:n=6,value:c="",onChange:r,onComplete:o,autoFocus:u=!1,className:f="",...j})=>{const a=v.useRef([]);v.useEffect(()=>{typeof c=="string"&&c.split("").forEach((t,e)=>{a.current[e]&&(a.current[e].value=t)})},[c]),v.useEffect(()=>{u&&a.current[0]&&a.current[0].focus()},[u]);const g=t=>{const e=a.current[t];e&&e.focus()},E=()=>a.current.map(t=>t?t.value:"").join(""),F=t=>e=>{const s=e.target.value.replace(/[^0-9a-zA-Z]/g,"");e.target.value=s.toUpperCase();const l=E();r==null||r(l),s&&t<n-1&&g(t+1),l.length===n&&(o==null||o(l))},N=t=>e=>{e.key==="Backspace"&&!e.target.value&&t>0&&(e.preventDefault(),g(t-1))},b=t=>{t.target.select()},w=t=>{var s;t.preventDefault();const e=(((s=t.clipboardData)==null?void 0:s.getData("text"))||"").trim().slice(0,n);e&&(e.split("").forEach((l,h)=>{a.current[h]&&(a.current[h].value=l)}),r==null||r(e),e.length===n&&(o==null||o(e)))};return d.jsx("div",{className:["wc-input-code",f].filter(Boolean).join(" "),onPaste:w,...j,children:Array.from({length:n}).map((t,e)=>d.jsx("input",{ref:s=>a.current[e]=s,id:`wc-input-code-${e}`,name:`wc-input-code-${e}`,className:"wc-input-code__box",type:"text",maxLength:1,autoComplete:"one-time-code",inputMode:"numeric",onInput:F(e),onKeyDown:N(e),onFocus:b},e))})};m.displayName="VerificationCodeInput";m.__docgenInfo={description:`VerificationCodeInput 组件\r
用于输入定长验证码 / 短信验证码 / 授权码等。\r
\r
Props\r
- length        验证码长度，默认 6\r
- value         受控值字符串\r
- onChange      输入变化时触发 (value: string) => void\r
- onComplete    输入达到 length 时触发 (value: string) => void\r
- autoFocus     是否在挂载时自动聚焦第一个输入框\r
- className     额外的自定义类名`,methods:[],displayName:"VerificationCodeInput",props:{length:{defaultValue:{value:"6",computed:!1},required:!1},value:{defaultValue:{value:"''",computed:!1},required:!1},autoFocus:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const{action:D}=__STORYBOOK_MODULE_ACTIONS__,R={title:"Components/Input/VerificationCodeInput (React)s",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{length:{control:{type:"number",min:1,step:1},description:"验证码长度"},autoFocus:{control:"boolean",description:"是否自动聚焦"},value:{control:"text",description:"受控值"},onChange:{action:"changed",description:"值变化事件"},onComplete:{action:"completed",description:"输入完成事件"}}},S=n=>{const[c,r]=v.useState(n.value||""),o=u=>{var f;r(u),(f=n.onChange)==null||f.call(n,u)};return d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[d.jsx(m,{...n,value:c,onChange:o}),d.jsxs("p",{style:{fontSize:"14px",color:"gray"},children:["当前值: ",c]})]})},i=S.bind({});i.args={length:6,autoFocus:!1,onComplete:D("completed")};const p=S.bind({});p.args={length:4,autoFocus:!0,onComplete:D("completed")};var y,x,V;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  const handleChange = val => {
    setValue(val);
    args.onChange?.(val);
  };
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <VerificationCodeInput {...args} value={value} onChange={handleChange} />\r
      <p style={{
      fontSize: '14px',
      color: 'gray'
    }}>当前值: {value}</p>\r
    </div>;
}`,...(V=(x=i.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};var _,I,C;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  const handleChange = val => {
    setValue(val);
    args.onChange?.(val);
  };
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <VerificationCodeInput {...args} value={value} onChange={handleChange} />\r
      <p style={{
      fontSize: '14px',
      color: 'gray'
    }}>当前值: {value}</p>\r
    </div>;
}`,...(C=(I=p.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};const q=["Basic","FourDigits"];export{i as Basic,p as FourDigits,q as __namedExportsOrder,R as default};
