import{j as e,r as R}from"./iframe-DqwHGwZR.js";import{I as g}from"./ImageGallery-D6EPkvPH.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,B={title:"Components/ImageGallery (React)",component:g,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{images:{control:"object",description:"图片数组"},title:{control:"text",description:"画廊标题"},layout:{control:{type:"select"},options:["grid","masonry","carousel"],description:"布局模式"},size:{control:{type:"select"},options:["sm","md","lg","xl"],description:"画廊尺寸"},columns:{control:{type:"number",min:1,max:8},description:"网格列数"},gap:{control:{type:"number",min:4,max:32},description:"图片间距(px)"},showInfo:{control:"boolean",description:"显示图片信息"},showCount:{control:"boolean",description:"显示图片数量"},showDownload:{control:"boolean",description:"显示下载按钮"},showPagination:{control:"boolean",description:"显示分页"},itemsPerPage:{control:{type:"number",min:4,max:20},description:"每页图片数"},lazyLoad:{control:"boolean",description:"懒加载"},loading:{control:"boolean",description:"加载状态"},onSelect:{action:"select"},onDownload:{action:"download"},onLightboxOpen:{action:"lightbox-open"},onLightboxClose:{action:"lightbox-close"}}},n=o=>e.jsx("div",{style:{width:"100%",maxWidth:"600px",margin:"0 auto",padding:"16px"},children:e.jsx(g,{...o})}),u=[{id:1,src:"https://picsum.photos/800/600?random=1",thumbnail:"https://picsum.photos/400/300?random=1",title:"美丽的风景",description:"这是一张美丽的自然风景照片，展现了大自然的壮丽。",alt:"风景照片"},{id:2,src:"https://picsum.photos/800/600?random=2",thumbnail:"https://picsum.photos/400/300?random=2",title:"城市建筑",description:"现代城市建筑的精美拍摄，展现了都市的繁华。",alt:"建筑照片"},{id:3,src:"https://picsum.photos/800/600?random=3",thumbnail:"https://picsum.photos/400/300?random=3",title:"艺术创作",description:"独特的艺术作品，融合了传统与现代的元素。",alt:"艺术照片"},{id:4,src:"https://picsum.photos/800/600?random=4",thumbnail:"https://picsum.photos/400/300?random=4",title:"自然生态",description:"野生动物在自然环境中的珍贵瞬间。",alt:"生态照片"},{id:5,src:"https://picsum.photos/800/600?random=5",thumbnail:"https://picsum.photos/400/300?random=5",title:"人文纪实",description:"记录人们日常生活中的真实瞬间。",alt:"人文照片"},{id:6,src:"https://picsum.photos/800/600?random=6",thumbnail:"https://picsum.photos/400/300?random=6",title:"科技创新",description:"展现现代科技发展的成果和未来趋势。",alt:"科技照片"},{id:7,src:"https://picsum.photos/800/600?random=7",thumbnail:"https://picsum.photos/400/300?random=7",title:"食物美学",description:"精心制作的美食，色香味俱全。",alt:"美食照片"},{id:8,src:"https://picsum.photos/800/600?random=8",thumbnail:"https://picsum.photos/400/300?random=8",title:"运动瞬间",description:"捕捉运动员的精彩瞬间和拼搏精神。",alt:"运动照片"},{id:9,src:"https://picsum.photos/800/600?random=9",thumbnail:"https://picsum.photos/400/300?random=9",title:"旅行记忆",description:"世界各地的美丽景点和文化体验。",alt:"旅行照片"}],t=n.bind({});t.args={images:u,title:"图片画廊",layout:"grid",size:"md",columns:3,gap:16,showInfo:!0,showCount:!0,showDownload:!1,showPagination:!1,itemsPerPage:12,lazyLoad:!0,loading:!1,onSelect:c("select"),onDownload:c("download"),onLightboxOpen:c("lightbox-open"),onLightboxClose:c("lightbox-close")};const r=n.bind({});r.args={...t.args,images:[...u,...u.map(o=>({...o,id:o.id+10}))],title:"分页图片画廊",showPagination:!0,itemsPerPage:6};const i=n.bind({});i.args={...t.args,title:"瀑布流布局",layout:"masonry",columns:4};const l=n.bind({});l.args={...t.args,title:"轮播图布局",layout:"carousel",size:"lg",showInfo:!1};const d=n.bind({});d.args={...t.args,title:"加载中...",images:[],loading:!0};const p=n.bind({});p.args={...t.args,title:"空画廊",images:[],loading:!1};const a=o=>{const[s,m]=R.useState("all"),N=o.images.filter(F=>s==="all"?!0:F.title.includes(s));return e.jsxs("div",{style:{width:"100%",maxWidth:"600px",margin:"0 auto",padding:"16px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[e.jsx("h2",{style:{fontSize:"24px",fontWeight:"bold"},children:o.title}),e.jsxs("div",{children:[e.jsx("button",{style:{padding:"8px 16px",fontSize:"14px",borderRadius:"4px",backgroundColor:s==="all"?"blue":"white",color:s==="all"?"white":"black"},onClick:()=>m("all"),children:"全部"}),e.jsx("button",{className:`px-3 py-1 text-sm rounded ml-2 ${s==="风景"?"bg-blue-500 text-white":""}`,onClick:()=>m("风景"),children:"风景"}),e.jsx("button",{className:`px-3 py-1 text-sm rounded ml-2 ${s==="城市"?"bg-blue-500 text-white":""}`,onClick:()=>m("城市"),children:"城市"})]})]}),e.jsx(g,{...o,images:N})]})};a.args={...t.args,title:"可筛选的画廊"};a.__docgenInfo={description:"",methods:[],displayName:"WithCustomHeader"};var h,x,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => <div style={{
  width: '100%',
  maxWidth: '600px',
  margin: '0 auto',
  padding: '16px'
}}>\r
        <ImageGallery {...args} />\r
    </div>`,...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var y,f,w;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`args => <div style={{
  width: '100%',
  maxWidth: '600px',
  margin: '0 auto',
  padding: '16px'
}}>\r
        <ImageGallery {...args} />\r
    </div>`,...(w=(f=r.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var v,I,C;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`args => <div style={{
  width: '100%',
  maxWidth: '600px',
  margin: '0 auto',
  padding: '16px'
}}>\r
        <ImageGallery {...args} />\r
    </div>`,...(C=(I=i.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var S,W,j;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`args => <div style={{
  width: '100%',
  maxWidth: '600px',
  margin: '0 auto',
  padding: '16px'
}}>\r
        <ImageGallery {...args} />\r
    </div>`,...(j=(W=l.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var L,P,_;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`args => <div style={{
  width: '100%',
  maxWidth: '600px',
  margin: '0 auto',
  padding: '16px'
}}>\r
        <ImageGallery {...args} />\r
    </div>`,...(_=(P=d.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var k,G,z;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`args => <div style={{
  width: '100%',
  maxWidth: '600px',
  margin: '0 auto',
  padding: '16px'
}}>\r
        <ImageGallery {...args} />\r
    </div>`,...(z=(G=p.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var O,D,E;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const [filter, setFilter] = useState('all');
  const filteredImages = args.images.filter(img => {
    if (filter === 'all') return true;
    return img.title.includes(filter);
  });
  return <div style={{
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '16px'
  }}>\r
        <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px'
    }}>\r
            <h2 style={{
        fontSize: '24px',
        fontWeight: 'bold'
      }}>{args.title}</h2>\r
            <div>\r
                <button style={{
          padding: '8px 16px',
          fontSize: '14px',
          borderRadius: '4px',
          backgroundColor: filter === 'all' ? 'blue' : 'white',
          color: filter === 'all' ? 'white' : 'black'
        }} onClick={() => setFilter('all')}>全部</button>\r
                <button className={\`px-3 py-1 text-sm rounded ml-2 \${filter === '风景' ? 'bg-blue-500 text-white' : ''}\`} onClick={() => setFilter('风景')}>风景</button>\r
                <button className={\`px-3 py-1 text-sm rounded ml-2 \${filter === '城市' ? 'bg-blue-500 text-white' : ''}\`} onClick={() => setFilter('城市')}>城市</button>\r
            </div>\r
        </div>\r
        <ImageGallery {...args} images={filteredImages} />\r
      </div>;
}`,...(E=(D=a.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const H=["Default","WithPagination","MasonryLayout","CarouselLayout","LoadingState","EmptyState","WithCustomHeader"];export{l as CarouselLayout,t as Default,p as EmptyState,d as LoadingState,i as MasonryLayout,a as WithCustomHeader,r as WithPagination,H as __namedExportsOrder,B as default};
