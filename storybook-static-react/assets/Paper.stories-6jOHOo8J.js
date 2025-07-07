import{j as e,r as V}from"./iframe-DqwHGwZR.js";import{P as t}from"./Paper-GPwvK4BN.js";const L={title:"Layout/Paper",component:t,parameters:{docs:{description:{component:"Paper组件创建了一个具有阴影效果的表面，用于突出显示内容。支持不同的阴影等级和边框样式，类似于Material Design的Paper概念。"}}},tags:["autodocs"],argTypes:{elevation:{control:{type:"range",min:0,max:24,step:1},description:"阴影等级 (0-24)",defaultValue:1},variant:{control:"select",options:["elevation","outlined"],description:"变体样式",defaultValue:"elevation"},square:{control:"boolean",description:"是否为方形（无圆角）",defaultValue:!1}}},a={args:{elevation:1},render:r=>e.jsxs(t,{...r,style:{padding:"24px",maxWidth:"400px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0"},children:"默认Paper"}),e.jsx("p",{style:{margin:"0",color:"#666"},children:"这是一个带有轻微阴影的Paper容器，用于包装内容并使其在页面上突出显示。"})]})},s={render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"24px",padding:"24px",background:"#f5f5f5"},children:[0,1,3,6,12,24].map(r=>e.jsxs(t,{elevation:r,style:{padding:"16px",textAlign:"center"},children:[e.jsxs("h4",{style:{margin:"0 0 8px 0"},children:["Elevation ",r]}),e.jsx("p",{style:{margin:"0",fontSize:"12px",color:"#666"},children:r===0?"无阴影":r===1?"轻微阴影":r===3?"中等阴影":r===6?"较强阴影":r===12?"强阴影":"最强阴影"})]},r))})},o={args:{variant:"outlined"},render:r=>e.jsx("div",{style:{padding:"24px",background:"#f5f5f5"},children:e.jsxs(t,{...r,style:{padding:"24px",maxWidth:"400px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0"},children:"边框变体"}),e.jsx("p",{style:{margin:"0",color:"#666"},children:"这个Paper使用边框而不是阴影来定义边界，适用于需要更清晰分隔的界面。"})]})})},d={args:{square:!0,elevation:4},render:r=>e.jsxs(t,{...r,style:{padding:"24px",maxWidth:"400px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0"},children:"方形Paper"}),e.jsx("p",{style:{margin:"0",color:"#666"},children:"这个Paper没有圆角，呈现方形外观，适用于需要更正式或棱角分明设计的场景。"})]})},l={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"24px",padding:"24px"},children:[e.jsxs(t,{elevation:2,style:{overflow:"hidden"},children:[e.jsx("div",{style:{height:"160px",background:"linear-gradient(45deg, #2196f3, #21cbf3)",position:"relative"},children:e.jsx("div",{style:{position:"absolute",bottom:"16px",left:"16px",color:"white"},children:e.jsx("h3",{style:{margin:"0",fontSize:"20px"},children:"产品卡片"})})}),e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("p",{style:{margin:"0 0 12px 0",color:"#666"},children:"这是一个使用Paper组件创建的产品卡片示例，展示了如何组合不同元素。"}),e.jsx("button",{style:{background:"#2196f3",color:"white",border:"none",padding:"8px 16px",borderRadius:"4px",cursor:"pointer"},children:"了解更多"})]})]}),e.jsxs(t,{variant:"outlined",children:[e.jsx("div",{style:{padding:"16px",borderBottom:"1px solid #e0e0e0"},children:e.jsx("h3",{style:{margin:"0"},children:"用户信息"})}),e.jsxs("div",{style:{padding:"16px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"12px"},children:[e.jsx("div",{style:{width:"40px",height:"40px",background:"#4caf50",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"bold",marginRight:"12px"},children:"U"}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0",fontSize:"16px"},children:"张三"}),e.jsx("p",{style:{margin:"0",fontSize:"14px",color:"#666"},children:"高级开发者"})]})]}),e.jsx("p",{style:{margin:"0",fontSize:"14px",color:"#666"},children:"擅长前端开发和UI设计，有5年以上的工作经验。"})]})]}),e.jsxs(t,{elevation:8,style:{padding:"24px",textAlign:"center"},children:[e.jsx("div",{style:{width:"60px",height:"60px",background:"#ff9800",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",color:"white",fontSize:"24px"},children:"📊"}),e.jsx("h3",{style:{margin:"0 0 8px 0"},children:"数据统计"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",fontSize:"14px"},children:"实时数据监控面板"}),e.jsx("div",{style:{fontSize:"32px",fontWeight:"bold",color:"#ff9800"},children:"1,234"})]})]})},p={render:()=>{const[r,n]=V.useState(-1),A=["🎨","📱","💻","🚀","⚡","🎯"];return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"16px",padding:"24px"},children:A.map((T,i)=>e.jsxs(t,{elevation:r===i?8:2,onMouseEnter:()=>n(i),onMouseLeave:()=>n(-1),style:{padding:"20px",textAlign:"center",cursor:"pointer",transition:"all 0.3s ease"},children:[e.jsx("div",{style:{fontSize:"32px",marginBottom:"8px"},children:T}),e.jsxs("h4",{style:{margin:"0 0 8px 0"},children:["项目 ",i+1]}),e.jsx("p",{style:{margin:"0",fontSize:"12px",color:"#666"},children:"悬停查看效果"})]},i))})}},x={render:()=>e.jsxs("div",{className:"space-y-6 p-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"响应式卡片布局"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:Array.from({length:6},(r,n)=>e.jsxs(t,{elevation:3,className:"overflow-hidden",children:[e.jsx("div",{className:`h-32 bg-gradient-to-br ${n%6===0?"from-red-400 to-red-600":n%6===1?"from-blue-400 to-blue-600":n%6===2?"from-green-400 to-green-600":n%6===3?"from-yellow-400 to-yellow-600":n%6===4?"from-purple-400 to-purple-600":"from-pink-400 to-pink-600"}`}),e.jsxs("div",{className:"p-4",children:[e.jsxs("h4",{className:"font-semibold mb-2",children:["卡片标题 ",n+1]}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:"这是卡片的描述内容，展示了Paper组件在实际项目中的应用效果。"}),e.jsx("button",{className:"text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors",children:"查看详情"})]})]},n))})]})};var c,m,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    elevation: 1
  },
  render: args => <Paper {...args} style={{
    padding: '24px',
    maxWidth: '400px'
  }}>\r
      <h3 style={{
      margin: '0 0 16px 0'
    }}>默认Paper</h3>\r
      <p style={{
      margin: '0',
      color: '#666'
    }}>\r
        这是一个带有轻微阴影的Paper容器，用于包装内容并使其在页面上突出显示。\r
      </p>\r
    </Paper>
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,u,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '24px',
    padding: '24px',
    background: '#f5f5f5'
  }}>\r
      {[0, 1, 3, 6, 12, 24].map(elevation => <Paper key={elevation} elevation={elevation} style={{
      padding: '16px',
      textAlign: 'center'
    }}>\r
          <h4 style={{
        margin: '0 0 8px 0'
      }}>Elevation {elevation}</h4>\r
          <p style={{
        margin: '0',
        fontSize: '12px',
        color: '#666'
      }}>\r
            {elevation === 0 ? '无阴影' : elevation === 1 ? '轻微阴影' : elevation === 3 ? '中等阴影' : elevation === 6 ? '较强阴影' : elevation === 12 ? '强阴影' : '最强阴影'}\r
          </p>\r
        </Paper>)}\r
    </div>
}`,...(y=(u=s.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var f,v,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'outlined'
  },
  render: args => <div style={{
    padding: '24px',
    background: '#f5f5f5'
  }}>\r
      <Paper {...args} style={{
      padding: '24px',
      maxWidth: '400px'
    }}>\r
        <h3 style={{
        margin: '0 0 16px 0'
      }}>边框变体</h3>\r
        <p style={{
        margin: '0',
        color: '#666'
      }}>\r
          这个Paper使用边框而不是阴影来定义边界，适用于需要更清晰分隔的界面。\r
        </p>\r
      </Paper>\r
    </div>
}`,...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var j,P,S;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    square: true,
    elevation: 4
  },
  render: args => <Paper {...args} style={{
    padding: '24px',
    maxWidth: '400px'
  }}>\r
      <h3 style={{
      margin: '0 0 16px 0'
    }}>方形Paper</h3>\r
      <p style={{
      margin: '0',
      color: '#666'
    }}>\r
        这个Paper没有圆角，呈现方形外观，适用于需要更正式或棱角分明设计的场景。\r
      </p>\r
    </Paper>
}`,...(S=(P=d.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var w,z,k;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    padding: '24px'
  }}>\r
      <Paper elevation={2} style={{
      overflow: 'hidden'
    }}>\r
        <div style={{
        height: '160px',
        background: 'linear-gradient(45deg, #2196f3, #21cbf3)',
        position: 'relative'
      }}>\r
          <div style={{
          position: 'absolute',
          bottom: '16px',
          left: '16px',
          color: 'white'
        }}>\r
            <h3 style={{
            margin: '0',
            fontSize: '20px'
          }}>产品卡片</h3>\r
          </div>\r
        </div>\r
        <div style={{
        padding: '16px'
      }}>\r
          <p style={{
          margin: '0 0 12px 0',
          color: '#666'
        }}>\r
            这是一个使用Paper组件创建的产品卡片示例，展示了如何组合不同元素。\r
          </p>\r
          <button style={{
          background: '#2196f3',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>\r
            了解更多\r
          </button>\r
        </div>\r
      </Paper>\r
      \r
      <Paper variant="outlined">\r
        <div style={{
        padding: '16px',
        borderBottom: '1px solid #e0e0e0'
      }}>\r
          <h3 style={{
          margin: '0'
        }}>用户信息</h3>\r
        </div>\r
        <div style={{
        padding: '16px'
      }}>\r
          <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '12px'
        }}>\r
            <div style={{
            width: '40px',
            height: '40px',
            background: '#4caf50',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            marginRight: '12px'
          }}>\r
              U\r
            </div>\r
            <div>\r
              <h4 style={{
              margin: '0',
              fontSize: '16px'
            }}>张三</h4>\r
              <p style={{
              margin: '0',
              fontSize: '14px',
              color: '#666'
            }}>高级开发者</p>\r
            </div>\r
          </div>\r
          <p style={{
          margin: '0',
          fontSize: '14px',
          color: '#666'
        }}>\r
            擅长前端开发和UI设计，有5年以上的工作经验。\r
          </p>\r
        </div>\r
      </Paper>\r
      \r
      <Paper elevation={8} style={{
      padding: '24px',
      textAlign: 'center'
    }}>\r
        <div style={{
        width: '60px',
        height: '60px',
        background: '#ff9800',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 16px',
        color: 'white',
        fontSize: '24px'
      }}>\r
          📊\r
        </div>\r
        <h3 style={{
        margin: '0 0 8px 0'
      }}>数据统计</h3>\r
        <p style={{
        margin: '0 0 16px 0',
        color: '#666',
        fontSize: '14px'
      }}>\r
          实时数据监控面板\r
        </p>\r
        <div style={{
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#ff9800'
      }}>\r
          1,234\r
        </div>\r
      </Paper>\r
    </div>
}`,...(k=(z=l.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var N,I,C;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    const items = ['🎨', '📱', '💻', '🚀', '⚡', '🎯'];
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px',
      padding: '24px'
    }}>\r
        {items.map((icon, index) => <Paper key={index} elevation={hoveredIndex === index ? 8 : 2} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(-1)} style={{
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}>\r
            <div style={{
          fontSize: '32px',
          marginBottom: '8px'
        }}>{icon}</div>\r
            <h4 style={{
          margin: '0 0 8px 0'
        }}>项目 {index + 1}</h4>\r
            <p style={{
          margin: '0',
          fontSize: '12px',
          color: '#666'
        }}>\r
              悬停查看效果\r
            </p>\r
          </Paper>)}\r
      </div>;
  }
}`,...(C=(I=p.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var E,R,W;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 p-6">\r
      <h3 className="text-lg font-semibold mb-4">响应式卡片布局</h3>\r
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\r
        {Array.from({
        length: 6
      }, (_, index) => <Paper key={index} elevation={3} className="overflow-hidden">\r
            <div className={\`h-32 bg-gradient-to-br \${index % 6 === 0 ? 'from-red-400 to-red-600' : index % 6 === 1 ? 'from-blue-400 to-blue-600' : index % 6 === 2 ? 'from-green-400 to-green-600' : index % 6 === 3 ? 'from-yellow-400 to-yellow-600' : index % 6 === 4 ? 'from-purple-400 to-purple-600' : 'from-pink-400 to-pink-600'}\`} />\r
            <div className="p-4">\r
              <h4 className="font-semibold mb-2">卡片标题 {index + 1}</h4>\r
              <p className="text-sm text-gray-600 mb-3">\r
                这是卡片的描述内容，展示了Paper组件在实际项目中的应用效果。\r
              </p>\r
              <button className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors">\r
                查看详情\r
              </button>\r
            </div>\r
          </Paper>)}\r
      </div>\r
    </div>
}`,...(W=(R=x.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};const M=["Default","ElevationLevels","OutlinedVariant","SquareVariant","CardExample","InteractivePaper","ResponsiveCards"];export{l as CardExample,a as Default,s as ElevationLevels,p as InteractivePaper,o as OutlinedVariant,x as ResponsiveCards,d as SquareVariant,M as __namedExportsOrder,L as default};
