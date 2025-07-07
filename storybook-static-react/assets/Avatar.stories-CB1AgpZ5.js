import{r as L,j as r}from"./iframe-DqwHGwZR.js";/* empty css              */function k({size:e,variant:a,color:t,src:l,imgError:s}){const i=["wc-avatar"];return typeof e=="string"&&i.push(`wc-avatar--${e}`),i.push(`wc-avatar--${a}`),(!l||s)&&i.push(`wc-avatar--${t}`),i}function B(e){const a={};return typeof e=="number"&&(a.width=`${e}px`,a.height=`${e}px`,a.fontSize=`${e*.4}px`),a}function J(e){if(!e)return"";const a=e.trim(),t=a.charAt(0);if(/[\u4e00-\u9fa5]/.test(t))return t;const s=a.split(/\s+/).filter(Boolean);return s.length===1?s[0].charAt(0).toUpperCase():(s[0].charAt(0)+s[1].charAt(0)).toUpperCase()}function P(e){e(!0)}function W(e){e(!1)}const n=({src:e="",alt:a="",size:t="md",variant:l="circular",color:s="default",children:i="",className:U="",...N})=>{const[u,f]=L.useState(!1),$=k({size:t,variant:l,color:s,src:e,imgError:u}).concat(U).filter(Boolean).join(" "),_=B(t),b=J(i),D=()=>P(f),R=()=>W(f);return r.jsx("div",{className:$,style:_,...N,children:e&&!u?r.jsx("img",{src:e,alt:a,onError:D,onLoad:R}):i?r.jsx("span",{className:"wc-avatar-text",children:b}):null})};n.displayName="Avatar";n.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{defaultValue:{value:"''",computed:!1},required:!1},alt:{defaultValue:{value:"''",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},variant:{defaultValue:{value:"'circular'",computed:!1},required:!1},color:{defaultValue:{value:"'default'",computed:!1},required:!1},children:{defaultValue:{value:"''",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const G={title:"Components/Avatar (React)",component:n,parameters:{docs:{description:{component:"水彩设计系统的头像组件，支持图片、文字和自定义内容。提供多种尺寸、形状和颜色主题。"}}},tags:["autodocs"],argTypes:{src:{description:"头像图片链接",control:{type:"text"}},alt:{description:"图片替代文本",control:{type:"text"}},size:{description:"头像尺寸",control:{type:"select"},options:["xs","sm","md","lg","xl"]},variant:{description:"头像形状",control:{type:"select"},options:["circular","rounded","square"]},color:{description:"背景颜色主题（当没有图片时）",control:{type:"select"},options:["default","primary","secondary","success","warning","error"]},children:{description:"显示的文字内容（会自动生成首字母）",control:{type:"text"}},className:{description:"额外的 CSS 类名",control:{type:"text"}},style:{description:"内联样式对象",control:{type:"object"}}}},T=e=>r.jsx(n,{...e}),o={render:T,args:{children:"John Doe",size:"md",variant:"circular",color:"primary"}},c={render:T,args:{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",alt:"用户头像",size:"md"}},d={render:()=>r.jsx("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:["xs","sm","md","lg","xl"].map(e=>r.jsxs("div",{style:{textAlign:"center"},children:[r.jsx(n,{children:e.toUpperCase(),size:e,color:"primary"}),r.jsx("p",{style:{fontSize:12,marginTop:8},children:e.toUpperCase()})]},e))})},p={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[r.jsx(n,{children:"圆形",variant:"circular",color:"primary",size:"lg"}),r.jsxs("div",{children:[r.jsx("h4",{style:{margin:0},children:"Circular（圆形）"}),r.jsx("p",{style:{margin:0,fontSize:14,color:"#666"},children:"最常见的头像形状"})]})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[r.jsx(n,{children:"圆角",variant:"rounded",color:"success",size:"lg"}),r.jsxs("div",{children:[r.jsx("h4",{style:{margin:0},children:"Rounded（圆角矩形）"}),r.jsx("p",{style:{margin:0,fontSize:14,color:"#666"},children:"现代化的圆角设计"})]})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[r.jsx(n,{children:"方形",variant:"square",color:"warning",size:"lg"}),r.jsxs("div",{children:[r.jsx("h4",{style:{margin:0},children:"Square（方形）"}),r.jsx("p",{style:{margin:0,fontSize:14,color:"#666"},children:"简洁的方形设计"})]})]})]})},m={render:()=>r.jsx("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:["default","primary","secondary","success","warning","error"].map(e=>r.jsx(n,{children:e.charAt(0).toUpperCase(),color:e,size:"md"},e))})};var g,y,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: 'John Doe',
    size: 'md',
    variant: 'circular',
    color: 'primary'
  }
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var v,x,j;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: Template,
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    alt: '用户头像',
    size: 'md'
  }
}`,...(j=(x=c.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var S,z,A;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  }}>\r
      {['xs', 'sm', 'md', 'lg', 'xl'].map(s => <div key={s} style={{
      textAlign: 'center'
    }}>\r
          <Avatar children={s.toUpperCase()} size={s} color='primary' />\r
          <p style={{
        fontSize: 12,
        marginTop: 8
      }}>{s.toUpperCase()}</p>\r
        </div>)}\r
    </div>
}`,...(A=(z=d.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var C,I,w;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }}>\r
        <Avatar children='圆形' variant='circular' color='primary' size='lg' />\r
        <div>\r
          <h4 style={{
          margin: 0
        }}>Circular（圆形）</h4>\r
          <p style={{
          margin: 0,
          fontSize: 14,
          color: '#666'
        }}>最常见的头像形状</p>\r
        </div>\r
      </div>\r
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }}>\r
        <Avatar children='圆角' variant='rounded' color='success' size='lg' />\r
        <div>\r
          <h4 style={{
          margin: 0
        }}>Rounded（圆角矩形）</h4>\r
          <p style={{
          margin: 0,
          fontSize: 14,
          color: '#666'
        }}>现代化的圆角设计</p>\r
        </div>\r
      </div>\r
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }}>\r
        <Avatar children='方形' variant='square' color='warning' size='lg' />\r
        <div>\r
          <h4 style={{
          margin: 0
        }}>Square（方形）</h4>\r
          <p style={{
          margin: 0,
          fontSize: 14,
          color: '#666'
        }}>简洁的方形设计</p>\r
        </div>\r
      </div>\r
    </div>
}`,...(w=(I=p.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var q,V,E;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  }}>\r
      {['default', 'primary', 'secondary', 'success', 'warning', 'error'].map(c => <Avatar key={c} children={c.charAt(0).toUpperCase()} color={c} size='md' />)}\r
    </div>
}`,...(E=(V=m.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};const H=["Primary","WithImage","Sizes","Variants","Colors"];export{m as Colors,o as Primary,d as Sizes,p as Variants,c as WithImage,H as __namedExportsOrder,G as default};
