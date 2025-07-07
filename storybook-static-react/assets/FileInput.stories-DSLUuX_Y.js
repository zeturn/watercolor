import{j as e,R as v}from"./iframe-DqwHGwZR.js";import{F as g}from"./FileInput-CNiWgpxC.js";const y={title:"Components/FileInput (React)",component:g,tags:["autodocs"],argTypes:{variant:{control:{type:"radio"},options:["block","button","icon"],description:"组件变体"},accept:{control:"text",description:"接受的文件类型"},multiple:{control:"boolean",description:"是否支持多文件上传"},onChange:{action:"changed",description:"文件选择变化时触发"},onInvalid:{action:"invalid",description:"选择的文件类型不匹配时触发"}}},h=s=>{const c=a=>{console.log("文件已选择:",a),s.onChange(a)},o=a=>{alert(`无效文件: ${[...a].map(d=>d.name).join(", ")}`),s.onInvalid(a)};return e.jsx("div",{className:"p-8 max-w-md",children:e.jsx(g,{...s,onChange:c,onInvalid:o})})},r=h.bind({});r.args={variant:"block",label:"拖拽或点击上传",accept:".png,.jpg"};const t=h.bind({});t.args={variant:"button",label:"上传文件",accept:"image/*",multiple:!0};const l=h.bind({});l.args={variant:"icon",accept:"application/pdf"};const i={render:()=>{const[s,c]=v.useState([]),[o,a]=v.useState(""),d=n=>{const m=[...n].map(p=>p.name).join(", ");a(`文件类型无效: ${m}`)},L=n=>{c(Array.from(n)),a("")};return e.jsxs("div",{className:"p-8 max-w-lg space-y-4",children:[e.jsx(g,{variant:"block",label:"上传图片以预览",accept:"image/*",multiple:!0,onChange:L,onInvalid:d}),o&&e.jsx("div",{className:"text-red-500 text-sm",children:o}),s.length>0&&e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2",children:"预览:"}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4",children:s.map((n,m)=>e.jsxs("div",{className:"relative aspect-square border rounded-lg overflow-hidden",children:[e.jsx("img",{src:URL.createObjectURL(n),alt:n.name,className:"w-full h-full object-cover",onLoad:p=>URL.revokeObjectURL(p.target.src)}),e.jsx("div",{className:"absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-1 truncate",children:n.name})]},m))})]})]})}};var u,f,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const handleChange = files => {
    console.log('文件已选择:', files);
    args.onChange(files);
  };
  const handleInvalid = files => {
    alert(\`无效文件: \${[...files].map(f => f.name).join(', ')}\`);
    args.onInvalid(files);
  };
  return <div className='p-8 max-w-md'>\r
      <FileInput {...args} onChange={handleChange} onInvalid={handleInvalid} />\r
    </div>;
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,I,j;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  const handleChange = files => {
    console.log('文件已选择:', files);
    args.onChange(files);
  };
  const handleInvalid = files => {
    alert(\`无效文件: \${[...files].map(f => f.name).join(', ')}\`);
    args.onInvalid(files);
  };
  return <div className='p-8 max-w-md'>\r
      <FileInput {...args} onChange={handleChange} onInvalid={handleInvalid} />\r
    </div>;
}`,...(j=(I=t.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var C,N,w;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  const handleChange = files => {
    console.log('文件已选择:', files);
    args.onChange(files);
  };
  const handleInvalid = files => {
    alert(\`无效文件: \${[...files].map(f => f.name).join(', ')}\`);
    args.onInvalid(files);
  };
  return <div className='p-8 max-w-md'>\r
      <FileInput {...args} onChange={handleChange} onInvalid={handleInvalid} />\r
    </div>;
}`,...(w=(N=l.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var F,R,k;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [files, setFiles] = React.useState([]);
    const [error, setError] = React.useState('');
    const handleInvalid = invalidFiles => {
      const names = [...invalidFiles].map(f => f.name).join(', ');
      setError(\`文件类型无效: \${names}\`);
    };
    const handleChange = newFiles => {
      setFiles(Array.from(newFiles));
      setError('');
    };
    return <div className="p-8 max-w-lg space-y-4">\r
        <FileInput variant="block" label="上传图片以预览" accept="image/*" multiple onChange={handleChange} onInvalid={handleInvalid} />\r
        {error && <div className="text-red-500 text-sm">{error}</div>}\r
        {files.length > 0 && <div>\r
            <h4 className="font-semibold mb-2">预览:</h4>\r
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">\r
              {files.map((file, index) => <div key={index} className="relative aspect-square border rounded-lg overflow-hidden">\r
                  <img src={URL.createObjectURL(file)} alt={file.name} className="w-full h-full object-cover" onLoad={e => URL.revokeObjectURL(e.target.src)} />\r
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-1 truncate">\r
                    {file.name}\r
                  </div>\r
                </div>)}\r
            </div>\r
          </div>}\r
      </div>;
  }
}`,...(k=(R=i.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};const E=["Block","Button","Icon","WithPreview"];export{r as Block,t as Button,l as Icon,i as WithPreview,E as __namedExportsOrder,y as default};
