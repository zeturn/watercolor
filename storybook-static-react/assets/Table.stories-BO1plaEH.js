import{j as e,r as T}from"./iframe-DqwHGwZR.js";import{T as m,a as p,b as c,c as l,d as h}from"./Table-Dk815Jnx.js";const J={title:"Components/Table (React)",component:m,parameters:{layout:"centered",docs:{description:{component:"完整的表格系统，包含表头、表体、行和单元格组件，用于数据展示。"}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg"],description:"表格大小"},stickyHeader:{control:"boolean",description:"是否固定表头"},dense:{control:"boolean",description:"是否使用紧凑模式"},hover:{control:"boolean",description:"是否启用行悬停效果"},striped:{control:"boolean",description:"是否显示斑马纹"}}},C={args:{size:"md",stickyHeader:!1,dense:!1,hover:!0,striped:!1},render:n=>e.jsx("div",{className:"p-6",children:e.jsxs(m,{...n,children:[e.jsx(p,{children:e.jsxs(c,{children:[e.jsx(l,{component:"th",children:"姓名"}),e.jsx(l,{component:"th",children:"职位"}),e.jsx(l,{component:"th",children:"部门"}),e.jsx(l,{component:"th",align:"right",children:"薪资"})]})}),e.jsxs(h,{children:[e.jsxs(c,{children:[e.jsx(l,{children:"张三"}),e.jsx(l,{children:"前端工程师"}),e.jsx(l,{children:"技术部"}),e.jsx(l,{align:"right",children:"¥15,000"})]}),e.jsxs(c,{children:[e.jsx(l,{children:"李四"}),e.jsx(l,{children:"产品经理"}),e.jsx(l,{children:"产品部"}),e.jsx(l,{align:"right",children:"¥18,000"})]}),e.jsxs(c,{children:[e.jsx(l,{children:"王五"}),e.jsx(l,{children:"设计师"}),e.jsx(l,{children:"设计部"}),e.jsx(l,{align:"right",children:"¥14,000"})]})]})]})})},y={args:{size:"sm",dense:!0,hover:!0,striped:!0},render:n=>e.jsx("div",{className:"p-6",children:e.jsxs(m,{...n,children:[e.jsx(p,{children:e.jsxs(c,{children:[e.jsx(l,{component:"th",size:"small",children:"ID"}),e.jsx(l,{component:"th",size:"small",children:"名称"}),e.jsx(l,{component:"th",size:"small",children:"状态"}),e.jsx(l,{component:"th",size:"small",align:"center",children:"操作"})]})}),e.jsx(h,{children:[1,2,3].map(s=>e.jsxs(c,{children:[e.jsxs(l,{size:"small",children:["#",s.toString().padStart(3,"0")]}),e.jsxs(l,{size:"small",children:["项目 ",s]}),e.jsx(l,{size:"small",children:"活跃"}),e.jsx(l,{size:"small",align:"center",children:"编辑"})]},s))})]})})},j={args:{size:"md",hover:!0},render:n=>{const[s,o]=T.useState([{name:"Alice",age:28,score:95,city:"北京"},{name:"Bob",age:32,score:87,city:"上海"},{name:"Charlie",age:25,score:92,city:"深圳"}]),[r,a]=T.useState({key:"name",direction:"asc"}),t=i=>{let b="asc";r.key===i&&r.direction==="asc"&&(b="desc"),a({key:i,direction:b});const O=[...s].sort((f,w)=>f[i]<w[i]?b==="asc"?-1:1:f[i]>w[i]?b==="asc"?1:-1:0);o(O)},d=i=>r.key!==i?"":r.direction==="asc"?" ↑":" ↓";return e.jsx("div",{className:"p-6",children:e.jsxs(m,{...n,children:[e.jsx(p,{children:e.jsxs(c,{children:[e.jsxs(l,{component:"th",sortDirection:r.key==="name"?r.direction:!1,onClick:()=>t("name"),style:{cursor:"pointer"},children:["名称",d("name")]}),e.jsxs(l,{component:"th",onClick:()=>t("age"),style:{cursor:"pointer"},children:["年龄",d("age")]}),e.jsxs(l,{component:"th",sortDirection:r.key==="score"?r.direction:!1,onClick:()=>t("score"),style:{cursor:"pointer"},children:["评分",d("score")]}),e.jsx(l,{component:"th",children:"城市"})]})}),e.jsx(h,{children:s.map((i,b)=>e.jsxs(c,{children:[e.jsx(l,{children:i.name}),e.jsx(l,{children:i.age}),e.jsx(l,{children:i.score}),e.jsx(l,{children:i.city})]},b))})]})})}},v={args:{stickyHeader:!0,hover:!0,striped:!0},render:n=>e.jsx("div",{className:"p-6",children:e.jsx("div",{style:{height:"300px",overflow:"auto"},children:e.jsxs(m,{...n,children:[e.jsx(p,{children:e.jsxs(c,{children:[e.jsx(l,{component:"th",children:"序号"}),e.jsx(l,{component:"th",children:"姓名"}),e.jsx(l,{component:"th",children:"职位"}),e.jsx(l,{component:"th",children:"电话"}),e.jsx(l,{component:"th",children:"邮箱"})]})}),e.jsx(h,{children:Array.from({length:20},(s,o)=>e.jsxs(c,{children:[e.jsx(l,{children:o+1}),e.jsxs(l,{children:["员工 ",o+1]}),e.jsx(l,{children:o%3===0?"开发工程师":o%3===1?"产品经理":"设计师"}),e.jsxs(l,{children:["138-0000-",String(o+1).padStart(4,"0")]}),e.jsxs(l,{children:["user",o+1,"@example.com"]})]},o))})]})})})},g=()=>{const[n]=T.useState([{id:1,name:"MacBook Pro",price:12999,category:"电脑",stock:15},{id:2,name:"iPhone 15",price:5999,category:"手机",stock:32},{id:3,name:"iPad Air",price:4399,category:"平板",stock:8},{id:4,name:"Apple Watch",price:2799,category:"穿戴",stock:25},{id:5,name:"AirPods Pro",price:1999,category:"音频",stock:41}]),[s,o]=T.useState([]),r=t=>{o(d=>d.includes(t)?d.filter(i=>i!==t):[...d,t])},a=()=>{s.length===n.length?o([]):o(n.map(t=>t.id))};return e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"mb-4 flex items-center gap-4",children:[e.jsx("button",{className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",onClick:a,children:s.length===n.length?"取消全选":"全选"}),s.length>0&&e.jsxs("span",{className:"text-sm text-gray-600",children:["已选择 ",s.length," 项"]})]}),e.jsxs(m,{hover:!0,children:[e.jsx(p,{children:e.jsxs(c,{children:[e.jsx(l,{component:"th",padding:"checkbox",children:e.jsx("input",{type:"checkbox",checked:s.length===n.length,onChange:a,className:"rounded"})}),e.jsx(l,{component:"th",children:"产品名称"}),e.jsx(l,{component:"th",align:"right",children:"价格"}),e.jsx(l,{component:"th",children:"分类"}),e.jsx(l,{component:"th",align:"right",children:"库存"}),e.jsx(l,{component:"th",align:"center",children:"操作"})]})}),e.jsx(h,{children:n.map(t=>e.jsxs(c,{selected:s.includes(t.id),clickable:!0,onClick:()=>r(t.id),children:[e.jsx(l,{padding:"checkbox",children:e.jsx("input",{type:"checkbox",checked:s.includes(t.id),onChange:()=>r(t.id),className:"rounded"})}),e.jsx(l,{children:t.name}),e.jsxs(l,{align:"right",children:["¥",t.price.toLocaleString()]}),e.jsx(l,{children:t.category}),e.jsx(l,{align:"right",children:t.stock}),e.jsx(l,{align:"center",children:e.jsx("button",{className:"px-3 py-1 text-blue-600 hover:bg-blue-50 rounded text-sm",onClick:d=>{d.stopPropagation(),alert(`编辑 ${t.name}`)},children:"编辑"})})]},t.id))})]})]})},x=()=>{const n=[{name:"张三",status:"active",level:3,avatar:"👨‍💻",tags:["React","Vue"]},{name:"李四",status:"inactive",level:5,avatar:"👩‍💼",tags:["Product","UX"]},{name:"王五",status:"pending",level:2,avatar:"👨‍🎨",tags:["Design"]}],s=r=>{const a={active:"bg-green-100 text-green-800",inactive:"bg-gray-100 text-gray-800",pending:"bg-yellow-100 text-yellow-800"},t={active:"活跃",inactive:"非活跃",pending:"待审核"};return e.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${a[r]}`,children:t[r]})},o=r=>"★".repeat(r)+"☆".repeat(5-r);return e.jsx("div",{className:"p-6",children:e.jsxs(m,{hover:!0,children:[e.jsx(p,{children:e.jsxs(c,{children:[e.jsx(l,{component:"th",children:"用户"}),e.jsx(l,{component:"th",children:"状态"}),e.jsx(l,{component:"th",children:"等级"}),e.jsx(l,{component:"th",children:"技能标签"})]})}),e.jsx(h,{children:n.map((r,a)=>e.jsxs(c,{children:[e.jsx(l,{children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-2xl",children:r.avatar}),e.jsx("span",{className:"font-medium",children:r.name})]})}),e.jsx(l,{children:s(r.status)}),e.jsx(l,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-yellow-500",children:o(r.level)}),e.jsxs("span",{className:"text-sm text-gray-600",children:["(",r.level,"/5)"]})]})}),e.jsx(l,{children:e.jsx("div",{className:"flex flex-wrap gap-1",children:r.tags.map(t=>e.jsx("span",{className:"px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs",children:t},t))})})]},a))})]})})},u=()=>{const[n,s]=T.useState([{id:1,name:"项目 Alpha",progress:75,deadline:"2024-02-15",team:5,priority:"high"},{id:2,name:"项目 Beta",progress:45,deadline:"2024-03-01",team:3,priority:"medium"},{id:3,name:"项目 Gamma",progress:90,deadline:"2024-01-30",team:8,priority:"high"},{id:4,name:"项目 Delta",progress:20,deadline:"2024-04-15",team:4,priority:"low"}]),o=a=>{switch(a){case"high":return"text-red-600 bg-red-50";case"medium":return"text-yellow-600 bg-yellow-50";case"low":return"text-green-600 bg-green-50";default:return"text-gray-600 bg-gray-50"}},r=a=>a>=80?"bg-green-500":a>=50?"bg-yellow-500":"bg-red-500";return e.jsxs("div",{className:"p-6 max-w-6xl",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"项目管理看板"}),e.jsx("p",{className:"text-sm text-gray-600",children:"跟踪项目进度和团队分配"})]}),e.jsxs(m,{hover:!0,striped:!0,children:[e.jsx(p,{children:e.jsxs(c,{children:[e.jsx(l,{component:"th",children:"项目名称"}),e.jsx(l,{component:"th",align:"center",children:"进度"}),e.jsx(l,{component:"th",children:"截止日期"}),e.jsx(l,{component:"th",align:"center",children:"团队人数"}),e.jsx(l,{component:"th",align:"center",children:"优先级"}),e.jsx(l,{component:"th",align:"center",children:"操作"})]})}),e.jsx(h,{children:n.map(a=>e.jsxs(c,{children:[e.jsxs(l,{children:[e.jsx("div",{className:"font-medium",children:a.name}),e.jsxs("div",{className:"text-sm text-gray-500",children:["ID: ",a.id]})]}),e.jsxs(l,{align:"center",children:[e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2 mb-1",children:e.jsx("div",{className:`h-2 rounded-full ${r(a.progress)}`,style:{width:`${a.progress}%`}})}),e.jsxs("span",{className:"text-sm text-gray-600",children:[a.progress,"%"]})]}),e.jsxs(l,{children:[e.jsx("div",{className:"text-sm",children:a.deadline}),e.jsx("div",{className:"text-xs text-gray-500",children:new Date(a.deadline)<new Date?"已过期":"进行中"})]}),e.jsx(l,{align:"center",children:e.jsx("div",{className:"flex items-center justify-center",children:e.jsxs("span",{className:"bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm",children:["👥 ",a.team]})})}),e.jsx(l,{align:"center",children:e.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${o(a.priority)}`,children:a.priority.toUpperCase()})}),e.jsx(l,{align:"center",children:e.jsxs("div",{className:"flex justify-center gap-1",children:[e.jsx("button",{className:"px-2 py-1 text-blue-600 hover:bg-blue-50 rounded text-sm",children:"查看"}),e.jsx("button",{className:"px-2 py-1 text-green-600 hover:bg-green-50 rounded text-sm",children:"编辑"})]})})]},a.id))})]})]})};g.__docgenInfo={description:"",methods:[],displayName:"Interactive"};x.__docgenInfo={description:"",methods:[],displayName:"CustomCells"};u.__docgenInfo={description:"",methods:[],displayName:"DataTable"};var N,k,S;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: 'md',
    stickyHeader: false,
    dense: false,
    hover: true,
    striped: false
  },
  render: args => <div className="p-6">\r
      <Table {...args}>\r
        <TableHead>\r
          <TableRow>\r
            <TableCell component="th">姓名</TableCell>\r
            <TableCell component="th">职位</TableCell>\r
            <TableCell component="th">部门</TableCell>\r
            <TableCell component="th" align="right">薪资</TableCell>\r
          </TableRow>\r
        </TableHead>\r
        <TableBody>\r
          <TableRow>\r
            <TableCell>张三</TableCell>\r
            <TableCell>前端工程师</TableCell>\r
            <TableCell>技术部</TableCell>\r
            <TableCell align="right">¥15,000</TableCell>\r
          </TableRow>\r
          <TableRow>\r
            <TableCell>李四</TableCell>\r
            <TableCell>产品经理</TableCell>\r
            <TableCell>产品部</TableCell>\r
            <TableCell align="right">¥18,000</TableCell>\r
          </TableRow>\r
          <TableRow>\r
            <TableCell>王五</TableCell>\r
            <TableCell>设计师</TableCell>\r
            <TableCell>设计部</TableCell>\r
            <TableCell align="right">¥14,000</TableCell>\r
          </TableRow>\r
        </TableBody>\r
      </Table>\r
    </div>
}`,...(S=(k=C.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var R,D,B;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    dense: true,
    hover: true,
    striped: true
  },
  render: args => <div className="p-6">\r
      <Table {...args}>\r
        <TableHead>\r
          <TableRow>\r
            <TableCell component="th" size="small">ID</TableCell>\r
            <TableCell component="th" size="small">名称</TableCell>\r
            <TableCell component="th" size="small">状态</TableCell>\r
            <TableCell component="th" size="small" align="center">操作</TableCell>\r
          </TableRow>\r
        </TableHead>\r
        <TableBody>\r
          {[1, 2, 3].map(i => <TableRow key={i}>\r
              <TableCell size="small">#{i.toString().padStart(3, '0')}</TableCell>\r
              <TableCell size="small">项目 {i}</TableCell>\r
              <TableCell size="small">活跃</TableCell>\r
              <TableCell size="small" align="center">编辑</TableCell>\r
            </TableRow>)}\r
        </TableBody>\r
      </Table>\r
    </div>
}`,...(B=(D=y.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var z,H,P;j.parameters={...j.parameters,docs:{...(z=j.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'md',
    hover: true
  },
  render: args => {
    const [data, setData] = useState([{
      name: 'Alice',
      age: 28,
      score: 95,
      city: '北京'
    }, {
      name: 'Bob',
      age: 32,
      score: 87,
      city: '上海'
    }, {
      name: 'Charlie',
      age: 25,
      score: 92,
      city: '深圳'
    }]);
    const [sortConfig, setSortConfig] = useState({
      key: 'name',
      direction: 'asc'
    });
    const handleSort = key => {
      let direction = 'asc';
      if (sortConfig.key === key && sortConfig.direction === 'asc') {
        direction = 'desc';
      }
      setSortConfig({
        key,
        direction
      });
      const sortedData = [...data].sort((a, b) => {
        if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
        if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
        return 0;
      });
      setData(sortedData);
    };
    const getSortIcon = key => {
      if (sortConfig.key !== key) return '';
      return sortConfig.direction === 'asc' ? ' ↑' : ' ↓';
    };
    return <div className="p-6">\r
        <Table {...args}>\r
          <TableHead>\r
            <TableRow>\r
              <TableCell component="th" sortDirection={sortConfig.key === 'name' ? sortConfig.direction : false} onClick={() => handleSort('name')} style={{
              cursor: 'pointer'
            }}>\r
                名称{getSortIcon('name')}\r
              </TableCell>\r
              <TableCell component="th" onClick={() => handleSort('age')} style={{
              cursor: 'pointer'
            }}>\r
                年龄{getSortIcon('age')}\r
              </TableCell>\r
              <TableCell component="th" sortDirection={sortConfig.key === 'score' ? sortConfig.direction : false} onClick={() => handleSort('score')} style={{
              cursor: 'pointer'
            }}>\r
                评分{getSortIcon('score')}\r
              </TableCell>\r
              <TableCell component="th">城市</TableCell>\r
            </TableRow>\r
          </TableHead>\r
          <TableBody>\r
            {data.map((row, index) => <TableRow key={index}>\r
                <TableCell>{row.name}</TableCell>\r
                <TableCell>{row.age}</TableCell>\r
                <TableCell>{row.score}</TableCell>\r
                <TableCell>{row.city}</TableCell>\r
              </TableRow>)}\r
          </TableBody>\r
        </Table>\r
      </div>;
  }
}`,...(P=(H=j.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var I,A,_;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    stickyHeader: true,
    hover: true,
    striped: true
  },
  render: args => <div className="p-6">\r
      <div style={{
      height: '300px',
      overflow: 'auto'
    }}>\r
        <Table {...args}>\r
          <TableHead>\r
            <TableRow>\r
              <TableCell component="th">序号</TableCell>\r
              <TableCell component="th">姓名</TableCell>\r
              <TableCell component="th">职位</TableCell>\r
              <TableCell component="th">电话</TableCell>\r
              <TableCell component="th">邮箱</TableCell>\r
            </TableRow>\r
          </TableHead>\r
          <TableBody>\r
            {Array.from({
            length: 20
          }, (_, i) => <TableRow key={i}>\r
                <TableCell>{i + 1}</TableCell>\r
                <TableCell>员工 {i + 1}</TableCell>\r
                <TableCell>{i % 3 === 0 ? '开发工程师' : i % 3 === 1 ? '产品经理' : '设计师'}</TableCell>\r
                <TableCell>138-0000-{String(i + 1).padStart(4, '0')}</TableCell>\r
                <TableCell>user{i + 1}@example.com</TableCell>\r
              </TableRow>)}\r
          </TableBody>\r
        </Table>\r
      </div>\r
    </div>
}`,...(_=(A=v.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var $,L,E;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const [products] = useState([{
    id: 1,
    name: 'MacBook Pro',
    price: 12999,
    category: '电脑',
    stock: 15
  }, {
    id: 2,
    name: 'iPhone 15',
    price: 5999,
    category: '手机',
    stock: 32
  }, {
    id: 3,
    name: 'iPad Air',
    price: 4399,
    category: '平板',
    stock: 8
  }, {
    id: 4,
    name: 'Apple Watch',
    price: 2799,
    category: '穿戴',
    stock: 25
  }, {
    id: 5,
    name: 'AirPods Pro',
    price: 1999,
    category: '音频',
    stock: 41
  }]);
  const [selectedRows, setSelectedRows] = useState([]);
  const handleRowClick = productId => {
    setSelectedRows(prev => prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]);
  };
  const handleSelectAll = () => {
    if (selectedRows.length === products.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(products.map(p => p.id));
    }
  };
  return <div className="p-6">\r
      <div className="mb-4 flex items-center gap-4">\r
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={handleSelectAll}>\r
          {selectedRows.length === products.length ? '取消全选' : '全选'}\r
        </button>\r
        {selectedRows.length > 0 && <span className="text-sm text-gray-600">\r
            已选择 {selectedRows.length} 项\r
          </span>}\r
      </div>\r
      \r
      <Table hover={true}>\r
        <TableHead>\r
          <TableRow>\r
            <TableCell component="th" padding="checkbox">\r
              <input type="checkbox" checked={selectedRows.length === products.length} onChange={handleSelectAll} className="rounded" />\r
            </TableCell>\r
            <TableCell component="th">产品名称</TableCell>\r
            <TableCell component="th" align="right">价格</TableCell>\r
            <TableCell component="th">分类</TableCell>\r
            <TableCell component="th" align="right">库存</TableCell>\r
            <TableCell component="th" align="center">操作</TableCell>\r
          </TableRow>\r
        </TableHead>\r
        <TableBody>\r
          {products.map(product => <TableRow key={product.id} selected={selectedRows.includes(product.id)} clickable={true} onClick={() => handleRowClick(product.id)}>\r
              <TableCell padding="checkbox">\r
                <input type="checkbox" checked={selectedRows.includes(product.id)} onChange={() => handleRowClick(product.id)} className="rounded" />\r
              </TableCell>\r
              <TableCell>{product.name}</TableCell>\r
              <TableCell align="right">¥{product.price.toLocaleString()}</TableCell>\r
              <TableCell>{product.category}</TableCell>\r
              <TableCell align="right">{product.stock}</TableCell>\r
              <TableCell align="center">\r
                <button className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded text-sm" onClick={e => {
              e.stopPropagation();
              alert(\`编辑 \${product.name}\`);
            }}>\r
                  编辑\r
                </button>\r
              </TableCell>\r
            </TableRow>)}\r
        </TableBody>\r
      </Table>\r
    </div>;
}`,...(E=(L=g.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var U,G,M;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  const data = [{
    name: '张三',
    status: 'active',
    level: 3,
    avatar: '👨‍💻',
    tags: ['React', 'Vue']
  }, {
    name: '李四',
    status: 'inactive',
    level: 5,
    avatar: '👩‍💼',
    tags: ['Product', 'UX']
  }, {
    name: '王五',
    status: 'pending',
    level: 2,
    avatar: '👨‍🎨',
    tags: ['Design']
  }];
  const getStatusBadge = status => {
    const styles = {
      active: 'bg-green-100 text-green-800',
      inactive: 'bg-gray-100 text-gray-800',
      pending: 'bg-yellow-100 text-yellow-800'
    };
    const labels = {
      active: '活跃',
      inactive: '非活跃',
      pending: '待审核'
    };
    return <span className={\`px-2 py-1 rounded-full text-xs font-medium \${styles[status]}\`}>\r
        {labels[status]}\r
      </span>;
  };
  const getLevelStars = level => {
    return '★'.repeat(level) + '☆'.repeat(5 - level);
  };
  return <div className="p-6">\r
      <Table hover={true}>\r
        <TableHead>\r
          <TableRow>\r
            <TableCell component="th">用户</TableCell>\r
            <TableCell component="th">状态</TableCell>\r
            <TableCell component="th">等级</TableCell>\r
            <TableCell component="th">技能标签</TableCell>\r
          </TableRow>\r
        </TableHead>\r
        <TableBody>\r
          {data.map((row, index) => <TableRow key={index}>\r
              <TableCell>\r
                <div className="flex items-center gap-3">\r
                  <span className="text-2xl">{row.avatar}</span>\r
                  <span className="font-medium">{row.name}</span>\r
                </div>\r
              </TableCell>\r
              <TableCell>\r
                {getStatusBadge(row.status)}\r
              </TableCell>\r
              <TableCell>\r
                <div className="flex items-center gap-2">\r
                  <span className="text-yellow-500">{getLevelStars(row.level)}</span>\r
                  <span className="text-sm text-gray-600">({row.level}/5)</span>\r
                </div>\r
              </TableCell>\r
              <TableCell>\r
                <div className="flex flex-wrap gap-1">\r
                  {row.tags.map(tag => <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">\r
                      {tag}\r
                    </span>)}\r
                </div>\r
              </TableCell>\r
            </TableRow>)}\r
        </TableBody>\r
      </Table>\r
    </div>;
}`,...(M=(G=x.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var V,W,X;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const [data, setData] = useState([{
    id: 1,
    name: '项目 Alpha',
    progress: 75,
    deadline: '2024-02-15',
    team: 5,
    priority: 'high'
  }, {
    id: 2,
    name: '项目 Beta',
    progress: 45,
    deadline: '2024-03-01',
    team: 3,
    priority: 'medium'
  }, {
    id: 3,
    name: '项目 Gamma',
    progress: 90,
    deadline: '2024-01-30',
    team: 8,
    priority: 'high'
  }, {
    id: 4,
    name: '项目 Delta',
    progress: 20,
    deadline: '2024-04-15',
    team: 4,
    priority: 'low'
  }]);
  const getPriorityColor = priority => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      case 'low':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };
  const getProgressColor = progress => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  return <div className="p-6 max-w-6xl">\r
      <div className="mb-4">\r
        <h3 className="text-lg font-semibold">项目管理看板</h3>\r
        <p className="text-sm text-gray-600">跟踪项目进度和团队分配</p>\r
      </div>\r
      \r
      <Table hover={true} striped={true}>\r
        <TableHead>\r
          <TableRow>\r
            <TableCell component="th">项目名称</TableCell>\r
            <TableCell component="th" align="center">进度</TableCell>\r
            <TableCell component="th">截止日期</TableCell>\r
            <TableCell component="th" align="center">团队人数</TableCell>\r
            <TableCell component="th" align="center">优先级</TableCell>\r
            <TableCell component="th" align="center">操作</TableCell>\r
          </TableRow>\r
        </TableHead>\r
        <TableBody>\r
          {data.map(project => <TableRow key={project.id}>\r
              <TableCell>\r
                <div className="font-medium">{project.name}</div>\r
                <div className="text-sm text-gray-500">ID: {project.id}</div>\r
              </TableCell>\r
              <TableCell align="center">\r
                <div className="w-full bg-gray-200 rounded-full h-2 mb-1">\r
                  <div className={\`h-2 rounded-full \${getProgressColor(project.progress)}\`} style={{
                width: \`\${project.progress}%\`
              }}></div>\r
                </div>\r
                <span className="text-sm text-gray-600">{project.progress}%</span>\r
              </TableCell>\r
              <TableCell>\r
                <div className="text-sm">{project.deadline}</div>\r
                <div className="text-xs text-gray-500">\r
                  {new Date(project.deadline) < new Date() ? '已过期' : '进行中'}\r
                </div>\r
              </TableCell>\r
              <TableCell align="center">\r
                <div className="flex items-center justify-center">\r
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">\r
                    👥 {project.team}\r
                  </span>\r
                </div>\r
              </TableCell>\r
              <TableCell align="center">\r
                <span className={\`px-2 py-1 rounded-full text-xs font-medium \${getPriorityColor(project.priority)}\`}>\r
                  {project.priority.toUpperCase()}\r
                </span>\r
              </TableCell>\r
              <TableCell align="center">\r
                <div className="flex justify-center gap-1">\r
                  <button className="px-2 py-1 text-blue-600 hover:bg-blue-50 rounded text-sm">\r
                    查看\r
                  </button>\r
                  <button className="px-2 py-1 text-green-600 hover:bg-green-50 rounded text-sm">\r
                    编辑\r
                  </button>\r
                </div>\r
              </TableCell>\r
            </TableRow>)}\r
        </TableBody>\r
      </Table>\r
    </div>;
}`,...(X=(W=u.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const K=["Primary","Dense","Sortable","StickyHeader","Interactive","CustomCells","DataTable"];export{x as CustomCells,u as DataTable,y as Dense,g as Interactive,C as Primary,j as Sortable,v as StickyHeader,K as __namedExportsOrder,J as default};
