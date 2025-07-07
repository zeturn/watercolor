import{r as v,j as e}from"./iframe-DqwHGwZR.js";const l=({value:d="",onChange:m,type:te="text",label:b="",placeholder:ae="",helperText:T="",error:s="",required:w=!1,disabled:_=!1,readonly:re=!1,autoFocus:de=!1,fullWidth:se=!1,multiline:a=!1,rows:ie=4,maxRows:Se,minRows:De,variant:oe="filled",size:F="md",color:Ae="primary",startAdornment:j=null,endAdornment:g=null,maxLength:ce,minLength:pe,pattern:ne,autoComplete:ue="off",name:V="",id:xe="",className:q="",style:fe={},onFocus:h,onBlur:y,onKeyDown:me,onKeyUp:he,onKeyPress:ye,...ve})=>{const[S,D]=v.useState(!1),[be,A]=v.useState(!!d);v.useEffect(()=>{A(!!d)},[d]);const Te=t=>{const qe=t.target.value;A(!!qe),m==null||m(t)},we=t=>{D(!0),h==null||h(t)},_e=t=>{D(!1),y==null||y(t)},Fe=()=>{const t=["wc-textfield"];return se&&t.push("wc-textfield--full-width"),a&&t.push("wc-textfield--multiline"),q&&t.push(q),t.filter(Boolean).join(" ")},je=()=>{const t=["wc-textfield__container"];return t.push(`wc-textfield__container--${oe}`),t.push(`wc-textfield__container--${F}`),s&&t.push("wc-textfield__container--error"),_&&t.push("wc-textfield__container--disabled"),S&&t.push("wc-textfield__container--focused"),be&&t.push("wc-textfield__container--has-value"),t.filter(Boolean).join(" ")},ge=()=>{const t=["wc-textfield__label"];return t.push(`wc-textfield__label--${F}`),s&&t.push("wc-textfield__label--error"),S&&t.push("wc-textfield__label--focused"),t.filter(Boolean).join(" ")},Ve=a?"textarea":"input",z=xe||V||`textfield-${Math.random().toString(36).substr(2,9)}`,r=!!s;return e.jsxs("div",{className:Fe(),style:fe,children:[b&&e.jsxs("label",{htmlFor:z,className:ge(),children:[b,w&&e.jsx("span",{className:"wc-textfield__required",children:"*"})]}),e.jsxs("div",{className:je(),children:[j&&e.jsx("div",{className:"wc-textfield__adornment wc-textfield__adornment--start",children:j}),e.jsx(Ve,{className:a?"wc-textfield__input wc-textfield__textarea":"wc-textfield__input",id:z,type:a?void 0:te,value:d,onChange:Te,onFocus:we,onBlur:_e,onKeyDown:me,onKeyUp:he,onKeyPress:ye,placeholder:ae,disabled:_,readOnly:re,required:w,autoFocus:de,maxLength:ce,minLength:pe,pattern:ne,rows:a?ie:void 0,autoComplete:ue,name:V,...ve}),(g||r)&&e.jsxs("div",{className:"wc-textfield__adornment wc-textfield__adornment--end",children:[r&&e.jsx("svg",{className:"wc-textfield__error-icon",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),g]})]}),(T||r)&&e.jsx("div",{className:`wc-textfield__helper-text ${r?"wc-textfield__helper-text--error":""}`,children:r?s:T})]})};l.displayName="TextField";l.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{value:{defaultValue:{value:"''",computed:!1},required:!1},type:{defaultValue:{value:"'text'",computed:!1},required:!1},label:{defaultValue:{value:"''",computed:!1},required:!1},placeholder:{defaultValue:{value:"''",computed:!1},required:!1},helperText:{defaultValue:{value:"''",computed:!1},required:!1},error:{defaultValue:{value:"''",computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readonly:{defaultValue:{value:"false",computed:!1},required:!1},autoFocus:{defaultValue:{value:"false",computed:!1},required:!1},fullWidth:{defaultValue:{value:"false",computed:!1},required:!1},multiline:{defaultValue:{value:"false",computed:!1},required:!1},rows:{defaultValue:{value:"4",computed:!1},required:!1},variant:{defaultValue:{value:"'filled'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1},startAdornment:{defaultValue:{value:"null",computed:!1},required:!1},endAdornment:{defaultValue:{value:"null",computed:!1},required:!1},autoComplete:{defaultValue:{value:"'off'",computed:!1},required:!1},name:{defaultValue:{value:"''",computed:!1},required:!1},id:{defaultValue:{value:"''",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1},style:{defaultValue:{value:"{}",computed:!1},required:!1}}};const We={title:"Components/TextField (React)",component:l,parameters:{docs:{description:{component:"水彩设计系统的文本字段组件，完全兼容Material-UI的TextField API。支持多种变体、尺寸和验证状态。"}}},argTypes:{value:{description:"输入框的值",control:{type:"text"}},label:{description:"标签文本",control:{type:"text"}},type:{description:"输入框类型",control:{type:"select"},options:["text","password","email","number","tel","url"]},placeholder:{description:"占位符文本",control:{type:"text"}},disabled:{description:"是否禁用",control:{type:"boolean"}},readonly:{description:"是否只读",control:{type:"boolean"}},required:{description:"是否必填",control:{type:"boolean"}},error:{description:"错误信息",control:{type:"text"}},helperText:{description:"帮助文本",control:{type:"text"}},size:{description:"尺寸",control:{type:"select"},options:["sm","md","lg"]},variant:{description:"变体",control:{type:"select"},options:["outlined","filled","standard"]},fullWidth:{description:"是否全宽",control:{type:"boolean"}},multiline:{description:"是否多行",control:{type:"boolean"}},rows:{description:"多行时的行数",control:{type:"number"}},startAdornment:{description:"前置装饰",control:{type:"text"}},endAdornment:{description:"后置装饰",control:{type:"text"}}},tags:["autodocs"]},i={args:{label:"用户名",placeholder:"请输入用户名"}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"300px"},children:[e.jsx(l,{label:"Outlined (默认)",variant:"outlined",placeholder:"Outlined variant",helperText:"这是outlined变体"}),e.jsx(l,{label:"Filled",variant:"filled",placeholder:"Filled variant",helperText:"这是filled变体"}),e.jsx(l,{label:"Standard",variant:"standard",placeholder:"Standard variant",helperText:"这是standard变体"})]}),parameters:{docs:{description:{story:"展示TextField的三种变体：outlined（默认）、filled和standard。"}}}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(l,{label:"小尺寸",size:"sm",placeholder:"小尺寸输入框"}),e.jsx(l,{label:"中等尺寸",size:"md",placeholder:"中等尺寸输入框"}),e.jsx(l,{label:"大尺寸",size:"lg",placeholder:"大尺寸输入框"})]}),parameters:{docs:{description:{story:"展示TextField的三种尺寸：sm、md（默认）和lg。"}}}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(l,{label:"正常状态",placeholder:"正常状态",helperText:"这是帮助文本"}),e.jsx(l,{label:"必填字段",placeholder:"必填字段",required:!0,helperText:"这是必填字段"}),e.jsx(l,{label:"错误状态",placeholder:"错误状态",error:"这是错误信息"}),e.jsx(l,{label:"禁用状态",placeholder:"禁用状态",disabled:!0,value:"禁用的值"}),e.jsx(l,{label:"只读状态",placeholder:"只读状态",readonly:!0,value:"只读的值",helperText:"这是只读字段"})]}),parameters:{docs:{description:{story:"展示TextField的各种状态：正常、必填、错误、禁用和只读。"}}}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(l,{label:"文本",type:"text",placeholder:"文本输入"}),e.jsx(l,{label:"密码",type:"password",placeholder:"密码输入"}),e.jsx(l,{label:"邮箱",type:"email",placeholder:"邮箱输入"}),e.jsx(l,{label:"数字",type:"number",placeholder:"数字输入"}),e.jsx(l,{label:"电话",type:"tel",placeholder:"电话输入"}),e.jsx(l,{label:"网址",type:"url",placeholder:"网址输入"})]}),parameters:{docs:{description:{story:"展示TextField支持的各种输入类型。"}}}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"400px"},children:[e.jsx(l,{label:"多行文本",multiline:!0,rows:4,placeholder:"请输入多行文本...",helperText:"这是多行文本输入框"}),e.jsx(l,{label:"自动高度多行文本",multiline:!0,placeholder:"自动调整高度的多行文本...",variant:"filled"})]}),parameters:{docs:{description:{story:"展示多行文本输入功能，支持指定行数或自动调整高度。"}}}},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(l,{label:"价格",startAdornment:"¥",placeholder:"0.00",type:"number"}),e.jsx(l,{label:"重量",endAdornment:"kg",placeholder:"0",type:"number"}),e.jsx(l,{label:"网站",startAdornment:"https://",endAdornment:".com",placeholder:"example"})]}),parameters:{docs:{description:{story:"展示带有前置和后置装饰的文本框，常用于单位、前缀等场景。"}}}},f={render:()=>e.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:e.jsx(l,{label:"全宽文本框",placeholder:"这是一个全宽的文本框",fullWidth:!0,helperText:"fullWidth属性使文本框占满容器宽度"})}),parameters:{docs:{description:{story:"展示全宽文本框，会占满父容器的宽度。"}}}};var W,N,I;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: '用户名',
    placeholder: '请输入用户名'
  }
}`,...(I=(N=i.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var B,C,O;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '300px'
  }}>\r
      <TextField label="Outlined (默认)" variant="outlined" placeholder="Outlined variant" helperText="这是outlined变体" />\r
      <TextField label="Filled" variant="filled" placeholder="Filled variant" helperText="这是filled变体" />\r
      <TextField label="Standard" variant="standard" placeholder="Standard variant" helperText="这是standard变体" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: '展示TextField的三种变体：outlined（默认）、filled和standard。'
      }
    }
  }
}`,...(O=(C=o.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var R,E,M;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>\r
      <TextField label="小尺寸" size="sm" placeholder="小尺寸输入框" />\r
      <TextField label="中等尺寸" size="md" placeholder="中等尺寸输入框" />\r
      <TextField label="大尺寸" size="lg" placeholder="大尺寸输入框" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: '展示TextField的三种尺寸：sm、md（默认）和lg。'
      }
    }
  }
}`,...(M=(E=c.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var $,k,H;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>\r
      <TextField label="正常状态" placeholder="正常状态" helperText="这是帮助文本" />\r
      <TextField label="必填字段" placeholder="必填字段" required helperText="这是必填字段" />\r
      <TextField label="错误状态" placeholder="错误状态" error="这是错误信息" />\r
      <TextField label="禁用状态" placeholder="禁用状态" disabled value="禁用的值" />\r
      <TextField label="只读状态" placeholder="只读状态" readonly value="只读的值" helperText="这是只读字段" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: '展示TextField的各种状态：正常、必填、错误、禁用和只读。'
      }
    }
  }
}`,...(H=(k=p.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var L,P,U;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>\r
      <TextField label="文本" type="text" placeholder="文本输入" />\r
      <TextField label="密码" type="password" placeholder="密码输入" />\r
      <TextField label="邮箱" type="email" placeholder="邮箱输入" />\r
      <TextField label="数字" type="number" placeholder="数字输入" />\r
      <TextField label="电话" type="tel" placeholder="电话输入" />\r
      <TextField label="网址" type="url" placeholder="网址输入" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: '展示TextField支持的各种输入类型。'
      }
    }
  }
}`,...(U=(P=n.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var G,J,K;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '400px'
  }}>\r
      <TextField label="多行文本" multiline rows={4} placeholder="请输入多行文本..." helperText="这是多行文本输入框" />\r
      <TextField label="自动高度多行文本" multiline placeholder="自动调整高度的多行文本..." variant="filled" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: '展示多行文本输入功能，支持指定行数或自动调整高度。'
      }
    }
  }
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>\r
      <TextField label="价格" startAdornment="¥" placeholder="0.00" type="number" />\r
      <TextField label="重量" endAdornment="kg" placeholder="0" type="number" />\r
      <TextField label="网站" startAdornment="https://" endAdornment=".com" placeholder="example" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: '展示带有前置和后置装饰的文本框，常用于单位、前缀等场景。'
      }
    }
  }
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,le;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '100%',
    maxWidth: '600px'
  }}>\r
      <TextField label="全宽文本框" placeholder="这是一个全宽的文本框" fullWidth helperText="fullWidth属性使文本框占满容器宽度" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: '展示全宽文本框，会占满父容器的宽度。'
      }
    }
  }
}`,...(le=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:le.source}}};const Ne=["Default","Variants","Sizes","States","InputTypes","Multiline","WithAdornments","FullWidth"];export{i as Default,f as FullWidth,n as InputTypes,u as Multiline,c as Sizes,p as States,o as Variants,x as WithAdornments,Ne as __namedExportsOrder,We as default};
