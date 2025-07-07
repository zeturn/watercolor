import{r as h,j as e}from"./iframe-DqwHGwZR.js";import{S as o}from"./Switch-CgNDdZQ8.js";const V={title:"Components/Switch (React)",component:o,parameters:{layout:"centered",docs:{description:{component:"Watercolor 开关组件，使用现代化纯CSS设计，支持多种尺寸和颜色主题。"}}},tags:["autodocs"],argTypes:{checked:{description:"开关状态",control:{type:"boolean"}},label:{description:"标签文本",control:{type:"text"}},description:{description:"描述文本",control:{type:"text"}},color:{description:"开关颜色主题",control:{type:"select"},options:["primary","success","warning","error","purple","orange","cyan","pink"]},disabled:{description:"是否禁用",control:{type:"boolean"}},required:{description:"是否必填",control:{type:"boolean"}},onChange:{action:"change",description:"值改变时触发"}}},g={args:{label:"开启通知",description:"接收应用通知",color:"primary",disabled:!1,required:!1},render:r=>{const[n,l]=h.useState(!1);return e.jsxs("div",{className:"w-80",children:[e.jsx(o,{...r,checked:n,onChange:t=>{var a;l(t),(a=r.onChange)==null||a.call(r,t)}}),e.jsxs("p",{className:"mt-4 text-sm text-gray-500",children:["当前状态: ",n?"开启":"关闭"]})]})}},d=()=>{const[r,n]=h.useState({primary:!0,success:!0,warning:!0,error:!0,purple:!0,orange:!0,cyan:!0,pink:!0}),l=(a,s)=>{n(c=>({...c,[a]:s}))},t=[{key:"primary",label:"主色调 (Primary)",color:"primary"},{key:"success",label:"成功色 (Success)",color:"success"},{key:"warning",label:"警告色 (Warning)",color:"warning"},{key:"error",label:"错误色 (Error)",color:"error"},{key:"purple",label:"紫色 (Purple)",color:"purple"},{key:"orange",label:"橙色 (Orange)",color:"orange"},{key:"cyan",label:"青色 (Cyan)",color:"cyan"},{key:"pink",label:"粉色 (Pink)",color:"pink"}];return e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"颜色主题"}),t.map(({key:a,label:s,color:c})=>e.jsx(o,{checked:r[a],color:c,label:s,onChange:i=>l(a,i)},a))]})},m=()=>{const[r,n]=h.useState({normal:!1,checked:!0,disabledOff:!1,disabledOn:!0}),l=(t,a)=>{n(s=>({...s,[t]:a}))};return e.jsxs("div",{className:"space-y-6 w-80",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"不同状态"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{checked:r.normal,label:"正常状态",description:"可以正常切换",onChange:t=>l("normal",t)}),e.jsx(o,{checked:r.checked,label:"已选中状态",description:"当前处于开启状态",color:"success",onChange:t=>l("checked",t)}),e.jsx(o,{checked:r.disabledOff,label:"禁用状态（关闭）",description:"无法进行交互",disabled:!0,onChange:t=>l("disabledOff",t)}),e.jsx(o,{checked:r.disabledOn,label:"禁用状态（开启）",description:"已锁定在开启状态",color:"success",disabled:!0,onChange:t=>l("disabledOn",t)})]})]})},p=()=>{const[r,n]=h.useState({notifications:!0,darkMode:!1,autoSave:!0,soundEffects:!1,location:!0,analytics:!1,newsletter:!0,twoFactor:!1}),l=(a,s)=>{n(c=>({...c,[a]:s}))},t=[{category:"通知设置",items:[{key:"notifications",label:"推送通知",description:"接收应用通知和提醒",color:"primary"},{key:"soundEffects",label:"声音效果",description:"播放通知声音",color:"purple"},{key:"newsletter",label:"邮件订阅",description:"接收产品更新邮件",color:"cyan"}]},{category:"应用设置",items:[{key:"darkMode",label:"深色模式",description:"启用深色主题",color:"orange"},{key:"autoSave",label:"自动保存",description:"自动保存您的工作",color:"success"}]},{category:"隐私设置",items:[{key:"location",label:"位置服务",description:"允许访问位置信息",color:"warning"},{key:"analytics",label:"数据分析",description:"帮助改进应用体验",color:"error"},{key:"twoFactor",label:"双重验证",description:"增强账户安全性",color:"success"}]}];return e.jsxs("div",{className:"max-w-md",children:[e.jsx("h3",{className:"text-xl font-bold mb-6",children:"⚙️ 应用设置"}),e.jsxs("div",{className:"space-y-6",children:[t.map((a,s)=>e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-4 text-gray-800",children:a.category}),e.jsx("div",{className:"space-y-4",children:a.items.map(({key:c,label:i,description:P,color:E})=>e.jsx(o,{checked:r[c],label:i,description:P,color:E,onChange:I=>l(c,I)},c))})]},s)),e.jsxs("div",{className:"mt-6 p-4 bg-gray-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-3",children:"当前配置摘要"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("p",{children:["✅ 已启用: ",Object.values(r).filter(Boolean).length," 项"]}),e.jsxs("p",{children:["❌ 已禁用: ",Object.values(r).filter(a=>!a).length," 项"]}),e.jsx("div",{className:"mt-2 text-xs text-gray-600",children:Object.entries(r).filter(([a,s])=>s).map(([a,s])=>{var c;return e.jsx("span",{className:"inline-block mr-2 mb-1 px-2 py-1 bg-green-100 text-green-800 rounded",children:(c=t.flatMap(i=>i.items).find(i=>i.key===a))==null?void 0:c.label},a)})})]})]})]})]})},u=()=>{const[r,n]=h.useState({agree:!1,newsletter:!1,terms:!1,privacy:!1}),l=(s,c)=>{n(i=>({...i,[s]:c}))},t=s=>{if(s.preventDefault(),!r.agree||!r.terms){alert("请同意必要的条款才能继续");return}alert(`表单提交成功!
`+JSON.stringify(r,null,2))},a=r.agree&&r.terms;return e.jsxs("div",{className:"max-w-md",children:[e.jsx("h3",{className:"text-lg font-semibold mb-6",children:"📝 用户协议表单"}),e.jsxs("form",{onSubmit:t,className:"space-y-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{checked:r.agree,label:"同意服务条款",description:"我已阅读并同意服务条款",color:"primary",required:!0,onChange:s=>l("agree",s)}),e.jsx(o,{checked:r.terms,label:"同意隐私政策",description:"我已阅读并同意隐私政策",color:"success",required:!0,onChange:s=>l("terms",s)})]}),e.jsx("hr",{className:"border-gray-200"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700",children:"可选设置"}),e.jsx(o,{checked:r.newsletter,label:"订阅邮件通知",description:"接收产品更新和优惠信息",color:"cyan",onChange:s=>l("newsletter",s)}),e.jsx(o,{checked:r.privacy,label:"隐私保护模式",description:"启用额外的隐私保护功能",color:"purple",onChange:s=>l("privacy",s)})]}),e.jsx("div",{className:"mt-6",children:e.jsx("button",{type:"submit",disabled:!a,className:`w-full py-3 px-4 rounded-lg font-medium transition-colors ${a?"bg-blue-600 text-white hover:bg-blue-700":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:a?"提交注册":"请完成必要选项"})}),e.jsx("div",{className:"text-xs text-gray-500",children:e.jsx("p",{children:"* 标记为必填的选项需要同意才能继续"})})]})]})};d.__docgenInfo={description:"",methods:[],displayName:"Colors"};m.__docgenInfo={description:"",methods:[],displayName:"States"};p.__docgenInfo={description:"",methods:[],displayName:"SettingsPanel"};u.__docgenInfo={description:"",methods:[],displayName:"FormIntegration"};var y,b,f;g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: '开启通知',
    description: '接收应用通知',
    color: 'primary',
    disabled: false,
    required: false
  },
  render: args => {
    const [checked, setChecked] = useState(false);
    return <div className="w-80">\r
        <Switch {...args} checked={checked} onChange={value => {
        setChecked(value);
        args.onChange?.(value);
      }} />\r
        <p className="mt-4 text-sm text-gray-500">\r
          当前状态: {checked ? '开启' : '关闭'}\r
        </p>\r
      </div>;
  }
}`,...(f=(b=g.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,k,x;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [switches, setSwitches] = useState({
    primary: true,
    success: true,
    warning: true,
    error: true,
    purple: true,
    orange: true,
    cyan: true,
    pink: true
  });
  const handleChange = (key, value) => {
    setSwitches(prev => ({
      ...prev,
      [key]: value
    }));
  };
  const colors = [{
    key: 'primary',
    label: '主色调 (Primary)',
    color: 'primary'
  }, {
    key: 'success',
    label: '成功色 (Success)',
    color: 'success'
  }, {
    key: 'warning',
    label: '警告色 (Warning)',
    color: 'warning'
  }, {
    key: 'error',
    label: '错误色 (Error)',
    color: 'error'
  }, {
    key: 'purple',
    label: '紫色 (Purple)',
    color: 'purple'
  }, {
    key: 'orange',
    label: '橙色 (Orange)',
    color: 'orange'
  }, {
    key: 'cyan',
    label: '青色 (Cyan)',
    color: 'cyan'
  }, {
    key: 'pink',
    label: '粉色 (Pink)',
    color: 'pink'
  }];
  return <div className="space-y-4 w-80">\r
      <h3 className="text-lg font-semibold mb-4">颜色主题</h3>\r
      {colors.map(({
      key,
      label,
      color
    }) => <Switch key={key} checked={switches[key]} color={color} label={label} onChange={value => handleChange(key, value)} />)}\r
    </div>;
}`,...(x=(k=d.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var w,N,S;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const [switches, setSwitches] = useState({
    normal: false,
    checked: true,
    disabledOff: false,
    disabledOn: true
  });
  const handleChange = (key, value) => {
    setSwitches(prev => ({
      ...prev,
      [key]: value
    }));
  };
  return <div className="space-y-6 w-80">\r
      <h3 className="text-lg font-semibold mb-4">不同状态</h3>\r
      \r
      <div className="space-y-4">\r
        <Switch checked={switches.normal} label="正常状态" description="可以正常切换" onChange={value => handleChange('normal', value)} />\r
        \r
        <Switch checked={switches.checked} label="已选中状态" description="当前处于开启状态" color="success" onChange={value => handleChange('checked', value)} />\r
        \r
        <Switch checked={switches.disabledOff} label="禁用状态（关闭）" description="无法进行交互" disabled={true} onChange={value => handleChange('disabledOff', value)} />\r
        \r
        <Switch checked={switches.disabledOn} label="禁用状态（开启）" description="已锁定在开启状态" color="success" disabled={true} onChange={value => handleChange('disabledOn', value)} />\r
      </div>\r
    </div>;
}`,...(S=(N=m.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var C,j,O;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
    soundEffects: false,
    location: true,
    analytics: false,
    newsletter: true,
    twoFactor: false
  });
  const handleChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };
  const settingsConfig = [{
    category: '通知设置',
    items: [{
      key: 'notifications',
      label: '推送通知',
      description: '接收应用通知和提醒',
      color: 'primary'
    }, {
      key: 'soundEffects',
      label: '声音效果',
      description: '播放通知声音',
      color: 'purple'
    }, {
      key: 'newsletter',
      label: '邮件订阅',
      description: '接收产品更新邮件',
      color: 'cyan'
    }]
  }, {
    category: '应用设置',
    items: [{
      key: 'darkMode',
      label: '深色模式',
      description: '启用深色主题',
      color: 'orange'
    }, {
      key: 'autoSave',
      label: '自动保存',
      description: '自动保存您的工作',
      color: 'success'
    }]
  }, {
    category: '隐私设置',
    items: [{
      key: 'location',
      label: '位置服务',
      description: '允许访问位置信息',
      color: 'warning'
    }, {
      key: 'analytics',
      label: '数据分析',
      description: '帮助改进应用体验',
      color: 'error'
    }, {
      key: 'twoFactor',
      label: '双重验证',
      description: '增强账户安全性',
      color: 'success'
    }]
  }];
  return <div className="max-w-md">\r
      <h3 className="text-xl font-bold mb-6">⚙️ 应用设置</h3>\r
      \r
      <div className="space-y-6">\r
        {settingsConfig.map((section, sectionIndex) => <div key={sectionIndex} className="p-4 border rounded-lg">\r
            <h4 className="font-semibold mb-4 text-gray-800">{section.category}</h4>\r
            <div className="space-y-4">\r
              {section.items.map(({
            key,
            label,
            description,
            color
          }) => <Switch key={key} checked={settings[key]} label={label} description={description} color={color} onChange={value => handleChange(key, value)} />)}\r
            </div>\r
          </div>)}\r
\r
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">\r
          <h4 className="font-medium mb-3">当前配置摘要</h4>\r
          <div className="text-sm space-y-1">\r
            <p>✅ 已启用: {Object.values(settings).filter(Boolean).length} 项</p>\r
            <p>❌ 已禁用: {Object.values(settings).filter(v => !v).length} 项</p>\r
            <div className="mt-2 text-xs text-gray-600">\r
              {Object.entries(settings).filter(([_, enabled]) => enabled).map(([key, _]) => <span key={key} className="inline-block mr-2 mb-1 px-2 py-1 bg-green-100 text-green-800 rounded">\r
                  {settingsConfig.flatMap(s => s.items).find(item => item.key === key)?.label}\r
                </span>)}\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>;
}`,...(O=(j=p.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var D,F,_;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const [formData, setFormData] = useState({
    agree: false,
    newsletter: false,
    terms: false,
    privacy: false
  });
  const handleChange = (key, value) => {
    setFormData(prev => ({
      ...prev,
      [key]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.agree || !formData.terms) {
      alert('请同意必要的条款才能继续');
      return;
    }
    alert('表单提交成功!\\n' + JSON.stringify(formData, null, 2));
  };
  const isFormValid = formData.agree && formData.terms;
  return <div className="max-w-md">\r
      <h3 className="text-lg font-semibold mb-6">📝 用户协议表单</h3>\r
      \r
      <form onSubmit={handleSubmit} className="space-y-6">\r
        <div className="space-y-4">\r
          <Switch checked={formData.agree} label="同意服务条款" description="我已阅读并同意服务条款" color="primary" required={true} onChange={value => handleChange('agree', value)} />\r
          \r
          <Switch checked={formData.terms} label="同意隐私政策" description="我已阅读并同意隐私政策" color="success" required={true} onChange={value => handleChange('terms', value)} />\r
        </div>\r
\r
        <hr className="border-gray-200" />\r
\r
        <div className="space-y-4">\r
          <p className="text-sm font-medium text-gray-700">可选设置</p>\r
          \r
          <Switch checked={formData.newsletter} label="订阅邮件通知" description="接收产品更新和优惠信息" color="cyan" onChange={value => handleChange('newsletter', value)} />\r
          \r
          <Switch checked={formData.privacy} label="隐私保护模式" description="启用额外的隐私保护功能" color="purple" onChange={value => handleChange('privacy', value)} />\r
        </div>\r
\r
        <div className="mt-6">\r
          <button type="submit" disabled={!isFormValid} className={\`w-full py-3 px-4 rounded-lg font-medium transition-colors \${isFormValid ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}\`}>\r
            {isFormValid ? '提交注册' : '请完成必要选项'}\r
          </button>\r
        </div>\r
\r
        <div className="text-xs text-gray-500">\r
          <p>* 标记为必填的选项需要同意才能继续</p>\r
        </div>\r
      </form>\r
    </div>;
}`,...(_=(F=u.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};const W=["Primary","Colors","States","SettingsPanel","FormIntegration"];export{d as Colors,u as FormIntegration,g as Primary,p as SettingsPanel,m as States,W as __namedExportsOrder,V as default};
