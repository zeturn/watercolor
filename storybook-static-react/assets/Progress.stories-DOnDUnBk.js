import{j as e,r as d}from"./iframe-DqwHGwZR.js";import{P as l}from"./Progress-B9rE8c6e.js";const F={title:"Components/Progress (React)",component:l,parameters:{layout:"centered",docs:{description:{component:"Watercolor 进度条组件，支持多种颜色、尺寸和动画效果。"}}},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"进度值（0-100）"},color:{control:{type:"select"},options:["primary","success","warning","error","purple","orange","cyan","pink"],description:"进度条颜色"},size:{control:{type:"select"},options:["sm","md","lg"],description:"进度条尺寸"},showPercent:{control:"boolean",description:"显示百分比"},animated:{control:"boolean",description:"动画效果"},label:{control:"text",description:"标签文本"},className:{control:"text",description:"自定义CSS类名"}}},x={args:{value:65,color:"primary",size:"md",showPercent:!0,animated:!1,label:"完成进度"},render:r=>e.jsx("div",{style:{width:"400px"},children:e.jsx(l,{...r})})},u=()=>{const r=[{color:"primary",value:75,label:"主色调"},{color:"success",value:60,label:"成功色"},{color:"warning",value:45,label:"警告色"},{color:"error",value:30,label:"错误色"},{color:"purple",value:85,label:"紫色"},{color:"orange",value:70,label:"橙色"},{color:"cyan",value:55,label:"青色"},{color:"pink",value:40,label:"粉色"}];return e.jsx("div",{style:{width:"400px",display:"flex",flexDirection:"column",gap:"1rem"},children:r.map(({color:s,value:t,label:n})=>e.jsx(l,{value:t,color:s,label:n,showPercent:!0},s))})},p=()=>{const r=[{size:"sm",label:"小尺寸"},{size:"md",label:"中尺寸"},{size:"lg",label:"大尺寸"}];return e.jsx("div",{style:{width:"400px",display:"flex",flexDirection:"column",gap:"1rem"},children:r.map(({size:s,label:t})=>e.jsx(l,{value:65,size:s,label:t,showPercent:!0},s))})},m=()=>{const r=[{value:45,color:"primary",label:"正在加载..."},{value:75,color:"success",label:"上传中..."},{value:30,color:"warning",label:"处理中..."}];return e.jsx("div",{style:{width:"400px",display:"flex",flexDirection:"column",gap:"1rem"},children:r.map(({value:s,color:t,label:n},a)=>e.jsx(l,{value:s,color:t,label:n,animated:!0,showPercent:!0},a))})},g=()=>{const[r,s]=d.useState(0),[t,n]=d.useState(!1);d.useEffect(()=>{let c;return t&&r<100&&(c=setInterval(()=>{s(o=>{const i=o+Math.random()*5;return i>=100?(n(!1),100):i})},200)),()=>clearInterval(c)},[t,r]);const a=()=>{s(0),n(!0)},h=()=>{n(!1),s(0)};return e.jsxs("div",{style:{width:"400px",display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(l,{value:r,color:"primary",label:"任务执行进度",showPercent:!0,animated:t}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:a,disabled:t,className:"px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600",children:t?"执行中...":"开始任务"}),e.jsx("button",{onClick:h,className:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"重置"})]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["状态: ",r>=100?"已完成":t?"执行中":"待开始"]})]})},v=()=>{const[r,s]=d.useState(0),[t,n]=d.useState(0),a=[{name:"准备数据",color:"primary"},{name:"处理文件",color:"warning"},{name:"验证结果",color:"purple"},{name:"完成",color:"success"}];d.useEffect(()=>{const c=setInterval(()=>{n(o=>o>=100?r<a.length-1?(s(r+1),0):100:o+Math.random()*10)},300);return()=>clearInterval(c)},[r]);const h=(r*100+t)/a.length;return e.jsxs("div",{style:{width:"400px",display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"多步骤处理流程"}),e.jsx(l,{value:h,color:"primary",label:"总体进度",showPercent:!0,size:"lg"})]}),e.jsx("div",{className:"space-y-3",children:a.map((c,o)=>{const i=o===r,y=o<r,O=i?t:y?100:0;return e.jsxs("div",{className:`p-3 rounded border ${i?"border-blue-200 bg-blue-50":"border-gray-200"}`,children:[e.jsx(l,{value:O,color:c.color,label:`${o+1}. ${c.name}`,showPercent:!0,animated:i}),e.jsx("div",{className:"mt-2 text-xs text-gray-500",children:y?"✅ 已完成":i?"🔄 进行中":"⏳ 等待中"})]},o)})}),e.jsx("button",{onClick:()=>{s(0),n(0)},className:"w-full py-2 bg-gray-500 text-white rounded hover:bg-gray-600",children:"重新开始"})]})},b=()=>{const r=[{label:"内存使用率",value:68,color:"primary",unit:"GB"},{label:"CPU 负载",value:45,color:"success",unit:"%"},{label:"磁盘空间",value:82,color:"warning",unit:"TB"},{label:"网络带宽",value:34,color:"purple",unit:"Mbps"}];return e.jsx("div",{style:{width:"400px",display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:r.map((s,t)=>e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-sm mb-2",children:s.label}),e.jsx(l,{value:s.value,color:s.color,showPercent:!0,size:"sm",animated:!0}),e.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:[s.value,"% of ",s.unit]})]},t))})};u.__docgenInfo={description:"",methods:[],displayName:"Colors"};p.__docgenInfo={description:"",methods:[],displayName:"Sizes"};m.__docgenInfo={description:"",methods:[],displayName:"Animated"};g.__docgenInfo={description:"",methods:[],displayName:"InteractiveDemo"};v.__docgenInfo={description:"",methods:[],displayName:"MultiStepProcess"};b.__docgenInfo={description:"",methods:[],displayName:"DashboardStats"};var f,P,w;x.parameters={...x.parameters,docs:{...(f=x.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: 65,
    color: 'primary',
    size: 'md',
    showPercent: true,
    animated: false,
    label: '完成进度'
  },
  render: args => <div style={{
    width: '400px'
  }}>\r
      <Progress {...args} />\r
    </div>
}`,...(w=(P=x.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var S,N,j;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const colors = [{
    color: 'primary',
    value: 75,
    label: '主色调'
  }, {
    color: 'success',
    value: 60,
    label: '成功色'
  }, {
    color: 'warning',
    value: 45,
    label: '警告色'
  }, {
    color: 'error',
    value: 30,
    label: '错误色'
  }, {
    color: 'purple',
    value: 85,
    label: '紫色'
  }, {
    color: 'orange',
    value: 70,
    label: '橙色'
  }, {
    color: 'cyan',
    value: 55,
    label: '青色'
  }, {
    color: 'pink',
    value: 40,
    label: '粉色'
  }];
  return <div style={{
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      {colors.map(({
      color,
      value,
      label
    }) => <Progress key={color} value={value} color={color} label={label} showPercent />)}\r
    </div>;
}`,...(j=(N=u.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var I,C,z;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const sizes = [{
    size: 'sm',
    label: '小尺寸'
  }, {
    size: 'md',
    label: '中尺寸'
  }, {
    size: 'lg',
    label: '大尺寸'
  }];
  return <div style={{
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      {sizes.map(({
      size,
      label
    }) => <Progress key={size} value={65} size={size} label={label} showPercent />)}\r
    </div>;
}`,...(z=(C=p.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var D,R,_;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const progressItems = [{
    value: 45,
    color: 'primary',
    label: '正在加载...'
  }, {
    value: 75,
    color: 'success',
    label: '上传中...'
  }, {
    value: 30,
    color: 'warning',
    label: '处理中...'
  }];
  return <div style={{
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      {progressItems.map(({
      value,
      color,
      label
    }, index) => <Progress key={index} value={value} color={color} label={label} animated showPercent />)}\r
    </div>;
}`,...(_=(R=m.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var k,A,M;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (isRunning && progress < 100) {
      interval = setInterval(() => {
        setProgress(prev => {
          const next = prev + Math.random() * 5;
          if (next >= 100) {
            setIsRunning(false);
            return 100;
          }
          return next;
        });
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isRunning, progress]);
  const startProgress = () => {
    setProgress(0);
    setIsRunning(true);
  };
  const resetProgress = () => {
    setIsRunning(false);
    setProgress(0);
  };
  return <div style={{
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Progress value={progress} color="primary" label="任务执行进度" showPercent animated={isRunning} />\r
      \r
      <div className="flex space-x-2">\r
        <button onClick={startProgress} disabled={isRunning} className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600">\r
          {isRunning ? '执行中...' : '开始任务'}\r
        </button>\r
        \r
        <button onClick={resetProgress} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">\r
          重置\r
        </button>\r
      </div>\r
      \r
      <p className="text-sm text-gray-600">\r
        状态: {progress >= 100 ? '已完成' : isRunning ? '执行中' : '待开始'}\r
      </p>\r
    </div>;
}`,...(M=(A=g.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var E,$,T;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepProgress, setStepProgress] = useState(0);
  const steps = [{
    name: '准备数据',
    color: 'primary'
  }, {
    name: '处理文件',
    color: 'warning'
  }, {
    name: '验证结果',
    color: 'purple'
  }, {
    name: '完成',
    color: 'success'
  }];
  useEffect(() => {
    const interval = setInterval(() => {
      setStepProgress(prev => {
        if (prev >= 100) {
          if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
            return 0;
          }
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 300);
    return () => clearInterval(interval);
  }, [currentStep]);
  const overallProgress = (currentStep * 100 + stepProgress) / steps.length;
  return <div style={{
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">多步骤处理流程</h3>\r
        \r
        <Progress value={overallProgress} color="primary" label="总体进度" showPercent size="lg" />\r
      </div>\r
\r
      <div className="space-y-3">\r
        {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;
        const progress = isActive ? stepProgress : isCompleted ? 100 : 0;
        return <div key={index} className={\`p-3 rounded border \${isActive ? 'border-blue-200 bg-blue-50' : 'border-gray-200'}\`}>\r
              <Progress value={progress} color={step.color} label={\`\${index + 1}. \${step.name}\`} showPercent animated={isActive} />\r
              \r
              <div className="mt-2 text-xs text-gray-500">\r
                {isCompleted ? '✅ 已完成' : isActive ? '🔄 进行中' : '⏳ 等待中'}\r
              </div>\r
            </div>;
      })}\r
      </div>\r
\r
      <button onClick={() => {
      setCurrentStep(0);
      setStepProgress(0);
    }} className="w-full py-2 bg-gray-500 text-white rounded hover:bg-gray-600">\r
        重新开始\r
      </button>\r
    </div>;
}`,...(T=($=v.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};var B,G,U;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const stats = [{
    label: '内存使用率',
    value: 68,
    color: 'primary',
    unit: 'GB'
  }, {
    label: 'CPU 负载',
    value: 45,
    color: 'success',
    unit: '%'
  }, {
    label: '磁盘空间',
    value: 82,
    color: 'warning',
    unit: 'TB'
  }, {
    label: '网络带宽',
    value: 34,
    color: 'purple',
    unit: 'Mbps'
  }];
  return <div style={{
    width: '400px',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem'
  }}>\r
      {stats.map((stat, index) => <div key={index} className="p-4 border rounded-lg">\r
          <h4 className="font-semibold text-sm mb-2">{stat.label}</h4>\r
          <Progress value={stat.value} color={stat.color} showPercent size="sm" animated />\r
          <p className="text-xs text-gray-500 mt-1">\r
            {stat.value}% of {stat.unit}\r
          </p>\r
        </div>)}\r
    </div>;
}`,...(U=(G=b.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};const H=["Default","Colors","Sizes","Animated","InteractiveDemo","MultiStepProcess","DashboardStats"];export{m as Animated,u as Colors,b as DashboardStats,x as Default,g as InteractiveDemo,v as MultiStepProcess,p as Sizes,H as __namedExportsOrder,F as default};
