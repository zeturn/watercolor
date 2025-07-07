import{j as e,r as g}from"./iframe-DqwHGwZR.js";import{S as a}from"./Spinner-Ch0hu4qh.js";const J={title:"Components/Spinner (React)",component:a,parameters:{layout:"centered",docs:{description:{component:"Watercolor 旋转加载指示器，支持尺寸、颜色、粗细自定义。"}}},tags:["autodocs"],argTypes:{size:{control:{type:"number",min:16,max:100,step:4},description:"旋转器尺寸"},color:{control:"color",description:"旋转器颜色"},thickness:{control:{type:"number",min:1,max:8,step:1},description:"边框粗细"},className:{control:"text",description:"自定义CSS类名"}}},h={args:{size:40,color:"#3b82f6",thickness:4},render:s=>e.jsx("div",{className:"p-8",children:e.jsx(a,{...s})})},c=()=>{const s=[16,24,32,48,64,80];return e.jsx("div",{className:"flex items-center space-x-8 p-8",children:s.map(r=>e.jsxs("div",{className:"text-center",children:[e.jsx(a,{size:r,color:"#3b82f6",thickness:3}),e.jsxs("p",{className:"mt-2 text-xs text-gray-500",children:[r,"px"]})]},r))})},o=()=>{const s=[{name:"蓝色",color:"#3b82f6"},{name:"绿色",color:"#10b981"},{name:"红色",color:"#ef4444"},{name:"黄色",color:"#f59e0b"},{name:"紫色",color:"#8b5cf6"},{name:"粉色",color:"#ec4899"},{name:"青色",color:"#06b6d4"},{name:"橙色",color:"#f97316"}];return e.jsx("div",{className:"grid grid-cols-4 gap-6 p-8",children:s.map(({name:r,color:t})=>e.jsxs("div",{className:"text-center",children:[e.jsx(a,{size:40,color:t,thickness:4}),e.jsx("p",{className:"mt-2 text-sm font-medium",children:r}),e.jsx("p",{className:"text-xs text-gray-500",children:t})]},r))})},m=()=>{const s=[1,2,3,4,5,6];return e.jsx("div",{className:"flex items-center space-x-8 p-8",children:s.map(r=>e.jsxs("div",{className:"text-center",children:[e.jsx(a,{size:48,color:"#3b82f6",thickness:r}),e.jsxs("p",{className:"mt-2 text-xs text-gray-500",children:[r,"px"]})]},r))})},p=()=>{const[s,r]=g.useState({button:!1,page:!1,form:!1,data:!1}),t=(l,d=2e3)=>{r(n=>({...n,[l]:!0})),setTimeout(()=>{r(n=>({...n,[l]:!1}))},d)};return e.jsxs("div",{className:"space-y-8 p-8 max-w-md",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"加载状态演示"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium mb-2",children:"按钮加载状态"}),e.jsxs("button",{onClick:()=>t("button"),disabled:s.button,className:"flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50",children:[s.button&&e.jsx(a,{size:16,color:"white",thickness:2}),e.jsx("span",{children:s.button?"加载中...":"点击加载"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium mb-2",children:"页面加载状态"}),e.jsx("div",{className:"border rounded p-4 h-32 flex items-center justify-center bg-gray-50",children:s.page?e.jsxs("div",{className:"text-center",children:[e.jsx(a,{size:32,color:"#3b82f6",thickness:3}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"页面加载中..."})]}):e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-gray-600 mb-2",children:"内容已加载完成"}),e.jsx("button",{onClick:()=>t("page",3e3),className:"text-blue-500 hover:text-blue-700 text-sm",children:"重新加载"})]})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium mb-2",children:"表单提交状态"}),e.jsx("div",{className:"border rounded p-4",children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("input",{type:"text",placeholder:"用户名",className:"w-full px-3 py-2 border rounded",disabled:s.form}),e.jsx("input",{type:"password",placeholder:"密码",className:"w-full px-3 py-2 border rounded",disabled:s.form}),e.jsxs("button",{onClick:()=>t("form"),disabled:s.form,className:"w-full flex items-center justify-center space-x-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50",children:[s.form&&e.jsx(a,{size:16,color:"white",thickness:2}),e.jsx("span",{children:s.form?"提交中...":"登录"})]})]})})]})]})},x=()=>e.jsxs("div",{className:"space-y-6 p-8 max-w-lg",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"内联加载指示器"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-sm",children:"正在保存文档"}),e.jsx(a,{size:16,color:"#6b7280",thickness:2})]}),e.jsx("div",{className:"border rounded p-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:"数据同步"}),e.jsx("p",{className:"text-sm text-gray-600",children:"正在同步到云端..."})]}),e.jsx(a,{size:24,color:"#3b82f6",thickness:3})]})}),e.jsx("div",{className:"space-y-2",children:[1,2,3].map(s=>e.jsxs("div",{className:"flex items-center space-x-3 p-2 border rounded",children:[e.jsx("div",{className:"w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center",children:e.jsx(a,{size:16,color:"#9ca3af",thickness:2})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"text-sm font-medium",children:["项目 ",s]}),e.jsx("p",{className:"text-xs text-gray-500",children:"加载中..."})]})]},s))})]})]}),u=()=>e.jsxs("div",{className:"space-y-8 p-8",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"自定义样式"}),e.jsxs("div",{className:"grid grid-cols-3 gap-6",children:[e.jsxs("div",{className:"text-center p-4 border rounded",children:[e.jsx("h4",{className:"font-medium mb-3",children:"渐变色"}),e.jsx(a,{size:48,color:"linear-gradient(45deg, #3b82f6, #8b5cf6)",thickness:4,style:{background:"linear-gradient(45deg, #3b82f6, #8b5cf6)",borderImage:"linear-gradient(45deg, #3b82f6, #8b5cf6) 1"}})]}),e.jsxs("div",{className:"text-center p-4 border rounded",children:[e.jsx("h4",{className:"font-medium mb-3",children:"阴影效果"}),e.jsx(a,{size:48,color:"#3b82f6",thickness:4,style:{filter:"drop-shadow(0 4px 8px rgba(59, 130, 246, 0.3))"}})]}),e.jsxs("div",{className:"text-center p-4 border rounded",children:[e.jsx("h4",{className:"font-medium mb-3",children:"慢速动画"}),e.jsx(a,{size:48,color:"#10b981",thickness:4,style:{animationDuration:"2s"}})]})]})]}),b=()=>{const[s,r]=g.useState(!1),[t,l]=g.useState(0),[d,n]=g.useState(!1),A=async()=>{r(!0),await new Promise(i=>setTimeout(i,2e3)),r(!1)},F=()=>{n(!0),l(0);const i=setInterval(()=>{l(f=>f>=100?(clearInterval(i),n(!1),100):f+10)},200)};return e.jsxs("div",{className:"space-y-8 p-8 max-w-2xl",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"实际应用场景"}),e.jsxs("div",{className:"border rounded-lg p-6",children:[e.jsx("h4",{className:"font-medium mb-4",children:"📊 数据仪表板"}),s?e.jsx("div",{className:"flex items-center justify-center h-40",children:e.jsxs("div",{className:"text-center",children:[e.jsx(a,{size:40,color:"#3b82f6",thickness:4}),e.jsx("p",{className:"mt-3 text-sm text-gray-600",children:"正在加载图表数据..."})]})}):e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"grid grid-cols-3 gap-4",children:[1,2,3].map(i=>e.jsxs("div",{className:"p-4 bg-gray-50 rounded text-center",children:[e.jsx("div",{className:"text-2xl font-bold text-blue-600",children:Math.floor(Math.random()*1e3)}),e.jsxs("div",{className:"text-sm text-gray-600",children:["指标 ",i]})]},i))}),e.jsx("button",{onClick:A,className:"text-blue-500 hover:text-blue-700 text-sm",children:"刷新数据"})]})]}),e.jsxs("div",{className:"border rounded-lg p-6",children:[e.jsx("h4",{className:"font-medium mb-4",children:"📁 文件上传"}),e.jsxs("div",{className:"space-y-4",children:[d&&e.jsxs("div",{className:"flex items-center space-x-3 p-3 bg-blue-50 border border-blue-200 rounded",children:[e.jsx(a,{size:20,color:"#3b82f6",thickness:2}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-sm font-medium",children:"正在上传文件..."}),e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2 mt-1",children:e.jsx("div",{className:"bg-blue-600 h-2 rounded-full transition-all duration-300",style:{width:`${t}%`}})}),e.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:[t,"% 完成"]})]})]}),e.jsx("button",{onClick:F,disabled:d,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50",children:d?"上传中...":"选择文件上传"})]})]})]})};c.__docgenInfo={description:"",methods:[],displayName:"Sizes"};o.__docgenInfo={description:"",methods:[],displayName:"Colors"};m.__docgenInfo={description:"",methods:[],displayName:"Thickness"};p.__docgenInfo={description:"",methods:[],displayName:"LoadingStates"};x.__docgenInfo={description:"",methods:[],displayName:"InlineSpinners"};u.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};b.__docgenInfo={description:"",methods:[],displayName:"RealWorldExamples"};var v,N,j;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 40,
    color: '#3b82f6',
    thickness: 4
  },
  render: args => <div className="p-8">\r
      <Spinner {...args} />\r
    </div>
}`,...(j=(N=h.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var y,S,k;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const sizes = [16, 24, 32, 48, 64, 80];
  return <div className="flex items-center space-x-8 p-8">\r
      {sizes.map(size => <div key={size} className="text-center">\r
          <Spinner size={size} color="#3b82f6" thickness={3} />\r
          <p className="mt-2 text-xs text-gray-500">{size}px</p>\r
        </div>)}\r
    </div>;
}`,...(k=(S=c.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var w,z,L;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const colors = [{
    name: '蓝色',
    color: '#3b82f6'
  }, {
    name: '绿色',
    color: '#10b981'
  }, {
    name: '红色',
    color: '#ef4444'
  }, {
    name: '黄色',
    color: '#f59e0b'
  }, {
    name: '紫色',
    color: '#8b5cf6'
  }, {
    name: '粉色',
    color: '#ec4899'
  }, {
    name: '青色',
    color: '#06b6d4'
  }, {
    name: '橙色',
    color: '#f97316'
  }];
  return <div className="grid grid-cols-4 gap-6 p-8">\r
      {colors.map(({
      name,
      color
    }) => <div key={name} className="text-center">\r
          <Spinner size={40} color={color} thickness={4} />\r
          <p className="mt-2 text-sm font-medium">{name}</p>\r
          <p className="text-xs text-gray-500">{color}</p>\r
        </div>)}\r
    </div>;
}`,...(L=(z=o.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var C,_,I;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const thicknesses = [1, 2, 3, 4, 5, 6];
  return <div className="flex items-center space-x-8 p-8">\r
      {thicknesses.map(thickness => <div key={thickness} className="text-center">\r
          <Spinner size={48} color="#3b82f6" thickness={thickness} />\r
          <p className="mt-2 text-xs text-gray-500">{thickness}px</p>\r
        </div>)}\r
    </div>;
}`,...(I=(_=m.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var U,P,D;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  const [loadingStates, setLoadingStates] = useState({
    button: false,
    page: false,
    form: false,
    data: false
  });
  const simulateLoading = (key, duration = 2000) => {
    setLoadingStates(prev => ({
      ...prev,
      [key]: true
    }));
    setTimeout(() => {
      setLoadingStates(prev => ({
        ...prev,
        [key]: false
      }));
    }, duration);
  };
  return <div className="space-y-8 p-8 max-w-md">\r
      <h3 className="text-lg font-semibold">加载状态演示</h3>\r
      \r
      {/* 按钮加载 */}\r
      <div>\r
        <p className="text-sm font-medium mb-2">按钮加载状态</p>\r
        <button onClick={() => simulateLoading('button')} disabled={loadingStates.button} className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50">\r
          {loadingStates.button && <Spinner size={16} color="white" thickness={2} />}\r
          <span>{loadingStates.button ? '加载中...' : '点击加载'}</span>\r
        </button>\r
      </div>\r
\r
      {/* 页面加载 */}\r
      <div>\r
        <p className="text-sm font-medium mb-2">页面加载状态</p>\r
        <div className="border rounded p-4 h-32 flex items-center justify-center bg-gray-50">\r
          {loadingStates.page ? <div className="text-center">\r
              <Spinner size={32} color="#3b82f6" thickness={3} />\r
              <p className="mt-2 text-sm text-gray-600">页面加载中...</p>\r
            </div> : <div className="text-center">\r
              <p className="text-gray-600 mb-2">内容已加载完成</p>\r
              <button onClick={() => simulateLoading('page', 3000)} className="text-blue-500 hover:text-blue-700 text-sm">\r
                重新加载\r
              </button>\r
            </div>}\r
        </div>\r
      </div>\r
\r
      {/* 表单提交 */}\r
      <div>\r
        <p className="text-sm font-medium mb-2">表单提交状态</p>\r
        <div className="border rounded p-4">\r
          <div className="space-y-3">\r
            <input type="text" placeholder="用户名" className="w-full px-3 py-2 border rounded" disabled={loadingStates.form} />\r
            <input type="password" placeholder="密码" className="w-full px-3 py-2 border rounded" disabled={loadingStates.form} />\r
            <button onClick={() => simulateLoading('form')} disabled={loadingStates.form} className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50">\r
              {loadingStates.form && <Spinner size={16} color="white" thickness={2} />}\r
              <span>{loadingStates.form ? '提交中...' : '登录'}</span>\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>;
}`,...(D=(P=p.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var T,E,R;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <div className="space-y-6 p-8 max-w-lg">\r
      <h3 className="text-lg font-semibold">内联加载指示器</h3>\r
      \r
      <div className="space-y-4">\r
        {/* 文本中的加载 */}\r
        <div className="flex items-center space-x-2">\r
          <span className="text-sm">正在保存文档</span>\r
          <Spinner size={16} color="#6b7280" thickness={2} />\r
        </div>\r
\r
        {/* 卡片中的加载 */}\r
        <div className="border rounded p-4">\r
          <div className="flex items-center justify-between">\r
            <div>\r
              <h4 className="font-medium">数据同步</h4>\r
              <p className="text-sm text-gray-600">正在同步到云端...</p>\r
            </div>\r
            <Spinner size={24} color="#3b82f6" thickness={3} />\r
          </div>\r
        </div>\r
\r
        {/* 列表项加载 */}\r
        <div className="space-y-2">\r
          {[1, 2, 3].map(item => <div key={item} className="flex items-center space-x-3 p-2 border rounded">\r
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">\r
                <Spinner size={16} color="#9ca3af" thickness={2} />\r
              </div>\r
              <div className="flex-1">\r
                <p className="text-sm font-medium">项目 {item}</p>\r
                <p className="text-xs text-gray-500">加载中...</p>\r
              </div>\r
            </div>)}\r
        </div>\r
      </div>\r
    </div>;
}`,...(R=(E=x.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var M,W,B;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <div className="space-y-8 p-8">\r
      <h3 className="text-lg font-semibold">自定义样式</h3>\r
      \r
      <div className="grid grid-cols-3 gap-6">\r
        {/* 渐变色加载器 */}\r
        <div className="text-center p-4 border rounded">\r
          <h4 className="font-medium mb-3">渐变色</h4>\r
          <Spinner size={48} color="linear-gradient(45deg, #3b82f6, #8b5cf6)" thickness={4} style={{
          background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
          borderImage: 'linear-gradient(45deg, #3b82f6, #8b5cf6) 1'
        }} />\r
        </div>\r
\r
        {/* 阴影效果 */}\r
        <div className="text-center p-4 border rounded">\r
          <h4 className="font-medium mb-3">阴影效果</h4>\r
          <Spinner size={48} color="#3b82f6" thickness={4} style={{
          filter: 'drop-shadow(0 4px 8px rgba(59, 130, 246, 0.3))'
        }} />\r
        </div>\r
\r
        {/* 自定义动画速度 */}\r
        <div className="text-center p-4 border rounded">\r
          <h4 className="font-medium mb-3">慢速动画</h4>\r
          <Spinner size={48} color="#10b981" thickness={4} style={{
          animationDuration: '2s'
        }} />\r
        </div>\r
      </div>\r
    </div>;
}`,...(B=(W=u.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var $,O,q;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const [dataLoading, setDataLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const loadData = async () => {
    setDataLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setDataLoading(false);
  };
  const simulateUpload = () => {
    setUploading(true);
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };
  return <div className="space-y-8 p-8 max-w-2xl">\r
      <h3 className="text-lg font-semibold">实际应用场景</h3>\r
      \r
      {/* 数据加载 */}\r
      <div className="border rounded-lg p-6">\r
        <h4 className="font-medium mb-4">📊 数据仪表板</h4>\r
        {dataLoading ? <div className="flex items-center justify-center h-40">\r
            <div className="text-center">\r
              <Spinner size={40} color="#3b82f6" thickness={4} />\r
              <p className="mt-3 text-sm text-gray-600">正在加载图表数据...</p>\r
            </div>\r
          </div> : <div className="space-y-4">\r
            <div className="grid grid-cols-3 gap-4">\r
              {[1, 2, 3].map(i => <div key={i} className="p-4 bg-gray-50 rounded text-center">\r
                  <div className="text-2xl font-bold text-blue-600">{Math.floor(Math.random() * 1000)}</div>\r
                  <div className="text-sm text-gray-600">指标 {i}</div>\r
                </div>)}\r
            </div>\r
            <button onClick={loadData} className="text-blue-500 hover:text-blue-700 text-sm">\r
              刷新数据\r
            </button>\r
          </div>}\r
      </div>\r
\r
      {/* 文件上传 */}\r
      <div className="border rounded-lg p-6">\r
        <h4 className="font-medium mb-4">📁 文件上传</h4>\r
        <div className="space-y-4">\r
          {uploading && <div className="flex items-center space-x-3 p-3 bg-blue-50 border border-blue-200 rounded">\r
              <Spinner size={20} color="#3b82f6" thickness={2} />\r
              <div className="flex-1">\r
                <p className="text-sm font-medium">正在上传文件...</p>\r
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">\r
                  <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{
                width: \`\${uploadProgress}%\`
              }}></div>\r
                </div>\r
                <p className="text-xs text-gray-500 mt-1">{uploadProgress}% 完成</p>\r
              </div>\r
            </div>}\r
          \r
          <button onClick={simulateUpload} disabled={uploading} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50">\r
            {uploading ? '上传中...' : '选择文件上传'}\r
          </button>\r
        </div>\r
      </div>\r
    </div>;
}`,...(q=(O=b.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};const K=["Basic","Sizes","Colors","Thickness","LoadingStates","InlineSpinners","CustomStyles","RealWorldExamples"];export{h as Basic,o as Colors,u as CustomStyles,x as InlineSpinners,p as LoadingStates,b as RealWorldExamples,c as Sizes,m as Thickness,K as __namedExportsOrder,J as default};
