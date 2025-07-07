import{j as e}from"./iframe-DqwHGwZR.js";import{N as r}from"./NumberAnimation-D3rusCgI.js";const j={title:"Components/NumberAnimation (React)",component:r,parameters:{docs:{description:{component:"数字递增动画组件，支持格式化和本地化显示。"}}},tags:["autodocs"],argTypes:{from:{control:"number",description:"起始数值"},to:{control:"number",description:"目标数值"},duration:{control:{type:"number",min:500,step:100},description:"动画持续时间（毫秒）"},precision:{control:{type:"number",min:0,max:4,step:1},description:"小数位数"},showSeparator:{control:"boolean",description:"是否显示千分位分隔符"},locale:{control:"text",description:"本地化设置"},active:{control:"boolean",description:"是否激活动画"}}},t={args:{from:0,to:12345,duration:3e3,precision:0,showSeparator:!0,active:!0},render:u=>e.jsx(r,{...u,style:{fontSize:"32px",fontWeight:"bold"}})},o={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"不同精度的数字动画"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h4",{className:"mb-2",children:"整数"}),e.jsx(r,{from:0,to:1e3,duration:2e3,precision:0,showSeparator:!0,style:{fontSize:"24px",fontWeight:"bold",color:"#2196f3"}})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("h4",{className:"mb-2",children:"一位小数"}),e.jsx(r,{from:0,to:98.6,duration:2e3,precision:1,style:{fontSize:"24px",fontWeight:"bold",color:"#4caf50"}})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("h4",{className:"mb-2",children:"两位小数"}),e.jsx(r,{from:0,to:3.14,duration:2e3,precision:2,style:{fontSize:"24px",fontWeight:"bold",color:"#ff9800"}})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("h4",{className:"mb-2",children:"百分比"}),e.jsx(r,{from:0,to:85.67,duration:2e3,precision:2,style:{fontSize:"24px",fontWeight:"bold",color:"#e91e63"}}),e.jsx("span",{style:{fontSize:"24px",fontWeight:"bold",color:"#e91e63"},children:"%"})]})]})]})},s={render:()=>e.jsxs("div",{className:"text-center space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"计数器示例"}),e.jsxs("div",{className:"p-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white",children:[e.jsx("h2",{className:"text-2xl mb-4",children:"网站访问量"}),e.jsx(r,{from:0,to:1234567,duration:4e3,precision:0,showSeparator:!0,style:{fontSize:"48px",fontWeight:"bold"}}),e.jsx("p",{className:"mt-4 text-blue-100",children:"实时统计数据"})]})]})},i={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"多项数据展示"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md text-center border",children:[e.jsx("div",{className:"text-blue-500 text-4xl mb-2",children:"👥"}),e.jsx("h4",{className:"text-gray-600 mb-2",children:"用户总数"}),e.jsx(r,{from:0,to:45632,duration:3e3,precision:0,showSeparator:!0,style:{fontSize:"28px",fontWeight:"bold",color:"#2196f3"}})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md text-center border",children:[e.jsx("div",{className:"text-green-500 text-4xl mb-2",children:"💰"}),e.jsx("h4",{className:"text-gray-600 mb-2",children:"总收入"}),e.jsx("span",{style:{fontSize:"28px",fontWeight:"bold",color:"#4caf50"},children:"¥"}),e.jsx(r,{from:0,to:28567345e-1,duration:3500,precision:2,showSeparator:!0,style:{fontSize:"28px",fontWeight:"bold",color:"#4caf50"}})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md text-center border",children:[e.jsx("div",{className:"text-orange-500 text-4xl mb-2",children:"📊"}),e.jsx("h4",{className:"text-gray-600 mb-2",children:"完成率"}),e.jsx(r,{from:0,to:92.8,duration:2500,precision:1,style:{fontSize:"28px",fontWeight:"bold",color:"#ff9800"}}),e.jsx("span",{style:{fontSize:"28px",fontWeight:"bold",color:"#ff9800"},children:"%"})]})]})]})};var a,n,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    from: 0,
    to: 12345,
    duration: 3000,
    precision: 0,
    showSeparator: true,
    active: true
  },
  render: args => <NumberAnimation {...args} style={{
    fontSize: '32px',
    fontWeight: 'bold'
  }} />
}`,...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,d,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">\r
      <h3 className="text-lg font-semibold mb-4">不同精度的数字动画</h3>\r
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">\r
        <div className="text-center">\r
          <h4 className="mb-2">整数</h4>\r
          <NumberAnimation from={0} to={1000} duration={2000} precision={0} showSeparator={true} style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#2196f3'
        }} />\r
        </div>\r
        <div className="text-center">\r
          <h4 className="mb-2">一位小数</h4>\r
          <NumberAnimation from={0} to={98.6} duration={2000} precision={1} style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#4caf50'
        }} />\r
        </div>\r
        <div className="text-center">\r
          <h4 className="mb-2">两位小数</h4>\r
          <NumberAnimation from={0} to={3.14} duration={2000} precision={2} style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#ff9800'
        }} />\r
        </div>\r
        <div className="text-center">\r
          <h4 className="mb-2">百分比</h4>\r
          <NumberAnimation from={0} to={85.67} duration={2000} precision={2} style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#e91e63'
        }} />\r
          <span style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#e91e63'
        }}>%</span>\r
        </div>\r
      </div>\r
    </div>
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,x,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="text-center space-y-6">\r
      <h3 className="text-lg font-semibold mb-4">计数器示例</h3>\r
      <div className="p-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">\r
        <h2 className="text-2xl mb-4">网站访问量</h2>\r
        <NumberAnimation from={0} to={1234567} duration={4000} precision={0} showSeparator={true} style={{
        fontSize: '48px',
        fontWeight: 'bold'
      }} />\r
        <p className="mt-4 text-blue-100">实时统计数据</p>\r
      </div>\r
    </div>
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var f,b,g;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">\r
      <h3 className="text-lg font-semibold mb-4">多项数据展示</h3>\r
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">\r
        <div className="bg-white p-6 rounded-lg shadow-md text-center border">\r
          <div className="text-blue-500 text-4xl mb-2">👥</div>\r
          <h4 className="text-gray-600 mb-2">用户总数</h4>\r
          <NumberAnimation from={0} to={45632} duration={3000} precision={0} showSeparator={true} style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#2196f3'
        }} />\r
        </div>\r
        \r
        <div className="bg-white p-6 rounded-lg shadow-md text-center border">\r
          <div className="text-green-500 text-4xl mb-2">💰</div>\r
          <h4 className="text-gray-600 mb-2">总收入</h4>\r
          <span style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#4caf50'
        }}>¥</span>\r
          <NumberAnimation from={0} to={2856734.50} duration={3500} precision={2} showSeparator={true} style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#4caf50'
        }} />\r
        </div>\r
        \r
        <div className="bg-white p-6 rounded-lg shadow-md text-center border">\r
          <div className="text-orange-500 text-4xl mb-2">📊</div>\r
          <h4 className="text-gray-600 mb-2">完成率</h4>\r
          <NumberAnimation from={0} to={92.8} duration={2500} precision={1} style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#ff9800'
        }} />\r
          <span style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#ff9800'
        }}>%</span>\r
        </div>\r
      </div>\r
    </div>
}`,...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const y=["Basic","WithPrecision","CounterExample","MultipleCounts"];export{t as Basic,s as CounterExample,i as MultipleCounts,o as WithPrecision,y as __namedExportsOrder,j as default};
