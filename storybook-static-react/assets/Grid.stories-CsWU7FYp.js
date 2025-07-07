import{j as r}from"./iframe-DqwHGwZR.js";import{G as n}from"./Grid-Dwm7yOCI.js";const v={title:"Layout/Grid",component:n,parameters:{docs:{description:{component:"Grid组件是一个基于Flexbox的响应式网格系统，支持12列布局和多种对齐方式。可以作为容器（container）或项目（item）使用。"}}},argTypes:{container:{control:"boolean",description:"是否为网格容器",defaultValue:!1},item:{control:"boolean",description:"是否为网格项目",defaultValue:!1},xs:{control:"number",description:"超小屏幕下的列数 (0-12)"},sm:{control:"number",description:"小屏幕下的列数 (0-12)"},md:{control:"number",description:"中等屏幕下的列数 (0-12)"},lg:{control:"number",description:"大屏幕下的列数 (0-12)"},xl:{control:"number",description:"超大屏幕下的列数 (0-12)"},spacing:{control:{type:"number",min:0,max:12,step:1},description:"网格项目之间的间距 (0-12)"},direction:{control:"select",options:["row","column","row-reverse","column-reverse"],description:"Flex方向"},justifyContent:{control:"select",options:["flex-start","center","flex-end","space-between","space-around","space-evenly"],description:"主轴对齐方式"},alignItems:{control:"select",options:["flex-start","center","flex-end","stretch","baseline"],description:"交叉轴对齐方式"},children:{control:"text",description:"Grid 内容"}}},e=({children:k,style:w})=>r.jsx("div",{style:{width:"100%",height:"100%",minHeight:"60px",display:"flex",alignItems:"center",justifyContent:"center",...w},children:k}),i={render:()=>r.jsxs(n,{container:!0,spacing:2,children:[r.jsx(n,{item:!0,xs:12,sm:6,md:4,children:r.jsx(e,{style:{background:"#2196f3",color:"white",padding:"16px",borderRadius:"8px",textAlign:"center"},children:"xs=12 sm=6 md=4"})}),r.jsx(n,{item:!0,xs:12,sm:6,md:4,children:r.jsx(e,{style:{background:"#4caf50",color:"white",padding:"16px",borderRadius:"8px",textAlign:"center"},children:"xs=12 sm=6 md=4"})}),r.jsx(n,{item:!0,xs:12,sm:6,md:4,children:r.jsx(e,{style:{background:"#ff9800",color:"white",padding:"16px",borderRadius:"8px",textAlign:"center"},children:"xs=12 sm=6 md=4"})})]})},t={render:()=>r.jsxs("div",{style:{padding:"20px"},children:[r.jsx("h3",{style:{marginBottom:"20px"},children:"响应式布局示例"}),r.jsxs(n,{container:!0,spacing:3,children:[r.jsx(n,{item:!0,xs:12,md:8,children:r.jsxs("div",{style:{background:"#1976d2",color:"white",padding:"24px",borderRadius:"8px"},children:[r.jsx("h4",{style:{margin:"0 0 12px 0"},children:"主要内容区域"}),r.jsx("p",{style:{margin:0},children:"在移动设备上占满整行，在桌面设备上占8列"})]})}),r.jsx(n,{item:!0,xs:12,md:4,children:r.jsxs("div",{style:{background:"#388e3c",color:"white",padding:"24px",borderRadius:"8px"},children:[r.jsx("h4",{style:{margin:"0 0 12px 0"},children:"侧边栏"}),r.jsx("p",{style:{margin:0},children:"在移动设备上占满整行，在桌面设备上占4列"})]})})]})]})},d={render:()=>r.jsxs("div",{style:{padding:"20px"},children:[r.jsxs("div",{style:{marginBottom:"32px"},children:[r.jsx("h4",{style:{marginBottom:"16px"},children:"无间距 (spacing=0)"}),r.jsxs(n,{container:!0,spacing:0,children:[r.jsx(n,{item:!0,xs:4,children:r.jsx(e,{style:{background:"#e91e63",color:"white",padding:"16px",textAlign:"center"},children:"1"})}),r.jsx(n,{item:!0,xs:4,children:r.jsx(e,{style:{background:"#9c27b0",color:"white",padding:"16px",textAlign:"center"},children:"2"})}),r.jsx(n,{item:!0,xs:4,children:r.jsx(e,{style:{background:"#673ab7",color:"white",padding:"16px",textAlign:"center"},children:"3"})})]})]}),r.jsxs("div",{style:{marginBottom:"32px"},children:[r.jsx("h4",{style:{marginBottom:"16px"},children:"小间距 (spacing=2)"}),r.jsxs(n,{container:!0,spacing:2,children:[r.jsx(n,{item:!0,xs:4,children:r.jsx(e,{style:{background:"#f44336",color:"white",padding:"16px",borderRadius:"4px",textAlign:"center"},children:"1"})}),r.jsx(n,{item:!0,xs:4,children:r.jsx(e,{style:{background:"#ff9800",color:"white",padding:"16px",borderRadius:"4px",textAlign:"center"},children:"2"})}),r.jsx(n,{item:!0,xs:4,children:r.jsx(e,{style:{background:"#ffeb3b",color:"black",padding:"16px",borderRadius:"4px",textAlign:"center"},children:"3"})})]})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{marginBottom:"16px"},children:"大间距 (spacing=6)"}),r.jsxs(n,{container:!0,spacing:6,children:[r.jsx(n,{item:!0,xs:4,children:r.jsx(e,{style:{background:"#4caf50",color:"white",padding:"16px",borderRadius:"8px",textAlign:"center"},children:"1"})}),r.jsx(n,{item:!0,xs:4,children:r.jsx(e,{style:{background:"#2196f3",color:"white",padding:"16px",borderRadius:"8px",textAlign:"center"},children:"2"})}),r.jsx(n,{item:!0,xs:4,children:r.jsx(e,{style:{background:"#00bcd4",color:"white",padding:"16px",borderRadius:"8px",textAlign:"center"},children:"3"})})]})]})]})},s={render:()=>r.jsxs("div",{style:{padding:"20px"},children:[r.jsxs("div",{style:{marginBottom:"32px"},children:[r.jsx("h4",{style:{marginBottom:"16px"},children:"居中对齐"}),r.jsxs(n,{container:!0,spacing:3,justifyContent:"center",alignItems:"center",style:{minHeight:"100px",background:"#f5f5f5",borderRadius:"8px"},children:[r.jsx(n,{item:!0,xs:3,children:r.jsx(e,{style:{background:"#2196f3",color:"white",padding:"16px",borderRadius:"8px",textAlign:"center"},children:"项目1"})}),r.jsx(n,{item:!0,xs:3,children:r.jsx(e,{style:{background:"#4caf50",color:"white",padding:"16px",borderRadius:"8px",textAlign:"center"},children:"项目2"})}),r.jsx(n,{item:!0,xs:3,children:r.jsx(e,{style:{background:"#ff9800",color:"white",padding:"16px",borderRadius:"8px",textAlign:"center"},children:"项目3"})})]})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{marginBottom:"16px"},children:"两端对齐"}),r.jsxs(n,{container:!0,spacing:3,justifyContent:"space-between",style:{minHeight:"100px",background:"#f5f5f5",borderRadius:"8px"},children:[r.jsx(n,{item:!0,xs:3,children:r.jsx(e,{style:{background:"#f44336",color:"white",padding:"16px",borderRadius:"8px",textAlign:"center"},children:"项目1"})}),r.jsx(n,{item:!0,xs:3,children:r.jsx(e,{style:{background:"#e91e63",color:"white",padding:"16px",borderRadius:"8px",textAlign:"center"},children:"项目2"})})]})]})]})},o={render:()=>r.jsxs(n,{container:!0,spacing:3,children:[r.jsx(n,{item:!0,xs:8,children:r.jsxs(n,{container:!0,spacing:2,children:[r.jsx(n,{item:!0,xs:6,children:r.jsx(e,{style:{background:"#9c27b0",color:"white",padding:"16px",borderRadius:"8px",textAlign:"center"},children:"内部网格1"})}),r.jsx(n,{item:!0,xs:6,children:r.jsx(e,{style:{background:"#673ab7",color:"white",padding:"16px",borderRadius:"8px",textAlign:"center"},children:"内部网格2"})})]})}),r.jsx(n,{item:!0,xs:4,children:r.jsx(e,{style:{background:"#009688",color:"white",padding:"16px",borderRadius:"8px",textAlign:"center"},children:"外部项目"})})]})};var c,x,a;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Grid container spacing={2}>\r
      <Grid item xs={12} sm={6} md={4}>\r
        <Box style={{
        background: '#2196f3',
        color: 'white',
        padding: '16px',
        borderRadius: '8px',
        textAlign: 'center'
      }}>\r
          xs=12 sm=6 md=4\r
        </Box>\r
      </Grid>\r
      <Grid item xs={12} sm={6} md={4}>\r
        <Box style={{
        background: '#4caf50',
        color: 'white',
        padding: '16px',
        borderRadius: '8px',
        textAlign: 'center'
      }}>\r
          xs=12 sm=6 md=4\r
        </Box>\r
      </Grid>\r
      <Grid item xs={12} sm={6} md={4}>\r
        <Box style={{
        background: '#ff9800',
        color: 'white',
        padding: '16px',
        borderRadius: '8px',
        textAlign: 'center'
      }}>\r
          xs=12 sm=6 md=4\r
        </Box>\r
      </Grid>\r
    </Grid>
}`,...(a=(x=i.parameters)==null?void 0:x.docs)==null?void 0:a.source}}};var l,p,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px'
  }}>\r
      <h3 style={{
      marginBottom: '20px'
    }}>响应式布局示例</h3>\r
      <Grid container spacing={3}>\r
        <Grid item xs={12} md={8}>\r
          <div style={{
          background: '#1976d2',
          color: 'white',
          padding: '24px',
          borderRadius: '8px'
        }}>\r
            <h4 style={{
            margin: '0 0 12px 0'
          }}>主要内容区域</h4>\r
            <p style={{
            margin: 0
          }}>在移动设备上占满整行，在桌面设备上占8列</p>\r
          </div>\r
        </Grid>\r
        <Grid item xs={12} md={4}>\r
          <div style={{
          background: '#388e3c',
          color: 'white',
          padding: '24px',
          borderRadius: '8px'
        }}>\r
            <h4 style={{
            margin: '0 0 12px 0'
          }}>侧边栏</h4>\r
            <p style={{
            margin: 0
          }}>在移动设备上占满整行，在桌面设备上占4列</p>\r
          </div>\r
        </Grid>\r
      </Grid>\r
    </div>
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,u,h;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px'
  }}>\r
      <div style={{
      marginBottom: '32px'
    }}>\r
        <h4 style={{
        marginBottom: '16px'
      }}>无间距 (spacing=0)</h4>\r
        <Grid container spacing={0}>\r
          <Grid item xs={4}>\r
            <Box style={{
            background: '#e91e63',
            color: 'white',
            padding: '16px',
            textAlign: 'center'
          }}>1</Box>\r
          </Grid>\r
          <Grid item xs={4}>\r
            <Box style={{
            background: '#9c27b0',
            color: 'white',
            padding: '16px',
            textAlign: 'center'
          }}>2</Box>\r
          </Grid>\r
          <Grid item xs={4}>\r
            <Box style={{
            background: '#673ab7',
            color: 'white',
            padding: '16px',
            textAlign: 'center'
          }}>3</Box>\r
          </Grid>\r
        </Grid>\r
      </div>\r
\r
      <div style={{
      marginBottom: '32px'
    }}>\r
        <h4 style={{
        marginBottom: '16px'
      }}>小间距 (spacing=2)</h4>\r
        <Grid container spacing={2}>\r
          <Grid item xs={4}>\r
            <Box style={{
            background: '#f44336',
            color: 'white',
            padding: '16px',
            borderRadius: '4px',
            textAlign: 'center'
          }}>1</Box>\r
          </Grid>\r
          <Grid item xs={4}>\r
            <Box style={{
            background: '#ff9800',
            color: 'white',
            padding: '16px',
            borderRadius: '4px',
            textAlign: 'center'
          }}>2</Box>\r
          </Grid>\r
          <Grid item xs={4}>\r
            <Box style={{
            background: '#ffeb3b',
            color: 'black',
            padding: '16px',
            borderRadius: '4px',
            textAlign: 'center'
          }}>3</Box>\r
          </Grid>\r
        </Grid>\r
      </div>\r
\r
      <div>\r
        <h4 style={{
        marginBottom: '16px'
      }}>大间距 (spacing=6)</h4>\r
        <Grid container spacing={6}>\r
          <Grid item xs={4}>\r
            <Box style={{
            background: '#4caf50',
            color: 'white',
            padding: '16px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>1</Box>\r
          </Grid>\r
          <Grid item xs={4}>\r
            <Box style={{
            background: '#2196f3',
            color: 'white',
            padding: '16px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>2</Box>\r
          </Grid>\r
          <Grid item xs={4}>\r
            <Box style={{
            background: '#00bcd4',
            color: 'white',
            padding: '16px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>3</Box>\r
          </Grid>\r
        </Grid>\r
      </div>\r
    </div>
}`,...(h=(u=d.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,y,j;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px'
  }}>\r
        <div style={{
      marginBottom: '32px'
    }}>\r
          <h4 style={{
        marginBottom: '16px'
      }}>居中对齐</h4>\r
          <Grid container spacing={3} justifyContent="center" alignItems="center" style={{
        minHeight: '100px',
        background: '#f5f5f5',
        borderRadius: '8px'
      }}>\r
            <Grid item xs={3}>\r
              <Box style={{
            background: '#2196f3',
            color: 'white',
            padding: '16px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>项目1</Box>\r
            </Grid>\r
            <Grid item xs={3}>\r
              <Box style={{
            background: '#4caf50',
            color: 'white',
            padding: '16px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>项目2</Box>\r
            </Grid>\r
            <Grid item xs={3}>\r
              <Box style={{
            background: '#ff9800',
            color: 'white',
            padding: '16px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>项目3</Box>\r
            </Grid>\r
          </Grid>\r
        </div>\r
        <div>\r
          <h4 style={{
        marginBottom: '16px'
      }}>两端对齐</h4>\r
          <Grid container spacing={3} justifyContent="space-between" style={{
        minHeight: '100px',
        background: '#f5f5f5',
        borderRadius: '8px'
      }}>\r
            <Grid item xs={3}>\r
                <Box style={{
            background: '#f44336',
            color: 'white',
            padding: '16px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>项目1</Box>\r
            </Grid>\r
            <Grid item xs={3}>\r
                <Box style={{
            background: '#e91e63',
            color: 'white',
            padding: '16px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>项目2</Box>\r
            </Grid>\r
          </Grid>\r
        </div>\r
      </div>
}`,...(j=(y=s.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var G,f,B;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Grid container spacing={3}>\r
            <Grid item xs={8}>\r
                <Grid container spacing={2}>\r
                    <Grid item xs={6}>\r
                        <Box style={{
            background: '#9c27b0',
            color: 'white',
            padding: '16px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>\r
                            内部网格1\r
                        </Box>\r
                    </Grid>\r
                    <Grid item xs={6}>\r
                        <Box style={{
            background: '#673ab7',
            color: 'white',
            padding: '16px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>\r
                            内部网格2\r
                        </Box>\r
                    </Grid>\r
                </Grid>\r
            </Grid>\r
            <Grid item xs={4}>\r
                <Box style={{
        background: '#009688',
        color: 'white',
        padding: '16px',
        borderRadius: '8px',
        textAlign: 'center'
      }}>\r
                    外部项目\r
                </Box>\r
            </Grid>\r
        </Grid>
}`,...(B=(f=o.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};const S=["BasicGrid","ResponsiveLayout","DifferentSpacing","AlignmentOptions","NestedGrid"];export{s as AlignmentOptions,i as BasicGrid,d as DifferentSpacing,o as NestedGrid,t as ResponsiveLayout,S as __namedExportsOrder,v as default};
