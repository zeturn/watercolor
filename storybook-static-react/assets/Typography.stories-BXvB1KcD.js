import{j as r}from"./iframe-DqwHGwZR.js";import{T as a}from"./Typography-CkdGXeom.js";const L={title:"Components/Typography (React)",component:a,parameters:{layout:"centered",docs:{description:{component:"水彩设计系统的排版组件，提供一致的文字样式和层次结构。支持多种字体变体、颜色和对齐方式。"}}},tags:["autodocs"],argTypes:{variant:{description:"排版变体",control:{type:"select"},options:["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","overline","button"]},component:{description:"渲染的HTML元素",control:{type:"text"}},color:{description:"文字颜色",control:{type:"select"},options:["inherit","primary","secondary","success","warning","error","textPrimary","textSecondary","textDisabled"]},align:{description:"文字对齐方式",control:{type:"select"},options:["inherit","left","center","right","justify"]},gutterBottom:{description:"是否在底部添加边距",control:{type:"boolean"}},noWrap:{description:"是否截断溢出文字",control:{type:"boolean"}}}},c={args:{variant:"body1",color:"textPrimary",children:"这是一段示例文字，展示了水彩设计系统的排版组件。"},render:p=>r.jsx("div",{className:"p-6 max-w-2xl",children:r.jsx(a,{...p,children:p.children})})},t=()=>r.jsx("div",{className:"p-6 space-y-6 max-w-4xl",children:r.jsxs("div",{children:[r.jsx("h2",{className:"text-xl font-semibold mb-4",children:"标题层次结构"}),r.jsxs("div",{className:"space-y-4",children:[r.jsx(a,{variant:"h1",gutterBottom:!0,children:"标题 1 - 主标题"}),r.jsx(a,{variant:"h2",gutterBottom:!0,children:"标题 2 - 次主标题"}),r.jsx(a,{variant:"h3",gutterBottom:!0,children:"标题 3 - 章节标题"}),r.jsx(a,{variant:"h4",gutterBottom:!0,children:"标题 4 - 子章节标题"}),r.jsx(a,{variant:"h5",gutterBottom:!0,children:"标题 5 - 小节标题"}),r.jsx(a,{variant:"h6",gutterBottom:!0,children:"标题 6 - 最小标题"})]})]})}),n=()=>r.jsxs("div",{className:"p-6 space-y-6 max-w-4xl",children:[r.jsxs("div",{children:[r.jsx("h2",{className:"text-xl font-semibold mb-4",children:"副标题"}),r.jsxs("div",{className:"space-y-3",children:[r.jsx(a,{variant:"subtitle1",gutterBottom:!0,children:"副标题 1 - 用于重要的辅助信息"}),r.jsx(a,{variant:"subtitle2",gutterBottom:!0,children:"副标题 2 - 用于次要的辅助信息"})]})]}),r.jsxs("div",{children:[r.jsx("h2",{className:"text-xl font-semibold mb-4",children:"副标题使用示例"}),r.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg",children:[r.jsx(a,{variant:"h4",gutterBottom:!0,children:"文章标题"}),r.jsx(a,{variant:"subtitle1",color:"textSecondary",gutterBottom:!0,children:"作者：张三 | 发布时间：2024年1月15日"}),r.jsx(a,{variant:"subtitle2",color:"textSecondary",gutterBottom:!0,children:"分类：技术文章 | 阅读时间：约5分钟"}),r.jsx(a,{variant:"body1",children:"这里是文章的正文内容，使用body1样式..."})]})]})]}),e=()=>r.jsxs("div",{className:"p-6 space-y-6 max-w-4xl",children:[r.jsxs("div",{children:[r.jsx("h2",{className:"text-xl font-semibold mb-4",children:"正文文字"}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{children:[r.jsx(a,{variant:"h6",gutterBottom:!0,children:"Body 1（主要正文）"}),r.jsx(a,{variant:"body1",gutterBottom:!0,children:"这是使用body1样式的正文文字。body1是最常用的正文样式，具有良好的可读性和适中的字体大小。 适用于大部分的正文内容，包括文章、描述、说明等。这种样式在各种设备上都能保持良好的阅读体验。"})]}),r.jsxs("div",{children:[r.jsx(a,{variant:"h6",gutterBottom:!0,children:"Body 2（次要正文）"}),r.jsx(a,{variant:"body2",gutterBottom:!0,children:"这是使用body2样式的正文文字。body2比body1稍小一些，适用于次要的文字内容， 如备注、说明文字、辅助信息等。在需要节省空间或者层次分明的布局中特别有用。"})]})]})]}),r.jsxs("div",{children:[r.jsx("h2",{className:"text-xl font-semibold mb-4",children:"正文应用示例"}),r.jsxs("div",{className:"bg-white border rounded-lg p-6",children:[r.jsx(a,{variant:"h5",gutterBottom:!0,children:"产品介绍"}),r.jsx(a,{variant:"body1",gutterBottom:!0,children:"水彩设计系统是一套现代化的UI组件库，致力于为开发者提供美观、易用、功能完整的组件。 我们的设计理念注重简洁性和一致性，帮助您快速构建专业级的用户界面。"}),r.jsx(a,{variant:"body2",color:"textSecondary",children:"注：本产品仍在持续优化中，欢迎提供反馈和建议。"})]})]})]}),o=()=>r.jsxs("div",{className:"p-6 space-y-6 max-w-4xl",children:[r.jsx("h2",{className:"text-xl font-semibold mb-4",children:"文字颜色"}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"text-lg font-medium mb-3",children:"主题色彩"}),r.jsxs("div",{className:"space-y-2",children:[r.jsx(a,{variant:"body1",color:"primary",children:"主色调文字 (Primary)"}),r.jsx(a,{variant:"body1",color:"secondary",children:"次要色彩 (Secondary)"}),r.jsx(a,{variant:"body1",color:"success",children:"成功状态 (Success)"}),r.jsx(a,{variant:"body1",color:"warning",children:"警告状态 (Warning)"}),r.jsx(a,{variant:"body1",color:"error",children:"错误状态 (Error)"})]})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-lg font-medium mb-3",children:"文本色彩"}),r.jsxs("div",{className:"space-y-2",children:[r.jsx(a,{variant:"body1",color:"textPrimary",children:"主要文本颜色 (Text Primary)"}),r.jsx(a,{variant:"body1",color:"textSecondary",children:"次要文本颜色 (Text Secondary)"}),r.jsx(a,{variant:"body1",color:"textDisabled",children:"禁用文本颜色 (Text Disabled)"}),r.jsx(a,{variant:"body1",color:"inherit",children:"继承父元素颜色 (Inherit)"})]})]})]})]}),i=()=>r.jsxs("div",{className:"p-6 space-y-6 max-w-4xl",children:[r.jsx("h2",{className:"text-xl font-semibold mb-4",children:"文字对齐"}),r.jsxs("div",{className:"space-y-4 border rounded-lg p-4",children:[r.jsx(a,{variant:"h6",align:"left",gutterBottom:!0,children:'左对齐标题 (align="left")'}),r.jsx(a,{variant:"body1",align:"left",children:"这是左对齐的正文内容。这是默认的对齐方式，适用于大多数阅读场景。 文字从左边开始排列，形成整齐的左边界。"}),r.jsx(a,{variant:"h6",align:"center",gutterBottom:!0,children:'居中对齐标题 (align="center")'}),r.jsx(a,{variant:"body1",align:"center",children:"这是居中对齐的正文内容。适用于标题、引用或需要突出显示的内容。 文字在容器中央对齐。"}),r.jsx(a,{variant:"h6",align:"right",gutterBottom:!0,children:'右对齐标题 (align="right")'}),r.jsx(a,{variant:"body1",align:"right",children:"这是右对齐的正文内容。适用于数字、日期或特殊布局需求。 文字从右边开始排列，形成整齐的右边界。"}),r.jsx(a,{variant:"h6",align:"justify",gutterBottom:!0,children:'两端对齐标题 (align="justify")'}),r.jsx(a,{variant:"body1",align:"justify",children:"这是两端对齐的正文内容。适用于长段落文本，可以创建整齐的文字块。 除了最后一行外，每行的文字都会拉伸以填满整个宽度，形成整齐的左右边界。 这种对齐方式在书籍和正式文档中很常见。"})]})]}),s=()=>r.jsxs("div",{className:"p-6 space-y-6 max-w-4xl",children:[r.jsx("h2",{className:"text-xl font-semibold mb-4",children:"特殊变体"}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{children:[r.jsx(a,{variant:"h6",gutterBottom:!0,children:"Caption（说明文字）"}),r.jsx(a,{variant:"caption",color:"textSecondary",gutterBottom:!0,children:"这是caption样式，通常用于图片说明、版权信息、时间戳等小字内容。"})]}),r.jsxs("div",{children:[r.jsx(a,{variant:"h6",gutterBottom:!0,children:"Overline（上标文字）"}),r.jsx(a,{variant:"overline",color:"textSecondary",gutterBottom:!0,children:"OVERLINE TEXT"}),r.jsx(a,{variant:"body2",children:"overline样式通常用于分类标签、章节标识等。"})]}),r.jsxs("div",{children:[r.jsx(a,{variant:"h6",gutterBottom:!0,children:"Button（按钮文字）"}),r.jsx(a,{variant:"button",component:"span",className:"bg-blue-600 text-white px-4 py-2 rounded",children:"BUTTON TEXT"}),r.jsx(a,{variant:"body2",className:"mt-2",children:"button样式用于按钮内的文字，通常是大写字母。"})]})]})]}),d=()=>r.jsxs("div",{className:"p-6 space-y-6 max-w-md",children:[r.jsx("h2",{className:"text-xl font-semibold mb-4",children:"文本截断"}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{children:[r.jsx(a,{variant:"h6",gutterBottom:!0,children:"正常文字（自动换行）"}),r.jsx(a,{variant:"body1",gutterBottom:!0,children:"这是一段很长的文字内容，在容器宽度不足时会自动换行显示。 这样可以确保所有文字内容都能被用户看到。"})]}),r.jsxs("div",{children:[r.jsx(a,{variant:"h6",gutterBottom:!0,children:"截断文字（noWrap）"}),r.jsx(a,{variant:"body1",noWrap:!0,gutterBottom:!0,children:"这是一段很长的文字内容，设置了noWrap属性后会被截断，超出部分会显示省略号。"})]}),r.jsxs("div",{children:[r.jsx(a,{variant:"h6",gutterBottom:!0,children:"应用示例"}),r.jsx("div",{className:"space-y-2",children:r.jsxs("div",{className:"flex items-center gap-3 p-2 border rounded",children:[r.jsx("div",{className:"w-10 h-10 bg-blue-500 rounded"}),r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsx(a,{variant:"subtitle1",noWrap:!0,children:"这是一个很长的文件名称.docx"}),r.jsx(a,{variant:"caption",color:"textSecondary",children:"修改时间: 2024-01-15"})]})]})})]})]})]}),l=()=>r.jsxs("div",{className:"p-6 max-w-4xl",children:[r.jsx("h2",{className:"text-xl font-semibold mb-6",children:"实际应用示例"}),r.jsxs("article",{className:"max-w-3xl mx-auto",children:[r.jsxs("header",{className:"mb-8",children:[r.jsx(a,{variant:"overline",color:"textSecondary",gutterBottom:!0,children:"技术文章"}),r.jsx(a,{variant:"h2",gutterBottom:!0,children:"构建现代化的设计系统"}),r.jsx(a,{variant:"h5",color:"textSecondary",gutterBottom:!0,children:"探索如何创建一致、可扩展的UI组件库"}),r.jsxs("div",{className:"flex items-center gap-4 mt-6 pt-6 border-t",children:[r.jsx("div",{className:"w-12 h-12 bg-blue-500 rounded-full"}),r.jsxs("div",{children:[r.jsx(a,{variant:"subtitle1",children:"张三"}),r.jsx(a,{variant:"caption",color:"textSecondary",children:"发布于 2024年1月15日 · 阅读时间 8分钟"})]})]})]}),r.jsxs("main",{className:"space-y-6",children:[r.jsx(a,{variant:"h4",gutterBottom:!0,children:"引言"}),r.jsx(a,{variant:"body1",gutterBottom:!0,children:"在现代Web开发中，设计系统已经成为保证产品一致性和提高开发效率的重要工具。 一个好的设计系统不仅能够统一视觉风格，还能提供可复用的组件和明确的设计规范。"}),r.jsx(a,{variant:"h4",gutterBottom:!0,children:"核心组件"}),r.jsx(a,{variant:"body1",gutterBottom:!0,children:"设计系统的核心在于其组件库。每个组件都应该："}),r.jsxs("ul",{className:"list-disc list-inside space-y-2 ml-4",children:[r.jsx("li",{children:r.jsx(a,{variant:"body1",component:"span",children:"具有一致的视觉风格和交互行为"})}),r.jsx("li",{children:r.jsx(a,{variant:"body1",component:"span",children:"支持多种状态和变体"})}),r.jsx("li",{children:r.jsx(a,{variant:"body1",component:"span",children:"提供完整的文档和使用示例"})})]}),r.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500",children:[r.jsx(a,{variant:"h6",gutterBottom:!0,children:"💡 专业提示"}),r.jsx(a,{variant:"body2",children:"在设计组件时，始终考虑可访问性（a11y）标准，确保所有用户都能够使用您的产品。"})]}),r.jsx(a,{variant:"h4",gutterBottom:!0,children:"实施建议"}),r.jsx(a,{variant:"body1",gutterBottom:!0,children:"成功实施设计系统需要团队的共同努力和持续的维护。建议从小规模开始， 逐步扩展组件库的覆盖范围。"}),r.jsx(a,{variant:"body2",color:"textSecondary",align:"center",className:"pt-8 border-t",children:"感谢阅读！如有问题欢迎在评论区讨论。"})]})]})]});t.__docgenInfo={description:"",methods:[],displayName:"Headings"};n.__docgenInfo={description:"",methods:[],displayName:"Subtitles"};e.__docgenInfo={description:"",methods:[],displayName:"BodyText"};o.__docgenInfo={description:"",methods:[],displayName:"Colors"};i.__docgenInfo={description:"",methods:[],displayName:"Alignment"};s.__docgenInfo={description:"",methods:[],displayName:"SpecialVariants"};d.__docgenInfo={description:"",methods:[],displayName:"TextTruncation"};l.__docgenInfo={description:"",methods:[],displayName:"RealWorldExample"};var y,h,m;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'body1',
    color: 'textPrimary',
    children: '这是一段示例文字，展示了水彩设计系统的排版组件。'
  },
  render: args => <div className="p-6 max-w-2xl">\r
      <Typography {...args}>{args.children}</Typography>\r
    </div>
}`,...(m=(h=c.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var g,x,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`() => <div className="p-6 space-y-6 max-w-4xl">\r
    <div>\r
      <h2 className="text-xl font-semibold mb-4">标题层次结构</h2>\r
      <div className="space-y-4">\r
        <Typography variant="h1" gutterBottom>\r
          标题 1 - 主标题\r
        </Typography>\r
        <Typography variant="h2" gutterBottom>\r
          标题 2 - 次主标题\r
        </Typography>\r
        <Typography variant="h3" gutterBottom>\r
          标题 3 - 章节标题\r
        </Typography>\r
        <Typography variant="h4" gutterBottom>\r
          标题 4 - 子章节标题\r
        </Typography>\r
        <Typography variant="h5" gutterBottom>\r
          标题 5 - 小节标题\r
        </Typography>\r
        <Typography variant="h6" gutterBottom>\r
          标题 6 - 最小标题\r
        </Typography>\r
      </div>\r
    </div>\r
  </div>`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var u,b,T;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => <div className="p-6 space-y-6 max-w-4xl">\r
    <div>\r
      <h2 className="text-xl font-semibold mb-4">副标题</h2>\r
      <div className="space-y-3">\r
        <Typography variant="subtitle1" gutterBottom>\r
          副标题 1 - 用于重要的辅助信息\r
        </Typography>\r
        <Typography variant="subtitle2" gutterBottom>\r
          副标题 2 - 用于次要的辅助信息\r
        </Typography>\r
      </div>\r
    </div>\r
\r
    <div>\r
      <h2 className="text-xl font-semibold mb-4">副标题使用示例</h2>\r
      <div className="bg-gray-50 p-6 rounded-lg">\r
        <Typography variant="h4" gutterBottom>\r
          文章标题\r
        </Typography>\r
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>\r
          作者：张三 | 发布时间：2024年1月15日\r
        </Typography>\r
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>\r
          分类：技术文章 | 阅读时间：约5分钟\r
        </Typography>\r
        <Typography variant="body1">\r
          这里是文章的正文内容，使用body1样式...\r
        </Typography>\r
      </div>\r
    </div>\r
  </div>`,...(T=(b=n.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var j,N,B;e.parameters={...e.parameters,docs:{...(j=e.parameters)==null?void 0:j.docs,source:{originalSource:`() => <div className="p-6 space-y-6 max-w-4xl">\r
    <div>\r
      <h2 className="text-xl font-semibold mb-4">正文文字</h2>\r
      <div className="space-y-4">\r
        <div>\r
          <Typography variant="h6" gutterBottom>Body 1（主要正文）</Typography>\r
          <Typography variant="body1" gutterBottom>\r
            这是使用body1样式的正文文字。body1是最常用的正文样式，具有良好的可读性和适中的字体大小。\r
            适用于大部分的正文内容，包括文章、描述、说明等。这种样式在各种设备上都能保持良好的阅读体验。\r
          </Typography>\r
        </div>\r
        \r
        <div>\r
          <Typography variant="h6" gutterBottom>Body 2（次要正文）</Typography>\r
          <Typography variant="body2" gutterBottom>\r
            这是使用body2样式的正文文字。body2比body1稍小一些，适用于次要的文字内容，\r
            如备注、说明文字、辅助信息等。在需要节省空间或者层次分明的布局中特别有用。\r
          </Typography>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div>\r
      <h2 className="text-xl font-semibold mb-4">正文应用示例</h2>\r
      <div className="bg-white border rounded-lg p-6">\r
        <Typography variant="h5" gutterBottom>\r
          产品介绍\r
        </Typography>\r
        <Typography variant="body1" gutterBottom>\r
          水彩设计系统是一套现代化的UI组件库，致力于为开发者提供美观、易用、功能完整的组件。\r
          我们的设计理念注重简洁性和一致性，帮助您快速构建专业级的用户界面。\r
        </Typography>\r
        <Typography variant="body2" color="textSecondary">\r
          注：本产品仍在持续优化中，欢迎提供反馈和建议。\r
        </Typography>\r
      </div>\r
    </div>\r
  </div>`,...(B=(N=e.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var f,S,w;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`() => <div className="p-6 space-y-6 max-w-4xl">\r
    <h2 className="text-xl font-semibold mb-4">文字颜色</h2>\r
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">\r
      <div>\r
        <h3 className="text-lg font-medium mb-3">主题色彩</h3>\r
        <div className="space-y-2">\r
          <Typography variant="body1" color="primary">\r
            主色调文字 (Primary)\r
          </Typography>\r
          <Typography variant="body1" color="secondary">\r
            次要色彩 (Secondary)\r
          </Typography>\r
          <Typography variant="body1" color="success">\r
            成功状态 (Success)\r
          </Typography>\r
          <Typography variant="body1" color="warning">\r
            警告状态 (Warning)\r
          </Typography>\r
          <Typography variant="body1" color="error">\r
            错误状态 (Error)\r
          </Typography>\r
        </div>\r
      </div>\r
      \r
      <div>\r
        <h3 className="text-lg font-medium mb-3">文本色彩</h3>\r
        <div className="space-y-2">\r
          <Typography variant="body1" color="textPrimary">\r
            主要文本颜色 (Text Primary)\r
          </Typography>\r
          <Typography variant="body1" color="textSecondary">\r
            次要文本颜色 (Text Secondary)\r
          </Typography>\r
          <Typography variant="body1" color="textDisabled">\r
            禁用文本颜色 (Text Disabled)\r
          </Typography>\r
          <Typography variant="body1" color="inherit">\r
            继承父元素颜色 (Inherit)\r
          </Typography>\r
        </div>\r
      </div>\r
    </div>\r
  </div>`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var _,I,W;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`() => <div className="p-6 space-y-6 max-w-4xl">\r
    <h2 className="text-xl font-semibold mb-4">文字对齐</h2>\r
    <div className="space-y-4 border rounded-lg p-4">\r
      <Typography variant="h6" align="left" gutterBottom>\r
        左对齐标题 (align="left")\r
      </Typography>\r
      <Typography variant="body1" align="left">\r
        这是左对齐的正文内容。这是默认的对齐方式，适用于大多数阅读场景。\r
        文字从左边开始排列，形成整齐的左边界。\r
      </Typography>\r
      \r
      <Typography variant="h6" align="center" gutterBottom>\r
        居中对齐标题 (align="center")\r
      </Typography>\r
      <Typography variant="body1" align="center">\r
        这是居中对齐的正文内容。适用于标题、引用或需要突出显示的内容。\r
        文字在容器中央对齐。\r
      </Typography>\r
      \r
      <Typography variant="h6" align="right" gutterBottom>\r
        右对齐标题 (align="right")\r
      </Typography>\r
      <Typography variant="body1" align="right">\r
        这是右对齐的正文内容。适用于数字、日期或特殊布局需求。\r
        文字从右边开始排列，形成整齐的右边界。\r
      </Typography>\r
      \r
      <Typography variant="h6" align="justify" gutterBottom>\r
        两端对齐标题 (align="justify")\r
      </Typography>\r
      <Typography variant="body1" align="justify">\r
        这是两端对齐的正文内容。适用于长段落文本，可以创建整齐的文字块。\r
        除了最后一行外，每行的文字都会拉伸以填满整个宽度，形成整齐的左右边界。\r
        这种对齐方式在书籍和正式文档中很常见。\r
      </Typography>\r
    </div>\r
  </div>`,...(W=(I=i.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var E,P,O;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`() => <div className="p-6 space-y-6 max-w-4xl">\r
    <h2 className="text-xl font-semibold mb-4">特殊变体</h2>\r
    <div className="space-y-4">\r
      <div>\r
        <Typography variant="h6" gutterBottom>Caption（说明文字）</Typography>\r
        <Typography variant="caption" color="textSecondary" gutterBottom>\r
          这是caption样式，通常用于图片说明、版权信息、时间戳等小字内容。\r
        </Typography>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" gutterBottom>Overline（上标文字）</Typography>\r
        <Typography variant="overline" color="textSecondary" gutterBottom>\r
          OVERLINE TEXT\r
        </Typography>\r
        <Typography variant="body2">\r
          overline样式通常用于分类标签、章节标识等。\r
        </Typography>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" gutterBottom>Button（按钮文字）</Typography>\r
        <Typography variant="button" component="span" className="bg-blue-600 text-white px-4 py-2 rounded">\r
          BUTTON TEXT\r
        </Typography>\r
        <Typography variant="body2" className="mt-2">\r
          button样式用于按钮内的文字，通常是大写字母。\r
        </Typography>\r
      </div>\r
    </div>\r
  </div>`,...(O=(P=s.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var R,C,U;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`() => <div className="p-6 space-y-6 max-w-md">\r
    <h2 className="text-xl font-semibold mb-4">文本截断</h2>\r
    <div className="space-y-4">\r
      <div>\r
        <Typography variant="h6" gutterBottom>正常文字（自动换行）</Typography>\r
        <Typography variant="body1" gutterBottom>\r
          这是一段很长的文字内容，在容器宽度不足时会自动换行显示。\r
          这样可以确保所有文字内容都能被用户看到。\r
        </Typography>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" gutterBottom>截断文字（noWrap）</Typography>\r
        <Typography variant="body1" noWrap gutterBottom>\r
          这是一段很长的文字内容，设置了noWrap属性后会被截断，超出部分会显示省略号。\r
        </Typography>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h6" gutterBottom>应用示例</Typography>\r
        <div className="space-y-2">\r
          <div className="flex items-center gap-3 p-2 border rounded">\r
            <div className="w-10 h-10 bg-blue-500 rounded"></div>\r
            <div className="flex-1 min-w-0">\r
              <Typography variant="subtitle1" noWrap>\r
                这是一个很长的文件名称.docx\r
              </Typography>\r
              <Typography variant="caption" color="textSecondary">\r
                修改时间: 2024-01-15\r
              </Typography>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>`,...(U=(C=d.parameters)==null?void 0:C.docs)==null?void 0:U.source}}};var D,V,H;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`() => <div className="p-6 max-w-4xl">\r
    <h2 className="text-xl font-semibold mb-6">实际应用示例</h2>\r
    \r
    <article className="max-w-3xl mx-auto">\r
      {/* 文章头部 */}\r
      <header className="mb-8">\r
        <Typography variant="overline" color="textSecondary" gutterBottom>\r
          技术文章\r
        </Typography>\r
        <Typography variant="h2" gutterBottom>\r
          构建现代化的设计系统\r
        </Typography>\r
        <Typography variant="h5" color="textSecondary" gutterBottom>\r
          探索如何创建一致、可扩展的UI组件库\r
        </Typography>\r
        \r
        <div className="flex items-center gap-4 mt-6 pt-6 border-t">\r
          <div className="w-12 h-12 bg-blue-500 rounded-full"></div>\r
          <div>\r
            <Typography variant="subtitle1">张三</Typography>\r
            <Typography variant="caption" color="textSecondary">\r
              发布于 2024年1月15日 · 阅读时间 8分钟\r
            </Typography>\r
          </div>\r
        </div>\r
      </header>\r
      \r
      {/* 文章正文 */}\r
      <main className="space-y-6">\r
        <Typography variant="h4" gutterBottom>\r
          引言\r
        </Typography>\r
        <Typography variant="body1" gutterBottom>\r
          在现代Web开发中，设计系统已经成为保证产品一致性和提高开发效率的重要工具。\r
          一个好的设计系统不仅能够统一视觉风格，还能提供可复用的组件和明确的设计规范。\r
        </Typography>\r
        \r
        <Typography variant="h4" gutterBottom>\r
          核心组件\r
        </Typography>\r
        <Typography variant="body1" gutterBottom>\r
          设计系统的核心在于其组件库。每个组件都应该：\r
        </Typography>\r
        \r
        <ul className="list-disc list-inside space-y-2 ml-4">\r
          <li>\r
            <Typography variant="body1" component="span">\r
              具有一致的视觉风格和交互行为\r
            </Typography>\r
          </li>\r
          <li>\r
            <Typography variant="body1" component="span">\r
              支持多种状态和变体\r
            </Typography>\r
          </li>\r
          <li>\r
            <Typography variant="body1" component="span">\r
              提供完整的文档和使用示例\r
            </Typography>\r
          </li>\r
        </ul>\r
        \r
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">\r
          <Typography variant="h6" gutterBottom>\r
            💡 专业提示\r
          </Typography>\r
          <Typography variant="body2">\r
            在设计组件时，始终考虑可访问性（a11y）标准，确保所有用户都能够使用您的产品。\r
          </Typography>\r
        </div>\r
        \r
        <Typography variant="h4" gutterBottom>\r
          实施建议\r
        </Typography>\r
        <Typography variant="body1" gutterBottom>\r
          成功实施设计系统需要团队的共同努力和持续的维护。建议从小规模开始，\r
          逐步扩展组件库的覆盖范围。\r
        </Typography>\r
        \r
        <Typography variant="body2" color="textSecondary" align="center" className="pt-8 border-t">\r
          感谢阅读！如有问题欢迎在评论区讨论。\r
        </Typography>\r
      </main>\r
    </article>\r
  </div>`,...(H=(V=l.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};const M=["Primary","Headings","Subtitles","BodyText","Colors","Alignment","SpecialVariants","TextTruncation","RealWorldExample"];export{i as Alignment,e as BodyText,o as Colors,t as Headings,c as Primary,l as RealWorldExample,s as SpecialVariants,n as Subtitles,d as TextTruncation,M as __namedExportsOrder,L as default};
