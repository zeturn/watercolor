import{j as e}from"./iframe-DqwHGwZR.js";import{S as a}from"./Skeleton-PEktFE5T.js";const K={title:"Components/Skeleton (React)",component:a,parameters:{layout:"centered",docs:{description:{component:"显示内容加载之前的占位符预览。"}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["text","rectangular","rounded","circular"],description:"骨架屏的形状变体"},animation:{control:{type:"select"},options:[!1,"pulse","wave"],description:"动画效果，false表示无动画"},width:{control:{type:"text"},description:"宽度，支持px或百分比"},height:{control:{type:"text"},description:"高度，支持px或百分比"}}},t={render:()=>e.jsxs("div",{className:"p-6 min-w-80",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"默认骨架屏"}),e.jsx(a,{})]})},i={render:()=>e.jsxs("div",{className:"p-6 min-w-96",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"基础骨架屏"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{variant:"text"}),e.jsx(a,{variant:"text",width:"60%"}),e.jsx(a,{variant:"rectangular",height:"200px"}),e.jsx(a,{variant:"circular",width:"40px",height:"40px"})]})]})},n={render:()=>e.jsxs("div",{className:"p-6 min-w-[500px]",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"骨架屏变体"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"mb-2 font-medium",children:"文本"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{variant:"text"}),e.jsx(a,{variant:"text",width:"60%"}),e.jsx(a,{variant:"text",width:"40%"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"mb-2 font-medium",children:"矩形"}),e.jsx(a,{variant:"rectangular",height:"120px"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"mb-2 font-medium",children:"圆角矩形"}),e.jsx(a,{variant:"rounded",height:"80px"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"mb-2 font-medium",children:"圆形"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{variant:"circular",width:"32px",height:"32px"}),e.jsx(a,{variant:"circular",width:"48px",height:"48px"}),e.jsx(a,{variant:"circular",width:"64px",height:"64px"})]})]})]})]})},s={render:()=>e.jsxs("div",{className:"p-6 min-w-[600px]",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"动画效果"}),e.jsxs("div",{className:"grid grid-cols-3 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"mb-3 font-medium",children:"无动画"}),e.jsx(a,{animation:!1,height:"60px"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"mb-3 font-medium",children:"脉冲动画"}),e.jsx(a,{animation:"pulse",height:"60px"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"mb-3 font-medium",children:"波浪动画"}),e.jsx(a,{animation:"wave",height:"60px"})]})]})]})},d={render:()=>e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"卡片加载状态"}),e.jsxs("div",{className:"max-w-sm bg-white border border-gray-200 rounded-lg p-4 shadow-sm",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(a,{variant:"circular",width:"40px",height:"40px"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(a,{variant:"text",width:"80%"}),e.jsx(a,{variant:"text",width:"60%"})]})]}),e.jsx(a,{variant:"rectangular",height:"200px",className:"mt-4"}),e.jsxs("div",{className:"mt-4 space-y-2",children:[e.jsx(a,{variant:"text"}),e.jsx(a,{variant:"text",width:"90%"}),e.jsx(a,{variant:"text",width:"70%"})]}),e.jsxs("div",{className:"mt-4 flex gap-2",children:[e.jsx(a,{variant:"rounded",width:"80px",height:"32px"}),e.jsx(a,{variant:"rounded",width:"80px",height:"32px"})]})]})]})},l={render:()=>e.jsxs("div",{className:"p-6 max-w-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"列表加载状态"}),e.jsx("div",{className:"space-y-4",children:[1,2,3,4].map(r=>e.jsxs("div",{className:"flex items-center space-x-3 p-3 border rounded-lg",children:[e.jsx(a,{variant:"circular",width:"48px",height:"48px"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(a,{variant:"text",width:"70%"}),e.jsx(a,{variant:"text",width:"50%"})]}),e.jsx(a,{variant:"rounded",width:"60px",height:"24px"})]},r))})]})},x={render:()=>e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"表格加载状态"}),e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsx("div",{className:"bg-gray-50 px-4 py-3 border-b",children:e.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[e.jsx(a,{variant:"text",width:"60px"}),e.jsx(a,{variant:"text",width:"80px"}),e.jsx(a,{variant:"text",width:"70px"}),e.jsx(a,{variant:"text",width:"50px"})]})}),[1,2,3,4,5].map(r=>e.jsx("div",{className:"px-4 py-3 border-b last:border-b-0",children:e.jsxs("div",{className:"grid grid-cols-4 gap-4 items-center",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(a,{variant:"circular",width:"24px",height:"24px"}),e.jsx(a,{variant:"text",width:"80px"})]}),e.jsx(a,{variant:"text",width:"120px"}),e.jsx(a,{variant:"rounded",width:"60px",height:"20px"}),e.jsx(a,{variant:"text",width:"40px"})]})},r))]})]})},c={render:()=>e.jsxs("div",{className:"p-6 max-w-2xl",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"文章加载状态"}),e.jsxs("article",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{variant:"text",width:"90%",height:"32px"}),e.jsx(a,{variant:"text",width:"70%",height:"32px"})]}),e.jsxs("div",{className:"flex items-center space-x-3 py-4",children:[e.jsx(a,{variant:"circular",width:"40px",height:"40px"}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(a,{variant:"text",width:"100px"}),e.jsx(a,{variant:"text",width:"80px"})]})]}),e.jsx(a,{variant:"rounded",height:"200px"}),e.jsxs("div",{className:"space-y-3 pt-4",children:[e.jsx(a,{variant:"text"}),e.jsx(a,{variant:"text"}),e.jsx(a,{variant:"text",width:"95%"}),e.jsx(a,{variant:"text",width:"85%"}),e.jsx("div",{className:"py-2"}),e.jsx(a,{variant:"text"}),e.jsx(a,{variant:"text",width:"90%"}),e.jsx(a,{variant:"text",width:"80%"})]}),e.jsxs("div",{className:"flex space-x-2 pt-4",children:[e.jsx(a,{variant:"rounded",width:"60px",height:"24px"}),e.jsx(a,{variant:"rounded",width:"80px",height:"24px"}),e.jsx(a,{variant:"rounded",width:"70px",height:"24px"})]})]})]})},h={render:()=>e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"仪表板加载状态"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-4 gap-4",children:[1,2,3,4].map(r=>e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx(a,{variant:"text",width:"60px"}),e.jsx(a,{variant:"circular",width:"24px",height:"24px"})]}),e.jsx(a,{variant:"text",width:"40px",height:"28px"}),e.jsx(a,{variant:"text",width:"80px"})]},r))}),e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx(a,{variant:"text",width:"120px",className:"mb-4"}),e.jsx(a,{variant:"rectangular",height:"200px"})]}),e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx(a,{variant:"text",width:"100px",className:"mb-4"}),e.jsx(a,{variant:"rectangular",height:"200px"})]})]}),e.jsxs("div",{className:"border rounded-lg",children:[e.jsx("div",{className:"p-4 border-b",children:e.jsx(a,{variant:"text",width:"120px"})}),e.jsx("div",{className:"divide-y",children:[1,2,3].map(r=>e.jsxs("div",{className:"p-4 flex items-center space-x-3",children:[e.jsx(a,{variant:"circular",width:"32px",height:"32px"}),e.jsxs("div",{className:"flex-1 space-y-1",children:[e.jsx(a,{variant:"text",width:"200px"}),e.jsx(a,{variant:"text",width:"120px"})]}),e.jsx(a,{variant:"text",width:"60px"})]},r))})]})]})]})},o={args:{variant:"text",animation:"pulse",width:void 0,height:void 0},render:r=>e.jsxs("div",{className:"p-6 min-w-80",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"自定义骨架屏"}),e.jsx(a,{variant:r.variant,animation:r.animation,width:r.width,height:r.height})]})};var m,p,v;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="p-6 min-w-80">\r
      <h3 className="text-lg font-semibold mb-4">默认骨架屏</h3>\r
      <Skeleton />\r
    </div>
}`,...(v=(p=t.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var g,j,w;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="p-6 min-w-96">\r
      <h3 className="text-lg font-semibold mb-4">基础骨架屏</h3>\r
      <div className="space-y-3">\r
        <Skeleton variant="text" />\r
        <Skeleton variant="text" width="60%" />\r
        <Skeleton variant="rectangular" height="200px" />\r
        <Skeleton variant="circular" width="40px" height="40px" />\r
      </div>\r
    </div>
}`,...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var N,u,b;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="p-6 min-w-[500px]">\r
      <h3 className="text-lg font-semibold mb-4">骨架屏变体</h3>\r
      \r
      <div className="space-y-6">\r
        <div>\r
          <h4 className="mb-2 font-medium">文本</h4>\r
          <div className="space-y-2">\r
            <Skeleton variant="text" />\r
            <Skeleton variant="text" width="60%" />\r
            <Skeleton variant="text" width="40%" />\r
          </div>\r
        </div>\r
        \r
        <div>\r
          <h4 className="mb-2 font-medium">矩形</h4>\r
          <Skeleton variant="rectangular" height="120px" />\r
        </div>\r
        \r
        <div>\r
          <h4 className="mb-2 font-medium">圆角矩形</h4>\r
          <Skeleton variant="rounded" height="80px" />\r
        </div>\r
        \r
        <div>\r
          <h4 className="mb-2 font-medium">圆形</h4>\r
          <div className="flex items-center gap-4">\r
            <Skeleton variant="circular" width="32px" height="32px" />\r
            <Skeleton variant="circular" width="48px" height="48px" />\r
            <Skeleton variant="circular" width="64px" height="64px" />\r
          </div>\r
        </div>\r
      </div>\r
    </div>
}`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var S,k,f;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="p-6 min-w-[600px]">\r
      <h3 className="text-lg font-semibold mb-4">动画效果</h3>\r
      \r
      <div className="grid grid-cols-3 gap-6">\r
        <div>\r
          <h4 className="mb-3 font-medium">无动画</h4>\r
          <Skeleton animation={false} height="60px" />\r
        </div>\r
        \r
        <div>\r
          <h4 className="mb-3 font-medium">脉冲动画</h4>\r
          <Skeleton animation="pulse" height="60px" />\r
        </div>\r
        \r
        <div>\r
          <h4 className="mb-3 font-medium">波浪动画</h4>\r
          <Skeleton animation="wave" height="60px" />\r
        </div>\r
      </div>\r
    </div>
}`,...(f=(k=s.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var y,L,A;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="p-6">\r
      <h3 className="text-lg font-semibold mb-4">卡片加载状态</h3>\r
      \r
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg p-4 shadow-sm">\r
        <div className="flex items-start gap-3">\r
          <Skeleton variant="circular" width="40px" height="40px" />\r
          <div className="flex-1 space-y-2">\r
            <Skeleton variant="text" width="80%" />\r
            <Skeleton variant="text" width="60%" />\r
          </div>\r
        </div>\r
        \r
        <Skeleton variant="rectangular" height="200px" className="mt-4" />\r
        \r
        <div className="mt-4 space-y-2">\r
          <Skeleton variant="text" />\r
          <Skeleton variant="text" width="90%" />\r
          <Skeleton variant="text" width="70%" />\r
        </div>\r
        \r
        <div className="mt-4 flex gap-2">\r
          <Skeleton variant="rounded" width="80px" height="32px" />\r
          <Skeleton variant="rounded" width="80px" height="32px" />\r
        </div>\r
      </div>\r
    </div>
}`,...(A=(L=d.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var D,C,T;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="p-6 max-w-lg">\r
      <h3 className="text-lg font-semibold mb-4">列表加载状态</h3>\r
      \r
      <div className="space-y-4">\r
        {[1, 2, 3, 4].map(item => <div key={item} className="flex items-center space-x-3 p-3 border rounded-lg">\r
            <Skeleton variant="circular" width="48px" height="48px" />\r
            <div className="flex-1 space-y-2">\r
              <Skeleton variant="text" width="70%" />\r
              <Skeleton variant="text" width="50%" />\r
            </div>\r
            <Skeleton variant="rounded" width="60px" height="24px" />\r
          </div>)}\r
      </div>\r
    </div>
}`,...(T=(C=l.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var _,B,E;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="p-6">\r
      <h3 className="text-lg font-semibold mb-4">表格加载状态</h3>\r
      \r
      <div className="border rounded-lg overflow-hidden">\r
        {/* 表头 */}\r
        <div className="bg-gray-50 px-4 py-3 border-b">\r
          <div className="grid grid-cols-4 gap-4">\r
            <Skeleton variant="text" width="60px" />\r
            <Skeleton variant="text" width="80px" />\r
            <Skeleton variant="text" width="70px" />\r
            <Skeleton variant="text" width="50px" />\r
          </div>\r
        </div>\r
        \r
        {/* 表格内容 */}\r
        {[1, 2, 3, 4, 5].map(row => <div key={row} className="px-4 py-3 border-b last:border-b-0">\r
            <div className="grid grid-cols-4 gap-4 items-center">\r
              <div className="flex items-center space-x-2">\r
                <Skeleton variant="circular" width="24px" height="24px" />\r
                <Skeleton variant="text" width="80px" />\r
              </div>\r
              <Skeleton variant="text" width="120px" />\r
              <Skeleton variant="rounded" width="60px" height="20px" />\r
              <Skeleton variant="text" width="40px" />\r
            </div>\r
          </div>)}\r
      </div>\r
    </div>
}`,...(E=(B=x.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var P,R,V;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="p-6 max-w-2xl">\r
      <h3 className="text-lg font-semibold mb-4">文章加载状态</h3>\r
      \r
      <article className="space-y-4">\r
        {/* 标题区域 */}\r
        <div className="space-y-3">\r
          <Skeleton variant="text" width="90%" height="32px" />\r
          <Skeleton variant="text" width="70%" height="32px" />\r
        </div>\r
        \r
        {/* 作者信息 */}\r
        <div className="flex items-center space-x-3 py-4">\r
          <Skeleton variant="circular" width="40px" height="40px" />\r
          <div className="space-y-1">\r
            <Skeleton variant="text" width="100px" />\r
            <Skeleton variant="text" width="80px" />\r
          </div>\r
        </div>\r
        \r
        {/* 特色图片 */}\r
        <Skeleton variant="rounded" height="200px" />\r
        \r
        {/* 文章内容 */}\r
        <div className="space-y-3 pt-4">\r
          <Skeleton variant="text" />\r
          <Skeleton variant="text" />\r
          <Skeleton variant="text" width="95%" />\r
          <Skeleton variant="text" width="85%" />\r
          \r
          <div className="py-2" />\r
          \r
          <Skeleton variant="text" />\r
          <Skeleton variant="text" width="90%" />\r
          <Skeleton variant="text" width="80%" />\r
        </div>\r
        \r
        {/* 标签区域 */}\r
        <div className="flex space-x-2 pt-4">\r
          <Skeleton variant="rounded" width="60px" height="24px" />\r
          <Skeleton variant="rounded" width="80px" height="24px" />\r
          <Skeleton variant="rounded" width="70px" height="24px" />\r
        </div>\r
      </article>\r
    </div>
}`,...(V=(R=c.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var O,q,z;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="p-6">\r
      <h3 className="text-lg font-semibold mb-4">仪表板加载状态</h3>\r
      \r
      <div className="space-y-6">\r
        {/* 统计卡片 */}\r
        <div className="grid grid-cols-4 gap-4">\r
          {[1, 2, 3, 4].map(card => <div key={card} className="p-4 border rounded-lg">\r
              <div className="flex items-center justify-between mb-2">\r
                <Skeleton variant="text" width="60px" />\r
                <Skeleton variant="circular" width="24px" height="24px" />\r
              </div>\r
              <Skeleton variant="text" width="40px" height="28px" />\r
              <Skeleton variant="text" width="80px" />\r
            </div>)}\r
        </div>\r
        \r
        {/* 图表区域 */}\r
        <div className="grid grid-cols-2 gap-6">\r
          <div className="p-4 border rounded-lg">\r
            <Skeleton variant="text" width="120px" className="mb-4" />\r
            <Skeleton variant="rectangular" height="200px" />\r
          </div>\r
          \r
          <div className="p-4 border rounded-lg">\r
            <Skeleton variant="text" width="100px" className="mb-4" />\r
            <Skeleton variant="rectangular" height="200px" />\r
          </div>\r
        </div>\r
        \r
        {/* 活动列表 */}\r
        <div className="border rounded-lg">\r
          <div className="p-4 border-b">\r
            <Skeleton variant="text" width="120px" />\r
          </div>\r
          \r
          <div className="divide-y">\r
            {[1, 2, 3].map(item => <div key={item} className="p-4 flex items-center space-x-3">\r
                <Skeleton variant="circular" width="32px" height="32px" />\r
                <div className="flex-1 space-y-1">\r
                  <Skeleton variant="text" width="200px" />\r
                  <Skeleton variant="text" width="120px" />\r
                </div>\r
                <Skeleton variant="text" width="60px" />\r
              </div>)}\r
          </div>\r
        </div>\r
      </div>\r
    </div>
}`,...(z=(q=h.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var F,G,H;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    animation: 'pulse',
    width: undefined,
    height: undefined
  },
  render: args => <div className="p-6 min-w-80">\r
      <h3 className="text-lg font-semibold mb-4">自定义骨架屏</h3>\r
      <Skeleton variant={args.variant} animation={args.animation} width={args.width} height={args.height} />\r
    </div>
}`,...(H=(G=o.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const M=["Default","Basic","Variants","Animations","CardLoading","ListLoading","TableLoading","ArticleLoading","DashboardLoading","Playground"];export{s as Animations,c as ArticleLoading,i as Basic,d as CardLoading,h as DashboardLoading,t as Default,l as ListLoading,o as Playground,x as TableLoading,n as Variants,M as __namedExportsOrder,K as default};
