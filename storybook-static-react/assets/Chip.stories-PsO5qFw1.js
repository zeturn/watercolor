import{j as e,r as E}from"./iframe-DqwHGwZR.js";import{C as a}from"./Chip-BW0Vt1zS.js";const I={title:"Components/Chip (React)",component:a,parameters:{docs:{description:{component:"水彩设计系统的标签芯片组件，用于显示标签、过滤器或其他简短信息。支持多种样式、尺寸和交互方式。"}}},tags:["autodocs"],argTypes:{label:{description:"芯片显示的文本",control:{type:"text"}},avatar:{description:"头像图片链接",control:{type:"text"}},variant:{description:"芯片样式变体",control:{type:"select"},options:["filled","outlined"]},size:{description:"芯片尺寸",control:{type:"select"},options:["sm","md","lg"]},color:{description:"芯片颜色主题",control:{type:"select"},options:["default","primary","secondary","success","warning","error"]},clickable:{description:"是否可点击",control:{type:"boolean"}},deletable:{description:"是否可删除",control:{type:"boolean"}},disabled:{description:"是否禁用",control:{type:"boolean"}},onClick:{action:"click",description:"点击时触发"},onDelete:{action:"delete",description:"删除时触发"}}},t={args:{label:"标签芯片",variant:"filled",size:"md",color:"primary"}},n={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"填充样式 (Filled)"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{label:"默认",variant:"filled",color:"default"}),e.jsx(a,{label:"主色调",variant:"filled",color:"primary"}),e.jsx(a,{label:"次要",variant:"filled",color:"secondary"}),e.jsx(a,{label:"成功",variant:"filled",color:"success"}),e.jsx(a,{label:"警告",variant:"filled",color:"warning"}),e.jsx(a,{label:"错误",variant:"filled",color:"error"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"轮廓样式 (Outlined)"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{label:"默认",variant:"outlined",color:"default"}),e.jsx(a,{label:"主色调",variant:"outlined",color:"primary"}),e.jsx(a,{label:"次要",variant:"outlined",color:"secondary"}),e.jsx(a,{label:"成功",variant:"outlined",color:"success"}),e.jsx(a,{label:"警告",variant:"outlined",color:"warning"}),e.jsx(a,{label:"错误",variant:"outlined",color:"error"})]})]})]})},o={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"不同尺寸"}),e.jsxs("div",{className:"flex items-center flex-wrap gap-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(a,{label:"小尺寸",size:"sm",color:"primary"}),e.jsx("p",{className:"text-xs mt-2",children:"Small"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{label:"中等尺寸",size:"md",color:"primary"}),e.jsx("p",{className:"text-xs mt-2",children:"Medium"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{label:"大尺寸",size:"lg",color:"primary"}),e.jsx("p",{className:"text-xs mt-2",children:"Large"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"不同样式的尺寸对比"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-16 text-sm",children:"Filled:"}),e.jsx(a,{label:"小",size:"sm",variant:"filled",color:"primary"}),e.jsx(a,{label:"中",size:"md",variant:"filled",color:"primary"}),e.jsx(a,{label:"大",size:"lg",variant:"filled",color:"primary"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-16 text-sm",children:"Outlined:"}),e.jsx(a,{label:"小",size:"sm",variant:"outlined",color:"primary"}),e.jsx(a,{label:"中",size:"md",variant:"outlined",color:"primary"}),e.jsx(a,{label:"大",size:"lg",variant:"outlined",color:"primary"})]})]})]})]})},d={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"带头像的芯片"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{label:"John Doe",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",color:"primary"}),e.jsx(a,{label:"Jane Smith",avatar:"https://images.unsplash.com/photo-1494790108755-2616b612b602?w=50&h=50&fit=crop&crop=face",color:"success"}),e.jsx(a,{label:"Bob Johnson",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",color:"warning"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"不同尺寸的头像芯片"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{label:"小尺寸",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",size:"sm",color:"primary"}),e.jsx(a,{label:"中等尺寸",avatar:"https://images.unsplash.com/photo-1494790108755-2616b612b602?w=50&h=50&fit=crop&crop=face",size:"md",color:"primary"}),e.jsx(a,{label:"大尺寸",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",size:"lg",color:"primary"})]})]})]})},m={render:()=>{const[r,x]=E.useState([{id:1,label:"React",color:"primary"},{id:2,label:"Vue",color:"success"},{id:3,label:"Angular",color:"warning"},{id:4,label:"Svelte",color:"error"}]),h=s=>{console.log("点击了芯片:",s)},v=s=>{x(i=>i.filter(l=>l.id!==s))};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"可点击的芯片"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{label:"可点击",clickable:!0,onClick:()=>h("clickable"),color:"primary"}),e.jsx(a,{label:"不可点击",color:"secondary"}),e.jsx(a,{label:"禁用状态",disabled:!0,color:"warning"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"可删除的芯片 (试试删除它们)"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:r.map(s=>e.jsx(a,{label:s.label,color:s.color,deletable:!0,onDelete:()=>v(s.id)},s.id))})]})]})}},p={render:()=>{const[r,x]=E.useState(["Vue.js","React"]),h=["Vue.js","React","Angular","JavaScript","TypeScript","Node.js"],v=[{name:"JavaScript",level:"expert"},{name:"Vue.js",level:"advanced"},{name:"React",level:"intermediate"},{name:"Node.js",level:"beginner"}],s=l=>({expert:"success",advanced:"primary",intermediate:"warning",beginner:"error"})[l]||"default",i=l=>{x(c=>c.includes(l)?c.filter(O=>O!==l):[...c,l])};return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"标签过滤器"}),e.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"点击标签来切换选择状态"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"可选标签："}),e.jsx("div",{className:"flex flex-wrap gap-2",children:h.map(l=>e.jsx(a,{label:l,variant:r.includes(l)?"filled":"outlined",color:r.includes(l)?"primary":"default",clickable:!0,onClick:()=>i(l)},l))})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"已选择的标签："}),e.jsx("div",{className:"flex flex-wrap gap-2 min-h-[40px] p-2 bg-gray-50 rounded",children:r.length>0?r.map(l=>e.jsx(a,{label:l,color:"primary",deletable:!0,onDelete:()=>i(l)},l+"-selected")):e.jsx("span",{className:"text-gray-500 text-sm self-center",children:"暂未选择标签"})})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"技能等级标签"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:v.map(l=>e.jsx(a,{label:`${l.name} (${l.level})`,color:s(l.level),size:"sm"},l.name))}),e.jsxs("div",{className:"mt-2 text-xs text-gray-600",children:[e.jsx("span",{className:"inline-block mr-4",children:"🟢 Expert"}),e.jsx("span",{className:"inline-block mr-4",children:"🔵 Advanced"}),e.jsx("span",{className:"inline-block mr-4",children:"🟡 Intermediate"}),e.jsx("span",{className:"inline-block mr-4",children:"🔴 Beginner"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"状态标签"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-20 text-sm",children:"任务状态:"}),e.jsx(a,{label:"进行中",color:"primary",size:"sm"}),e.jsx(a,{label:"已完成",color:"success",size:"sm"}),e.jsx(a,{label:"待审核",color:"warning",size:"sm"}),e.jsx(a,{label:"已取消",color:"error",size:"sm"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-20 text-sm",children:"优先级:"}),e.jsx(a,{label:"高",color:"error",variant:"outlined",size:"sm"}),e.jsx(a,{label:"中",color:"warning",variant:"outlined",size:"sm"}),e.jsx(a,{label:"低",color:"success",variant:"outlined",size:"sm"})]})]})]})]})}};var b,g,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: '标签芯片',
    variant: 'filled',
    size: 'md',
    color: 'primary'
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var u,j,N;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">\r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">填充样式 (Filled)</h3>\r
        <div className="flex flex-wrap gap-2">\r
          <Chip label="默认" variant="filled" color="default" />\r
          <Chip label="主色调" variant="filled" color="primary" />\r
          <Chip label="次要" variant="filled" color="secondary" />\r
          <Chip label="成功" variant="filled" color="success" />\r
          <Chip label="警告" variant="filled" color="warning" />\r
          <Chip label="错误" variant="filled" color="error" />\r
        </div>\r
      </div>\r
\r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">轮廓样式 (Outlined)</h3>\r
        <div className="flex flex-wrap gap-2">\r
          <Chip label="默认" variant="outlined" color="default" />\r
          <Chip label="主色调" variant="outlined" color="primary" />\r
          <Chip label="次要" variant="outlined" color="secondary" />\r
          <Chip label="成功" variant="outlined" color="success" />\r
          <Chip label="警告" variant="outlined" color="warning" />\r
          <Chip label="错误" variant="outlined" color="error" />\r
        </div>\r
      </div>\r
    </div>
}`,...(N=(j=n.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var y,C,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">\r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">不同尺寸</h3>\r
        <div className="flex items-center flex-wrap gap-4">\r
          <div className="text-center">\r
            <Chip label="小尺寸" size="sm" color="primary" />\r
            <p className="text-xs mt-2">Small</p>\r
          </div>\r
          <div className="text-center">\r
            <Chip label="中等尺寸" size="md" color="primary" />\r
            <p className="text-xs mt-2">Medium</p>\r
          </div>\r
          <div className="text-center">\r
            <Chip label="大尺寸" size="lg" color="primary" />\r
            <p className="text-xs mt-2">Large</p>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">不同样式的尺寸对比</h3>\r
        <div className="space-y-3">\r
          <div className="flex items-center gap-2">\r
            <span className="w-16 text-sm">Filled:</span>\r
            <Chip label="小" size="sm" variant="filled" color="primary" />\r
            <Chip label="中" size="md" variant="filled" color="primary" />\r
            <Chip label="大" size="lg" variant="filled" color="primary" />\r
          </div>\r
          <div className="flex items-center gap-2">\r
            <span className="w-16 text-sm">Outlined:</span>\r
            <Chip label="小" size="sm" variant="outlined" color="primary" />\r
            <Chip label="中" size="md" variant="outlined" color="primary" />\r
            <Chip label="大" size="lg" variant="outlined" color="primary" />\r
          </div>\r
        </div>\r
      </div>\r
    </div>
}`,...(w=(C=o.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var z,k,S;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">\r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">带头像的芯片</h3>\r
        <div className="flex flex-wrap gap-2">\r
          <Chip label="John Doe" avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face" color="primary" />\r
          <Chip label="Jane Smith" avatar="https://images.unsplash.com/photo-1494790108755-2616b612b602?w=50&h=50&fit=crop&crop=face" color="success" />\r
          <Chip label="Bob Johnson" avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face" color="warning" />\r
        </div>\r
      </div>\r
\r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">不同尺寸的头像芯片</h3>\r
        <div className="flex items-center gap-4">\r
          <Chip label="小尺寸" avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face" size="sm" color="primary" />\r
          <Chip label="中等尺寸" avatar="https://images.unsplash.com/photo-1494790108755-2616b612b602?w=50&h=50&fit=crop&crop=face" size="md" color="primary" />\r
          <Chip label="大尺寸" avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face" size="lg" color="primary" />\r
        </div>\r
      </div>\r
    </div>
}`,...(S=(k=d.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var T,D,J;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [chips, setChips] = useState([{
      id: 1,
      label: 'React',
      color: 'primary'
    }, {
      id: 2,
      label: 'Vue',
      color: 'success'
    }, {
      id: 3,
      label: 'Angular',
      color: 'warning'
    }, {
      id: 4,
      label: 'Svelte',
      color: 'error'
    }]);
    const handleClick = id => {
      console.log('点击了芯片:', id);
    };
    const handleDelete = id => {
      setChips(prev => prev.filter(chip => chip.id !== id));
    };
    return <div className="space-y-6">\r
        <div>\r
          <h3 className="text-lg font-semibold mb-4">可点击的芯片</h3>\r
          <div className="flex flex-wrap gap-2">\r
            <Chip label="可点击" clickable onClick={() => handleClick('clickable')} color="primary" />\r
            <Chip label="不可点击" color="secondary" />\r
            <Chip label="禁用状态" disabled color="warning" />\r
          </div>\r
        </div>\r
\r
        <div>\r
          <h3 className="text-lg font-semibold mb-4">可删除的芯片 (试试删除它们)</h3>\r
          <div className="flex flex-wrap gap-2">\r
            {chips.map(chip => <Chip key={chip.id} label={chip.label} color={chip.color} deletable onDelete={() => handleDelete(chip.id)} />)}\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...(J=(D=m.parameters)==null?void 0:D.docs)==null?void 0:J.source}}};var R,V,A;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    /* 标签过滤器状态 */
    const [selectedTags, setSelectedTags] = useState(['Vue.js', 'React']);
    const availableTags = ['Vue.js', 'React', 'Angular', 'JavaScript', 'TypeScript', 'Node.js'];

    /* 技能列表 */
    const skills = [{
      name: 'JavaScript',
      level: 'expert'
    }, {
      name: 'Vue.js',
      level: 'advanced'
    }, {
      name: 'React',
      level: 'intermediate'
    }, {
      name: 'Node.js',
      level: 'beginner'
    }];

    /* 根据技能等级返回颜色 */
    const skillColor = level => {
      const colors = {
        expert: 'success',
        advanced: 'primary',
        intermediate: 'warning',
        beginner: 'error'
      };
      return colors[level] || 'default';
    };

    /* 切换标签选择 */
    const toggleTag = tag => {
      setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
    };
    return <div className="space-y-8">\r
        {/* 标签过滤器 */}\r
        <div>\r
          <h3 className="text-lg font-semibold mb-4">标签过滤器</h3>\r
          <p className="text-sm text-gray-600 mb-4">点击标签来切换选择状态</p>\r
          <div className="space-y-3">\r
            <div>\r
              <h4 className="text-sm font-medium mb-2">可选标签：</h4>\r
              <div className="flex flex-wrap gap-2">\r
                {availableTags.map(tag => <Chip key={tag} label={tag} variant={selectedTags.includes(tag) ? 'filled' : 'outlined'} color={selectedTags.includes(tag) ? 'primary' : 'default'} clickable onClick={() => toggleTag(tag)} />)}\r
              </div>\r
            </div>\r
            <div>\r
              <h4 className="text-sm font-medium mb-2">已选择的标签：</h4>\r
              <div className="flex flex-wrap gap-2 min-h-[40px] p-2 bg-gray-50 rounded">\r
                {selectedTags.length > 0 ? selectedTags.map(tag => <Chip key={tag + '-selected'} label={tag} color="primary" deletable onDelete={() => toggleTag(tag)} />) : <span className="text-gray-500 text-sm self-center">暂未选择标签</span>}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        {/* 技能等级标签 */}\r
        <div>\r
          <h3 className="text-lg font-semibold mb-4">技能等级标签</h3>\r
          <div className="flex flex-wrap gap-2">\r
            {skills.map(skill => <Chip key={skill.name} label={\`\${skill.name} (\${skill.level})\`} color={skillColor(skill.level)} size="sm" />)}\r
          </div>\r
          <div className="mt-2 text-xs text-gray-600">\r
            <span className="inline-block mr-4">🟢 Expert</span>\r
            <span className="inline-block mr-4">🔵 Advanced</span>\r
            <span className="inline-block mr-4">🟡 Intermediate</span>\r
            <span className="inline-block mr-4">🔴 Beginner</span>\r
          </div>\r
        </div>\r
\r
        {/* 状态标签 */}\r
        <div>\r
          <h3 className="text-lg font-semibold mb-4">状态标签</h3>\r
          <div className="space-y-2">\r
            <div className="flex items-center gap-2">\r
              <span className="w-20 text-sm">任务状态:</span>\r
              <Chip label="进行中" color="primary" size="sm" />\r
              <Chip label="已完成" color="success" size="sm" />\r
              <Chip label="待审核" color="warning" size="sm" />\r
              <Chip label="已取消" color="error" size="sm" />\r
            </div>\r
            <div className="flex items-center gap-2">\r
              <span className="w-20 text-sm">优先级:</span>\r
              <Chip label="高" color="error" variant="outlined" size="sm" />\r
              <Chip label="中" color="warning" variant="outlined" size="sm" />\r
              <Chip label="低" color="success" variant="outlined" size="sm" />\r
            </div>\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...(A=(V=p.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};const $=["Primary","Variants","Sizes","WithAvatars","Interactive","UseCases"];export{m as Interactive,t as Primary,o as Sizes,p as UseCases,n as Variants,d as WithAvatars,$ as __namedExportsOrder,I as default};
