import{j as r}from"./iframe-DqwHGwZR.js";import{C as e}from"./Container-BDnKLdfa.js";const j={title:"Layout/Container (React)",component:e,parameters:{docs:{description:{component:"Container组件是一个响应式容器，提供了水平居中和最大宽度限制的功能。支持不同的断点和流式布局。"}}},argTypes:{maxWidth:{control:"select",options:["xs","sm","md","lg","xl","2xl"],description:"最大宽度断点",defaultValue:"lg"},fluid:{control:"boolean",description:"是否为流式布局（占满整个宽度）",defaultValue:!1},fixed:{control:"boolean",description:"是否为固定布局",defaultValue:!1}}},n={args:{maxWidth:"lg"},render:a=>r.jsx("div",{style:{background:"#f0f0f0",minHeight:"200px"},children:r.jsx(e,{...a,children:r.jsxs("div",{style:{background:"#2196f3",color:"white",padding:"24px",borderRadius:"8px",textAlign:"center"},children:[r.jsx("h2",{style:{margin:"0 0 16px 0"},children:"默认Container (lg)"}),r.jsx("p",{style:{margin:0},children:"这是一个居中的容器，在大屏幕上有最大宽度限制"})]})})})},i={render:()=>r.jsxs("div",{style:{background:"#f5f5f5",padding:"20px"},children:[r.jsxs("div",{style:{marginBottom:"32px"},children:[r.jsx("h3",{style:{marginBottom:"16px"},children:"Extra Small (xs)"}),r.jsx(e,{maxWidth:"xs",children:r.jsx("div",{style:{background:"#ff9800",color:"white",padding:"16px",borderRadius:"8px",textAlign:"center"},children:"max-width: xs"})})]}),r.jsxs("div",{style:{marginBottom:"32px"},children:[r.jsx("h3",{style:{marginBottom:"16px"},children:"Small (sm)"}),r.jsx(e,{maxWidth:"sm",children:r.jsx("div",{style:{background:"#4caf50",color:"white",padding:"16px",borderRadius:"8px",textAlign:"center"},children:"max-width: sm"})})]}),r.jsxs("div",{style:{marginBottom:"32px"},children:[r.jsx("h3",{style:{marginBottom:"16px"},children:"Medium (md)"}),r.jsx(e,{maxWidth:"md",children:r.jsx("div",{style:{background:"#2196f3",color:"white",padding:"16px",borderRadius:"8px",textAlign:"center"},children:"max-width: md"})})]}),r.jsxs("div",{style:{marginBottom:"32px"},children:[r.jsx("h3",{style:{marginBottom:"16px"},children:"Large (lg)"}),r.jsx(e,{maxWidth:"lg",children:r.jsx("div",{style:{background:"#9c27b0",color:"white",padding:"16px",borderRadius:"8px",textAlign:"center"},children:"max-width: lg"})})]}),r.jsxs("div",{children:[r.jsx("h3",{style:{marginBottom:"16px"},children:"Extra Large (xl)"}),r.jsx(e,{maxWidth:"xl",children:r.jsx("div",{style:{background:"#e91e63",color:"white",padding:"16px",borderRadius:"8px",textAlign:"center"},children:"max-width: xl"})})]})]})},d={args:{fluid:!0},render:a=>r.jsx("div",{style:{background:"#f0f0f0",minHeight:"150px"},children:r.jsx(e,{...a,children:r.jsxs("div",{style:{background:"#ff5722",color:"white",padding:"24px",borderRadius:"8px",textAlign:"center"},children:[r.jsx("h2",{style:{margin:"0 0 16px 0"},children:"流式Container"}),r.jsx("p",{style:{margin:0},children:"这个容器会占满整个可用宽度，没有最大宽度限制"})]})})})},t={render:()=>r.jsx("div",{style:{background:"#e3f2fd",padding:"20px"},children:r.jsx(e,{maxWidth:"xl",children:r.jsxs("div",{style:{background:"#1976d2",color:"white",padding:"20px",borderRadius:"8px",marginBottom:"20px"},children:[r.jsx("h2",{style:{margin:"0 0 16px 0"},children:"外层Container (xl)"}),r.jsx(e,{maxWidth:"md",children:r.jsxs("div",{style:{background:"#0d47a1",padding:"16px",borderRadius:"8px"},children:[r.jsx("h3",{style:{margin:"0 0 12px 0"},children:"内层Container (md)"}),r.jsx("p",{style:{margin:0},children:"嵌套的容器可以创建更复杂的布局结构"})]})})]})})})};var o,s,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    maxWidth: 'lg'
  },
  render: args => <div style={{
    background: '#f0f0f0',
    minHeight: '200px'
  }}>\r
      <Container {...args}>\r
        <div style={{
        background: '#2196f3',
        color: 'white',
        padding: '24px',
        borderRadius: '8px',
        textAlign: 'center'
      }}>\r
          <h2 style={{
          margin: '0 0 16px 0'
        }}>默认Container (lg)</h2>\r
          <p style={{
          margin: 0
        }}>这是一个居中的容器，在大屏幕上有最大宽度限制</p>\r
        </div>\r
      </Container>\r
    </div>
}`,...(l=(s=n.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var x,c,m;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    background: '#f5f5f5',
    padding: '20px'
  }}>\r
      <div style={{
      marginBottom: '32px'
    }}>\r
        <h3 style={{
        marginBottom: '16px'
      }}>Extra Small (xs)</h3>\r
        <Container maxWidth="xs">\r
          <div style={{
          background: '#ff9800',
          color: 'white',
          padding: '16px',
          borderRadius: '8px',
          textAlign: 'center'
        }}>\r
            max-width: xs\r
          </div>\r
        </Container>\r
      </div>\r
      \r
      <div style={{
      marginBottom: '32px'
    }}>\r
        <h3 style={{
        marginBottom: '16px'
      }}>Small (sm)</h3>\r
        <Container maxWidth="sm">\r
          <div style={{
          background: '#4caf50',
          color: 'white',
          padding: '16px',
          borderRadius: '8px',
          textAlign: 'center'
        }}>\r
            max-width: sm\r
          </div>\r
        </Container>\r
      </div>\r
      \r
      <div style={{
      marginBottom: '32px'
    }}>\r
        <h3 style={{
        marginBottom: '16px'
      }}>Medium (md)</h3>\r
        <Container maxWidth="md">\r
          <div style={{
          background: '#2196f3',
          color: 'white',
          padding: '16px',
          borderRadius: '8px',
          textAlign: 'center'
        }}>\r
            max-width: md\r
          </div>\r
        </Container>\r
      </div>\r
      \r
      <div style={{
      marginBottom: '32px'
    }}>\r
        <h3 style={{
        marginBottom: '16px'
      }}>Large (lg)</h3>\r
        <Container maxWidth="lg">\r
          <div style={{
          background: '#9c27b0',
          color: 'white',
          padding: '16px',
          borderRadius: '8px',
          textAlign: 'center'
        }}>\r
            max-width: lg\r
          </div>\r
        </Container>\r
      </div>\r
      \r
      <div>\r
        <h3 style={{
        marginBottom: '16px'
      }}>Extra Large (xl)</h3>\r
        <Container maxWidth="xl">\r
          <div style={{
          background: '#e91e63',
          color: 'white',
          padding: '16px',
          borderRadius: '8px',
          textAlign: 'center'
        }}>\r
            max-width: xl\r
          </div>\r
        </Container>\r
      </div>\r
    </div>
}`,...(m=(c=i.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,g,h;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    fluid: true
  },
  render: args => <div style={{
    background: '#f0f0f0',
    minHeight: '150px'
  }}>\r
      <Container {...args}>\r
        <div style={{
        background: '#ff5722',
        color: 'white',
        padding: '24px',
        borderRadius: '8px',
        textAlign: 'center'
      }}>\r
          <h2 style={{
          margin: '0 0 16px 0'
        }}>流式Container</h2>\r
          <p style={{
          margin: 0
        }}>这个容器会占满整个可用宽度，没有最大宽度限制</p>\r
        </div>\r
      </Container>\r
    </div>
}`,...(h=(g=d.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var u,y,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    background: '#e3f2fd',
    padding: '20px'
  }}>\r
      <Container maxWidth="xl">\r
        <div style={{
        background: '#1976d2',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>\r
          <h2 style={{
          margin: '0 0 16px 0'
        }}>外层Container (xl)</h2>\r
          <Container maxWidth="md">\r
            <div style={{
            background: '#0d47a1',
            padding: '16px',
            borderRadius: '8px'
          }}>\r
              <h3 style={{
              margin: '0 0 12px 0'
            }}>内层Container (md)</h3>\r
              <p style={{
              margin: 0
            }}>嵌套的容器可以创建更复杂的布局结构</p>\r
            </div>\r
          </Container>\r
        </div>\r
      </Container>\r
    </div>
}`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const C=["Default","DifferentSizes","FluidContainer","NestedContainers"];export{n as Default,i as DifferentSizes,d as FluidContainer,t as NestedContainers,C as __namedExportsOrder,j as default};
