import{r as m,j as e}from"./iframe-DqwHGwZR.js";import{D as n}from"./DatePicker-Dc26KkGT.js";const L={title:"Components/DatePicker (React)",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"date"},description:"Selected date value"},placeholder:{control:"text",description:"Placeholder text"},format:{control:"text",description:"Date format (display only)"},disabled:{control:"boolean",description:"Disable the picker"},showToday:{control:"boolean",description:"Display today button (not applicable for native input)"},minDate:{control:{type:"date"},description:"Minimum selectable date"},maxDate:{control:{type:"date"},description:"Maximum selectable date"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Component size"},variant:{control:{type:"select"},options:["default","outlined","filled"],description:"Visual variant"},onChange:{action:"change"}}},h=t=>{const[a,s]=m.useState(t.value),i=r=>{var g;s(r),(g=t.onChange)==null||g.call(t,r)};return e.jsxs("div",{style:{width:"100%",maxWidth:"600px",margin:"0 auto",padding:"16px"},children:[e.jsx(n,{...t,value:a,onChange:i}),e.jsxs("div",{className:"mt-4 text-sm text-gray-600",children:["选中日期: ",a?a.toLocaleDateString():"无"]})]})},o=h.bind({});o.args={value:null,placeholder:"请选择日期",format:"YYYY-MM-DD",disabled:!1,showToday:!0,minDate:null,maxDate:null,size:"md",variant:"default"};const d=h.bind({});d.args={...o.args,value:new Date};const l=()=>{const t=new Date,a=new Date(t.getFullYear(),t.getMonth(),t.getDate()-7),s=new Date(t.getFullYear(),t.getMonth(),t.getDate()+30),[i,r]=m.useState(null);return e.jsxs("div",{style:{width:"100%",maxWidth:"600px",margin:"0 auto",padding:"16px"},children:[e.jsx("h3",{style:{fontSize:"14px",fontWeight:"bold",marginBottom:"8px"},children:"限制日期范围"}),e.jsx(n,{value:i,onChange:r,placeholder:"选择日期范围内的日期",minDate:a,maxDate:s}),e.jsxs("div",{style:{marginTop:"16px",fontSize:"12px",color:"gray"},children:[e.jsxs("div",{children:["最小日期: ",a.toLocaleDateString()]}),e.jsxs("div",{children:["最大日期: ",s.toLocaleDateString()]})]})]})},c=h.bind({});c.args={...o.args,disabled:!0,value:new Date};const p=()=>{const[t,a]=m.useState(null),[s,i]=m.useState(null),[r,g]=m.useState(null);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"14px",fontWeight:"bold",marginBottom:"8px"},children:"小尺寸"}),e.jsx(n,{value:t,onChange:a,placeholder:"小尺寸日期选择器",size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"14px",fontWeight:"bold",marginBottom:"8px"},children:"中等尺寸"}),e.jsx(n,{value:s,onChange:i,placeholder:"中等尺寸日期选择器",size:"md"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"14px",fontWeight:"bold",marginBottom:"8px"},children:"大尺寸"}),e.jsx(n,{value:r,onChange:g,placeholder:"大尺寸日期选择器",size:"lg"})]})]})};l.__docgenInfo={description:"",methods:[],displayName:"WithMinMaxDates"};p.__docgenInfo={description:"",methods:[],displayName:"Sizes"};var u,x,D;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const [date, setDate] = useState(args.value);
  const handleChange = d => {
    setDate(d);
    args.onChange?.(d);
  };
  return <div style={{
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '16px'
  }}>\r
      <DatePicker {...args} value={date} onChange={handleChange} />\r
      <div className="mt-4 text-sm text-gray-600">\r
        选中日期: {date ? date.toLocaleDateString() : '无'}\r
      </div>\r
    </div>;
}`,...(D=(x=o.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var v,y,S;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const [date, setDate] = useState(args.value);
  const handleChange = d => {
    setDate(d);
    args.onChange?.(d);
  };
  return <div style={{
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '16px'
  }}>\r
      <DatePicker {...args} value={date} onChange={handleChange} />\r
      <div className="mt-4 text-sm text-gray-600">\r
        选中日期: {date ? date.toLocaleDateString() : '无'}\r
      </div>\r
    </div>;
}`,...(S=(y=d.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var f,C,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const today = new Date();
  const min = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
  const max = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
  const [date, setDate] = useState(null);
  return <div style={{
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '16px'
  }}>\r
      <h3 style={{
      fontSize: '14px',
      fontWeight: 'bold',
      marginBottom: '8px'
    }}>限制日期范围</h3>\r
      <DatePicker value={date} onChange={setDate} placeholder="选择日期范围内的日期" minDate={min} maxDate={max} />\r
      <div style={{
      marginTop: '16px',
      fontSize: '12px',
      color: 'gray'
    }}>\r
        <div>最小日期: {min.toLocaleDateString()}</div>\r
        <div>最大日期: {max.toLocaleDateString()}</div>\r
      </div>\r
    </div>;
}`,...(b=(C=l.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var z,j,W;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  const [date, setDate] = useState(args.value);
  const handleChange = d => {
    setDate(d);
    args.onChange?.(d);
  };
  return <div style={{
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '16px'
  }}>\r
      <DatePicker {...args} value={date} onChange={handleChange} />\r
      <div className="mt-4 text-sm text-gray-600">\r
        选中日期: {date ? date.toLocaleDateString() : '无'}\r
      </div>\r
    </div>;
}`,...(W=(j=c.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var w,M,P;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const [d1, setD1] = useState(null);
  const [d2, setD2] = useState(null);
  const [d3, setD3] = useState(null);
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <div>\r
        <h3 style={{
        fontSize: '14px',
        fontWeight: 'bold',
        marginBottom: '8px'
      }}>小尺寸</h3>\r
        <DatePicker value={d1} onChange={setD1} placeholder="小尺寸日期选择器" size="sm" />\r
      </div>\r
      <div>\r
        <h3 style={{
        fontSize: '14px',
        fontWeight: 'bold',
        marginBottom: '8px'
      }}>中等尺寸</h3>\r
        <DatePicker value={d2} onChange={setD2} placeholder="中等尺寸日期选择器" size="md" />\r
      </div>\r
      <div>\r
        <h3 style={{
        fontSize: '14px',
        fontWeight: 'bold',
        marginBottom: '8px'
      }}>大尺寸</h3>\r
        <DatePicker value={d3} onChange={setD3} placeholder="大尺寸日期选择器" size="lg" />\r
      </div>\r
    </div>;
}`,...(P=(M=p.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const Y=["Default","WithPreselectedDate","WithMinMaxDates","Disabled","Sizes"];export{o as Default,c as Disabled,p as Sizes,l as WithMinMaxDates,d as WithPreselectedDate,Y as __namedExportsOrder,L as default};
