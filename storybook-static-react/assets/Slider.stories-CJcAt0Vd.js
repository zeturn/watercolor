import{r as i,j as e}from"./iframe-DqwHGwZR.js";import{S as n}from"./Slider-Bh02X0AY.js";const O={title:"Components/Slider (React)",component:n,parameters:{layout:"centered",docs:{description:{component:"Watercolor 滑块组件，支持连续值选择、步长设置、值标签显示等功能。"}}},tags:["autodocs"],argTypes:{value:{description:"滑块的当前值",control:{type:"number"}},min:{description:"最小值",control:{type:"number"}},max:{description:"最大值",control:{type:"number"}},step:{description:"步长",control:{type:"number"}},label:{description:"标签文本",control:{type:"text"}},disabled:{description:"是否禁用",control:{type:"boolean"}},valueLabelDisplay:{control:{type:"select"},options:["off","on","auto"],description:"值标签的显示方式"},onChange:{action:"change",description:"值改变时触发"}}},b={args:{value:50,min:0,max:100,step:1,label:"音量",valueLabelDisplay:"on",disabled:!1},render:a=>{const[r,l]=i.useState(a.value);return e.jsxs("div",{className:"w-80",children:[e.jsx(n,{...a,value:r,onChange:s=>{var t;l(s),(t=a.onChange)==null||t.call(a,s)}}),e.jsxs("p",{className:"mt-2 text-sm text-gray-500",children:["当前值: ",r]})]})}},m=()=>{const[a,r]=i.useState(20);return e.jsxs("div",{className:"w-80",children:[e.jsx(n,{value:a,min:-10,max:40,step:.5,label:"温度 (°C)",valueLabelDisplay:"on",onChange:r}),e.jsxs("div",{className:"mt-4 p-3 bg-gray-50 rounded",children:[e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"当前温度:"})," ",a,"°C"]}),e.jsx("p",{className:"text-xs text-gray-600 mt-1",children:a<0?"❄️ 非常寒冷":a<10?"🥶 寒冷":a<25?"😊 温和":a<35?"🌞 温暖":"🔥 炎热"})]})]})},d=()=>{const[a,r]=i.useState(30);return e.jsxs("div",{className:"w-80",children:[e.jsx(n,{value:a,min:0,max:100,step:1,label:"禁用滑块",valueLabelDisplay:"on",disabled:!0,onChange:r}),e.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"禁用状态下无法交互"})]})},c=()=>{const[a,r]=i.useState({fine:50,coarse:50,marks:50}),l=(s,t)=>{r(o=>({...o,[s]:t}))};return e.jsxs("div",{className:"space-y-6 w-80",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"不同步长"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{value:a.fine,min:0,max:100,step:1,label:"精细步长 (step=1)",valueLabelDisplay:"on",onChange:s=>l("fine",s)}),e.jsx(n,{value:a.coarse,min:0,max:100,step:10,label:"粗粒度步长 (step=10)",valueLabelDisplay:"on",onChange:s=>l("coarse",s)}),e.jsx(n,{value:a.marks,min:0,max:100,step:25,label:"标记步长 (step=25)",valueLabelDisplay:"on",onChange:s=>l("marks",s)})]})]})},u=()=>{const[a,r]=i.useState({off:30,on:60,auto:45}),l=(s,t)=>{r(o=>({...o,[s]:t}))};return e.jsxs("div",{className:"space-y-6 w-80",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"值标签显示模式"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{value:a.off,min:0,max:100,step:1,label:"隐藏标签 (off)",valueLabelDisplay:"off",onChange:s=>l("off",s)}),e.jsx(n,{value:a.on,min:0,max:100,step:1,label:"始终显示 (on)",valueLabelDisplay:"on",onChange:s=>l("on",s)}),e.jsx(n,{value:a.auto,min:0,max:100,step:1,label:"自动显示 (auto)",valueLabelDisplay:"auto",onChange:s=>l("auto",s)})]})]})},p=()=>{const[a,r]=i.useState({volume:75,brightness:80,bass:40,treble:60,balance:50}),l=(s,t)=>{r(o=>({...o,[s]:t}))};return e.jsxs("div",{className:"max-w-md",children:[e.jsx("h3",{className:"text-lg font-semibold mb-6",children:"🎵 音频控制面板"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-4",children:"主音量控制"}),e.jsx(n,{value:a.volume,min:0,max:100,step:1,label:`音量: ${a.volume}%`,valueLabelDisplay:"on",onChange:s=>l("volume",s)})]}),e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-4",children:"显示设置"}),e.jsx(n,{value:a.brightness,min:10,max:100,step:5,label:`亮度: ${a.brightness}%`,valueLabelDisplay:"on",onChange:s=>l("brightness",s)})]}),e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-4",children:"音频均衡器"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{value:a.bass,min:0,max:100,step:1,label:"低音",valueLabelDisplay:"on",onChange:s=>l("bass",s)}),e.jsx(n,{value:a.treble,min:0,max:100,step:1,label:"高音",valueLabelDisplay:"on",onChange:s=>l("treble",s)}),e.jsx(n,{value:a.balance,min:0,max:100,step:1,label:"平衡 (L-R)",valueLabelDisplay:"on",onChange:s=>l("balance",s)})]})]}),e.jsxs("div",{className:"mt-6 p-4 bg-gray-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-2",children:"当前设置"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("p",{children:["🔊 音量: ",a.volume,"%"]}),e.jsxs("p",{children:["💡 亮度: ",a.brightness,"%"]}),e.jsxs("p",{children:["🎚️ 低音: ",a.bass,", 高音: ",a.treble]}),e.jsxs("p",{children:["⚖️ 声道平衡: ",a.balance<50?"偏左":a.balance>50?"偏右":"居中"]})]})]})]})]})},v=()=>{const[a,r]=i.useState({min:100,max:500});return e.jsxs("div",{className:"w-80",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"💰 价格范围选择"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{value:a.min,min:0,max:1e3,step:10,label:"最低价格",valueLabelDisplay:"on",onChange:l=>r(s=>({...s,min:Math.min(l,s.max-10)}))}),e.jsx(n,{value:a.max,min:0,max:1e3,step:10,label:"最高价格",valueLabelDisplay:"on",onChange:l=>r(s=>({...s,max:Math.max(l,s.min+10)}))})]}),e.jsxs("div",{className:"mt-4 p-3 bg-blue-50 border border-blue-200 rounded",children:[e.jsxs("p",{className:"text-sm font-medium text-blue-800",children:["价格范围: ¥",a.min," - ¥",a.max]}),e.jsxs("p",{className:"text-xs text-blue-600",children:["价格区间: ¥",a.max-a.min]})]})]})};m.__docgenInfo={description:"",methods:[],displayName:"Temperature"};d.__docgenInfo={description:"",methods:[],displayName:"Disabled"};c.__docgenInfo={description:"",methods:[],displayName:"StepSizes"};u.__docgenInfo={description:"",methods:[],displayName:"ValueLabelDisplay"};p.__docgenInfo={description:"",methods:[],displayName:"ControlPanel"};v.__docgenInfo={description:"",methods:[],displayName:"PriceRange"};var h,g,x;b.parameters={...b.parameters,docs:{...(h=b.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    label: '音量',
    valueLabelDisplay: 'on',
    disabled: false
  },
  render: args => {
    const [sliderValue, setSliderValue] = useState(args.value);
    return <div className="w-80">\r
        <Slider {...args} value={sliderValue} onChange={value => {
        setSliderValue(value);
        args.onChange?.(value);
      }} />\r
        <p className="mt-2 text-sm text-gray-500">\r
          当前值: {sliderValue}\r
        </p>\r
      </div>;
  }
}`,...(x=(g=b.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,N,C;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [temperature, setTemperature] = useState(20);
  return <div className="w-80">\r
      <Slider value={temperature} min={-10} max={40} step={0.5} label="温度 (°C)" valueLabelDisplay="on" onChange={setTemperature} />\r
      <div className="mt-4 p-3 bg-gray-50 rounded">\r
        <p className="text-sm">\r
          <strong>当前温度:</strong> {temperature}°C\r
        </p>\r
        <p className="text-xs text-gray-600 mt-1">\r
          {temperature < 0 ? '❄️ 非常寒冷' : temperature < 10 ? '🥶 寒冷' : temperature < 25 ? '😊 温和' : temperature < 35 ? '🌞 温暖' : '🔥 炎热'}\r
        </p>\r
      </div>\r
    </div>;
}`,...(C=(N=m.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var f,j,S;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [sliderValue, setSliderValue] = useState(30);
  return <div className="w-80">\r
      <Slider value={sliderValue} min={0} max={100} step={1} label="禁用滑块" valueLabelDisplay="on" disabled={true} onChange={setSliderValue} />\r
      <p className="mt-2 text-sm text-gray-500">\r
        禁用状态下无法交互\r
      </p>\r
    </div>;
}`,...(S=(j=d.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var D,L,V;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const [values, setValues] = useState({
    fine: 50,
    coarse: 50,
    marks: 50
  });
  const handleChange = (key, value) => {
    setValues(prev => ({
      ...prev,
      [key]: value
    }));
  };
  return <div className="space-y-6 w-80">\r
      <h3 className="text-lg font-semibold">不同步长</h3>\r
      \r
      <div className="space-y-4">\r
        <Slider value={values.fine} min={0} max={100} step={1} label="精细步长 (step=1)" valueLabelDisplay="on" onChange={value => handleChange('fine', value)} />\r
        \r
        <Slider value={values.coarse} min={0} max={100} step={10} label="粗粒度步长 (step=10)" valueLabelDisplay="on" onChange={value => handleChange('coarse', value)} />\r
        \r
        <Slider value={values.marks} min={0} max={100} step={25} label="标记步长 (step=25)" valueLabelDisplay="on" onChange={value => handleChange('marks', value)} />\r
      </div>\r
    </div>;
}`,...(V=(L=c.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var R,_,w;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const [values, setValues] = useState({
    off: 30,
    on: 60,
    auto: 45
  });
  const handleChange = (key, value) => {
    setValues(prev => ({
      ...prev,
      [key]: value
    }));
  };
  return <div className="space-y-6 w-80">\r
      <h3 className="text-lg font-semibold">值标签显示模式</h3>\r
      \r
      <div className="space-y-4">\r
        <Slider value={values.off} min={0} max={100} step={1} label="隐藏标签 (off)" valueLabelDisplay="off" onChange={value => handleChange('off', value)} />\r
        \r
        <Slider value={values.on} min={0} max={100} step={1} label="始终显示 (on)" valueLabelDisplay="on" onChange={value => handleChange('on', value)} />\r
        \r
        <Slider value={values.auto} min={0} max={100} step={1} label="自动显示 (auto)" valueLabelDisplay="auto" onChange={value => handleChange('auto', value)} />\r
      </div>\r
    </div>;
}`,...(w=(_=u.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var k,P,T;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [settings, setSettings] = useState({
    volume: 75,
    brightness: 80,
    bass: 40,
    treble: 60,
    balance: 50
  });
  const handleChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };
  return <div className="max-w-md">\r
      <h3 className="text-lg font-semibold mb-6">🎵 音频控制面板</h3>\r
      \r
      <div className="space-y-6">\r
        <div className="p-4 border rounded-lg">\r
          <h4 className="font-medium mb-4">主音量控制</h4>\r
          <Slider value={settings.volume} min={0} max={100} step={1} label={\`音量: \${settings.volume}%\`} valueLabelDisplay="on" onChange={value => handleChange('volume', value)} />\r
        </div>\r
\r
        <div className="p-4 border rounded-lg">\r
          <h4 className="font-medium mb-4">显示设置</h4>\r
          <Slider value={settings.brightness} min={10} max={100} step={5} label={\`亮度: \${settings.brightness}%\`} valueLabelDisplay="on" onChange={value => handleChange('brightness', value)} />\r
        </div>\r
\r
        <div className="p-4 border rounded-lg">\r
          <h4 className="font-medium mb-4">音频均衡器</h4>\r
          <div className="space-y-4">\r
            <Slider value={settings.bass} min={0} max={100} step={1} label="低音" valueLabelDisplay="on" onChange={value => handleChange('bass', value)} />\r
            \r
            <Slider value={settings.treble} min={0} max={100} step={1} label="高音" valueLabelDisplay="on" onChange={value => handleChange('treble', value)} />\r
            \r
            <Slider value={settings.balance} min={0} max={100} step={1} label="平衡 (L-R)" valueLabelDisplay="on" onChange={value => handleChange('balance', value)} />\r
          </div>\r
        </div>\r
\r
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">\r
          <h4 className="font-medium mb-2">当前设置</h4>\r
          <div className="text-sm space-y-1">\r
            <p>🔊 音量: {settings.volume}%</p>\r
            <p>💡 亮度: {settings.brightness}%</p>\r
            <p>🎚️ 低音: {settings.bass}, 高音: {settings.treble}</p>\r
            <p>⚖️ 声道平衡: {settings.balance < 50 ? '偏左' : settings.balance > 50 ? '偏右' : '居中'}</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>;
}`,...(T=(P=p.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var I,M,$;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [priceRange, setPriceRange] = useState({
    min: 100,
    max: 500
  });
  return <div className="w-80">\r
      <h3 className="text-lg font-semibold mb-4">💰 价格范围选择</h3>\r
      \r
      <div className="space-y-4">\r
        <Slider value={priceRange.min} min={0} max={1000} step={10} label="最低价格" valueLabelDisplay="on" onChange={value => setPriceRange(prev => ({
        ...prev,
        min: Math.min(value, prev.max - 10)
      }))} />\r
        \r
        <Slider value={priceRange.max} min={0} max={1000} step={10} label="最高价格" valueLabelDisplay="on" onChange={value => setPriceRange(prev => ({
        ...prev,
        max: Math.max(value, prev.min + 10)
      }))} />\r
      </div>\r
\r
      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">\r
        <p className="text-sm font-medium text-blue-800">\r
          价格范围: ¥{priceRange.min} - ¥{priceRange.max}\r
        </p>\r
        <p className="text-xs text-blue-600">\r
          价格区间: ¥{priceRange.max - priceRange.min}\r
        </p>\r
      </div>\r
    </div>;
}`,...($=(M=v.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};const W=["Primary","Temperature","Disabled","StepSizes","ValueLabelDisplay","ControlPanel","PriceRange"];export{p as ControlPanel,d as Disabled,v as PriceRange,b as Primary,c as StepSizes,m as Temperature,u as ValueLabelDisplay,W as __namedExportsOrder,O as default};
