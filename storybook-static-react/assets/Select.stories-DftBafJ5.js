import{r as d,j as e}from"./iframe-DqwHGwZR.js";const o=({value:l="",onChange:r,options:t=[],placeholder:s="Select an option",label:c="",helperText:i="",error:f=!1,errorMessage:u="",required:v=!1,disabled:O=!1,multiple:h=!1,searchable:T=!1,clearable:ue=!1,fullWidth:de=!1,size:ie="md",variant:k="filled",color:pe="primary",maxHeight:ve=200,name:z="",id:me="",className:he="",style:be={},onFocus:D,onBlur:I,onSearch:F,renderOption:A,renderValue:V,...Oe})=>{const[g,$]=d.useState(!1),[E,fe]=d.useState(""),[R,x]=d.useState(!1),C=d.useRef(null),ge=d.useRef(null);d.useEffect(()=>{const a=n=>{C.current&&!C.current.contains(n.target)&&($(!1),x(!1))};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[]);const L=T&&E?t.filter(a=>(a.label||a.value).toLowerCase().includes(E.toLowerCase())):t,m=h?t.filter(a=>l.includes(a.value)):t.find(a=>a.value===l),xe=()=>{const a=["wc-select"];return a.push(`wc-select--${k}`),a.push(`wc-select--${ie}`),f&&a.push("wc-select--error"),O&&a.push("wc-select--disabled"),g&&a.push("wc-select--open"),R&&a.push("wc-select--focused"),de&&a.push("wc-select--full-width"),h&&a.push("wc-select--multiple"),a.concat(he).filter(Boolean).join(" ")},ye=()=>{const a={...be};return k==="outlined"?a.borderColor=f?"var(--wc-error-500)":`var(--wc-${pe}-500)`:k==="filled"&&(a.backgroundColor="var(--wc-neutral-50)"),a},Se=()=>{O||($(!g),x(!g))},Ne=a=>{if(a.disabled)return;let n;if(h){const b=Array.isArray(l)?l:[];b.includes(a.value)?n=b.filter(qe=>qe!==a.value):n=[...b,a.value]}else n=a.value,$(!1),x(!1);r==null||r({target:{name:z,value:n}})},je=a=>{a.stopPropagation();const n=h?[]:"";r==null||r({target:{name:z,value:n}})},_e=a=>{const n=a.target.value;fe(n),F==null||F(n)},we=a=>{x(!0),D==null||D(a)},Ve=a=>{setTimeout(()=>{var n;(n=C.current)!=null&&n.contains(document.activeElement)||(x(!1),I==null||I(a))},100)},Ce=()=>h&&Array.isArray(m)?m.length===0?e.jsx("span",{className:"wc-select__placeholder",children:s}):e.jsx("div",{className:"wc-select__chips",children:m.map(a=>e.jsx("span",{className:"wc-select__chip",children:V?V(a):a.label||a.value},a.value))}):m?V?V(m):m.label||m.value:e.jsx("span",{className:"wc-select__placeholder",children:s}),J=me||z||`select-${Math.random().toString(36).substr(2,9)}`;return e.jsxs("div",{className:xe(),ref:C,children:[c&&e.jsxs("label",{htmlFor:J,className:`wc-select__label ${R||m?"wc-select__label--active":""}`,children:[c,v&&e.jsx("span",{className:"wc-select__required",children:"*"})]}),e.jsxs("div",{className:"wc-select__container",children:[e.jsxs("div",{className:"wc-select__control",style:ye(),onClick:Se,onFocus:we,onBlur:Ve,tabIndex:O?-1:0,role:"combobox","aria-expanded":g,"aria-haspopup":"listbox","aria-labelledby":c?`${J}-label`:void 0,children:[e.jsx("div",{className:"wc-select__value",children:Ce()}),e.jsxs("div",{className:"wc-select__indicators",children:[ue&&(m||h&&(l==null?void 0:l.length)>0)&&e.jsx("button",{type:"button",className:"wc-select__clear",onClick:je,tabIndex:-1,children:"×"}),e.jsx("div",{className:`wc-select__arrow ${g?"wc-select__arrow--open":""}`,children:"▼"})]})]}),g&&e.jsxs("div",{className:"wc-select__menu",style:{maxHeight:ve},ref:ge,children:[T&&e.jsx("div",{className:"wc-select__search",children:e.jsx("input",{type:"text",className:"wc-select__search-input",placeholder:"Search...",value:E,onChange:_e,autoFocus:!0})}),e.jsx("div",{className:"wc-select__options",role:"listbox",children:L.length===0?e.jsx("div",{className:"wc-select__no-options",children:"No options found"}):L.map((a,n)=>{const b=h?Array.isArray(l)&&l.includes(a.value):l===a.value;return e.jsxs("div",{className:`wc-select__option ${b?"wc-select__option--selected":""} ${a.disabled?"wc-select__option--disabled":""}`,onClick:()=>Ne(a),role:"option","aria-selected":b,children:[h&&e.jsx("span",{className:`wc-select__checkbox ${b?"wc-select__checkbox--checked":""}`,children:b&&"✓"}),A?A(a):a.label||a.value]},a.value||n)})})]})]}),(i||f&&u)&&e.jsx("div",{className:`wc-select__helper-text ${f?"wc-select__helper-text--error":""}`,children:f&&u?u:i})]})};o.displayName="Select";o.__docgenInfo={description:"",methods:[],displayName:"Select",props:{value:{defaultValue:{value:"''",computed:!1},required:!1},options:{defaultValue:{value:"[]",computed:!1},required:!1},placeholder:{defaultValue:{value:"'Select an option'",computed:!1},required:!1},label:{defaultValue:{value:"''",computed:!1},required:!1},helperText:{defaultValue:{value:"''",computed:!1},required:!1},error:{defaultValue:{value:"false",computed:!1},required:!1},errorMessage:{defaultValue:{value:"''",computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},multiple:{defaultValue:{value:"false",computed:!1},required:!1},searchable:{defaultValue:{value:"false",computed:!1},required:!1},clearable:{defaultValue:{value:"false",computed:!1},required:!1},fullWidth:{defaultValue:{value:"false",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},variant:{defaultValue:{value:"'filled'",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1},maxHeight:{defaultValue:{value:"200",computed:!1},required:!1},name:{defaultValue:{value:"''",computed:!1},required:!1},id:{defaultValue:{value:"''",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1},style:{defaultValue:{value:"{}",computed:!1},required:!1}}};const ze={title:"Components/Select (React)",component:o,parameters:{layout:"centered",docs:{description:{component:"Watercolor 选择器组件，支持单选、多选、搜索等功能。"}}},tags:["autodocs"],argTypes:{value:{description:"绑定值",control:{type:"text"}},options:{description:"选项数组",control:{type:"object"}},label:{description:"标签文本",control:{type:"text"}},placeholder:{description:"占位符文本",control:{type:"text"}},size:{description:"尺寸",control:{type:"select"},options:["sm","md","lg"]},variant:{description:"变体",control:{type:"select"},options:["outlined","filled","standard"]},disabled:{description:"是否禁用",control:{type:"boolean"}},multiple:{description:"是否多选",control:{type:"boolean"}},searchable:{description:"是否可搜索",control:{type:"boolean"}},required:{description:"是否必填",control:{type:"boolean"}},error:{description:"是否显示错误状态",control:{type:"boolean"}},helperText:{description:"帮助文本",control:{type:"text"}},onChange:{action:"change",description:"值改变时触发"}}},p=[{label:"选项 1",value:"option1"},{label:"选项 2",value:"option2"},{label:"选项 3",value:"option3"},{label:"选项 4",value:"option4"}],q={args:{label:"选择选项",options:p,placeholder:"请选择一个选项",size:"md",variant:"outlined",disabled:!1,required:!1,multiple:!1,searchable:!1},render:l=>{const[r,t]=d.useState("");return e.jsxs("div",{className:"w-80",children:[e.jsx(o,{...l,value:r,onChange:s=>{var c;t(s.target.value),(c=l.onChange)==null||c.call(l,s.target.value)}}),e.jsxs("p",{className:"mt-2 text-sm text-gray-500",children:["选中值: ",r||"无"]})]})}},y=()=>{const[l,r]=d.useState([]),t=[{label:"Vue.js",value:"vue"},{label:"React",value:"react"},{label:"Angular",value:"angular"},{label:"JavaScript",value:"javascript"},{label:"TypeScript",value:"typescript"},{label:"Node.js",value:"nodejs"}];return e.jsxs("div",{className:"w-80",children:[e.jsx(o,{label:"选择技能",options:t,placeholder:"请选择您的技能",multiple:!0,size:"md",variant:"outlined",value:l,onChange:s=>r(s.target.value)}),e.jsxs("p",{className:"mt-2 text-sm text-gray-500",children:["已选择: ",l.length," 项"]}),l.length>0&&e.jsx("div",{className:"mt-2 flex flex-wrap gap-1",children:l.map(s=>{const c=t.find(i=>i.value===s);return e.jsx("span",{className:"px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded",children:c==null?void 0:c.label},s)})})]})},S=()=>{var s;const[l,r]=d.useState(""),t=[{label:"中国",value:"china"},{label:"美国",value:"usa"},{label:"英国",value:"uk"},{label:"法国",value:"france"},{label:"德国",value:"germany"},{label:"日本",value:"japan"},{label:"韩国",value:"korea"},{label:"澳大利亚",value:"australia"}];return e.jsxs("div",{className:"w-80",children:[e.jsx(o,{label:"搜索国家",options:t,placeholder:"搜索并选择国家",searchable:!0,size:"md",variant:"outlined",value:l,onChange:c=>r(c.target.value)}),e.jsxs("p",{className:"mt-2 text-sm text-gray-500",children:["选中国家: ",((s=t.find(c=>c.value===l))==null?void 0:s.label)||"无"]})]})},N=()=>{const[l,r]=d.useState({outlined:"",filled:"",standard:""}),t=(s,c)=>{r(i=>({...i,[s]:c}))};return e.jsxs("div",{className:"space-y-6 w-80",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"不同变体样式"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{label:"Outlined 变体",options:p,placeholder:"选择一个选项",variant:"outlined",value:l.outlined,onChange:s=>t("outlined",s.target.value)}),e.jsx(o,{label:"Filled 变体",options:p,placeholder:"选择一个选项",variant:"filled",value:l.filled,onChange:s=>t("filled",s.target.value)}),e.jsx(o,{label:"Standard 变体",options:p,placeholder:"选择一个选项",variant:"standard",value:l.standard,onChange:s=>t("standard",s.target.value)})]})]})},j=()=>{const[l,r]=d.useState({sm:"",md:"",lg:""}),t=(s,c)=>{r(i=>({...i,[s]:c}))};return e.jsxs("div",{className:"space-y-6 w-80",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"不同尺寸"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{label:"小尺寸 (sm)",options:p,placeholder:"选择选项",size:"sm",value:l.sm,onChange:s=>t("sm",s.target.value)}),e.jsx(o,{label:"中等尺寸 (md)",options:p,placeholder:"选择选项",size:"md",value:l.md,onChange:s=>t("md",s.target.value)}),e.jsx(o,{label:"大尺寸 (lg)",options:p,placeholder:"选择选项",size:"lg",value:l.lg,onChange:s=>t("lg",s.target.value)})]})]})},_=()=>{const[l,r]=d.useState({normal:"",error:"",disabled:"option1",required:""}),t=(s,c)=>{r(i=>({...i,[s]:c}))};return e.jsxs("div",{className:"space-y-6 w-80",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"不同状态"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{label:"正常状态",options:p,placeholder:"选择选项",value:l.normal,onChange:s=>t("normal",s.target.value)}),e.jsx(o,{label:"错误状态",options:p,placeholder:"选择选项",error:!0,helperText:"请选择一个有效选项",value:l.error,onChange:s=>t("error",s.target.value)}),e.jsx(o,{label:"禁用状态",options:p,placeholder:"已禁用",disabled:!0,value:l.disabled,onChange:s=>t("disabled",s.target.value)}),e.jsx(o,{label:"必填字段",options:p,placeholder:"必须选择",required:!0,helperText:"此字段为必填项",value:l.required,onChange:s=>t("required",s.target.value)})]})]})},w=()=>{const[l,r]=d.useState({department:"",position:[],country:"",experience:""}),t=[{label:"技术部",value:"tech"},{label:"产品部",value:"product"},{label:"设计部",value:"design"},{label:"市场部",value:"marketing"}],s=[{label:"前端开发",value:"frontend"},{label:"后端开发",value:"backend"},{label:"全栈开发",value:"fullstack"},{label:"UI设计师",value:"ui"},{label:"UX设计师",value:"ux"},{label:"产品经理",value:"pm"}],c=[{label:"中国",value:"cn"},{label:"美国",value:"us"},{label:"英国",value:"uk"},{label:"加拿大",value:"ca"}],i=[{label:"应届毕业生",value:"fresh"},{label:"1-3年",value:"1-3"},{label:"3-5年",value:"3-5"},{label:"5年以上",value:"5+"}],f=u=>{u.preventDefault(),alert(`表单数据：
`+JSON.stringify(l,null,2))};return e.jsxs("div",{className:"max-w-md",children:[e.jsx("h3",{className:"text-lg font-semibold mb-6",children:"员工信息表单"}),e.jsxs("form",{onSubmit:f,className:"space-y-4",children:[e.jsx(o,{label:"所属部门",options:t,placeholder:"请选择部门",required:!0,value:l.department,onChange:u=>r(v=>({...v,department:u.target.value}))}),e.jsx(o,{label:"职位技能",options:s,placeholder:"选择相关技能",multiple:!0,value:l.position,onChange:u=>r(v=>({...v,position:u.target.value}))}),e.jsx(o,{label:"工作国家",options:c,placeholder:"搜索并选择国家",searchable:!0,value:l.country,onChange:u=>r(v=>({...v,country:u.target.value}))}),e.jsx(o,{label:"工作经验",options:i,placeholder:"选择经验水平",value:l.experience,onChange:u=>r(v=>({...v,experience:u.target.value}))}),e.jsx("button",{type:"submit",className:"w-full mt-6 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors",children:"提交表单"})]})]})};y.__docgenInfo={description:"",methods:[],displayName:"Multiple"};S.__docgenInfo={description:"",methods:[],displayName:"Searchable"};N.__docgenInfo={description:"",methods:[],displayName:"Variants"};j.__docgenInfo={description:"",methods:[],displayName:"Sizes"};_.__docgenInfo={description:"",methods:[],displayName:"States"};w.__docgenInfo={description:"",methods:[],displayName:"FormExample"};var U,M,P;q.parameters={...q.parameters,docs:{...(U=q.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: '选择选项',
    options: basicOptions,
    placeholder: '请选择一个选项',
    size: 'md',
    variant: 'outlined',
    disabled: false,
    required: false,
    multiple: false,
    searchable: false
  },
  render: args => {
    const [selectedValue, setSelectedValue] = useState('');
    return <div className="w-80">\r
        <Select {...args} value={selectedValue} onChange={e => {
        setSelectedValue(e.target.value);
        args.onChange?.(e.target.value);
      }} />\r
        <p className="mt-2 text-sm text-gray-500">\r
          选中值: {selectedValue || '无'}\r
        </p>\r
      </div>;
  }
}`,...(P=(M=q.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var Q,W,X;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  const [selectedValues, setSelectedValues] = useState([]);
  const skillOptions = [{
    label: 'Vue.js',
    value: 'vue'
  }, {
    label: 'React',
    value: 'react'
  }, {
    label: 'Angular',
    value: 'angular'
  }, {
    label: 'JavaScript',
    value: 'javascript'
  }, {
    label: 'TypeScript',
    value: 'typescript'
  }, {
    label: 'Node.js',
    value: 'nodejs'
  }];
  return <div className="w-80">\r
      <Select label="选择技能" options={skillOptions} placeholder="请选择您的技能" multiple={true} size="md" variant="outlined" value={selectedValues} onChange={e => setSelectedValues(e.target.value)} />\r
      <p className="mt-2 text-sm text-gray-500">\r
        已选择: {selectedValues.length} 项\r
      </p>\r
      {selectedValues.length > 0 && <div className="mt-2 flex flex-wrap gap-1">\r
          {selectedValues.map(val => {
        const option = skillOptions.find(opt => opt.value === val);
        return <span key={val} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">\r
                {option?.label}\r
              </span>;
      })}\r
        </div>}\r
    </div>;
}`,...(X=(W=y.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var H,G,K;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const [selectedValue, setSelectedValue] = useState('');
  const countryOptions = [{
    label: '中国',
    value: 'china'
  }, {
    label: '美国',
    value: 'usa'
  }, {
    label: '英国',
    value: 'uk'
  }, {
    label: '法国',
    value: 'france'
  }, {
    label: '德国',
    value: 'germany'
  }, {
    label: '日本',
    value: 'japan'
  }, {
    label: '韩国',
    value: 'korea'
  }, {
    label: '澳大利亚',
    value: 'australia'
  }];
  return <div className="w-80">\r
      <Select label="搜索国家" options={countryOptions} placeholder="搜索并选择国家" searchable={true} size="md" variant="outlined" value={selectedValue} onChange={e => setSelectedValue(e.target.value)} />\r
      <p className="mt-2 text-sm text-gray-500">\r
        选中国家: {countryOptions.find(c => c.value === selectedValue)?.label || '无'}\r
      </p>\r
    </div>;
}`,...(K=(G=S.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Y,Z,B;N.parameters={...N.parameters,docs:{...(Y=N.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  const [values, setValues] = useState({
    outlined: '',
    filled: '',
    standard: ''
  });
  const handleChange = (variant, value) => {
    setValues(prev => ({
      ...prev,
      [variant]: value
    }));
  };
  return <div className="space-y-6 w-80">\r
      <h3 className="text-lg font-semibold">不同变体样式</h3>\r
      \r
      <div className="space-y-4">\r
        <Select label="Outlined 变体" options={basicOptions} placeholder="选择一个选项" variant="outlined" value={values.outlined} onChange={e => handleChange('outlined', e.target.value)} />\r
        \r
        <Select label="Filled 变体" options={basicOptions} placeholder="选择一个选项" variant="filled" value={values.filled} onChange={e => handleChange('filled', e.target.value)} />\r
        \r
        <Select label="Standard 变体" options={basicOptions} placeholder="选择一个选项" variant="standard" value={values.standard} onChange={e => handleChange('standard', e.target.value)} />\r
      </div>\r
    </div>;
}`,...(B=(Z=N.parameters)==null?void 0:Z.docs)==null?void 0:B.source}}};var ee,ae,le;j.parameters={...j.parameters,docs:{...(ee=j.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  const [values, setValues] = useState({
    sm: '',
    md: '',
    lg: ''
  });
  const handleChange = (size, value) => {
    setValues(prev => ({
      ...prev,
      [size]: value
    }));
  };
  return <div className="space-y-6 w-80">\r
      <h3 className="text-lg font-semibold">不同尺寸</h3>\r
      \r
      <div className="space-y-4">\r
        <Select label="小尺寸 (sm)" options={basicOptions} placeholder="选择选项" size="sm" value={values.sm} onChange={e => handleChange('sm', e.target.value)} />\r
        \r
        <Select label="中等尺寸 (md)" options={basicOptions} placeholder="选择选项" size="md" value={values.md} onChange={e => handleChange('md', e.target.value)} />\r
        \r
        <Select label="大尺寸 (lg)" options={basicOptions} placeholder="选择选项" size="lg" value={values.lg} onChange={e => handleChange('lg', e.target.value)} />\r
      </div>\r
    </div>;
}`,...(le=(ae=j.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var se,te,re;_.parameters={..._.parameters,docs:{...(se=_.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  const [values, setValues] = useState({
    normal: '',
    error: '',
    disabled: 'option1',
    required: ''
  });
  const handleChange = (state, value) => {
    setValues(prev => ({
      ...prev,
      [state]: value
    }));
  };
  return <div className="space-y-6 w-80">\r
      <h3 className="text-lg font-semibold">不同状态</h3>\r
      \r
      <div className="space-y-4">\r
        <Select label="正常状态" options={basicOptions} placeholder="选择选项" value={values.normal} onChange={e => handleChange('normal', e.target.value)} />\r
        \r
        <Select label="错误状态" options={basicOptions} placeholder="选择选项" error={true} helperText="请选择一个有效选项" value={values.error} onChange={e => handleChange('error', e.target.value)} />\r
        \r
        <Select label="禁用状态" options={basicOptions} placeholder="已禁用" disabled={true} value={values.disabled} onChange={e => handleChange('disabled', e.target.value)} />\r
        \r
        <Select label="必填字段" options={basicOptions} placeholder="必须选择" required={true} helperText="此字段为必填项" value={values.required} onChange={e => handleChange('required', e.target.value)} />\r
      </div>\r
    </div>;
}`,...(re=(te=_.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ce,oe,ne;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  const [formData, setFormData] = useState({
    department: '',
    position: [],
    country: '',
    experience: ''
  });
  const departments = [{
    label: '技术部',
    value: 'tech'
  }, {
    label: '产品部',
    value: 'product'
  }, {
    label: '设计部',
    value: 'design'
  }, {
    label: '市场部',
    value: 'marketing'
  }];
  const positions = [{
    label: '前端开发',
    value: 'frontend'
  }, {
    label: '后端开发',
    value: 'backend'
  }, {
    label: '全栈开发',
    value: 'fullstack'
  }, {
    label: 'UI设计师',
    value: 'ui'
  }, {
    label: 'UX设计师',
    value: 'ux'
  }, {
    label: '产品经理',
    value: 'pm'
  }];
  const countries = [{
    label: '中国',
    value: 'cn'
  }, {
    label: '美国',
    value: 'us'
  }, {
    label: '英国',
    value: 'uk'
  }, {
    label: '加拿大',
    value: 'ca'
  }];
  const experienceLevels = [{
    label: '应届毕业生',
    value: 'fresh'
  }, {
    label: '1-3年',
    value: '1-3'
  }, {
    label: '3-5年',
    value: '3-5'
  }, {
    label: '5年以上',
    value: '5+'
  }];
  const handleSubmit = e => {
    e.preventDefault();
    alert('表单数据：\\n' + JSON.stringify(formData, null, 2));
  };
  return <div className="max-w-md">\r
      <h3 className="text-lg font-semibold mb-6">员工信息表单</h3>\r
      \r
      <form onSubmit={handleSubmit} className="space-y-4">\r
        <Select label="所属部门" options={departments} placeholder="请选择部门" required={true} value={formData.department} onChange={e => setFormData(prev => ({
        ...prev,
        department: e.target.value
      }))} />\r
        \r
        <Select label="职位技能" options={positions} placeholder="选择相关技能" multiple={true} value={formData.position} onChange={e => setFormData(prev => ({
        ...prev,
        position: e.target.value
      }))} />\r
        \r
        <Select label="工作国家" options={countries} placeholder="搜索并选择国家" searchable={true} value={formData.country} onChange={e => setFormData(prev => ({
        ...prev,
        country: e.target.value
      }))} />\r
        \r
        <Select label="工作经验" options={experienceLevels} placeholder="选择经验水平" value={formData.experience} onChange={e => setFormData(prev => ({
        ...prev,
        experience: e.target.value
      }))} />\r
        \r
        <button type="submit" className="w-full mt-6 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">\r
          提交表单\r
        </button>\r
      </form>\r
    </div>;
}`,...(ne=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};const De=["Primary","Multiple","Searchable","Variants","Sizes","States","FormExample"];export{w as FormExample,y as Multiple,q as Primary,S as Searchable,j as Sizes,_ as States,N as Variants,De as __namedExportsOrder,ze as default};
