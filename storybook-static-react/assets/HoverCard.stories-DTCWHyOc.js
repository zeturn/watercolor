import{j as a}from"./iframe-DqwHGwZR.js";import{H as s}from"./HoverCard-CsR-jhJ_.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,u={title:"Components/HoverCard (React)",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{triggerText:{control:"text",description:"触发元素的文本"},cardData:{control:"object",description:"卡片数据对象"},variant:{control:{type:"select"},options:["default","outlined","filled","minimal"],description:"触发器变体"},size:{control:{type:"select"},options:["sm","md","lg"],description:"触发器大小"},cardSize:{control:{type:"select"},options:["sm","md","lg","xl"],description:"卡片大小"},position:{control:{type:"select"},options:["top","bottom","left","right"],description:"卡片位置"},delay:{control:{type:"number",min:0,max:2e3,step:100},description:"显示延迟(毫秒)"},hideDelay:{control:{type:"number",min:0,max:1e3,step:50},description:"隐藏延迟(毫秒)"},showArrow:{control:"boolean",description:"是否显示箭头"},disabled:{control:"boolean",description:"是否禁用"},onShow:{action:"show"},onHide:{action:"hide"},onAction:{action:"action"}}},t={args:{triggerText:"悬停查看详情",cardData:{title:"用户信息",description:"这是一个用户信息预览卡片，显示了基本的用户详情。",image:"https://via.placeholder.com/200x150/3b82f6/ffffff?text=User",imageAlt:"用户头像",meta:["在线","最近活跃"],actions:[{label:"查看资料",onClick:e("查看资料")},{label:"发送消息",onClick:e("发送消息")}]},variant:"default",size:"md",cardSize:"md",position:"top",delay:300,hideDelay:100,showArrow:!0,disabled:!1,onShow:e("show"),onHide:e("hide")},render:o=>a.jsxs("div",{className:"w-full max-w-md p-8",children:[a.jsx("p",{className:"text-center text-gray-600 mb-4",children:"将鼠标悬停在下面的文本上查看预览卡片"}),a.jsx(s,{...o})]})},r={args:{triggerText:'MacBook Pro 16"',cardData:{title:"MacBook Pro 16英寸",description:"配备M3 Max芯片的强大笔记本电脑，专为专业用户设计。",image:"https://via.placeholder.com/280x200/1f2937/ffffff?text=MacBook+Pro",imageAlt:"MacBook Pro",meta:["现货","¥25,999"],actions:[{label:"立即购买",onClick:e("立即购买")},{label:"加入购物车",onClick:e("加入购物车")}]},variant:"outlined",size:"md",cardSize:"lg",position:"bottom",delay:200,hideDelay:150,showArrow:!0,disabled:!1,onShow:e("show"),onHide:e("hide")},render:o=>a.jsx("div",{className:"w-full max-w-2xl p-8",children:a.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg",children:[a.jsx("h3",{className:"text-lg font-semibold mb-4",children:"热门产品"}),a.jsxs("p",{className:"text-gray-600",children:["查看我们最新的",a.jsx(s,{...o}),"型号，性能强劲，设计精美。"]})]})})},i={args:{triggerText:"@张小明",cardData:{title:"张小明",description:"前端开发工程师，专注于Vue.js和React开发，5年工作经验。",image:"https://via.placeholder.com/120x120/8b5cf6/ffffff?text=张",imageAlt:"张小明头像",meta:["开发组","在线"],actions:[{label:"发私信",onClick:e("发私信")},{label:"查看资料",onClick:e("查看资料")}]},variant:"filled",size:"sm",cardSize:"md",position:"right",delay:400,hideDelay:100,showArrow:!0,disabled:!1,onShow:e("show"),onHide:e("hide")},render:o=>a.jsx("div",{className:"w-full max-w-lg p-8",children:a.jsxs("p",{className:"text-gray-700 leading-relaxed",children:["项目进度更新：",a.jsx(s,{...o}),"已经完成了新功能的开发，代码已提交审核。"]})})};var l,c,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    triggerText: '悬停查看详情',
    cardData: {
      title: '用户信息',
      description: '这是一个用户信息预览卡片，显示了基本的用户详情。',
      image: 'https://via.placeholder.com/200x150/3b82f6/ffffff?text=User',
      imageAlt: '用户头像',
      meta: ['在线', '最近活跃'],
      actions: [{
        label: '查看资料',
        onClick: action('查看资料')
      }, {
        label: '发送消息',
        onClick: action('发送消息')
      }]
    },
    variant: 'default',
    size: 'md',
    cardSize: 'md',
    position: 'top',
    delay: 300,
    hideDelay: 100,
    showArrow: true,
    disabled: false,
    onShow: action('show'),
    onHide: action('hide')
  },
  render: args => <div className="w-full max-w-md p-8">\r
      <p className="text-center text-gray-600 mb-4">\r
        将鼠标悬停在下面的文本上查看预览卡片\r
      </p>\r
      <HoverCard {...args} />\r
    </div>
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var n,m,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    triggerText: 'MacBook Pro 16"',
    cardData: {
      title: 'MacBook Pro 16英寸',
      description: '配备M3 Max芯片的强大笔记本电脑，专为专业用户设计。',
      image: 'https://via.placeholder.com/280x200/1f2937/ffffff?text=MacBook+Pro',
      imageAlt: 'MacBook Pro',
      meta: ['现货', '¥25,999'],
      actions: [{
        label: '立即购买',
        onClick: action('立即购买')
      }, {
        label: '加入购物车',
        onClick: action('加入购物车')
      }]
    },
    variant: 'outlined',
    size: 'md',
    cardSize: 'lg',
    position: 'bottom',
    delay: 200,
    hideDelay: 150,
    showArrow: true,
    disabled: false,
    onShow: action('show'),
    onHide: action('hide')
  },
  render: args => <div className="w-full max-w-2xl p-8">\r
            <div className="bg-gray-50 p-6 rounded-lg">\r
                <h3 className="text-lg font-semibold mb-4">热门产品</h3>\r
                <p className="text-gray-600">\r
                    查看我们最新的\r
                    <HoverCard {...args} />\r
                    型号，性能强劲，设计精美。\r
                </p>\r
            </div>\r
        </div>
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var f,g,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    triggerText: '@张小明',
    cardData: {
      title: '张小明',
      description: '前端开发工程师，专注于Vue.js和React开发，5年工作经验。',
      image: 'https://via.placeholder.com/120x120/8b5cf6/ffffff?text=张',
      imageAlt: '张小明头像',
      meta: ['开发组', '在线'],
      actions: [{
        label: '发私信',
        onClick: action('发私信')
      }, {
        label: '查看资料',
        onClick: action('查看资料')
      }]
    },
    variant: 'filled',
    size: 'sm',
    cardSize: 'md',
    position: 'right',
    delay: 400,
    hideDelay: 100,
    showArrow: true,
    disabled: false,
    onShow: action('show'),
    onHide: action('hide')
  },
  render: args => <div className="w-full max-w-lg p-8">\r
            <p className="text-gray-700 leading-relaxed">\r
                项目进度更新：\r
                <HoverCard {...args} />\r
                已经完成了新功能的开发，代码已提交审核。\r
            </p>\r
        </div>
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const b=["Default","ProductPreview","UserMention"];export{t as Default,r as ProductPreview,i as UserMention,b as __namedExportsOrder,u as default};
