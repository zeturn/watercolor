import{j as e}from"./iframe-DqwHGwZR.js";import{B as r}from"./Box-_KRSht0C.js";const R={title:"Layout/Box (React)",component:r,parameters:{docs:{description:{component:"Box组件提供了一个通用的容器，支持spacing、布局、颜色等属性的快速设置。类似于Material-UI的Box组件。"}}},argTypes:{component:{control:"text",description:"渲染的HTML标签",defaultValue:"div"},display:{control:"select",options:["flex","block","inline","inline-block","none","grid"],description:"CSS display属性"},flexDirection:{control:"select",options:["row","column","row-reverse","column-reverse"],description:"Flex方向"},justifyContent:{control:"select",options:["flex-start","center","flex-end","space-between","space-around","space-evenly"],description:"主轴对齐方式"},alignItems:{control:"select",options:["flex-start","center","flex-end","stretch","baseline"],description:"交叉轴对齐方式"},p:{control:"number",description:"内边距 - 所有方向"},bgcolor:{control:"color",description:"背景颜色"},border:{control:"text",description:"边框样式"},borderRadius:{control:"number",description:"圆角半径"}}},o={args:{p:4,bgcolor:"#f0f0f0",borderRadius:8},render:d=>e.jsx(r,{...d,children:"默认Box容器"})},n={args:{display:"flex",justifyContent:"space-between",alignItems:"center",p:4,bgcolor:"#e3f2fd",borderRadius:8},render:d=>e.jsxs(r,{...d,children:[e.jsx("div",{style:{padding:"8px",background:"#1976d2",color:"white",borderRadius:"4px"},children:"项目1"}),e.jsx("div",{style:{padding:"8px",background:"#1976d2",color:"white",borderRadius:"4px"},children:"项目2"}),e.jsx("div",{style:{padding:"8px",background:"#1976d2",color:"white",borderRadius:"4px"},children:"项目3"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx(r,{p:"2",bgcolor:"#ffebee",borderRadius:"4",children:"p=2"}),e.jsx(r,{p:"4",bgcolor:"#f3e5f5",borderRadius:"4",children:"p=4"}),e.jsx(r,{p:"6",bgcolor:"#e8f5e8",borderRadius:"4",children:"p=6"}),e.jsx(r,{px:"4",py:"2",bgcolor:"#fff3e0",borderRadius:"4",children:"px=4, py=2"})]})},s={render:()=>e.jsxs(r,{display:"flex",flexDirection:"column",gap:"4",children:[e.jsxs(r,{display:"flex",gap:"2",flexWrap:"wrap",children:[e.jsx(r,{width:"100px",height:"100px",bgcolor:"#ff9800",borderRadius:"8",display:"flex",alignItems:"center",justifyContent:"center",color:"white",children:"1"}),e.jsx(r,{width:"100px",height:"100px",bgcolor:"#2196f3",borderRadius:"8",display:"flex",alignItems:"center",justifyContent:"center",color:"white",children:"2"}),e.jsx(r,{width:"100px",height:"100px",bgcolor:"#4caf50",borderRadius:"8",display:"flex",alignItems:"center",justifyContent:"center",color:"white",children:"3"})]}),e.jsxs(r,{display:"flex",flexDirection:"column",gap:"2",bgcolor:"#f5f5f5",p:"4",borderRadius:"8",children:[e.jsx(r,{height:"40px",bgcolor:"#9c27b0",borderRadius:"4"}),e.jsx(r,{height:"40px",bgcolor:"#e91e63",borderRadius:"4"}),e.jsx(r,{height:"40px",bgcolor:"#ff5722",borderRadius:"4"})]})]})};var t,a,c;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    p: 4,
    bgcolor: '#f0f0f0',
    borderRadius: 8
  },
  render: args => <Box {...args}>\r
      默认Box容器\r
    </Box>
}`,...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,p,x;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    p: 4,
    bgcolor: '#e3f2fd',
    borderRadius: 8
  },
  render: args => <Box {...args}>\r
      <div style={{
      padding: '8px',
      background: '#1976d2',
      color: 'white',
      borderRadius: '4px'
    }}>项目1</div>\r
      <div style={{
      padding: '8px',
      background: '#1976d2',
      color: 'white',
      borderRadius: '4px'
    }}>项目2</div>\r
      <div style={{
      padding: '8px',
      background: '#1976d2',
      color: 'white',
      borderRadius: '4px'
    }}>项目3</div>\r
    </Box>
}`,...(x=(p=n.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var f,g,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>\r
      <Box p="2" bgcolor="#ffebee" borderRadius="4">p=2</Box>\r
      <Box p="4" bgcolor="#f3e5f5" borderRadius="4">p=4</Box>\r
      <Box p="6" bgcolor="#e8f5e8" borderRadius="4">p=6</Box>\r
      <Box px="4" py="2" bgcolor="#fff3e0" borderRadius="4">px=4, py=2</Box>\r
    </div>
}`,...(b=(g=i.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var u,h,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="4">\r
      <Box display="flex" gap="2" flexWrap="wrap">\r
        <Box width="100px" height="100px" bgcolor="#ff9800" borderRadius="8" display="flex" alignItems="center" justifyContent="center" color="white">1</Box>\r
        <Box width="100px" height="100px" bgcolor="#2196f3" borderRadius="8" display="flex" alignItems="center" justifyContent="center" color="white">2</Box>\r
        <Box width="100px" height="100px" bgcolor="#4caf50" borderRadius="8" display="flex" alignItems="center" justifyContent="center" color="white">3</Box>\r
      </Box>\r
      <Box display="flex" flexDirection="column" gap="2" bgcolor="#f5f5f5" p="4" borderRadius="8">\r
        <Box height="40px" bgcolor="#9c27b0" borderRadius="4"></Box>\r
        <Box height="40px" bgcolor="#e91e63" borderRadius="4"></Box>\r
        <Box height="40px" bgcolor="#ff5722" borderRadius="4"></Box>\r
      </Box>\r
    </Box>
}`,...(m=(h=s.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};const j=["Default","FlexContainer","SpacingExample","ResponsiveGrid"];export{o as Default,n as FlexContainer,s as ResponsiveGrid,i as SpacingExample,j as __namedExportsOrder,R as default};
