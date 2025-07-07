import{j as e,r as b}from"./iframe-DqwHGwZR.js";import{C as r}from"./CircularProgress-BydD7m5U.js";import{S as E}from"./Slider-Bh02X0AY.js";const R={title:"Components/CircularProgress (React)",component:r,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["indeterminate","determinate"]},color:{control:{type:"select"},options:["primary","secondary","success","warning","error","inherit"]},size:{control:"number"},thickness:{control:"number"},showValue:{control:"boolean"}}},d=s=>{const[a,D]=b.useState(s.value??40),{variant:o}=s;return e.jsxs("div",{className:"space-y-4 w-64",children:[e.jsx(r,{...s,variant:o,value:a}),o==="determinate"&&e.jsx(E,{value:a,min:0,max:100,onChange:L=>D(L)})]})},t={...d,args:{variant:"indeterminate",color:"primary",size:40,thickness:3.6,showValue:!1},render:d},n={args:{variant:"determinate",color:"primary",size:40,thickness:3.6,showValue:!0,value:75},render:d},i={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(r,{variant:"determinate",value:75,color:"primary"}),e.jsx("p",{className:"text-sm mt-2",children:"Primary"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(r,{variant:"determinate",value:75,color:"secondary"}),e.jsx("p",{className:"text-sm mt-2",children:"Secondary"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(r,{variant:"determinate",value:75,color:"success"}),e.jsx("p",{className:"text-sm mt-2",children:"Success"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(r,{variant:"determinate",value:75,color:"warning"}),e.jsx("p",{className:"text-sm mt-2",children:"Warning"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(r,{variant:"determinate",value:75,color:"error"}),e.jsx("p",{className:"text-sm mt-2",children:"Error"})]})]})},c={render:()=>e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(r,{variant:"determinate",value:75,size:30}),e.jsx("p",{className:"text-sm mt-2",children:"Small (30px)"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(r,{variant:"determinate",value:75,size:40}),e.jsx("p",{className:"text-sm mt-2",children:"Medium (40px)"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(r,{variant:"determinate",value:75,size:60}),e.jsx("p",{className:"text-sm mt-2",children:"Large (60px)"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(r,{variant:"determinate",value:75,size:80}),e.jsx("p",{className:"text-sm mt-2",children:"Extra Large (80px)"})]})]})},l={render:()=>{const[s,a]=b.useState(65);return e.jsxs("div",{className:"space-y-6 max-w-md",children:[e.jsx("div",{className:"text-center",children:e.jsx(r,{variant:"determinate",value:s,size:80,showValue:!0,color:"primary"})}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium mb-2",children:["进度值: ",s,"%"]}),e.jsx(E,{value:s,min:0,max:100,onChange:a})]})]})}},m={render:()=>e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(r,{variant:"determinate",value:75,thickness:2}),e.jsx("p",{className:"text-sm mt-2",children:"Thin (2)"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(r,{variant:"determinate",value:75,thickness:3.6}),e.jsx("p",{className:"text-sm mt-2",children:"Default (3.6)"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(r,{variant:"determinate",value:75,thickness:6}),e.jsx("p",{className:"text-sm mt-2",children:"Thick (6)"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(r,{variant:"determinate",value:75,thickness:10}),e.jsx("p",{className:"text-sm mt-2",children:"Extra Thick (10)"})]})]})};var x,v,u;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Template,
  args: {
    variant: 'indeterminate',
    color: 'primary',
    size: 40,
    thickness: 3.6,
    showValue: false
  },
  render: Template
}`,...(u=(v=t.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var p,h,N;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'determinate',
    color: 'primary',
    size: 40,
    thickness: 3.6,
    showValue: true,
    value: 75
  },
  render: Template
}`,...(N=(h=n.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var j,g,C;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-6">\r
      <div className="text-center">\r
        <CircularProgress variant="determinate" value={75} color="primary" />\r
        <p className="text-sm mt-2">Primary</p>\r
      </div>\r
      <div className="text-center">\r
        <CircularProgress variant="determinate" value={75} color="secondary" />\r
        <p className="text-sm mt-2">Secondary</p>\r
      </div>\r
      <div className="text-center">\r
        <CircularProgress variant="determinate" value={75} color="success" />\r
        <p className="text-sm mt-2">Success</p>\r
      </div>\r
      <div className="text-center">\r
        <CircularProgress variant="determinate" value={75} color="warning" />\r
        <p className="text-sm mt-2">Warning</p>\r
      </div>\r
      <div className="text-center">\r
        <CircularProgress variant="determinate" value={75} color="error" />\r
        <p className="text-sm mt-2">Error</p>\r
      </div>\r
    </div>
}`,...(C=(g=i.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var y,k,f;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6">\r
      <div className="text-center">\r
        <CircularProgress variant="determinate" value={75} size={30} />\r
        <p className="text-sm mt-2">Small (30px)</p>\r
      </div>\r
      <div className="text-center">\r
        <CircularProgress variant="determinate" value={75} size={40} />\r
        <p className="text-sm mt-2">Medium (40px)</p>\r
      </div>\r
      <div className="text-center">\r
        <CircularProgress variant="determinate" value={75} size={60} />\r
        <p className="text-sm mt-2">Large (60px)</p>\r
      </div>\r
      <div className="text-center">\r
        <CircularProgress variant="determinate" value={75} size={80} />\r
        <p className="text-sm mt-2">Extra Large (80px)</p>\r
      </div>\r
    </div>
}`,...(f=(k=c.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var S,P,z;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(65);
    return <div className="space-y-6 max-w-md">\r
        <div className="text-center">\r
          <CircularProgress variant="determinate" value={value} size={80} showValue={true} color="primary" />\r
        </div>\r
        \r
        <div>\r
          <label className="block text-sm font-medium mb-2">\r
            进度值: {value}%\r
          </label>\r
          <Slider value={value} min={0} max={100} onChange={setValue} />\r
        </div>\r
      </div>;
  }
}`,...(z=(P=l.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var w,T,V;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6">\r
      <div className="text-center">\r
        <CircularProgress variant="determinate" value={75} thickness={2} />\r
        <p className="text-sm mt-2">Thin (2)</p>\r
      </div>\r
      <div className="text-center">\r
        <CircularProgress variant="determinate" value={75} thickness={3.6} />\r
        <p className="text-sm mt-2">Default (3.6)</p>\r
      </div>\r
      <div className="text-center">\r
        <CircularProgress variant="determinate" value={75} thickness={6} />\r
        <p className="text-sm mt-2">Thick (6)</p>\r
      </div>\r
      <div className="text-center">\r
        <CircularProgress variant="determinate" value={75} thickness={10} />\r
        <p className="text-sm mt-2">Extra Thick (10)</p>\r
      </div>\r
    </div>
}`,...(V=(T=m.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};const O=["Default","Determinate","Colors","Sizes","WithValue","Thickness"];export{i as Colors,t as Default,n as Determinate,c as Sizes,m as Thickness,l as WithValue,O as __namedExportsOrder,R as default};
