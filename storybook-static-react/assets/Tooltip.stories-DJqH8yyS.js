import{j as r,r as g}from"./iframe-DqwHGwZR.js";import{T as o}from"./Tooltip-CbjcsLoZ.js";const O={title:"Components/Tooltip (React)",component:o,parameters:{layout:"centered",docs:{description:{component:"Watercolor 提示组件，在鼠标悬停时显示有用的信息。"}}},tags:["autodocs"],argTypes:{text:{control:"text",description:"提示文本内容"},placement:{control:{type:"select"},options:["top","bottom","left","right"],description:"提示框位置"},children:{description:"触发元素"}}},p={args:{text:"这是提示文本",placement:"top"},render:e=>r.jsx("div",{style:{padding:"48px"},children:r.jsx(o,{...e,children:r.jsx("button",{style:{padding:"8px 16px",backgroundColor:"var(--wc-primary-600)",color:"var(--wc-neutral-0)",border:"none",borderRadius:"4px",cursor:"pointer",transition:"background-color 0.2s"},onMouseEnter:a=>a.target.style.backgroundColor="var(--wc-primary-700)",onMouseLeave:a=>a.target.style.backgroundColor="var(--wc-primary-600)",children:"悬停查看提示"})})})},s=()=>r.jsx("div",{style:{padding:"80px",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"32px",alignItems:"center"},children:[r.jsx("div",{}),r.jsx(o,{text:"顶部提示",placement:"top",children:r.jsx("button",{style:{padding:"8px 16px",backgroundColor:"var(--wc-neutral-600)",color:"var(--wc-neutral-0)",border:"none",borderRadius:"4px",cursor:"pointer",transition:"background-color 0.2s"},onMouseEnter:e=>e.target.style.backgroundColor="var(--wc-neutral-700)",onMouseLeave:e=>e.target.style.backgroundColor="var(--wc-neutral-600)",children:"顶部"})}),r.jsx("div",{}),r.jsx(o,{text:"左侧提示",placement:"left",children:r.jsx("button",{style:{padding:"8px 16px",backgroundColor:"var(--wc-neutral-600)",color:"var(--wc-neutral-0)",border:"none",borderRadius:"4px",cursor:"pointer",transition:"background-color 0.2s"},onMouseEnter:e=>e.target.style.backgroundColor="var(--wc-neutral-700)",onMouseLeave:e=>e.target.style.backgroundColor="var(--wc-neutral-600)",children:"左侧"})}),r.jsx("div",{style:{textAlign:"center",color:"var(--wc-neutral-500)"},children:"悬停按钮查看不同位置的提示"}),r.jsx(o,{text:"右侧提示",placement:"right",children:r.jsx("button",{style:{padding:"8px 16px",backgroundColor:"var(--wc-neutral-600)",color:"var(--wc-neutral-0)",border:"none",borderRadius:"4px",cursor:"pointer",transition:"background-color 0.2s"},onMouseEnter:e=>e.target.style.backgroundColor="var(--wc-neutral-700)",onMouseLeave:e=>e.target.style.backgroundColor="var(--wc-neutral-600)",children:"右侧"})}),r.jsx("div",{}),r.jsx(o,{text:"底部提示",placement:"bottom",children:r.jsx("button",{style:{padding:"8px 16px",backgroundColor:"var(--wc-neutral-600)",color:"var(--wc-neutral-0)",border:"none",borderRadius:"4px",cursor:"pointer",transition:"background-color 0.2s"},onMouseEnter:e=>e.target.style.backgroundColor="var(--wc-neutral-700)",onMouseLeave:e=>e.target.style.backgroundColor="var(--wc-neutral-600)",children:"底部"})}),r.jsx("div",{})]})}),n=()=>r.jsxs("div",{style:{padding:"48px"},children:[r.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"16px"},children:"带图标的提示"}),r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(o,{text:"点击保存当前工作",children:r.jsx("button",{style:{padding:"8px",backgroundColor:"var(--wc-success-600)",color:"var(--wc-neutral-0)",border:"none",borderRadius:"4px",cursor:"pointer",transition:"background-color 0.2s"},onMouseEnter:e=>e.target.style.backgroundColor="var(--wc-success-700)",onMouseLeave:e=>e.target.style.backgroundColor="var(--wc-success-600)",children:"💾"})}),r.jsx(o,{text:"编辑当前项目",children:r.jsx("button",{style:{padding:"8px",backgroundColor:"var(--wc-primary-600)",color:"var(--wc-neutral-0)",border:"none",borderRadius:"4px",cursor:"pointer",transition:"background-color 0.2s"},onMouseEnter:e=>e.target.style.backgroundColor="var(--wc-primary-700)",onMouseLeave:e=>e.target.style.backgroundColor="var(--wc-primary-600)",children:"✏️"})}),r.jsx(o,{text:"删除选中项目",children:r.jsx("button",{style:{padding:"8px",backgroundColor:"var(--wc-error-600)",color:"var(--wc-neutral-0)",border:"none",borderRadius:"4px",cursor:"pointer",transition:"background-color 0.2s"},onMouseEnter:e=>e.target.style.backgroundColor="var(--wc-error-700)",onMouseLeave:e=>e.target.style.backgroundColor="var(--wc-error-600)",children:"🗑️"})}),r.jsx(o,{text:"分享给其他用户",children:r.jsx("button",{style:{padding:"8px",backgroundColor:"var(--wc-purple-600)",color:"var(--wc-neutral-0)",border:"none",borderRadius:"4px",cursor:"pointer",transition:"background-color 0.2s"},onMouseEnter:e=>e.target.style.backgroundColor="var(--wc-purple-700)",onMouseLeave:e=>e.target.style.backgroundColor="var(--wc-purple-600)",children:"📤"})}),r.jsx(o,{text:"查看详细信息",children:r.jsx("button",{style:{padding:"8px",backgroundColor:"var(--wc-neutral-600)",color:"var(--wc-neutral-0)",border:"none",borderRadius:"4px",cursor:"pointer",transition:"background-color 0.2s"},onMouseEnter:e=>e.target.style.backgroundColor="var(--wc-neutral-700)",onMouseLeave:e=>e.target.style.backgroundColor="var(--wc-neutral-600)",children:"ℹ️"})})]})]}),l=()=>r.jsxs("div",{className:"p-12 space-y-6",children:[r.jsx("h3",{className:"text-lg font-semibold mb-4",children:"丰富内容提示"}),r.jsxs("div",{className:"flex gap-4 items-center",children:[r.jsx(o,{text:"用户名: admin@example.com\\n状态: 在线\\n最后登录: 2小时前",children:r.jsxs("div",{className:"flex items-center gap-2 p-2 border rounded transition-colors",style:{borderColor:"var(--wc-neutral-200)",backgroundColor:"var(--wc-neutral-0)"},onMouseEnter:e=>e.target.style.backgroundColor="var(--wc-neutral-50)",onMouseLeave:e=>e.target.style.backgroundColor="var(--wc-neutral-0)",children:[r.jsx("div",{className:"w-8 h-8 rounded-full flex items-center justify-center text-white text-sm",style:{backgroundColor:"var(--wc-primary-500)"},children:"A"}),r.jsx("span",{children:"管理员"})]})}),r.jsx(o,{text:"项目进度: 75%\\n截止日期: 2024-02-15\\n负责人: 张三",children:r.jsxs("div",{className:"p-3 border rounded transition-colors",style:{borderColor:"var(--wc-neutral-200)",backgroundColor:"var(--wc-neutral-0)"},onMouseEnter:e=>e.target.style.backgroundColor="var(--wc-neutral-50)",onMouseLeave:e=>e.target.style.backgroundColor="var(--wc-neutral-0)",children:[r.jsx("div",{className:"font-medium",children:"Alpha 项目"}),r.jsx("div",{className:"text-sm",style:{color:"var(--wc-neutral-600)"},children:"进行中"})]})}),r.jsx(o,{text:"点击次数: 1,234\\n转化率: 3.2%\\n最佳时间: 14:00-16:00",children:r.jsxs("div",{className:"p-3 rounded transition-colors",style:{backgroundColor:"var(--wc-primary-50)"},onMouseEnter:e=>e.target.style.backgroundColor="var(--wc-primary-100)",onMouseLeave:e=>e.target.style.backgroundColor="var(--wc-primary-50)",children:[r.jsx("div",{className:"text-2xl font-bold",style:{color:"var(--wc-primary-600)"},children:"📊"}),r.jsx("div",{className:"text-sm",children:"数据分析"})]})})]})]}),c=()=>{const[e,a]=g.useState(!1),[v,D]=g.useState("自定义提示内容");return r.jsxs("div",{style:{padding:"48px"},children:[r.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"24px"},children:"交互式提示"}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",fontSize:"14px",fontWeight:"500",marginBottom:"8px"},children:"自定义提示文本："}),r.jsx("input",{type:"text",value:v,onChange:t=>D(t.target.value),style:{padding:"8px 12px",border:"1px solid var(--wc-neutral-200)",backgroundColor:"var(--wc-neutral-0)",color:"var(--wc-neutral-900)",borderRadius:"4px",outline:"none",transition:"border-color 0.2s"},onFocus:t=>t.target.style.borderColor="var(--wc-primary-500)",onBlur:t=>t.target.style.borderColor="var(--wc-neutral-200)",placeholder:"输入提示内容"})]}),r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(o,{text:v,children:r.jsx("button",{style:{padding:"8px 16px",backgroundColor:"var(--wc-primary-600)",color:"var(--wc-neutral-0)",border:"none",borderRadius:"4px",cursor:"pointer",transition:"background-color 0.2s"},onMouseEnter:t=>t.target.style.backgroundColor="var(--wc-primary-700)",onMouseLeave:t=>t.target.style.backgroundColor="var(--wc-primary-600)",children:"悬停查看自定义提示"})}),r.jsx(o,{text:e?"提示已显示":"提示已隐藏",children:r.jsxs("button",{style:{padding:"8px 16px",backgroundColor:e?"var(--wc-success-600)":"var(--wc-neutral-600)",color:"var(--wc-neutral-0)",border:"none",borderRadius:"4px",cursor:"pointer",transition:"background-color 0.2s"},onMouseEnter:t=>{t.target.style.backgroundColor=e?"var(--wc-success-700)":"var(--wc-neutral-700)"},onMouseLeave:t=>{t.target.style.backgroundColor=e?"var(--wc-success-600)":"var(--wc-neutral-600)"},onClick:()=>a(!e),children:[e?"隐藏":"显示"," 状态"]})})]})]})]})},d=()=>r.jsxs("div",{className:"p-12 max-w-md",children:[r.jsx("h3",{className:"text-lg font-semibold mb-6",children:"表单字段提示"}),r.jsxs("form",{className:"space-y-4",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[r.jsx("label",{className:"text-sm font-medium",children:"用户名"}),r.jsx(o,{text:"用户名必须是3-20个字符，只能包含字母、数字和下划线",children:r.jsx("span",{className:"cursor-help",style:{color:"var(--wc-neutral-400)"},children:"ℹ️"})})]}),r.jsx("input",{type:"text",className:"w-full px-3 py-2 border rounded focus:ring-2",style:{borderColor:"var(--wc-neutral-200)",backgroundColor:"var(--wc-neutral-0)",color:"var(--wc-neutral-900)",outline:"none"},onFocus:e=>{e.target.style.borderColor="var(--wc-primary-500)",e.target.style.boxShadow="0 0 0 2px var(--wc-primary-200)"},onBlur:e=>{e.target.style.borderColor="var(--wc-neutral-200)",e.target.style.boxShadow="none"},placeholder:"请输入用户名"})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[r.jsx("label",{className:"text-sm font-medium",children:"密码强度"}),r.jsx(o,{text:"强密码应包含：\\n• 至少8个字符\\n• 大小写字母\\n• 数字和特殊字符",children:r.jsx("span",{className:"cursor-help",style:{color:"var(--wc-neutral-400)"},children:"🔒"})})]}),r.jsx("input",{type:"password",className:"w-full px-3 py-2 border rounded focus:ring-2",style:{borderColor:"var(--wc-neutral-200)",backgroundColor:"var(--wc-neutral-0)",color:"var(--wc-neutral-900)",outline:"none"},onFocus:e=>{e.target.style.borderColor="var(--wc-primary-500)",e.target.style.boxShadow="0 0 0 2px var(--wc-primary-200)"},onBlur:e=>{e.target.style.borderColor="var(--wc-neutral-200)",e.target.style.boxShadow="none"},placeholder:"请输入密码"})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[r.jsx("label",{className:"text-sm font-medium",children:"邮箱验证"}),r.jsx(o,{text:"我们会向此邮箱发送验证码，请确保邮箱地址正确且可接收邮件",children:r.jsx("span",{className:"cursor-help",style:{color:"var(--wc-neutral-400)"},children:"📧"})})]}),r.jsx("input",{type:"email",className:"w-full px-3 py-2 border rounded focus:ring-2",style:{borderColor:"var(--wc-neutral-200)",backgroundColor:"var(--wc-neutral-0)",color:"var(--wc-neutral-900)",outline:"none"},onFocus:e=>{e.target.style.borderColor="var(--wc-primary-500)",e.target.style.boxShadow="0 0 0 2px var(--wc-primary-200)"},onBlur:e=>{e.target.style.borderColor="var(--wc-neutral-200)",e.target.style.boxShadow="none"},placeholder:"请输入邮箱地址"})]})]})]}),i=()=>r.jsxs("div",{className:"p-12 space-y-6",children:[r.jsx("h3",{className:"text-lg font-semibold mb-4",children:"状态指示器"}),r.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[r.jsxs("div",{children:[r.jsx("h4",{className:"font-medium mb-3",children:"服务状态"}),r.jsxs("div",{className:"space-y-2",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx(o,{text:"所有系统正常运行",children:r.jsx("div",{className:"w-3 h-3 rounded-full",style:{backgroundColor:"var(--wc-success-500)"}})}),r.jsx("span",{children:"Web 服务"})]}),r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx(o,{text:"数据库响应缓慢，正在优化中",children:r.jsx("div",{className:"w-3 h-3 rounded-full",style:{backgroundColor:"var(--wc-warning-500)"}})}),r.jsx("span",{children:"数据库"})]}),r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx(o,{text:"API 服务暂时不可用，预计10分钟内恢复",children:r.jsx("div",{className:"w-3 h-3 rounded-full",style:{backgroundColor:"var(--wc-error-500)"}})}),r.jsx("span",{children:"API 网关"})]})]})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-medium mb-3",children:"用户活动"}),r.jsxs("div",{className:"space-y-2",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx(o,{text:"张三 - 5分钟前登录",children:r.jsx("div",{className:"w-8 h-8 rounded-full flex items-center justify-center",style:{backgroundColor:"var(--wc-success-100)"},children:"🟢"})}),r.jsx("span",{children:"在线用户: 245"})]}),r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx(o,{text:"李四 - 2小时前离线",children:r.jsx("div",{className:"w-8 h-8 rounded-full flex items-center justify-center",style:{backgroundColor:"var(--wc-neutral-100)"},children:"⚫"})}),r.jsx("span",{children:"离线用户: 1,789"})]})]})]})]})]}),u=()=>r.jsxs("div",{className:"p-12 space-y-6",children:[r.jsx("h3",{className:"text-lg font-semibold mb-4",children:"数据可视化提示"}),r.jsxs("div",{className:"p-6 rounded-lg",style:{backgroundColor:"var(--wc-neutral-50)"},children:[r.jsx("h4",{className:"font-medium mb-4",children:"销售数据图表"}),r.jsxs("div",{className:"flex items-end gap-2 h-32",children:[r.jsx(o,{text:"一月销售额: ¥45,000\\n环比增长: +12%\\n目标完成: 90%",children:r.jsx("div",{className:"w-8 cursor-pointer rounded-t transition-colors",style:{height:"60%",backgroundColor:"var(--wc-primary-500)"},onMouseEnter:e=>e.target.style.backgroundColor="var(--wc-primary-600)",onMouseLeave:e=>e.target.style.backgroundColor="var(--wc-primary-500)"})}),r.jsx(o,{text:"二月销售额: ¥52,000\\n环比增长: +15%\\n目标完成: 104%",children:r.jsx("div",{className:"w-8 cursor-pointer rounded-t transition-colors",style:{height:"70%",backgroundColor:"var(--wc-primary-500)"},onMouseEnter:e=>e.target.style.backgroundColor="var(--wc-primary-600)",onMouseLeave:e=>e.target.style.backgroundColor="var(--wc-primary-500)"})}),r.jsx(o,{text:"三月销售额: ¥78,000\\n环比增长: +50%\\n目标完成: 156%",children:r.jsx("div",{className:"w-8 cursor-pointer rounded-t transition-colors",style:{height:"100%",backgroundColor:"var(--wc-primary-500)"},onMouseEnter:e=>e.target.style.backgroundColor="var(--wc-primary-600)",onMouseLeave:e=>e.target.style.backgroundColor="var(--wc-primary-500)"})}),r.jsx(o,{text:"四月销售额: ¥64,000\\n环比增长: -18%\\n目标完成: 128%",children:r.jsx("div",{className:"w-8 cursor-pointer rounded-t transition-colors",style:{height:"82%",backgroundColor:"var(--wc-primary-500)"},onMouseEnter:e=>e.target.style.backgroundColor="var(--wc-primary-600)",onMouseLeave:e=>e.target.style.backgroundColor="var(--wc-primary-500)"})}),r.jsx(o,{text:"五月销售额: ¥71,000\\n环比增长: +11%\\n目标完成: 142%",children:r.jsx("div",{className:"w-8 cursor-pointer rounded-t transition-colors",style:{height:"91%",backgroundColor:"var(--wc-primary-500)"},onMouseEnter:e=>e.target.style.backgroundColor="var(--wc-primary-600)",onMouseLeave:e=>e.target.style.backgroundColor="var(--wc-primary-500)"})})]}),r.jsxs("div",{className:"flex gap-2 text-xs mt-2",style:{color:"var(--wc-neutral-600)"},children:[r.jsx("span",{className:"w-8 text-center",children:"1月"}),r.jsx("span",{className:"w-8 text-center",children:"2月"}),r.jsx("span",{className:"w-8 text-center",children:"3月"}),r.jsx("span",{className:"w-8 text-center",children:"4月"}),r.jsx("span",{className:"w-8 text-center",children:"5月"})]})]})]});s.__docgenInfo={description:"",methods:[],displayName:"Placements"};n.__docgenInfo={description:"",methods:[],displayName:"WithIcons"};l.__docgenInfo={description:"",methods:[],displayName:"RichContent"};c.__docgenInfo={description:"",methods:[],displayName:"Interactive"};d.__docgenInfo={description:"",methods:[],displayName:"FormFields"};i.__docgenInfo={description:"",methods:[],displayName:"StatusIndicators"};u.__docgenInfo={description:"",methods:[],displayName:"DataVisualization"};var m,x,b;p.parameters={...p.parameters,docs:{...(m=p.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: '这是提示文本',
    placement: 'top'
  },
  render: args => <div style={{
    padding: '48px'
  }}>\r
      <Tooltip {...args}>\r
        <button style={{
        padding: '8px 16px',
        backgroundColor: 'var(--wc-primary-600)',
        color: 'var(--wc-neutral-0)',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.2s'
      }} onMouseEnter={e => e.target.style.backgroundColor = 'var(--wc-primary-700)'} onMouseLeave={e => e.target.style.backgroundColor = 'var(--wc-primary-600)'}>\r
          悬停查看提示\r
        </button>\r
      </Tooltip>\r
    </div>
}`,...(b=(x=p.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var y,w,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`() => <div style={{
  padding: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}}>\r
    <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px',
    alignItems: 'center'
  }}>\r
      <div></div>\r
      <Tooltip text="顶部提示" placement="top">\r
        <button style={{
        padding: '8px 16px',
        backgroundColor: 'var(--wc-neutral-600)',
        color: 'var(--wc-neutral-0)',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.2s'
      }} onMouseEnter={e => e.target.style.backgroundColor = 'var(--wc-neutral-700)'} onMouseLeave={e => e.target.style.backgroundColor = 'var(--wc-neutral-600)'}>\r
          顶部\r
        </button>\r
      </Tooltip>\r
      <div></div>\r
      \r
      <Tooltip text="左侧提示" placement="left">\r
        <button style={{
        padding: '8px 16px',
        backgroundColor: 'var(--wc-neutral-600)',
        color: 'var(--wc-neutral-0)',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.2s'
      }} onMouseEnter={e => e.target.style.backgroundColor = 'var(--wc-neutral-700)'} onMouseLeave={e => e.target.style.backgroundColor = 'var(--wc-neutral-600)'}>\r
          左侧\r
        </button>\r
      </Tooltip>\r
      <div style={{
      textAlign: 'center',
      color: 'var(--wc-neutral-500)'
    }}>\r
        悬停按钮查看不同位置的提示\r
      </div>\r
      <Tooltip text="右侧提示" placement="right">\r
        <button style={{
        padding: '8px 16px',
        backgroundColor: 'var(--wc-neutral-600)',
        color: 'var(--wc-neutral-0)',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.2s'
      }} onMouseEnter={e => e.target.style.backgroundColor = 'var(--wc-neutral-700)'} onMouseLeave={e => e.target.style.backgroundColor = 'var(--wc-neutral-600)'}>\r
          右侧\r
        </button>\r
      </Tooltip>\r
      \r
      <div></div>\r
      <Tooltip text="底部提示" placement="bottom">\r
        <button style={{
        padding: '8px 16px',
        backgroundColor: 'var(--wc-neutral-600)',
        color: 'var(--wc-neutral-0)',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.2s'
      }} onMouseEnter={e => e.target.style.backgroundColor = 'var(--wc-neutral-700)'} onMouseLeave={e => e.target.style.backgroundColor = 'var(--wc-neutral-600)'}>\r
          底部\r
        </button>\r
      </Tooltip>\r
      <div></div>\r
    </div>\r
  </div>`,...(h=(w=s.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var C,k,j;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`() => <div style={{
  padding: '48px'
}}>\r
    <h3 style={{
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '16px'
  }}>带图标的提示</h3>\r
    <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>\r
      <Tooltip text="点击保存当前工作">\r
        <button style={{
        padding: '8px',
        backgroundColor: 'var(--wc-success-600)',
        color: 'var(--wc-neutral-0)',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.2s'
      }} onMouseEnter={e => e.target.style.backgroundColor = 'var(--wc-success-700)'} onMouseLeave={e => e.target.style.backgroundColor = 'var(--wc-success-600)'}>\r
          💾\r
        </button>\r
      </Tooltip>\r
      \r
      <Tooltip text="编辑当前项目">\r
        <button style={{
        padding: '8px',
        backgroundColor: 'var(--wc-primary-600)',
        color: 'var(--wc-neutral-0)',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.2s'
      }} onMouseEnter={e => e.target.style.backgroundColor = 'var(--wc-primary-700)'} onMouseLeave={e => e.target.style.backgroundColor = 'var(--wc-primary-600)'}>\r
          ✏️\r
        </button>\r
      </Tooltip>\r
      \r
      <Tooltip text="删除选中项目">\r
        <button style={{
        padding: '8px',
        backgroundColor: 'var(--wc-error-600)',
        color: 'var(--wc-neutral-0)',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.2s'
      }} onMouseEnter={e => e.target.style.backgroundColor = 'var(--wc-error-700)'} onMouseLeave={e => e.target.style.backgroundColor = 'var(--wc-error-600)'}>\r
          🗑️\r
        </button>\r
      </Tooltip>\r
      \r
      <Tooltip text="分享给其他用户">\r
        <button style={{
        padding: '8px',
        backgroundColor: 'var(--wc-purple-600)',
        color: 'var(--wc-neutral-0)',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.2s'
      }} onMouseEnter={e => e.target.style.backgroundColor = 'var(--wc-purple-700)'} onMouseLeave={e => e.target.style.backgroundColor = 'var(--wc-purple-600)'}>\r
          📤\r
        </button>\r
      </Tooltip>\r
      \r
      <Tooltip text="查看详细信息">\r
        <button style={{
        padding: '8px',
        backgroundColor: 'var(--wc-neutral-600)',
        color: 'var(--wc-neutral-0)',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.2s'
      }} onMouseEnter={e => e.target.style.backgroundColor = 'var(--wc-neutral-700)'} onMouseLeave={e => e.target.style.backgroundColor = 'var(--wc-neutral-600)'}>\r
          ℹ️\r
        </button>\r
      </Tooltip>\r
    </div>\r
  </div>`,...(j=(k=n.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var f,N,T;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`() => <div className="p-12 space-y-6">\r
    <h3 className="text-lg font-semibold mb-4">丰富内容提示</h3>\r
    <div className="flex gap-4 items-center">\r
      <Tooltip text="用户名: admin@example.com\\n状态: 在线\\n最后登录: 2小时前">\r
        <div className="flex items-center gap-2 p-2 border rounded transition-colors" style={{
        borderColor: 'var(--wc-neutral-200)',
        backgroundColor: 'var(--wc-neutral-0)'
      }} onMouseEnter={e => e.target.style.backgroundColor = 'var(--wc-neutral-50)'} onMouseLeave={e => e.target.style.backgroundColor = 'var(--wc-neutral-0)'}>\r
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm" style={{
          backgroundColor: 'var(--wc-primary-500)'
        }}>\r
            A\r
          </div>\r
          <span>管理员</span>\r
        </div>\r
      </Tooltip>\r
      \r
      <Tooltip text="项目进度: 75%\\n截止日期: 2024-02-15\\n负责人: 张三">\r
        <div className="p-3 border rounded transition-colors" style={{
        borderColor: 'var(--wc-neutral-200)',
        backgroundColor: 'var(--wc-neutral-0)'
      }} onMouseEnter={e => e.target.style.backgroundColor = 'var(--wc-neutral-50)'} onMouseLeave={e => e.target.style.backgroundColor = 'var(--wc-neutral-0)'}>\r
          <div className="font-medium">Alpha 项目</div>\r
          <div className="text-sm" style={{
          color: 'var(--wc-neutral-600)'
        }}>进行中</div>\r
        </div>\r
      </Tooltip>\r
      \r
      <Tooltip text="点击次数: 1,234\\n转化率: 3.2%\\n最佳时间: 14:00-16:00">\r
        <div className="p-3 rounded transition-colors" style={{
        backgroundColor: 'var(--wc-primary-50)'
      }} onMouseEnter={e => e.target.style.backgroundColor = 'var(--wc-primary-100)'} onMouseLeave={e => e.target.style.backgroundColor = 'var(--wc-primary-50)'}>\r
          <div className="text-2xl font-bold" style={{
          color: 'var(--wc-primary-600)'
        }}>📊</div>\r
          <div className="text-sm">数据分析</div>\r
        </div>\r
      </Tooltip>\r
    </div>\r
  </div>`,...(T=(N=l.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var M,E,L;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [customText, setCustomText] = useState('自定义提示内容');
  return <div style={{
    padding: '48px'
  }}>\r
      <h3 style={{
      fontSize: '18px',
      fontWeight: '600',
      marginBottom: '24px'
    }}>交互式提示</h3>\r
      \r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>\r
        <div>\r
          <label style={{
          display: 'block',
          fontSize: '14px',
          fontWeight: '500',
          marginBottom: '8px'
        }}>\r
            自定义提示文本：\r
          </label>\r
          <input type="text" value={customText} onChange={e => setCustomText(e.target.value)} style={{
          padding: '8px 12px',
          border: '1px solid var(--wc-neutral-200)',
          backgroundColor: 'var(--wc-neutral-0)',
          color: 'var(--wc-neutral-900)',
          borderRadius: '4px',
          outline: 'none',
          transition: 'border-color 0.2s'
        }} onFocus={e => e.target.style.borderColor = 'var(--wc-primary-500)'} onBlur={e => e.target.style.borderColor = 'var(--wc-neutral-200)'} placeholder="输入提示内容" />\r
        </div>\r
        \r
        <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>\r
          <Tooltip text={customText}>\r
            <button style={{
            padding: '8px 16px',
            backgroundColor: 'var(--wc-primary-600)',
            color: 'var(--wc-neutral-0)',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }} onMouseEnter={e => e.target.style.backgroundColor = 'var(--wc-primary-700)'} onMouseLeave={e => e.target.style.backgroundColor = 'var(--wc-primary-600)'}>\r
              悬停查看自定义提示\r
            </button>\r
          </Tooltip>\r
          \r
          <Tooltip text={showTooltip ? "提示已显示" : "提示已隐藏"}>\r
            <button style={{
            padding: '8px 16px',
            backgroundColor: showTooltip ? 'var(--wc-success-600)' : 'var(--wc-neutral-600)',
            color: 'var(--wc-neutral-0)',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }} onMouseEnter={e => {
            e.target.style.backgroundColor = showTooltip ? 'var(--wc-success-700)' : 'var(--wc-neutral-700)';
          }} onMouseLeave={e => {
            e.target.style.backgroundColor = showTooltip ? 'var(--wc-success-600)' : 'var(--wc-neutral-600)';
          }} onClick={() => setShowTooltip(!showTooltip)}>\r
              {showTooltip ? '隐藏' : '显示'} 状态\r
            </button>\r
          </Tooltip>\r
        </div>\r
      </div>\r
    </div>;
}`,...(L=(E=c.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var S,R,I;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`() => <div className="p-12 max-w-md">\r
    <h3 className="text-lg font-semibold mb-6">表单字段提示</h3>\r
    <form className="space-y-4">\r
      <div>\r
        <div className="flex items-center gap-2 mb-2">\r
          <label className="text-sm font-medium">用户名</label>\r
          <Tooltip text="用户名必须是3-20个字符，只能包含字母、数字和下划线">\r
            <span className="cursor-help" style={{
            color: 'var(--wc-neutral-400)'
          }}>\r
              ℹ️\r
            </span>\r
          </Tooltip>\r
        </div>\r
        <input type="text" className="w-full px-3 py-2 border rounded focus:ring-2" style={{
        borderColor: 'var(--wc-neutral-200)',
        backgroundColor: 'var(--wc-neutral-0)',
        color: 'var(--wc-neutral-900)',
        outline: 'none'
      }} onFocus={e => {
        e.target.style.borderColor = 'var(--wc-primary-500)';
        e.target.style.boxShadow = '0 0 0 2px var(--wc-primary-200)';
      }} onBlur={e => {
        e.target.style.borderColor = 'var(--wc-neutral-200)';
        e.target.style.boxShadow = 'none';
      }} placeholder="请输入用户名" />\r
      </div>\r
      \r
      <div>\r
        <div className="flex items-center gap-2 mb-2">\r
          <label className="text-sm font-medium">密码强度</label>\r
          <Tooltip text="强密码应包含：\\n• 至少8个字符\\n• 大小写字母\\n• 数字和特殊字符">\r
            <span className="cursor-help" style={{
            color: 'var(--wc-neutral-400)'
          }}>\r
              🔒\r
            </span>\r
          </Tooltip>\r
        </div>\r
        <input type="password" className="w-full px-3 py-2 border rounded focus:ring-2" style={{
        borderColor: 'var(--wc-neutral-200)',
        backgroundColor: 'var(--wc-neutral-0)',
        color: 'var(--wc-neutral-900)',
        outline: 'none'
      }} onFocus={e => {
        e.target.style.borderColor = 'var(--wc-primary-500)';
        e.target.style.boxShadow = '0 0 0 2px var(--wc-primary-200)';
      }} onBlur={e => {
        e.target.style.borderColor = 'var(--wc-neutral-200)';
        e.target.style.boxShadow = 'none';
      }} placeholder="请输入密码" />\r
      </div>\r
      \r
      <div>\r
        <div className="flex items-center gap-2 mb-2">\r
          <label className="text-sm font-medium">邮箱验证</label>\r
          <Tooltip text="我们会向此邮箱发送验证码，请确保邮箱地址正确且可接收邮件">\r
            <span className="cursor-help" style={{
            color: 'var(--wc-neutral-400)'
          }}>\r
              📧\r
            </span>\r
          </Tooltip>\r
        </div>\r
        <input type="email" className="w-full px-3 py-2 border rounded focus:ring-2" style={{
        borderColor: 'var(--wc-neutral-200)',
        backgroundColor: 'var(--wc-neutral-0)',
        color: 'var(--wc-neutral-900)',
        outline: 'none'
      }} onFocus={e => {
        e.target.style.borderColor = 'var(--wc-primary-500)';
        e.target.style.boxShadow = '0 0 0 2px var(--wc-primary-200)';
      }} onBlur={e => {
        e.target.style.borderColor = 'var(--wc-neutral-200)';
        e.target.style.boxShadow = 'none';
      }} placeholder="请输入邮箱地址" />\r
      </div>\r
    </form>\r
  </div>`,...(I=(R=d.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var _,B,F;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`() => <div className="p-12 space-y-6">\r
    <h3 className="text-lg font-semibold mb-4">状态指示器</h3>\r
    \r
    <div className="grid grid-cols-2 gap-6">\r
      <div>\r
        <h4 className="font-medium mb-3">服务状态</h4>\r
        <div className="space-y-2">\r
          <div className="flex items-center gap-3">\r
            <Tooltip text="所有系统正常运行">\r
              <div className="w-3 h-3 rounded-full" style={{
              backgroundColor: 'var(--wc-success-500)'
            }}></div>\r
            </Tooltip>\r
            <span>Web 服务</span>\r
          </div>\r
          <div className="flex items-center gap-3">\r
            <Tooltip text="数据库响应缓慢，正在优化中">\r
              <div className="w-3 h-3 rounded-full" style={{
              backgroundColor: 'var(--wc-warning-500)'
            }}></div>\r
            </Tooltip>\r
            <span>数据库</span>\r
          </div>\r
          <div className="flex items-center gap-3">\r
            <Tooltip text="API 服务暂时不可用，预计10分钟内恢复">\r
              <div className="w-3 h-3 rounded-full" style={{
              backgroundColor: 'var(--wc-error-500)'
            }}></div>\r
            </Tooltip>\r
            <span>API 网关</span>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div>\r
        <h4 className="font-medium mb-3">用户活动</h4>\r
        <div className="space-y-2">\r
          <div className="flex items-center gap-3">\r
            <Tooltip text="张三 - 5分钟前登录">\r
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{
              backgroundColor: 'var(--wc-success-100)'
            }}>\r
                🟢\r
              </div>\r
            </Tooltip>\r
            <span>在线用户: 245</span>\r
          </div>\r
          <div className="flex items-center gap-3">\r
            <Tooltip text="李四 - 2小时前离线">\r
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{
              backgroundColor: 'var(--wc-neutral-100)'
            }}>\r
                ⚫\r
              </div>\r
            </Tooltip>\r
            <span>离线用户: 1,789</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>`,...(F=(B=i.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var W,A,z;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`() => <div className="p-12 space-y-6">\r
    <h3 className="text-lg font-semibold mb-4">数据可视化提示</h3>\r
    \r
    <div className="p-6 rounded-lg" style={{
    backgroundColor: 'var(--wc-neutral-50)'
  }}>\r
      <h4 className="font-medium mb-4">销售数据图表</h4>\r
      <div className="flex items-end gap-2 h-32">\r
        <Tooltip text="一月销售额: ¥45,000\\n环比增长: +12%\\n目标完成: 90%">\r
          <div className="w-8 cursor-pointer rounded-t transition-colors" style={{
          height: '60%',
          backgroundColor: 'var(--wc-primary-500)'
        }} onMouseEnter={e => e.target.style.backgroundColor = 'var(--wc-primary-600)'} onMouseLeave={e => e.target.style.backgroundColor = 'var(--wc-primary-500)'}></div>\r
        </Tooltip>\r
        <Tooltip text="二月销售额: ¥52,000\\n环比增长: +15%\\n目标完成: 104%">\r
          <div className="w-8 cursor-pointer rounded-t transition-colors" style={{
          height: '70%',
          backgroundColor: 'var(--wc-primary-500)'
        }} onMouseEnter={e => e.target.style.backgroundColor = 'var(--wc-primary-600)'} onMouseLeave={e => e.target.style.backgroundColor = 'var(--wc-primary-500)'}></div>\r
        </Tooltip>\r
        <Tooltip text="三月销售额: ¥78,000\\n环比增长: +50%\\n目标完成: 156%">\r
          <div className="w-8 cursor-pointer rounded-t transition-colors" style={{
          height: '100%',
          backgroundColor: 'var(--wc-primary-500)'
        }} onMouseEnter={e => e.target.style.backgroundColor = 'var(--wc-primary-600)'} onMouseLeave={e => e.target.style.backgroundColor = 'var(--wc-primary-500)'}></div>\r
        </Tooltip>\r
        <Tooltip text="四月销售额: ¥64,000\\n环比增长: -18%\\n目标完成: 128%">\r
          <div className="w-8 cursor-pointer rounded-t transition-colors" style={{
          height: '82%',
          backgroundColor: 'var(--wc-primary-500)'
        }} onMouseEnter={e => e.target.style.backgroundColor = 'var(--wc-primary-600)'} onMouseLeave={e => e.target.style.backgroundColor = 'var(--wc-primary-500)'}></div>\r
        </Tooltip>\r
        <Tooltip text="五月销售额: ¥71,000\\n环比增长: +11%\\n目标完成: 142%">\r
          <div className="w-8 cursor-pointer rounded-t transition-colors" style={{
          height: '91%',
          backgroundColor: 'var(--wc-primary-500)'
        }} onMouseEnter={e => e.target.style.backgroundColor = 'var(--wc-primary-600)'} onMouseLeave={e => e.target.style.backgroundColor = 'var(--wc-primary-500)'}></div>\r
        </Tooltip>\r
      </div>\r
      <div className="flex gap-2 text-xs mt-2" style={{
      color: 'var(--wc-neutral-600)'
    }}>\r
        <span className="w-8 text-center">1月</span>\r
        <span className="w-8 text-center">2月</span>\r
        <span className="w-8 text-center">3月</span>\r
        <span className="w-8 text-center">4月</span>\r
        <span className="w-8 text-center">5月</span>\r
      </div>\r
    </div>\r
  </div>`,...(z=(A=u.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};const q=["Default","Placements","WithIcons","RichContent","Interactive","FormFields","StatusIndicators","DataVisualization"];export{u as DataVisualization,p as Default,d as FormFields,c as Interactive,s as Placements,l as RichContent,i as StatusIndicators,n as WithIcons,q as __namedExportsOrder,O as default};
