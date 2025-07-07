import{j as e,r as v}from"./iframe-DqwHGwZR.js";import{R as n}from"./Rating-DW4avcXs.js";const W={title:"Components/Rating (React)",component:n,parameters:{layout:"centered",docs:{description:{component:"Watercolor 评分组件，支持星级评分，可设置只读模式。"}}},tags:["autodocs"],argTypes:{value:{control:{type:"number",min:0,max:5,step:.1},description:"当前评分值"},max:{control:{type:"number",min:3,max:10,step:1},description:"最大评分"},readOnly:{control:"boolean",description:"是否只读"},onChange:{action:"change",description:"评分变化回调"},className:{control:"text",description:"自定义CSS类名"}}},g={args:{value:3,max:5,readOnly:!1},render:a=>{const[s,t]=v.useState(a.value);return e.jsxs("div",{className:"p-8 text-center",children:[e.jsx("div",{className:"text-3xl mb-4",children:e.jsx(n,{value:s,max:a.max,readOnly:a.readOnly,onChange:l=>{var i;t(l),(i=a.onChange)==null||i.call(a,l)}})}),e.jsxs("p",{className:"text-sm text-gray-500",children:["当前评分: ",s," / ",a.max]})]})}},p={args:{value:4,max:5,readOnly:!0},render:a=>e.jsxs("div",{className:"p-8 text-center",children:[e.jsx("div",{className:"text-3xl",children:e.jsx(n,{...a})}),e.jsxs("p",{className:"text-sm text-gray-500 mt-4",children:["只读模式 - 评分: ",a.value]})]})},d=()=>{const a=[{max:3,value:2,label:"3星制"},{max:5,value:3.5,label:"5星制"},{max:7,value:5,label:"7星制"},{max:10,value:8,label:"10星制"}];return e.jsx("div",{className:"space-y-6",children:a.map(({max:s,value:t,label:l})=>e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:l}),e.jsx("div",{className:"text-2xl",children:e.jsx(n,{value:t,max:s,readOnly:!0})}),e.jsxs("p",{className:"text-sm text-gray-500 mt-2",children:[t," / ",s," 星"]})]},s))})},o=()=>{const a=[{name:"iPhone 15 Pro",rating:4.5,reviews:1234},{name:"MacBook Air M2",rating:4.8,reviews:856},{name:"AirPods Pro",rating:4.2,reviews:2341},{name:"Apple Watch Series 9",rating:4.6,reviews:567}];return e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsx("h3",{className:"text-xl font-bold text-center mb-6",children:"产品评价"}),a.map((s,t)=>e.jsxs("div",{className:"p-4 border rounded-lg bg-white shadow-sm",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsx("h4",{className:"font-semibold text-gray-800",children:s.name}),e.jsx("span",{className:"text-sm font-medium text-blue-600",children:s.rating})]}),e.jsxs("div",{className:"flex items-center space-x-2 mb-2",children:[e.jsx(n,{value:s.rating,readOnly:!0}),e.jsxs("span",{className:"text-sm text-gray-500",children:["(",s.reviews," 评价)"]})]}),e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:e.jsx("div",{className:"bg-yellow-400 h-2 rounded-full",style:{width:`${s.rating/5*100}%`}})})]},t))]})},m=()=>{const[a,s]=v.useState({overall:0,quality:0,service:0,value:0,shipping:0}),t=[{key:"overall",label:"总体评价",description:"您对此产品的总体满意度"},{key:"quality",label:"产品质量",description:"产品的做工和质量如何"},{key:"service",label:"客户服务",description:"客服的响应速度和专业程度"},{key:"value",label:"性价比",description:"产品的价格是否合理"},{key:"shipping",label:"物流速度",description:"配送速度和包装情况"}],l=(r,c)=>{s(u=>({...u,[r]:c}))},i=Object.values(a).reduce((r,c)=>r+c,0)/t.length;return e.jsxs("div",{className:"max-w-md space-y-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"text-xl font-bold mb-2",children:"请为我们评分"}),e.jsx("p",{className:"text-gray-600 text-sm",children:"您的反馈对我们很重要"})]}),e.jsx("div",{className:"space-y-4",children:t.map(({key:r,label:c,description:u})=>e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("h4",{className:"font-medium",children:c}),e.jsxs("span",{className:"text-sm text-blue-600 font-medium",children:[a[r]||0,"/5"]})]}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:u}),e.jsx("div",{className:"flex justify-center",children:e.jsx(n,{value:a[r],onChange:M=>l(r,M)})})]},r))}),e.jsxs("div",{className:"text-center p-4 bg-gray-50 rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"平均评分"}),e.jsx("div",{className:"text-2xl mb-2",children:e.jsx(n,{value:i,readOnly:!0})}),e.jsxs("p",{className:"text-lg font-bold text-blue-600",children:[i.toFixed(1)," / 5.0"]})]}),e.jsx("button",{className:"w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors",children:"提交评价"})]})},x=()=>{const[a,s]=v.useState(3.5);return e.jsxs("div",{className:"text-center space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"支持半星评分"}),e.jsx("div",{className:"text-3xl",children:e.jsx(n,{value:a,onChange:s})}),e.jsxs("p",{className:"text-sm text-gray-600",children:["当前评分: ",a," 星"]}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:()=>s(2.5),className:"px-3 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300",children:"2.5星"}),e.jsx("button",{onClick:()=>s(3.5),className:"px-3 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300",children:"3.5星"}),e.jsx("button",{onClick:()=>s(4.5),className:"px-3 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300",children:"4.5星"})]})]})};d.__docgenInfo={description:"",methods:[],displayName:"DifferentScales"};o.__docgenInfo={description:"",methods:[],displayName:"ProductReviews"};m.__docgenInfo={description:"",methods:[],displayName:"InteractiveReview"};x.__docgenInfo={description:"",methods:[],displayName:"HalfStarDemo"};var b,h,y;g.parameters={...g.parameters,docs:{...(b=g.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: 3,
    max: 5,
    readOnly: false
  },
  render: args => {
    const [rating, setRating] = useState(args.value);
    return <div className="p-8 text-center">\r
        <div className="text-3xl mb-4">\r
          <Rating value={rating} max={args.max} readOnly={args.readOnly} onChange={newRating => {
          setRating(newRating);
          args.onChange?.(newRating);
        }} />\r
        </div>\r
        <p className="text-sm text-gray-500">\r
          当前评分: {rating} / {args.max}\r
        </p>\r
      </div>;
  }
}`,...(y=(h=g.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var N,f,j;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    value: 4,
    max: 5,
    readOnly: true
  },
  render: args => <div className="p-8 text-center">\r
      <div className="text-3xl">\r
        <Rating {...args} />\r
      </div>\r
      <p className="text-sm text-gray-500 mt-4">\r
        只读模式 - 评分: {args.value}\r
      </p>\r
    </div>
}`,...(j=(f=p.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var R,w,k;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const scales = [{
    max: 3,
    value: 2,
    label: '3星制'
  }, {
    max: 5,
    value: 3.5,
    label: '5星制'
  }, {
    max: 7,
    value: 5,
    label: '7星制'
  }, {
    max: 10,
    value: 8,
    label: '10星制'
  }];
  return <div className="space-y-6">\r
      {scales.map(({
      max,
      value,
      label
    }) => <div key={max} className="text-center">\r
          <h3 className="text-lg font-semibold mb-2">{label}</h3>\r
          <div className="text-2xl">\r
            <Rating value={value} max={max} readOnly />\r
          </div>\r
          <p className="text-sm text-gray-500 mt-2">\r
            {value} / {max} 星\r
          </p>\r
        </div>)}\r
    </div>;
}`,...(k=(w=d.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var S,C,O;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const products = [{
    name: 'iPhone 15 Pro',
    rating: 4.5,
    reviews: 1234
  }, {
    name: 'MacBook Air M2',
    rating: 4.8,
    reviews: 856
  }, {
    name: 'AirPods Pro',
    rating: 4.2,
    reviews: 2341
  }, {
    name: 'Apple Watch Series 9',
    rating: 4.6,
    reviews: 567
  }];
  return <div className="space-y-4 w-80">\r
      <h3 className="text-xl font-bold text-center mb-6">产品评价</h3>\r
      {products.map((product, index) => <div key={index} className="p-4 border rounded-lg bg-white shadow-sm">\r
          <div className="flex justify-between items-start mb-2">\r
            <h4 className="font-semibold text-gray-800">{product.name}</h4>\r
            <span className="text-sm font-medium text-blue-600">\r
              {product.rating}\r
            </span>\r
          </div>\r
          \r
          <div className="flex items-center space-x-2 mb-2">\r
            <Rating value={product.rating} readOnly />\r
            <span className="text-sm text-gray-500">\r
              ({product.reviews} 评价)\r
            </span>\r
          </div>\r
          \r
          <div className="w-full bg-gray-200 rounded-full h-2">\r
            <div className="bg-yellow-400 h-2 rounded-full" style={{
          width: \`\${product.rating / 5 * 100}%\`
        }}></div>\r
          </div>\r
        </div>)}\r
    </div>;
}`,...(O=(C=o.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var P,_,I;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const [ratings, setRatings] = useState({
    overall: 0,
    quality: 0,
    service: 0,
    value: 0,
    shipping: 0
  });
  const categories = [{
    key: 'overall',
    label: '总体评价',
    description: '您对此产品的总体满意度'
  }, {
    key: 'quality',
    label: '产品质量',
    description: '产品的做工和质量如何'
  }, {
    key: 'service',
    label: '客户服务',
    description: '客服的响应速度和专业程度'
  }, {
    key: 'value',
    label: '性价比',
    description: '产品的价格是否合理'
  }, {
    key: 'shipping',
    label: '物流速度',
    description: '配送速度和包装情况'
  }];
  const handleRatingChange = (category, newRating) => {
    setRatings(prev => ({
      ...prev,
      [category]: newRating
    }));
  };
  const averageRating = Object.values(ratings).reduce((a, b) => a + b, 0) / categories.length;
  return <div className="max-w-md space-y-6">\r
      <div className="text-center">\r
        <h3 className="text-xl font-bold mb-2">请为我们评分</h3>\r
        <p className="text-gray-600 text-sm">您的反馈对我们很重要</p>\r
      </div>\r
\r
      <div className="space-y-4">\r
        {categories.map(({
        key,
        label,
        description
      }) => <div key={key} className="p-4 border rounded-lg">\r
            <div className="flex justify-between items-center mb-2">\r
              <h4 className="font-medium">{label}</h4>\r
              <span className="text-sm text-blue-600 font-medium">\r
                {ratings[key] || 0}/5\r
              </span>\r
            </div>\r
            \r
            <p className="text-sm text-gray-600 mb-3">{description}</p>\r
            \r
            <div className="flex justify-center">\r
              <Rating value={ratings[key]} onChange={rating => handleRatingChange(key, rating)} />\r
            </div>\r
          </div>)}\r
      </div>\r
\r
      <div className="text-center p-4 bg-gray-50 rounded-lg">\r
        <h4 className="font-semibold mb-2">平均评分</h4>\r
        <div className="text-2xl mb-2">\r
          <Rating value={averageRating} readOnly />\r
        </div>\r
        <p className="text-lg font-bold text-blue-600">\r
          {averageRating.toFixed(1)} / 5.0\r
        </p>\r
      </div>\r
\r
      <button className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">\r
        提交评价\r
      </button>\r
    </div>;
}`,...(I=(_=m.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var A,D,q;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const [rating, setRating] = useState(3.5);
  return <div className="text-center space-y-4">\r
      <h3 className="text-lg font-semibold">支持半星评分</h3>\r
      \r
      <div className="text-3xl">\r
        <Rating value={rating} onChange={setRating} />\r
      </div>\r
      \r
      <p className="text-sm text-gray-600">\r
        当前评分: {rating} 星\r
      </p>\r
      \r
      <div className="space-x-2">\r
        <button onClick={() => setRating(2.5)} className="px-3 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300">\r
          2.5星\r
        </button>\r
        <button onClick={() => setRating(3.5)} className="px-3 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300">\r
          3.5星\r
        </button>\r
        <button onClick={() => setRating(4.5)} className="px-3 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300">\r
          4.5星\r
        </button>\r
      </div>\r
    </div>;
}`,...(q=(D=x.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};const B=["Interactive","ReadOnly","DifferentScales","ProductReviews","InteractiveReview","HalfStarDemo"];export{d as DifferentScales,x as HalfStarDemo,g as Interactive,m as InteractiveReview,o as ProductReviews,p as ReadOnly,B as __namedExportsOrder,W as default};
