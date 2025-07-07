import{r as g,j as e}from"./iframe-DqwHGwZR.js";/* empty css              */function x({value:a=1,onChange:l,total:t,pageSize:i=10,siblingCount:c=1,boundaryCount:s=1,size:y="md",className:m="",...p}){const[d,S]=g.useState(a);g.useEffect(()=>{S(a)},[a]);const o=g.useMemo(()=>Math.max(1,Math.ceil(t/i)),[t,i]),R=(n,N)=>{const h=[];for(let b=n;b<=N;b++)h.push(b);return h},W=g.useMemo(()=>{const n=c*2+3+s*2;if(o<=n)return R(1,o).map(r=>({key:r,num:r}));const N=Math.max(d-c,s+2),h=Math.min(d+c,o-s-1),b=N>s+2,O=h<o-s-1,u=[];for(let r=1;r<=s;r++)u.push({key:"b"+r,num:r});b&&u.push({key:"l-ellipsis",ellipsis:!0});for(let r=N;r<=h;r++)u.push({key:"m"+r,num:r});O&&u.push({key:"r-ellipsis",ellipsis:!0});for(let r=o-s+1;r<=o;r++)u.push({key:"e"+r,num:r});return u},[d,o,c,s]),C=g.useCallback(n=>{n<1||n>o||n===d||(S(n),l==null||l(n))},[d,o,l]);if(o<=1)return null;const L=["pagination","wc-pagination",y!=="md"?`wc-pagination--${y}`:"",m].filter(Boolean).join(" ");return e.jsxs("nav",{className:L,"aria-label":"分页导航",...p,children:[e.jsx("button",{className:"page-btn wc-page-btn wc-page-btn--prev wc-page-btn--nav",disabled:d===1,onClick:()=>C(d-1),"aria-label":"上一页",children:"‹"}),W.map(n=>n.ellipsis?e.jsx("span",{className:"page-ellipsis",children:"…"},n.key):e.jsx("button",{className:`page-btn wc-page-btn${n.num===d?" active wc-page-btn--active":""}`,onClick:()=>C(n.num),children:n.num},n.key)),e.jsx("button",{className:"page-btn wc-page-btn wc-page-btn--next wc-page-btn--nav",disabled:d===o,onClick:()=>C(d+1),"aria-label":"下一页",children:"›"})]})}const G={title:"Components/Pagination",component:x,parameters:{docs:{description:{component:"分页组件，用于大量数据的分页展示。"}}},tags:["autodocs"],argTypes:{total:{control:"number",description:"数据总数"},pageSize:{control:"number",description:"每页显示数量"},value:{control:"number",name:"currentPage",description:"当前页码"},siblingCount:{control:"number",description:"当前页左右显示的页码数量"},boundaryCount:{control:"number",description:"首尾显示的页码数量"},size:{control:{type:"select"},options:["sm","md","lg","xl"],description:"尺寸大小"}}},v={args:{total:120,pageSize:10,value:1,size:"md"},render:a=>{const[l,t]=g.useState(a.value);return e.jsxs("div",{className:"p-8",children:[e.jsx(x,{...a,value:l,onChange:t}),e.jsxs("p",{className:"mt-4 text-sm text-gray-500",children:["当前页: ",l]})]})}},f={render:()=>{const[a,l]=g.useState({small:1,medium:1,large:1}),t=i=>c=>{l(s=>({...s,[i]:c}))};return e.jsxs("div",{className:"space-y-8 p-8",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"不同数据量的分页"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"mb-2",children:"小数据量 (50条数据)"}),e.jsx(x,{total:50,pageSize:10,value:a.small,onChange:t("small")}),e.jsxs("p",{className:"mt-2 text-sm text-gray-500",children:["当前页: ",a.small,", 总页数: ",Math.ceil(50/10)]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"mb-2",children:"中等数据量 (500条数据)"}),e.jsx(x,{total:500,pageSize:20,value:a.medium,onChange:t("medium")}),e.jsxs("p",{className:"mt-2 text-sm text-gray-500",children:["当前页: ",a.medium,", 总页数: ",Math.ceil(500/20)]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"mb-2",children:"大数据量 (10000条数据)"}),e.jsx(x,{total:1e4,pageSize:50,value:a.large,onChange:t("large")}),e.jsxs("p",{className:"mt-2 text-sm text-gray-500",children:["当前页: ",a.large,", 总页数: ",Math.ceil(1e4/50)]})]})]})]})}},j={render:()=>{const[a,l]=g.useState(1),t=5,i=47,c=Array.from({length:i},(m,p)=>({id:p+1,name:`用户 ${p+1}`,email:`user${p+1}@example.com`,role:["管理员","编辑","用户"][p%3],status:["活跃","离线","待审核"][p%3]})),s=(a-1)*t,y=c.slice(s,s+t);return e.jsxs("div",{className:"p-8",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"带数据表格的分页示例"}),e.jsx("div",{className:"bg-white border rounded-lg overflow-hidden mb-4",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"ID"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"姓名"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"邮箱"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"角色"}),e.jsx("th",{className:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"状态"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:y.map(m=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-4 whitespace-nowrap text-sm text-gray-900",children:m.id}),e.jsx("td",{className:"px-4 py-4 whitespace-nowrap text-sm text-gray-900",children:m.name}),e.jsx("td",{className:"px-4 py-4 whitespace-nowrap text-sm text-gray-500",children:m.email}),e.jsx("td",{className:"px-4 py-4 whitespace-nowrap text-sm text-gray-900",children:m.role}),e.jsx("td",{className:"px-4 py-4 whitespace-nowrap",children:e.jsx("span",{className:`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${m.status==="活跃"?"bg-green-100 text-green-800":m.status==="离线"?"bg-gray-100 text-gray-800":"bg-yellow-100 text-yellow-800"}`,children:m.status})})]},m.id))})]})}),e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{className:"text-sm text-gray-500",children:["显示 ",s+1,"-",Math.min(s+t,i)," 条，共 ",i," 条记录"]}),e.jsxs("div",{className:"text-sm text-gray-500",children:["第 ",a," 页，共 ",Math.ceil(i/t)," 页"]})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx(x,{total:i,pageSize:t,value:a,onChange:l})})]})}},w={render:()=>{const[a,l]=g.useState(50),[t,i]=g.useState({siblingCount:1,boundaryCount:1});return e.jsxs("div",{className:"space-y-6 p-8",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"自定义同级和边界页码数量"}),e.jsx("div",{className:"bg-gray-50 p-4 rounded-lg",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["同级页码数量 (siblingCount): ",t.siblingCount]}),e.jsx("input",{type:"range",min:"0",max:"3",value:t.siblingCount,onChange:c=>i(s=>({...s,siblingCount:Number(c.target.value)})),className:"w-full"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["边界页码数量 (boundaryCount): ",t.boundaryCount]}),e.jsx("input",{type:"range",min:"1",max:"3",value:t.boundaryCount,onChange:c=>i(s=>({...s,boundaryCount:Number(c.target.value)})),className:"w-full"})]})]})}),e.jsxs("div",{className:"text-center",children:[e.jsx(x,{total:1e3,pageSize:10,value:a,onChange:l,siblingCount:t.siblingCount,boundaryCount:t.boundaryCount}),e.jsxs("p",{className:"mt-4 text-sm text-gray-500",children:["当前页: ",a," / 100"]})]}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-2",children:"配置说明："}),e.jsxs("ul",{className:"text-sm text-blue-800 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"siblingCount"}),"：当前页左右显示的页码数量"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"boundaryCount"}),"：首尾显示的页码数量"]}),e.jsx("li",{children:"• 当页码过多时，中间会显示省略号"})]})]})]})}};var P,k,z;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    total: 120,
    pageSize: 10,
    value: 1,
    size: 'md'
  },
  render: args => {
    const [page, setPage] = useState(args.value);
    return <div className="p-8">\r
        <Pagination {...args} value={page} onChange={setPage} />\r
        <p className="mt-4 text-sm text-gray-500">当前页: {page}</p>\r
      </div>;
  }
}`,...(z=(k=v.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var M,D,I;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [pages, setPages] = useState({
      small: 1,
      medium: 1,
      large: 1
    });
    const handlePageChange = key => page => {
      setPages(prev => ({
        ...prev,
        [key]: page
      }));
    };
    return <div className="space-y-8 p-8">\r
        <h3 className="text-lg font-semibold mb-4">不同数据量的分页</h3>\r
        \r
        <div className="space-y-6">\r
          <div>\r
            <h4 className="mb-2">小数据量 (50条数据)</h4>\r
            <Pagination total={50} pageSize={10} value={pages.small} onChange={handlePageChange('small')} />\r
            <p className="mt-2 text-sm text-gray-500">\r
              当前页: {pages.small}, 总页数: {Math.ceil(50 / 10)}\r
            </p>\r
          </div>\r
          \r
          <div>\r
            <h4 className="mb-2">中等数据量 (500条数据)</h4>\r
            <Pagination total={500} pageSize={20} value={pages.medium} onChange={handlePageChange('medium')} />\r
            <p className="mt-2 text-sm text-gray-500">\r
              当前页: {pages.medium}, 总页数: {Math.ceil(500 / 20)}\r
            </p>\r
          </div>\r
          \r
          <div>\r
            <h4 className="mb-2">大数据量 (10000条数据)</h4>\r
            <Pagination total={10000} pageSize={50} value={pages.large} onChange={handlePageChange('large')} />\r
            <p className="mt-2 text-sm text-gray-500">\r
              当前页: {pages.large}, 总页数: {Math.ceil(10000 / 50)}\r
            </p>\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...(I=(D=f.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var $,E,B;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;
    const total = 47;

    // 模拟数据
    const allData = Array.from({
      length: total
    }, (_, i) => ({
      id: i + 1,
      name: \`用户 \${i + 1}\`,
      email: \`user\${i + 1}@example.com\`,
      role: ['管理员', '编辑', '用户'][i % 3],
      status: ['活跃', '离线', '待审核'][i % 3]
    }));

    // 计算当前页数据
    const startIndex = (currentPage - 1) * pageSize;
    const currentData = allData.slice(startIndex, startIndex + pageSize);
    return <div className="p-8">\r
        <h3 className="text-lg font-semibold mb-4">带数据表格的分页示例</h3>\r
        \r
        {/* 数据表格 */}\r
        <div className="bg-white border rounded-lg overflow-hidden mb-4">\r
          <table className="w-full">\r
            <thead className="bg-gray-50">\r
              <tr>\r
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>\r
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">姓名</th>\r
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">邮箱</th>\r
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">角色</th>\r
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>\r
              </tr>\r
            </thead>\r
            <tbody className="bg-white divide-y divide-gray-200">\r
              {currentData.map(item => <tr key={item.id}>\r
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{item.id}</td>\r
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>\r
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.email}</td>\r
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{item.role}</td>\r
                  <td className="px-4 py-4 whitespace-nowrap">\r
                    <span className={\`inline-flex px-2 py-1 text-xs font-semibold rounded-full \${item.status === '活跃' ? 'bg-green-100 text-green-800' : item.status === '离线' ? 'bg-gray-100 text-gray-800' : 'bg-yellow-100 text-yellow-800'}\`}>\r
                      {item.status}\r
                    </span>\r
                  </td>\r
                </tr>)}\r
            </tbody>\r
          </table>\r
        </div>\r
        \r
        {/* 分页信息 */}\r
        <div className="flex items-center justify-between mb-4">\r
          <div className="text-sm text-gray-500">\r
            显示 {startIndex + 1}-{Math.min(startIndex + pageSize, total)} 条，共 {total} 条记录\r
          </div>\r
          <div className="text-sm text-gray-500">\r
            第 {currentPage} 页，共 {Math.ceil(total / pageSize)} 页\r
          </div>\r
        </div>\r
        \r
        {/* 分页组件 */}\r
        <div className="flex justify-center">\r
          <Pagination total={total} pageSize={pageSize} value={currentPage} onChange={setCurrentPage} />\r
        </div>\r
      </div>;
  }
}`,...(B=(E=j.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var _,A,T;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(50);
    const [config, setConfig] = useState({
      siblingCount: 1,
      boundaryCount: 1
    });
    return <div className="space-y-6 p-8">\r
        <h3 className="text-lg font-semibold mb-4">自定义同级和边界页码数量</h3>\r
        \r
        {/* 配置控制 */}\r
        <div className="bg-gray-50 p-4 rounded-lg">\r
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">\r
            <div>\r
              <label className="block text-sm font-medium text-gray-700 mb-2">\r
                同级页码数量 (siblingCount): {config.siblingCount}\r
              </label>\r
              <input type="range" min="0" max="3" value={config.siblingCount} onChange={e => setConfig(prev => ({
              ...prev,
              siblingCount: Number(e.target.value)
            }))} className="w-full" />\r
            </div>\r
            <div>\r
              <label className="block text-sm font-medium text-gray-700 mb-2">\r
                边界页码数量 (boundaryCount): {config.boundaryCount}\r
              </label>\r
              <input type="range" min="1" max="3" value={config.boundaryCount} onChange={e => setConfig(prev => ({
              ...prev,
              boundaryCount: Number(e.target.value)
            }))} className="w-full" />\r
            </div>\r
          </div>\r
        </div>\r
        \r
        {/* 分页示例 */}\r
        <div className="text-center">\r
          <Pagination total={1000} pageSize={10} value={page} onChange={setPage} siblingCount={config.siblingCount} boundaryCount={config.boundaryCount} />\r
          <p className="mt-4 text-sm text-gray-500">\r
            当前页: {page} / 100\r
          </p>\r
        </div>\r
        \r
        {/* 说明 */}\r
        <div className="bg-blue-50 p-4 rounded-lg">\r
          <h4 className="font-medium mb-2">配置说明：</h4>\r
          <ul className="text-sm text-blue-800 space-y-1">\r
            <li>• <strong>siblingCount</strong>：当前页左右显示的页码数量</li>\r
            <li>• <strong>boundaryCount</strong>：首尾显示的页码数量</li>\r
            <li>• 当页码过多时，中间会显示省略号</li>\r
          </ul>\r
        </div>\r
      </div>;
  }
}`,...(T=(A=w.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};const H=["Basic","DifferentSizes","WithDataTable","CustomSiblingAndBoundary"];export{v as Basic,w as CustomSiblingAndBoundary,f as DifferentSizes,j as WithDataTable,H as __namedExportsOrder,G as default};
